import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  brand: String,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
  isFeatured: Boolean,
  dateCreated: Date,
images: [
    {
      fileId: {
        type: String,
        required: true
      },
      filename: {
        type: String,
        required: true
      }
    }
  ],
});

const Product = mongoose.model('Product', productSchema);

export default Product;
