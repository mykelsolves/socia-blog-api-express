
import { Router } from "express";

const router = Router();

type Post = { id: number; title: string; content: string };

const posts: Post[] = [];
let nextId = 1;

// GET /posts: return all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// POST /posts: create a post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const post: Post = { id: nextId++, title, content };
  posts.push(post);
  res.status(201).json(post);
});

export default router;