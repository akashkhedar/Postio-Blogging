const Blog = require('../models/blog')

const addBlog = async (req, res) => {
    const { title, body } = req.body
    await Blog.create({
        title,
        body,
        createdBy: req.user.id,
        coverImage: `/uploads/${req.file.filename}`
    })
    res.redirect('/')
}

module.exports = addBlog