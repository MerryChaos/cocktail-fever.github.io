import axios from 'axios';
import { ContactFormData } from './contact-form-data.interface';

const api = axios.create({
    baseURL: 'http://localhost:7894/'
})

export async function submitContactForm(contactFormData: ContactFormData): Promise<boolean> {
	try {
		// Use Axios to make a POST request to the endpoint
		const response = await api.post(`/api/send-contact-form`, contactFormData);
		// Handle successful response
		if (response.data.success) {
			console.log('Email sent successfully:', response.data.message);
			return true;
		} else {
			console.log('Failed to send email:', response.data.message);
			return false;
		}
	} catch (error) {// Handle error response
		if (error instanceof Error) {
			// If the error is an instance of the Error class, use its message property
			console.error('An error occurred while sending the email:', error.message);
			console.log(error)
		} else {
			// If the error is not an instance of the Error class, handle it differently or use a default message
			console.error('An error occurred while sending the email:', error);
		}
		return false;
	}
}