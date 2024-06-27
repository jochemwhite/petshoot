import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(5).max(255),
  message: z.string().min(10),
});
