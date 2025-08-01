import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import { conn, getGfsBucket } from "../db/connection.js";
import Product from "../models/product.js";
import Category from "../models/category.js";
import express from "express";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const MONGO_URL = process.env.MONGODB_URL;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

const storage = new GridFsStorage({
  url: process.env.MONGODB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => ({
    filename: `${Date.now()}-${file.originalname}`,
    bucketName: "uploads",
  }),
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ file: req.file });
});

router.post("/create-product", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ message: "Database not connected." });
    }
    const {
      name,
      description,
      category,
      brand,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      dateCreated,
    } = req.body;

    if (
      !name ||
      !description ||
      !category ||
      !brand ||
      !countInStock ||
      !rating ||
      !numReviews ||
      !isFeatured ||
      !dateCreated
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    const newProduct = new Product({
      name,
      description,
      category,
      brand,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      dateCreated,
    });

    await newProduct.save();

    return res.status(201).json({
      status: 201,
      message: "Product created successfully.",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
});

router.post("/upload-image/:id", upload.array("images"), async (req, res) => {
  try {
    const targetId = req.params.id.trim();
    const { target } = req.query;
    const files = req.files;

    if (!target || !files || files.length === 0) {
      return res.status(400).json({
        status: 400,
        message: "Target and at least one image are required.",
      });
    }

    const uploadImages = files.map((file) => ({
      fileId: file.id.toString(),
      filename: file.originalname,
    }));

    if (target === "product") {
      const product = await Product.findById(targetId);
      if (!product)
        return res.status(404).json({ message: "Product not found" });

      product.images = [...(product.images || []), ...uploadImages];
      await product.save();
      return res
        .status(200)
        .json({ message: "Product images uploaded", product });
    }

    if (target === "category") {
      const category = await Category.findById(targetId);
      if (!category)
        return res.status(404).json({ message: "Category not found" });

      category.images = [...(category.images || []), ...uploadImages];
      await category.save();
      return res
        .status(200)
        .json({ message: "Category images uploaded", category });
    }

    return res.status(400).json({ message: "Invalid target" });
  } catch (error) {
    console.error("Upload error:", error.message);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        const imageUrls =
          product.images && product.images.length > 0
            ? await Promise.all(
                product.images.map(async (image) => {
                  return await getImageUrl(image.fileId);
                })
              )
            : [];

        return {
          ...product.toObject(),
          imageUrls,
        };
      })
    );

    return res.status(200).json({
      status: 200,

      products: productsWithImages,
    });
  } catch (error) {
    console.error("Error in get-products:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});

async function getImageUrl(fileId) {
  const gfsBucket = getGfsBucket();

  if (!gfsBucket) {
    console.error("GridFSBucket is not initialized.");
    return null;
  }

  try {
    const fileObjectId = new mongoose.Types.ObjectId(fileId);
    const files = await gfsBucket.find({ _id: fileObjectId }).toArray();

    if (!files || files.length === 0) {
      return null;
    }

    const imageUrl = `http://localhost:4000/api/get-image/${fileId}`;

    return imageUrl;
  } catch (error) {
    console.error("Error in getImageUrl:", error);
    return null;
  }
}

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error.",
    });
  }
});

router.get("/get-image/:fileId", async (req, res) => {
  try {
    const gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "uploads",
    });
    const fileId = new mongoose.Types.ObjectId(req.params.fileId);

    const files = await gfsBucket.find({ _id: fileId }).toArray();
    if (!files || files.length === 0) {
      return res.status(404).json({ message: "Image not found." });
    }

    gfsBucket
      .openDownloadStream(fileId)
      .on("error", (error) => {
        console.error("Stream error:", error);
        res.status(500).json({ message: "Error streaming image." });
      })
      .pipe(res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error retrieving image." });
  }
});

