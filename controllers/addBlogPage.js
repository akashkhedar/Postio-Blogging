const addBlog = (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
};

module.exports = addBlog;
