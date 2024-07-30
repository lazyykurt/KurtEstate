import express from "express";
import postsRouter from "./routers/post.router.js";

const app = express();

app.use("/api/post", postsRouter);

app.listen(8800, () => {
  console.log("Server is running on port 8800, http://localhost:8800");
})