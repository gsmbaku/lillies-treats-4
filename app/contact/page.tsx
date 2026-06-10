import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Custom Orders | Lillie's Treats",
  description:
    "Get in touch, place a custom order, or just say hello. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactClient />;
}
