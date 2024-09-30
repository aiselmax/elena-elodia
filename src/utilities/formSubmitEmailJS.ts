import emailjs from "emailjs-com";
import { emailConfig } from "@/utilities/emailConfig";

interface FormData extends Record<string, string> {
  name: string;
  email: string;
  subject: string;
  image: string;
  message: string;
}

export const sendEmail = async (formData: FormData): Promise<void> => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceID, // Your EmailJS service ID
      emailConfig.templateID, // Your EmailJS template ID
      formData as Record<string, string>,
      emailConfig.userID // Your EmailJS user ID (API key)
    );
    console.log("Email erfolgreich gesendet!", response.status, response.text);
  } catch (error) {
    console.error("Fehler beim Senden der Email", error);
  }
};
