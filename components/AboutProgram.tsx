import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AboutProgramSection = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">About</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                About The Program!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                The Student Research Society (SRS) typically refers to a
                student-led organization that promotes research and scholarly
                activities among students. These societies often aim to enhance
                research skills, provide networking opportunities, and foster
                collaboration among students and faculties.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Start Learning</p>
                <p className="text-muted-foreground text-sm">
                  in-depth knowledge making it easier & faster to use learn.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Hands on Experience</p>
                <p className="text-muted-foreground text-sm">
                  Practical implementation increases the learning curve
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Implement via Projects</p>
                <p className="text-muted-foreground text-sm">
                  Implement the hands on experince into a Practical project
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Write Research Papers</p>
                <p className="text-muted-foreground text-sm">
                  Get tailored guidance from the mentors to write a new piece of
                  research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square hidden lg:block"></div>
      </div>
    </div>
  </div>
);
