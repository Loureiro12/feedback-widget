import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e08744e36aaf1c",
    pass: "4525201deaee33",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "equipe Feedget <oi@feedget.com>",
      to: "Andre Loureiro <contato.loureiro1@gmail.com>",
      subject,
      html: body,
    });
  }
}
