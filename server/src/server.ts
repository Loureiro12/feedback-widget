import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { types, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      types,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
