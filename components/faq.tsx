import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full py-20 lg:py-32">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                FAQ&apos;s
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Finding the right talent is challenging. Let us answer your questions about how GetHyr can supercharge your team building and help you avoid the pitfalls of inefficient recruitment.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem key={1} value={"index-1"}>
            <AccordionTrigger>
              What makes GetHyr different from other recruitment agencies?
            </AccordionTrigger>
            <AccordionContent>
              As India&apos;s #1 talent search company, GetHyr specializes in customized HR recruitment solutions that combine speed and cost-effectiveness without compromising quality. Our deep industry expertise across technology, finance, telecommunications, and executive leadership allows us to source candidates that perfectly match both technical requirements and cultural fit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={2} value={"index-2"}>
            <AccordionTrigger>
              How long does the recruitment process typically take?
            </AccordionTrigger>
            <AccordionContent>
              While timing varies based on role complexity and market conditions, our track record speaks for itself. For example, with BharatPe, we delivered exceptional results within 60 days, successfully placing over 20 highly skilled technology professionals. We pride ourselves on working with astonishing speed while maintaining high-quality placements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={3} value={"index-3"}>
            <AccordionTrigger>
              What industries does GetHyr specialize in?
            </AccordionTrigger>
            <AccordionContent>
              GetHyr has six key areas of industry expertise: 1) Technology & Product - building engineering teams for tech companies, 2) HFT & Hedge Funds - sourcing quantitative researchers and algorithmic traders, 3) Telecommunication - recruitment for 5G, IoT, and VoIP technologies, 4) Executive Leadership - talent for both technical and non-technical leadership roles, 5) International Recruitment - helping foreign companies build teams in India, and 6) 0 to 1 Team Building - assisting investors with building teams for portfolio companies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={4} value={"index-4"}>
            <AccordionTrigger>
              What post-hiring support does GetHyr provide?
            </AccordionTrigger>
            <AccordionContent>
              Our commitment doesn&apos;t end when a candidate accepts an offer. GetHyr provides comprehensive post-hiring support, including onboarding assistance, paperwork facilitation, background checks, and orientation support. We maintain ongoing communication through a structured Post-Joining Follow-Up Plan with periodic check-ins to address challenges, provide support, and gather feedback from both the candidate and client to ensure successful integration and high retention rates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={5} value={"index-5"}>
            <AccordionTrigger>
              How does GetHyr ensure candidates are a good fit?
            </AccordionTrigger>
            <AccordionContent>
              We employ a rigorous screening process that begins with understanding your specific requirements, company culture, and long-term goals. Our evaluation includes thorough resume reviews, technical assessments, behavioral interviews, and reference checks. We only present candidates who meet both the technical qualifications and cultural alignment needs of your organization, ensuring a higher success rate and longer retention.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
