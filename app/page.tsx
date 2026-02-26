import { Header } from "@/components/Header";
import { ScrollSpy } from "@/components/ScrollSpy";
import { Hero } from "@/components/Hero";
import { InstitutionalContext } from "@/components/InstitutionalContext";
import { BasesAccordion } from "@/components/BasesAccordion";
import { CalendarSection } from "@/components/CalendarSection";
import { Registration } from "@/components/Registration";
import { Venue } from "@/components/Venue";
import { Signatures } from "@/components/Signatures";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollSpy />
      <main id="main-content">
        <Hero />
        <InstitutionalContext />
        <BasesAccordion />
        <CalendarSection />
        <Registration />
        <Venue />
        <Signatures />
      </main>
      <Footer />
    </>
  );
}
