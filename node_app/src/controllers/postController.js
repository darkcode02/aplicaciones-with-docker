const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  await post.save();
  res.json(post);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
