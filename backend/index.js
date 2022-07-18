import express from "express";
import { errorHandler, notFound } from "./middleWare/errorMiddleware";

const app = express();
app.use(express.json());

//just to test weather it is working properly
app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello world" });
});

app.use(notFound)
app.use(errorHandler)

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});
