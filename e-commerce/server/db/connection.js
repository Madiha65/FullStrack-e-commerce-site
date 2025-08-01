import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import Grid from 'gridfs-stream';
import dotenv from 'dotenv';

dotenv.config(); 

const MONGO_URL = process.env.MONGODB_URL;

if (!MONGO_URL) {
  throw new Error(" MONGODB_URL is not defined. Check .env");
}

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

let gfs;
let gfsBucket;

conn.once("open", () => {
  console.log("MongoDB connection open.");

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");

  gfsBucket = new GridFSBucket(conn.db, {
    bucketName: "uploads",
  });

  console.log("GridFSBucket initialized.");
});

export { conn };
export const getGFS = () => gfs;
export const getGfsBucket = () => gfsBucket;
