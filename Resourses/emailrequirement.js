const nodemailer = require("nodemailer");

exports.sendMail = async(option) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
    })
    
    const emailFormat = {
    from: `${option.name} <${option.email}>`,
    to: process.env.YOUR_EMAIL,
    subject: `Contact us from- ${option.subject}`,
    html: option.message
    }

    await transporter.sendMail(emailFormat);
};