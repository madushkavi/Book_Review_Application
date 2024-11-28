const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Book = require("./models/book.model.js");
const bookRoute = require("./routes/book.route.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/reviews", bookRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/book_review")
  .then(() => {
    console.log("Connected! local db");
    app.listen(3000, () => {
      console.log("Server running on 3000");
    });
  })
  .catch(() => {
    console.log("connection db faied");
  });

// mongoose.connect('mongodb+srv://madushkavithanawasam148:UfEOYqt7DV4qa6ua@bookreviewdb.9dp1z.mongodb.net/Book Review?retryWrites=true&w=majority&appName=BookreviewDB')
// .then(() => console.log('Connected database!'));

app.get("/", (req, res) => {
  res.send("Hello World ");
});
