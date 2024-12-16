import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-8 lg:p-16 gap-8 items-center">
        {/* <div>
          <Badge>Register Now</Badge>
        </div> */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Excited? Register Now!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl  pt-3 ">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          {/* <Button className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button> */}
          <Button size="lg" className="px-8 py-6 gap-4">
            Register <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
