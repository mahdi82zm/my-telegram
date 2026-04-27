import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { nanoid } from "nanoid";
import db, { initDB } from "./db.js";
import { error } from "console";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

await initDB();

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("send_message", async (data) => {
    if (!data || !data.text || !data.senderId || !data.receiverId) {
      console.log("invalide message receive", data);

      return false;
    }

    const message = {
      id: nanoid(),
      text: data.text,
      senderId: data.senderId,
      receiverId: data.receiverId,
      createdAt: data.createdAt,
    };

    db.data.messages.push(message);
    await db.write();

    io.emit("receive_message", message);
  });
});

app.get("/contacts", async (req, res) => {
  await db.read();
  res.json(db.data.contacts);
});

app.get("/messages/:userId/:contactId", async (req, res) => {
  const { userId, contactId } = req.params;
  await db.read();

  const msgs = db.data.messages.filter((m) => {
    if (!m) {
      return false;
    }

    return (
      (m.senderId === userId && m.receiverId === contactId) ||
      (m.senderId === contactId && m.receiverId === userId)
    );
  });

  res.json(msgs);
});
server.listen(4000, () => {
  console.log("server running on port 4000");
});

app.post("/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const exist = await db.data.users.find((u) => u.email === email);

  if (exist) return res.status(409).json({ error: "Email already exist" });

  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    id: nanoid(),
    name,
    email,
    passwordHash,
    avatar: "#",
    createdAt: Date.now(),
  };

  db.data.users.push(user);

  await db.write();

  res.json({ seccess: true });
});

app.post("auth/login", async (req, res) => {
  const { email, password } = req.body;

  await db.read();

  const user = db.data.users.find(u => u.email === email);

  if(!user) return res.status(404).json({error:"user not  found!"})

  const ok = await bcrypt.compare

});
