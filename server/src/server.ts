import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e08744e36aaf1c",
    pass: "4525201deaee33",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { types, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      types,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "equipe Feedget <oi@feedget.com>",
    to: "Andre Loureiro <contato.loureiro1@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${types}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
