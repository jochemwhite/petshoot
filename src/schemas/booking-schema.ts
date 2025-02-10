import { z } from "zod";

export const BookingFormSchema = z.object({
  package: z.string().min(1, "Please select a package"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  petName: z.string().min(1, "Pet name is required"),
  petType: z.string().min(1, "Pet type is required"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  specialRequests: z.string().optional(),
});

export type BookingFormSchemaType = z.infer<typeof BookingFormSchema>;