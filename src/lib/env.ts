import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";


export const env = createEnv({
  server: {
    PHOTOGRAPHER_EMAIL: z.string().email("PHOTOGRAPHER_EMAIL must be a valid email address"), // Photographer's email

    // SMTP Server settings (for custom SMTP)
    NODEMAILER_HOST: z.string().min(1, "NODEMAILER_HOST is required for custom SMTP"), // SMTP server hostname
    NODEMAILER_PORT: z.coerce.number().positive("NODEMAILER_PORT must be a positive number"), // SMTP server port, coerced to number and validated as positive
    NODEMAILER_SECURE: z.boolean().default(true), //  Whether to use TLS/SSL, default to true (secure)
    NODEMAILER_USER: z.string().min(1, "NODEMAILER_USER is required for SMTP authentication"), // SMTP username
    NODEMAILER_PASS: z.string().min(1, "NODEMAILER_PASS is required for SMTP authentication"), // SMTP password (use NODEMAILER_PASS to avoid naming conflict with NODEMAILER_PASSWORD for email account)
    NODEMAILER_SENDER: z.string().email("SENDER must be a valid email address")
  },
  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1, "NEXT_PUBLIC_POSTHOG_KEY is required"),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url("NEXT_PUBLIC_POSTHOG_HOST must be a valid URL"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
});
