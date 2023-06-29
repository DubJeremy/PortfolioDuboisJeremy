import type { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();

const nodemailer = require('nodemailer');

export default async function sendMail(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('aie1');
	if (req.method === 'POST') {
		const body = req.body;

		const transporter = nodemailer.createTransport({
			host: process.env.HOST_SSL,
			port: process.env.PORT,
			secure: true,
			auth: {
				user: process.env.AUTH_USERNAME,
				pass: process.env.AUTH_PASSWORD,
			},
		});

		const message = `
			Nom: ${body.name}\n
			Email: ${body.mail}\n
			Message: ${body.message}`;

		const data = {
			to: process.env.MAIL_TO,
			from: process.env.MAIL_FROM,
			replyTo: body.mail,
			text: message,
			html: `<div style="font-family: Arial, sans-serif; font-size: 20px; color: #000;">
				<p><strong>Nom:</strong> ${body.name}</p>
				<p><strong>Email:</strong> ${body.mail}</p>
				<p><strong>Message:</strong></p>
				<p>${body.message}</p>
			</div>`,
		};

		try {
			await transporter.sendMail(data);
			res.status(200).send('MESSAGE_SENDED');
		} catch (err) {
			res.status(500).send('MESSAGE_ERROR');
		}
	} else {
		return 'ERROR_METHOD';
	}
}
