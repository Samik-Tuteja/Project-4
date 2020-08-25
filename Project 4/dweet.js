const express = require("express");
const router = express.Router();
const Post = require("./Post");
const { json } = require("body-parser");

router.get("/", (req, res) => {
  res.send("<h1>We are on dweets</h1>");
});

// All the posts
router.get("/s", async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length !== 0) {
      res.json(posts);
    } else {
      res.json("There are no dweets");
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a Post
router.get("/create", async (req, res) => {
  const post = new Post({
    dweet: req.body.dweet,
    posted_by: req.body.posted_by,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json("Please enter a valid dweet and name");
  }
});
// Specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json("Please enter a correct Id");
  }
});

// Delete a specific post
router.get("/:postId/delete", async (req, res) => {
  try {
    await Post.remove({ _id: req.params.postId });
    res.json("The dweet has been deleted");
  } catch (err) {
    res.json("Please try deleting again");
  }
});

// Update a post

router.get("/:postId/update", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          dweet: req.body.dweet,
          posted_by: req.body.posted_by,
        },
      }
    );
    res.json("This dweet has been updated ");
  } catch (err) {
    res.json("Please enter the correct details");
  }
});
module.exports = router;
