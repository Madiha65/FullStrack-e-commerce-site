import express from "express";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import Category from "../models/category.js";
import { getGfsBucket } from "../db/connection.js";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { conn } from "../db/connection.js";

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

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/create-category", upload.array("images"), async (req, res) => {
  try {
    const { name, color } = req.body;
    if (!name || !color) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    const images =
      req.files?.map((file) => ({
        fileId: file.id.toString(),
        filename: file.originalname,
      })) || [];

    const newCategory = new Category({ name, color, images });
    await newCategory.save();

    return res.status(201).json({
      status: 201,
      message: "Category created successfully.",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error creating Category:", error.message);
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
});

router.get("/get-category", async (req, res) => {
  try {
    const categorys = await Category.find();

    const categorysWithImages = await Promise.all(
      categorys.map(async (category) => {
        const imageUrls =
          category.images && category.images.length > 0
            ? await Promise.all(
                category.images.map(async (image) => {
                  return await getImageUrl(image.fileId);
                })
              )
            : [];

        return { ...category.toObject(), imageUrls };
      })
    );

    return res
      .status(200)
      .json({ status: 200, categorys: categorysWithImages });
  } catch (error) {
    console.error("Error in get-categorys:", error);
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

router.get("/category/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        status: 404,
        message: "Category not found.",
      });
    }
    return res.status(200).json({
      status: 200,
      category,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error.",
    });
  }
});

router.put("/update-category/:id", upload.none(), async (req, res) => {
  try {
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided. Did you set correct Content-Type?",
      });
    }

    const categoryId = req.params.id?.trim();
    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const { name, color } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res
        .status(404)
        .json({ status: 404, message: "Category not found." });
    }

    if (name) category.name = name;
    if (color) category.color = color;

    const updatedCategory = await category.save();
    return res.status(200).json({
      status: 200,
      message: "Category updated successfully.",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return res.status(500).json({ message: error.message || "Server error." });
  }
});

router.delete("/delete-category/:id", async (req, res) => {
  try {
    const categoryId = new mongoose.Types.ObjectId(req.params.id.trim());

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({
        status: 404,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Category permanently deleted from MongoDB.",
      deletedCategory,
    });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    return res.status(500).json({
      message: "Server error.",
      error: error.message,
    });
  }
});

export default router;
