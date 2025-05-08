"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["recruitment", "hiring", "team building", "talent search", "workforce"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background graphic - abstract globe/network */}
      <div className="absolute -right-[10%] top-0 w-[600px] h-[600px] opacity-5 -z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#gradient)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#gradient)" strokeWidth="1" />
          <path d="M100,20 A80,80 0 0,1 180,100" fill="none" stroke="url(#gradient)" strokeWidth="1" />
          <path d="M20,100 A80,80 0 0,1 100,180" fill="none" stroke="url(#gradient)" strokeWidth="1" />
          <path d="M100,180 A80,80 0 0,1 180,100" fill="none" stroke="url(#gradient)" strokeWidth="1" />
          <path d="M20,100 A80,80 0 0,1 100,20" fill="none" stroke="url(#gradient)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute -bottom-[20%] -left-[10%] w-[550px] h-[550px] opacity-5 -z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient2)" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#gradient2)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#gradient2)" strokeWidth="1" />
          <path d="M100,20 A80,80 0 0,1 180,100" fill="none" stroke="url(#gradient2)" strokeWidth="1" />
          <path d="M20,100 A80,80 0 0,1 100,180" fill="none" stroke="url(#gradient2)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="container mx-auto relative">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Supercharge your</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Empowering visionary founders to efficiently build exceptional
              teams through customized HR recruitment solutions, offering speed
              and cost-effectiveness without compromising quality.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Contact Us <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
