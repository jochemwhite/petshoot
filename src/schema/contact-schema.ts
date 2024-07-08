import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(4).max(255),
  message: z.string().min(10),

  // honey pot field
  phone: z.string().optional(),
});
