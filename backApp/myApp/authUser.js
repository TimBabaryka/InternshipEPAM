import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String },
});

const regUser = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  articles: [articleSchema],
});

export default mongoose.model("RegUser", regUser);
