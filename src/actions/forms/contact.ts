"use server";
import { ContactFormSchema } from "@/schema/contact-schema";
import { z } from "zod";

interface ContactFormProps {
  values: z.infer<typeof ContactFormSchema>;
}
export async function HandleContactForm({ values }: ContactFormProps) {
  // validate the form
  const result = ContactFormSchema.safeParse(values);

  if (!result.success) {
    return {
      status: 400,
      body: {
        errors: result.error.errors,
      },
    };
  }

  // check if the honeypot field is filled
  if (values.phone) {
    return {
      status: 400,
      body: {
        errors: {
          phone: "You shall not pass!",
        },
      },
    };
  }

  const { name, email, subject, message } = values;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #007BFF;
                color: #ffffff;
                padding: 10px;
                border-radius: 10px 10px 0 0;
                text-align: center;
            }
            .content {
                padding: 20px;
            }
            .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777777;
            }
            .footer a {
                color: #007BFF;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 petshoot.nl. All rights reserved.</p>
                <p><a href="https://www.petshoot.nl">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>`;

  interface EmailRequestBody {
    api_key: string;
    to: string[];
    sender: string;
    subject: string;
    html_body: string;
  }

  const emailRequestBody: EmailRequestBody = {
    api_key: "api-7A4FE443290D4ADC80379D16FC64D904",
    to: [`${name} <${email}>`],
    sender: "Petshoot <website@petshoot.nl>",
    subject: `New Contact Form Submission: <${subject}>`,
    html_body: htmlContent,
  };
  try {
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailRequestBody),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
