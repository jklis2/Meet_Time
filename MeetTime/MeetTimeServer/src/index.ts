import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
