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
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

module.exports = {
    sendMailer
}
