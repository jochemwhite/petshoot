"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Package } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// --- Zod Schema (Combined) ---
const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

// --- Data ---
const packages = [
  {
    id: "basic",
    name: "Essential Package",
    price: "$299",
    description: "Perfect for capturing your pet's personality",
    features: ["1-hour photo session", "5 digital photos", "1 printed 8x10 photo", "Online gallery"],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "$499",
    description: "Comprehensive photo session with more options",
    features: ["2-hour photo session", "15 digital photos", "3 printed 8x10 photos", "Online gallery", "Basic retouching", "Multiple outfit changes"],
  },
  {
    id: "ultimate",
    name: "Ultimate Experience",
    price: "$799",
    description: "The complete pet photography experience",
    features: [
      "3-hour photo session",
      "30 digital photos",
      "5 printed 8x10 photos",
      "Custom photo album",
      "Advanced retouching",
      "Multiple locations",
      "Props included",
    ],
  },
];

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

// --- Helper Functions ---

const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "Choose Package";
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
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold mt-2">{pkg.price}</div>
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
            <FormLabel>Your Name</FormLabel>
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
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="(123) 456-7890" {...field} />
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
            <FormLabel>Pet Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select pet type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="other">Other</SelectItem>
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
            <FormLabel>Pet&apos;s Name</FormLabel>
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
          <FormLabel>Special Requests</FormLabel>
          <FormControl>
            <Textarea placeholder="Any special requirements or preferences..." {...field} />
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
          <FormLabel>Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
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
          <FormLabel>Time</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred time" />
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
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "",
      package: "",
      date: new Date(),
      time: "",
      specialRequests: "",
    },
  });

  const handleNext = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
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
    console.log("Validation result for step", step, ":", isValid);

    if (step < totalSteps) {
      if (isValid) {
        setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
      } else {
        // Optionally, you might want to explicitly set focus to the first invalid input in the current step
        console.log("Validation failed for step", step);
      }
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const onSubmit = async (values: FormValues) => {
    // Ensure final step fields are also valid before submission
    console.log("Final submission values:", values);
    alert("Booking submitted successfully! We'll contact you shortly to confirm your appointment.");
  };

  return (
    <div className=" pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book Your Pet Photo Session</h1>
            <p className="text-lg text-muted-foreground">Let&apos;s capture those precious moments with your furry friend</p>
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
                  <Button type="button" className="ml-auto" onClick={form.handleSubmit(onSubmit, (e) => {console.log(e)})}>
                    Complete Booking
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
