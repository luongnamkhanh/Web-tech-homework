const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);

//configure mongoose
const MONGODB_URI = "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});

module.exports = app;