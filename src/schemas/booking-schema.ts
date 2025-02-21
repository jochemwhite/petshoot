import { z } from "zod";

export const BookingFormSchema = z.object({
  package: z.string().min(1, "Selecteer een pakket"),
  name: z.string().min(2, "Naam moet minimaal 2 karakters lang zijn"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(10, "Voer een geldig telefoonnummer in"),
  petName: z.string().min(1, "Naam van het huisdier is verplicht"),
  petType: z.string().min(1, "Type huisdier is verplicht"),
  date: z.date({
    required_error: "Selecteer een datum",
  }),
  time: z.string().min(1, "Selecteer een tijd"),
  specialRequests: z.string().optional(),
});

export type BookingFormSchemaType = z.infer<typeof BookingFormSchema>;