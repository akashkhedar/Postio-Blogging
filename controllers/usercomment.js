const comment = require("../models/comments");

const createComment = async (req, res) => {
  await comment.create({
    content: req.body.content,
    blogId: req.params.id,
    createdBy: req.user.id,
  });
  res.redirect("/");
};

module.exports = createComment;
