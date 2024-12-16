import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                FAQ's
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out //mail image//
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem key={1} value={"index-1"}>
            <AccordionTrigger>
              Rationale of student research society?
            </AccordionTrigger>
            <AccordionContent>
              Cultivating Research Culture, Bridging theory and practicals,
              skill development and encouraging interdisciplinary collaboration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={2} value={"index-2"}>
            <AccordionTrigger>
              Vision & Mission of the Society?
            </AccordionTrigger>
            <AccordionContent>
              The Student Research Society aims to empower students by providing
              resources, mentorship, and opportunities for research engagement.
              We foster an inclusive environment that encourages curiosity,
              critical thinking, and the sharing of ideas, ultimately preparing
              students to contribute meaningfully to their fields and society.To
              cultivate a vibrant community of student researchers dedicated to
              innovation, collaboration, and the pursuit of knowledge across
              diverse disciplines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={3} value={"index-3"}>
            <AccordionTrigger>
              Benifits of Joining the society?
            </AccordionTrigger>
            <AccordionContent>
              Workshops and Seminars, Networking Opportunities, Mentorship
              Programs, Research Grants, Publication Support
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={4} value={"index-4"}>
            <AccordionTrigger>
              This is the start of something new
            </AccordionTrigger>
            <AccordionContent>
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={5} value={"index-5"}>
            <AccordionTrigger>
              This is the start of something new
            </AccordionTrigger>
            <AccordionContent>
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
