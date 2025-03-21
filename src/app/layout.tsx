import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { CSPostHogProvider } from "@/providers/posthog-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CSPostHogProvider>
          <Header />
          <Toaster theme="light" />
          <main>{children}</main>
          <Footer />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
