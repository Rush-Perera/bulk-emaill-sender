const nodemailer = require("nodemailer");
const fs = require("fs");

// Replace with your Titan credentials and file path
const senderEmail = process.env.SENDER_EMAIL;
const password = process.env.SENDER_PASSWORD;
const csvFile = "data.csv";
const templateFile = "template1.html";
const statusFile = "email_status.csv";
// Read email addresses from CSV
// const emails = fs.readFileSync(csvFile, "utf8").split("\n");
const emails = ["sudeeraperera21@gmail.com", "srkgeeks@gmail.com"];

// Create transporter object with Titan-specific settings
const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true, // Use secure connection
  auth: {
    user: senderEmail,
    pass: password,
  },
});

// Function to read the email template
function readTemplate() {
  const templateContent = fs.readFileSync(templateFile, "utf8");
  return templateContent;
}

const statusStream = fs.createWriteStream(statusFile, { flag: "a" }); // Append mode


// Iterate through emails and send
emails.forEach((email) => {
  const mailOptions = {
    from: {
      name: "GENZ Technologies",
      address: senderEmail,
    },
    to: email,
    subject: "Your NGO Website! Get 40% Off",
    html: readTemplate(),
  };

  // Send email and track delivery status
  transporter.sendMail(mailOptions, (error, info) => {
    // Use a try-catch block to handle potential errors during status writing
    try {
      const status = error ? "Failed" : "Sent";
      let errorMessage = "";

      if (error) {
        errorMessage = error;
        console.error(`Error sending to ${email}: ${errorMessage}`);
      } else {
        console.log(`Email sent to ${email}: ${info.messageId}`);
      }

      // Write status and error message to the file
      statusStream.write(`${email},${status},${errorMessage}\n`);
    } catch (err) {
      console.error(`Error writing status to file: ${err}`);
    }
  });
});
