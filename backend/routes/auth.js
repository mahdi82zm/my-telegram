import express from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import db from "../db.js";

const router = express.Router();

const JWT_SECRET = "SUPER_SECRET_KEY";

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "username  and  password  required" });
  }

  const users = db.data.users;

  const existing = users.find((u) => u.username == username);

  if (existing) {
    return res.status(400).json({ error: "username  already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = {
    id: nanoid(),
    username,
    password: hash,
    avatar: "",
    createdAt: Date.now(),
  };

  users.push(user);

  await db.write();

  const token = jwt.sign({ id: user.id }, JWT_SECRET);

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
    },
  });
});

export default router;

router.post("/login", async (req, res) => {
  const { password, username } = req.body;

  const user = db.data.users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ error: "invalid credintioal" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ error: "invalid credintioals" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET);

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
    },
  });
});
