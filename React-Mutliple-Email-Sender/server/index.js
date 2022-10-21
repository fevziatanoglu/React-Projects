const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");







































const mailChecker = (senderEmail) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
            user: senderEmail.user,
            pass: senderEmail.pass
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: true,
        },
    })
}

app.listen(5000, () => {
    console.log("server running on port 5000");
})


app.use(cors());
app.use(express.json());




















app.post("/send", async (req, res) => {


      const { emails , subject , textMessage,  senderEmail } = req.body;

    const mailData = {
        to: `${emails}`,
        subject: `${subject}`,
        text: `${textMessage}`
    }

    // create a sender email adress
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: `${senderEmail.user}`, pass: `${senderEmail.pass}` }
    })

    
    await transporter.sendMail(mailData)
        .then(data => {
            console.log("Email Send Success!")
            return res.json({ message: "Email Send Success!!", success:true })
        })
        .catch(error => {
            console.log(error)
            return res.json({ message: error.response, success: false})
        })

})



app.post("/check", async (req, res) => {


    const senderEmail = req.body;

  const mailData = {
      to: `test@gmail.com`,
      subject: "Check",
      text: "This email just for checking"
  }

  // create a sender email adress
  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: `${senderEmail.user}`, pass: `${senderEmail.pass}` }
  })

  await transporter.sendMail(mailData)
      .then(data => {
          console.log("Email Send Success!")
          return res.json({ message: "Email Send Success!!", success:true })
      })
      .catch(error => {
          console.log(error)
          return res.json({ message: error.response.slice(10,44), success: false})
      })

})
































