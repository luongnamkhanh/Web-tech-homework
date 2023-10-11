require('../models/database');
const Blog = require('../models/blogs');



exports.homePage = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.render('index', { blogs: blogs });
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving blogs." });
    }
}

exports.deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Blog.findByIdAndDelete(id);
        console.log(response);
        if (response) {
            console.log("Deleted Successfully");
            res.redirect('/');
        } else {
            res.status(500).json({ error: "Failed to delete" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}