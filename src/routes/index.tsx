import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Hero, Benefits, HowItWorks, Pricing, FAQ, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StorePilot — Launch your ecommerce store in minutes" },
      { name: "description", content: "Create a professional online store for your business with bKash and COD support. Built for Bangladeshi sellers, boutiques, and home businesses." },
      { property: "og:title", content: "StorePilot — Launch your ecommerce store in minutes" },
      { property: "og:description", content: "No-code ecommerce platform for Bangladeshi sellers. Start a 7-day free trial." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
