import jwt from "jsonwebtoken";

const JWT_SECTER = "SUPER_SECRET_KEY";

export const authMiddleware = (req, res, next) => {
  const header = req.header.authorization;

  if (!header) {
    return res.status(401).json({ errro: "unauthorized" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECTER);
    req.userId = decoded.id;
    next()
  } catch {
    res.status(401).json({ error: "invalid token" });
  }
};
