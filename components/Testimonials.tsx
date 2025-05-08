"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Customer Reviews: GetHyr - Your Trusted Partner in Talent Acquisition
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {[
                {
                  company: "BharatPe",
                  name: "Vijay Aggarwal",
                  title: "CTO- BharatPe",
                  testimonial: "I faced a significant challenge with our recruitment process—low selection ratio and candidate dropouts. Trying GetHyr was a game-changer. They worked with astonishing speed, delivering exceptional results within 60 days. Over 20 highly skilled techies were placed, elevating our capabilities and adding immense value to our projects. I'm impressed by the quality of candidates—experienced and skilled. I highly recommend GetHyr as a reliable and effective recruitment partner."
                },
                {
                  company: "Syfe",
                  name: "Mr Vikram Khorana",
                  title: "Head HR- Syfe",
                  testimonial: "I'm delighted to share my positive experience with GetHyr's outstanding recruitment services. They've been a valuable partner, providing time-effective and cost-effective solutions without compromising on quality. Their team efficiently understands our talent needs and consistently delivers high-quality candidates. We highly recommend GetHyr as a reliable and effective recruitment partner"
                },
                {
                  company: "C2FO",
                  name: "Ankit Rajpal",
                  title: "VP Eng. - C2FO",
                  testimonial: "Looking for a recruitment partner experienced in fintech, we chose GetHyr, and the results were impressive. They swiftly identified qualified candidates, scheduled interviews, and made offers promptly. The candidates presented were highly skilled, experienced, and perfectly aligned with our company culture. We highly recommend GetHyr as a reliable and effective fintech recruitment partner with a keen understanding of the industry."
                }
              ].map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {testimonial.company} Testimony
                      </h3>
                      <p className="text-muted-foreground text-base">
                        {testimonial.testimonial}
                      </p>
                      <p className="flex flex-row gap-2 text-sm items-center mt-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{testimonial.name}</span>
                        <span className="text-muted-foreground">{testimonial.title}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
