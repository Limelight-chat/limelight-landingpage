import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us — Limelight",
  description: "Get in touch with the Limelight team",
};

export default function Contact() {
  return <ContactPageContent />;
}
