"use strict";
const nodemailer = require("nodemailer");

async function main() {

  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  function sendMailer(to, text) {
    let info = await transporter.sendMail({
        from: 'API Tracking <lcristiano.dev@mail.com>',
        to: to,
        subject: "Notification tracking ✔",
        text: text, 
      });    
  };
  
  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

module.exports = {
    sendMailer
}
