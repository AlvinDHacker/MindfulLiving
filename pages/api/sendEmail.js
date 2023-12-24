import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
	const transporter = createTransport({
		port: process.env.SMTP_PORT,
		host: process.env.SMTP_HOST,
		auth: {
			user: process.env.SENDER_EMAIL,
			pass: process.env.SENDER_PASSWORD,
		},
		secure: true,
	});

	const mailData = {
		from: process.env.SENDER_EMAIL,
		to: process.env.RECEIVER_EMAIL,
		subject: `Enquiry From Tietans`,
		html: `
		<strong>Email:</strong> ${req.body.email} <br/>
		<strong>Subject:</strong> ${req.body.subject} <br/><br/>

		<strong>Message:</strong><br/>
		${req.body.message}
		`,
	};

	try {
		const mail = await transporter.sendMail(mailData);
		console.log("Success " + mail.response);
		return res.status(200).json({ success: true, message: "Message Sent" });
	} catch (error) {
		console.log("Error: " + error);
		return res.status(200).json({ success: false, message: "Error" });
	}
}
