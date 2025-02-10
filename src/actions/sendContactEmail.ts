"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { env } from "@/lib/env"; // Or '@/env.js' if you are using JavaScript project

// Define the schema for the contact form data (reuse your client-side schema)
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormSchemaType) {
  const validatedData = contactFormSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Ongeldige formulierdata", // Dutch for "Invalid form data" (you can keep it in English if preferred)
      issues: validatedData.error.issues,
    };
  }

  const { name, email, subject, message } = validatedData.data;

  // Nodemailer setup - using environment variables for custom SMTP (same as booking form)
  const transporter = nodemailer.createTransport({
    host: env.NODEMAILER_HOST,
    port: env.NODEMAILER_PORT,
    secure: env.NODEMAILER_SECURE,
    auth: {
      user: env.NODEMAILER_USER,
      pass: env.NODEMAILER_PASS,
    },
  });

  const emailHtml = `
        <!DOCTYPE html>
        <html lang="nl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nieuw Contactformulier Bericht</title>
            <style>
                body { font-family: 'Arial', sans-serif; color: #333; margin: 0; padding: 20px; background-color: #f9f9f9; }
                .container { max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 15px rgba(0,0,0,0.1); }
                h1, h2 { color: #007bff; }
                h1 { border-bottom: 2px solid #007bff; padding-bottom: 10px; }
                p { line-height: 1.6; }
                .details-section { margin-top: 25px; }
                .detail-item { margin-bottom: 10px; }
                .label { font-weight: bold; display: block; margin-bottom: 5px; color: #555; }
                .value { font-size: 1.1em; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #777; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Nieuw Contactformulier Bericht</h1>
                <p>Er is een nieuw bericht verzonden via het contactformulier op uw website. Bekijk de details hieronder:</p>

                <div class="details-section">
                    <div class="detail-item">
                        <span class="label">Naam:</span>
                        <span class="value">${name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Email:</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Onderwerp:</span>
                        <span class="value">${subject}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Bericht:</span>
                        <span class="value">${message}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>Met vriendelijke groet,<br/>
                        Website Contactformulier</p>
                </div>
            </div>
        </body>
        </html>
    `;

  const mailOptions = {
    from: env.NODEMAILER_SENDER, // Or env.NODEMAILER_USER if you followed the previous suggestion
    to: env.PHOTOGRAPHER_EMAIL, // Send contact form emails to the photographer as well
    subject: `Contactformulier Bericht: ${subject}`, // Include the subject in the email subject
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van contactformulier e-mail: ", error);
    return { error: "Het versturen van het contactformulier bericht is mislukt. Probeer het later opnieuw." };
  }
}
