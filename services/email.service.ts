require('dotenv').config()
import { GoogleAuthCredentials, GoogleAuthService } from "./google-auth.service";
import nodemailer from "nodemailer";
import { SentMessageInfo, SendMailOptions } from 'nodemailer';

export interface ContactFormData {
    email: string;
    name: string;
    subject: string;
    message: string;
}

const googleCredentials: GoogleAuthCredentials = {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN as string,
};

const googleAuthService = new GoogleAuthService(googleCredentials, process.env.GOOGLE_USER as string);

export async function submitContactForm(formData: ContactFormData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: googleAuthService.user,
            clientId: googleCredentials.clientId,
            clientSecret: googleCredentials.clientSecret,
            refreshToken: googleCredentials.refreshToken,
            accessToken: await googleAuthService.getAccessToken() // Get the initial access token
        }
    });

    const mailOptions: SendMailOptions = {
        from: `${formData.name} <${formData.email}>`,
        to: process.env.RECIPIENT_EMAIL as string,
        subject: formData.subject,
        text: formData.message
    };

    return await sendMail(mailOptions, transporter);
}

async function sendMail(mailOptions: SendMailOptions, transporter: any): Promise<boolean> {
    try {
        // Attempt to send the email
        const result: SentMessageInfo = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
        return true;
    } catch (error: any) {
        console.error('An error occurred while sending the email:', error);

        // If authentication fails, refresh the access token and retry
        if (error.responseCode === 401 || error.responseCode === 403) {
            try {
                // Refresh the access token
                const newAccessToken = await googleAuthService.getAccessToken();
                transporter.set('oauth2_provision_cb', (_: any, __: any, cb: (arg0: null, arg1: any) => any) => cb(null, newAccessToken));

                // Retry sending the email
                const result = await transporter.sendMail(mailOptions);
                console.log('Email sent successfully after token refresh:', result);
                return true;
            } catch (refreshError) {
                console.error('An error occurred while refreshing the token and retrying:', refreshError);
            }
        }
        return false;
    }
}