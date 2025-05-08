// import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export const CoordinatorSection = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto ">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center ">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          {/* <div>
            <Badge>Platform</Badge>
          </div> */}
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              The Coordinator
            </h2>
            <p className="text-lg max-w-xl lg:max-w-3xl leading-relaxed tracking-tight text-muted-foreground text-left pt-4 pb-4">
              A computer professional, with his research interest in machine
              learning, deep learning with NLP, Computational Biology, and
              Biomedical domain. He is currently working as an Associate
              Professor and Dean in School of Computer Applications at Kalinga
              Institute of Industrial Technology(KIIT), Deemed to be University,
              India.
            </p>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="px-8 py-6 gap-4">
                Check Profile <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
