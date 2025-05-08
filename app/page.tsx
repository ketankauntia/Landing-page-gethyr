// import { AboutProgramSection } from "@/components/AboutProgram";
import { Case } from "@/components/case";
import { Contact } from "@/components/ContactUs";
// import { CoordinatorSection } from "@/components/Coordinator";
// import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { VerticalExpertise } from "@/components/ResearchGroup";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div>
      <Hero />
      <VerticalExpertise />
      <Stats />
      <WhyUs />
      {/* <AboutProgramSection /> */}
      <Case />
      <Testimonials />
      {/* <CoordinatorSection /> */}
      <FAQ />
      <Contact /> 
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
