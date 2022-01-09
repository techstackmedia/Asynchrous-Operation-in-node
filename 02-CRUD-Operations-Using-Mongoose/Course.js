const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.n5uqo.mongodb.net/${process.env.DATABASE}`
  )
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("Could not conect to mongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    // immutable: true,
    required: true,
  },
  author: String,
  tags: [
    {
      type: String,
      lowercase: true,
      minlength: 3,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: Number,
    min: 18,
    // validate: (v) => v % 2 === 0,
  },
  isPublished: Boolean,
});

module.exports = mongoose.model("Course", courseSchema);