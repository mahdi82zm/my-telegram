import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { nanoid } from "nanoid";
import db, { initDB } from "./db.js";
import { error } from "console";
import authRoute from "./routes/auth.js";
import { authMiddleware } from "./middleware/authmiddleware.js";
import jwt from "jsonwebtoken";

const app = express();
const server = http.createServer(app);

const JWT_SECRET = "SUPER_SECRET_KEY";


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

app.get("/messages/:userId/:contactId", authMiddleware, async (req, res) => {
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

app.use("/auth", authRoute);

// conect socket to  jwt

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("unauthorized"));
  }

  try {
    const decoded = jwt.verify(token , JWT_SECRET);
    socket.userid = decoded.id
    next()
  } catch {
    next(new Error("unauthorized"))
  }
});
