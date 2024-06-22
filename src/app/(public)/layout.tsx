import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
