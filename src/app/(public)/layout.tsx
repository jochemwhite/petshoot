import Footer from "@/components/layout/footer";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
