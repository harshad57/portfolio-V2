import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json(); // ✅ Get body data

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Fill all the fields" }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
      html: `<p><strong>Name :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Email error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send message" }),
      { status: 500 }
    );
  }
}
