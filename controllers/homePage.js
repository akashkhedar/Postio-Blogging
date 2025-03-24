const Blog = require('../models/blog');
const comment = require('../models/comments');

const homeRouteController = async(req, res) => {
  const allBlogs = await Blog.find({}).populate('createdBy')
  const allComments = await comment.find({}).populate('createdBy')
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
    comments: allComments
  });
};

module.exports = homeRouteController;
