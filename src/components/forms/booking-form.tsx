"use client";

import React from "react"; // Import React
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormSchema, BookingFormSchemaType } from "@/schemas/booking-schema";
import { sendBookingEmail } from "@/actions/send_email"; // Import the server action
import { useTransition } from "react"; // Import useTransition for pending state

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Package } from "lucide-react";
import { useCallback, useState } from "react";
import * as z from "zod";
import { packages } from "@/lib/const";
import { nl } from 'date-fns/locale'; // Import the Dutch locale




const timeSlots = ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

// --- Helper Functions ---

const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "Kies je shoot (thuis, buiten of puppy)";
    case 2:
      return "Your Details";
    case 3:
      return "Schedule";
    default:
      return "";
  }
};

// --- Step Components ---

const PackageSelection = ({ form }: { form: any }) => {
  const selectedPackage = form.watch("package");

  const handlePackageSelect = useCallback(
    (pkgId: string) => {
      form.setValue("package", pkgId);
    },
    [form]
  );

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={cn("cursor-pointer transition-all", selectedPackage === pkg.id ? "border-primary ring-2 ring-primary" : "")}
            onClick={() => handlePackageSelect(pkg.id)}
          >
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-start">
                  <span>{pkg.name}</span>
                  <pkg.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold mt-2">€{pkg.price}</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      {form.formState.errors.package && <p className="text-destructive text-sm">{form.formState.errors.package.message}</p>}
    </div>
  );
};

const PersonalDetails = ({ form }: { form: any }) => (
  <div className="grid gap-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Naam</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefoon Nummer</FormLabel>
            <FormControl>
              <Input placeholder="06 12345678" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="petType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Huisdier</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer huisdiertype" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="dog">Hond</SelectItem>
                <SelectItem value="cat">Kat</SelectItem>
                <SelectItem value="other">Anders</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="petName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Huisdier Naam</FormLabel>
            <FormControl>
              <Input placeholder="Max" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <FormField
      control={form.control}
      name="specialRequests"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Speciale verzoeken</FormLabel>
          <FormControl>
            <Textarea placeholder="Eventuele speciale vereisten of voorkeuren..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const Scheduling = ({ form }: { form: any }) => (
  <div className="grid gap-6">
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Datum</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                    {field.value ? format(field.value, "EEEE d MMMM yyyy", { locale: nl}) : <span>Kies een datum</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => {
                return date < new Date() || // Can't select past dates
                   date < new Date("1900-01-01") || // Reasonable minimum date
                   date.getDay() !== 0 // Only allow Sundays (0 = Sunday)
              }}
              initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="time"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tijd</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecteer voorkeurstijd" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

// --- Main Component ---
export default function BookingForm() {
  const [step, setStep] = useState(3);
  const totalSteps = 3;

  // --- New State Variables for Submission Handling ---
  const [isPending, startTransition] = useTransition();
  const [submissionError, setSubmissionError] = React.useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = React.useState<boolean>(false);

  const form = useForm<BookingFormSchemaType>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "",
      package: "",
      date: (() => {
        const today = new Date();
        const daysUntilSunday = (7 - today.getDay()) % 7;
        const nextSunday = new Date(today);
        nextSunday.setDate(today.getDate() + daysUntilSunday);
        return nextSunday;
      })(),
      time: "",
      specialRequests: "",
    },
  });

  const handleNext = async () => {
    let fieldsToValidate: (keyof BookingFormSchemaType)[] = [];
    switch (step) {
      case 1:
        fieldsToValidate = ["package"];
        break;
      case 2:
        fieldsToValidate = ["name", "email", "phone", "petName", "petType"];
        break;
      case 3:
        fieldsToValidate = ["date", "time"];
        break;
      default:
        fieldsToValidate = [];
    }

    const isValid = await form.trigger(fieldsToValidate);

    if (step < totalSteps) {
      if (isValid) {
        setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
      }
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // --- Updated onSubmit Function (Calls Server Action) ---
  const onSubmit = async (values: BookingFormSchemaType) => {
    setSubmissionError(null); // Reset error on new submission
    setSubmissionSuccess(false);

    startTransition(async () => {
      const result = await sendBookingEmail(values); // Call the server action

      if (result && "error" in result) {
        console.error("Email sending error:", result.error, result.issues); // Log detailed issues if available
        setSubmissionError(result.error ? result.error : "Unknown Error");
        setSubmissionSuccess(false);
      } else if (result && "success" in result && result.success) {
        setSubmissionSuccess(true);
        form.reset(); // Clear the form on success
      }
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Klaar om samen onvergetelijke foto&apos;s te maken? </h1>
            {/* <p className="text-lg text-muted-foreground">Let&apos;s capture those precious moments with your furry friend</p> */}
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center relative">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={cn(
                    "z-10 flex items-center justify-center w-10 h-10 rounded-full border-2",
                    step >= number ? "bg-primary text-primary-foreground border-primary" : "bg-background border-muted-foreground/25"
                  )}
                >
                  {number}
                </div>
              ))}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted-foreground/25 -z-10">
                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }} />
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              {[1, 2, 3].map((number) => (
                <span key={number}>{getStepTitle(number)}</span>
              ))}
            </div>
          </div>

          {/* --- Display Success and Error Messages --- */}
          {submissionSuccess && <p style={{ color: "green" }}>Boekingsaanvraag succesvol verzonden! We nemen spoedig contact met u op.</p>}
          {submissionError && (
            <p style={{ color: "red" }}>Fout bij het versturen van de boeking: {submissionError}. Probeer het alstublieft opnieuw.</p>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, (e) => console.log(e))} className="space-y-8">
              {step === 1 && <PackageSelection form={form} />}
              {step === 2 && <PersonalDetails form={form} />}
              {step === 3 && <Scheduling form={form} />}

              <div className="flex justify-between pt-8">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
                {step !== totalSteps ? (
                  <Button type="button" className="ml-auto" onClick={() => handleNext()}>
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit" // Change button type to 'submit' to trigger form submission
                    className="ml-auto"
                    disabled={isPending} // Disable button when submitting
                  >
                    {isPending ? "Verzenden..." : "Complete Booking"} {/* Show "Verzenden..." when pending */}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
