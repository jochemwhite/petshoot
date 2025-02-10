  "use server";

  import { z } from "zod";
  import { BookingFormSchema } from "@/schemas/booking-schema"; // Pas het pad aan indien nodig
  import nodemailer from "nodemailer";
  import { env } from "@/lib/env";

  const serverFormSchema = BookingFormSchema;

  export type FormSchemaType = z.infer<typeof serverFormSchema>;

  export async function sendBookingEmail(data: FormSchemaType) {
    const validatedData = serverFormSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        error: "Ongeldige formulierdata",
        issues: validatedData.error.issues,
      };
    }

    const { package: selectedPackage, name, email, phone, petName, petType, date, time, specialRequests } = validatedData.data;

    const transporter = nodemailer.createTransport({
      host: env.NODEMAILER_HOST, // SMTP server hostname from env
      port: env.NODEMAILER_PORT, // SMTP server port from env (number, coerced by env.ts)
      secure: env.NODEMAILER_SECURE, // Use TLS/SSL? from env (boolean, coerced by env.ts)
      auth: {
        user: env.NODEMAILER_USER, // SMTP username from env
        pass: env.NODEMAILER_PASS, // SMTP password/API key from env (using NODEMAILER_PASS as per updated env.ts)
      },
    });

    const formattedDate = new Date(date).toLocaleDateString("nl-NL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="nl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nieuwe Huisdierfotografie Boekingsaanvraag</title>
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
              .important { font-weight: bold; color: #d32f2f; /* Een tint rood */ }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Nieuwe Boekingsaanvraag</h1>
              <p>Beste Fotograaf,</p>
              <p>U heeft een nieuwe boekingsaanvraag voor huisdierfotografie ontvangen via uw website. Bekijk de details hieronder en neem contact op met de potentiële klant om de boeking te bevestigen.</p>

              <div class="details-section">
                  <h2>Details van de Boekingsaanvraag:</h2>
                  <div class="detail-item">
                      <span class="label">Pakket:</span>
                      <span class="value">${selectedPackage}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Naam Klant:</span>
                      <span class="value">${name}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">E-mail Klant:</span>
                      <span class="value">${email}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Telefoonnummer Klant:</span>
                      <span class="value">${phone}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Naam Huisdier:</span>
                      <span class="value">${petName}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Type Huisdier:</span>
                      <span class="value">${petType}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Gevraagde Datum:</span>
                      <span class="value">${formattedDate}</span>
                  </div>
                  <div class="detail-item">
                      <span class="label">Gevraagde Tijd:</span>
                      <span class="value">${time}</span>
                  </div>
                  ${
                    specialRequests
                      ? `
                  <div class="detail-item">
                      <span class="label">Speciale Verzoeken:</span>
                      <span class="value">${specialRequests}</span>
                  </div>
                  `
                      : ""
                  }
              </div>

              <p class="important">Belangrijk: Neem zo snel mogelijk contact op met de klant om de beschikbaarheid te bevestigen en de boeking af te ronden.</p>

              <div class="footer">
                  <p>Met vriendelijke groet,<br/>
                    Website Boekingssysteem</p>
              </div>
          </div>
      </body>
      </html>
      `;

    const mailOptions = {
      from: env.NODEMAILER_SENDER,
      to: env.PHOTOGRAPHER_EMAIL,
      subject: "Nieuwe Huisdierfotografie Boekingsaanvraag",
      html: emailHtml,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      console.error("Fout bij het verzenden van e-mail: ", error);
      return { error: "Het versturen van de e-mail is mislukt. Probeer het later opnieuw." };
    }
  }
