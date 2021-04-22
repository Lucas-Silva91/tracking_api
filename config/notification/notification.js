const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

let textInformation = "Teste"
let subjectInformation = "API Tracking"
let toInformation = "api.trackiing@gmail.com"

async function run(textInformation, subjectInformation, toInformation) {
  const mailSent = await transporter.sendMail({
    text: textInformation,
    subject: subjectInformation,
    from: "API TRACKING <api.trackiing@gmail.com",
    to: toInformation,
    html: `
    <html>
    <body>
      <strong>Conteúdo HTML</strong></br> Do E-mail
      <h1>Informativo</h1>
      <p>Esté email pertence ao programa de API de Tracking</p>
    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

//run(textInformation, subjectInformation, toInformation);

module.exports = run