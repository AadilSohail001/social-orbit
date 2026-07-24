import emailjs from "@emailjs/browser";

/*
 * ── EmailJS Setup ──────────────────────────────────────────────
 * 1. Sign up free at https://www.emailjs.com/
 * 2. Connect your email (socialorbit42@gmail.com) as a service
 * 3. Create an email template with these variables:
 *      {{from_name}} {{from_email}} {{subject}} {{message}} {{to_email}}
 * 4. Copy the Service ID, Template ID, and Public Key below
 * ──────────────────────────────────────────────────────────────
 */

const SERVICE_ID = "service_xxxxx";
const TEMPLATE_ID = "template_xxxxx";
const PUBLIC_KEY = "xxxxxxxxxxxxxx";

export async function sendEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: "socialorbit42@gmail.com",
        },
        PUBLIC_KEY,
    );
    return result;
}
