import nodemailer from "nodemailer";
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.TRANSPORT_EMAIL,
    pass: process.env.TRANSPORT_PASSWORD,
  },
});

// mail service dependancy
const send = (email: string, token: string) => {
  transporter.sendMail({
    from: "jamilg18@gmail.com",
    to: email,
    subject: "Email Verification",
    html: `<a href="${process.env.BASE_URL}/verify/${token}"><h3>Please verify your email here.</h3></a>`,
  });
};

export const mailer = Object.freeze({
  send: (email: string, token: string) => send(email, token),
});
