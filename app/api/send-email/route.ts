import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ruknuddin.hamza@gmail.com",
      subject: "New Booking Request",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Pickup Location:</strong> ${body.pickupLocation}</p>
        <p><strong>Drop-off Location:</strong> ${body.dropoffLocation}</p>
        <p><strong>Date:</strong> ${body.date}</p>
        <p><strong>Time:</strong> ${body.time}</p>
        <p><strong>Notes:</strong> ${body.notes}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}