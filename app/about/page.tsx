import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Lillie's Treats",
  description:
    "Meet the hands behind every handcrafted sweet. Lillie's Treats was born from a grandmother's kitchen and a whole lot of love.",
};

export default function AboutPage() {
  return <AboutClient />;
}
