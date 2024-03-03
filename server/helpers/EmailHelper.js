import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const { EMAIL_PASSWORD, EMAIL_ADDRESS } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASSWORD
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const ReplyMsgEmail = (subject,greetings,email,name,actionText) => {
    try { 
      const message = {
          to:email,
          from:'" 👻"zola@gmail.com',
          subject,
          html: `<div style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;padding:35px;">
            <h1 style="color: #848484;"></h1>
            <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">${greetings} ${name}!<br>${actionText}<br></p>
            <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;">Thanks,<br> Team</p>
            </div>`
      };
      transporter.sendMail(message);
    } catch (error) {
      return error;
    }
  };

  const sendMsgEmail = (subject,greetings,email,name,phone,actionText,startDate,endDate) => {
    try { 
      const message = {
          to:`zola@gmail.com`,
          from:`"👻"${email}`,
          subject,
          html: `<div style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;padding:35px;">
            <h1 style="color: #848484;"></h1>
            <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">${greetings}, My name is ${name}!<br></p><p style="line-height:1.5em;margin-top:0;">${actionText}<br></p>
            <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;">Thanks,<br><ul><i>Phone: ${phone}</i><br><i>email: ${email}</i><br><i>Start Date: ${startDate}</i><br><i>End Date: ${endDate}</i></ul></p>
            </div>`
      };
      transporter.sendMail(message);
    } catch (error) {
      return error;
    }
  };  

  export default { sendMsgEmail, ReplyMsgEmail };
 