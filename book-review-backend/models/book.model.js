const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter book name"],
    },
    author: {
      type: String,
      required: [true, "please enter author name"],
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    review_text: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book=mongoose.model("Book",BookSchema);

module.exports=Book;