router.put("/update-product/:id", async (req, res) => {
  try {
    const productId = req.params.id.trim();
    const {
      name,
      description,
      category,
      brand,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      dateCreated,
    } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    }
    if (name) product.name = name;
    if (description) product.description = description;
    if (category) product.category = category;
    if (brand) product.brand = brand;
    if (countInStock) product.countInStock = countInStock;
    if (rating) product.rating = rating;
    if (numReviews) product.numReviews = numReviews;
    if (isFeatured) product.isFeatured = isFeatured;
    if (dateCreated) product.dateCreated = dateCreated;
    if (Array.isArray(product.images)) {
      product.images = product.images.filter(
        (img) => img.fileId && img.filename
      );
    }
    const updatedProduct = await product.save();
    return res.status(200).json({
      status: 200,
      message: "Product updated successfully.",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    return res.status(500).json({
      message: "Server error.",
    });
  }
});

router.put(
  "/update-image/:fileId",
  upload.single("image"),
  async (req, res) => {
    try {
      const oldFileId = req.params.fileId;
      const { target, targetId } = req.query;
      const newFile = req.file;

      if (!oldFileId || !target || !targetId || !newFile) {
        return res.status(400).json({ message: "Missing parameters or file." });
      }

      const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads",
      });
      const objectId = new mongoose.Types.ObjectId(oldFileId);

      const files = await bucket.find({ _id: objectId }).toArray();
      if (!files || files.length === 0) {
        return res.status(404).json({ message: "Old image not found." });
      }

      await bucket.delete(objectId);

      if (target === "product") {
        const product = await Product.findById(targetId);
        if (!product) {
          return res.status(404).json({ message: "Product not found." });
        }

        product.images = product.images.map((img) => {
          if (img.fileId === oldFileId) {
            return {
              fileId: newFile.id.toString(),
              filename: newFile.originalname,
            };
          }
          return img;
        });
        await product.save();
        return res.status(200).json({
          status: 200,
          message: "Product Image Updated Successfully.",
        });
      } else if (target === "category") {
        const category = await Category.findById(targetId);
        if (!category) {
          return res.status(404).json({ message: "Category not found." });
        }
        category.images = category.images.map((img) => {
          if (img.fileId === oldFileId) {
            return {
              fileId: newFile.id.toString(),
              filename: newFile.originalname,
            };
          }
          return img;
        });
        await category.save();
        return res.status(200).json({
          status: 200,
          message: "Category Image Updated Successfully.",
        });
      } else {
        return res.status(400).json({ message: "Invalid target type." });
      }
    } catch (error) {
      console.error("Error updating image:", error);
      return res.status(500).json({ message: "Server error updating image." });
    }
  }
);

router.delete("/delete-image/:fileId", async (req, res) => {
  try {
    const { fileId } = req.params;
    const { target, targetId } = req.query;

    if (!target || !targetId || !fileId) {
      return res
        .status(400)
        .json({ message: "Target, target ID, and file ID are required." });
    }

    const gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "uploads",
    });
    const fileObjectId = new mongoose.Types.ObjectId(fileId);

    const files = await gfsBucket.find({ _id: fileObjectId }).toArray();
    if (!files || files.length === 0) {
      return res.status(404).json({ message: "File not found in GridFS." });
    }

    gfsBucket.delete(fileObjectId, (err) => {
      if (err) {
        console.error("Error deleting file from GridFS:", err);
        return res.status(500).json({ message: "Error deleting file." });
      }
    });

    if (target === "product") {
      const product = await Product.findById(targetId);
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }

      product.images = product.images.filter((img) => img.fileId !== fileId);
      await product.save();

      return res.status(200).json({
        status: 200,
        message: "Product image deleted successfully.",
        product,
      });
    } else if (target === "category") {
      const category = await Category.findById(targetId);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }

      category.images = category.images.filter((img) => img.fileId !== fileId);
      await category.save();

      return res.status(200).json({
        status: 200,
        message: "Category image deleted successfully.",
        category,
      });
    } else {
      return res.status(400).json({ message: "Invalid target type." });
    }
  } catch (error) {
    console.error("Error deleting image:", error.message);
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
});

router.delete("/delete-product/:id", async (req, res) => {
  try {
    const productId = new mongoose.Types.ObjectId(req.params.id.trim());

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Product permanently deleted from MongoDB.",
      deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting Product:", error.message);
    return res.status(500).json({
      message: "Server error.",
      error: error.message,
    });
  }
});

router.post("/test-upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({
      message: "Upload successful",
      file: req.file,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/test-db", async (req, res) => {
  try {
    const testResult = await conn.db
      .collection("uploads.files")
      .find()
      .toArray();
    res.json(testResult);
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).send("Database error");
  }
});

export default router;
