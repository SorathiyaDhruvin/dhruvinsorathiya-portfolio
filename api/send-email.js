import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 1️⃣ Email to YOU (Receiver)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Portfolio Message",
      html: `
        <h2>📩 New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    // 2️⃣ Auto-reply to SENDER
    await transporter.sendMail({
      from: `"Dhruvin Sorathiya" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hello <b>${name}</b>,</p>
        <p>Thanks for reaching out via my portfolio.</p>
        <p>I have received your message and will reply soon.</p>
        <hr />
        <p><b>Your Message:</b></p>
        <p>${message}</p>
        <br/>
        <p>Regards,<br/><b>Dhruvin Sorathiya</b></p>
      `
    });

    return res.status(200).json({ message: "Emails sent successfully" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email sending failed" });
  }
}
