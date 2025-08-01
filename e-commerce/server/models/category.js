import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  color: String,
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

const Category = mongoose.model("Category", categorySchema);

export default Category;
