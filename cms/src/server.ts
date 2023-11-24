import express from "express";
import payload from "payload";
import nodeMailerSendgrid from "nodemailer-sendgrid";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

let transportOptions;
switch(process.env.MAILER_TRANSPORT){
	case "SMTP":
		transportOptions = {
			host: process.env.SMTP_HOST,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_SECURE == "true", // use TLS
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: process.env.SMTP_CHECKCERT == "true",
			},
		};
		break;
	case "SENDGRID":
		transportOptions = nodeMailerSendgrid({
			apiKey: process.env.SENDGRID_API_KEY,
		});
		break;
}

const start = async () => {
	// Initialize Payload
	await payload.init({
		email: {
			transportOptions,
			fromName: "Lee Conlin",
			fromAddress: "lee@leeconlin.co.uk",
		},
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	// Add your own express routes here

	app.listen(process.env.PORT || 3001);
};

start();
