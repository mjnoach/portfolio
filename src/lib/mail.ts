import { EmailParams, MailerSend, Recipient } from 'mailersend'
import nodemailer from 'nodemailer'

console.log('🚀 ~ process.env.MAILERSEND_USER:', process.env.MAILERSEND_USER)

let transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILERSEND_USER,
    pass: process.env.MAILERSEND_PASS,
  },
})

export const mail = {
  // send: async (from: string, message: string) =>
  //   mailersend.email.send(getEmailParams(from, message)),

  send: (from: string, message: string) =>
    transporter.sendMail({
      from,
      to: 'a.siennkiewicz@gmail.com',
      subject: 'Mail Test',
      text: `
        from: ${from}\n
        message:\n
        ${message}`,
    }),
}

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
})

const getEmailParams = (from: string, message: string) =>
  new EmailParams()
    .setFrom({
      email: 'a.siennkiewicz@gmail.com',
      name: 'MailerSend',
    })
    .setTo([new Recipient('a.siennkiewicz@gmail.com')])
    .setSubject('Contact Request')
    .setText(
      `
      from: ${from}\n
      message:\n
      ${message}`
    )
    .setTemplateId('yzkq340xzrx4d796')