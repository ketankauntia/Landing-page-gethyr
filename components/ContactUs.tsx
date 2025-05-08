"use client";

import { Check, MoveRight, Globe, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Global Reach</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Reach us
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
                  Our hiring territories span nationwide, with regional expertise, global connections, and scalable solutions to find the best talent, whether locally or remotely.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 my-4">
              <Badge variant="secondary" className="text-sm font-medium">SEA</Badge>
              <Badge variant="secondary" className="text-sm font-medium">MENA</Badge>
              <Badge variant="secondary" className="text-sm font-medium">APAC</Badge>
              <Badge variant="secondary" className="text-sm font-medium">USA</Badge>
            </div>
            
            <div className="border-l-2 border-primary pl-4 italic text-muted-foreground my-2">
              <p>&quot;Hiring people is an art, not a science, and resumes can&apos;t tell you whether someone will fit into a company&apos;s culture.&quot;</p>
              <p className="text-sm mt-2">- Howard Schultz</p>
            </div>
            
            <div className="flex flex-row gap-6 items-start text-left">
              <Globe className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Global Network</p>
                <p className="text-muted-foreground text-sm">
                  Access to talent pools across multiple regions and industries.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Industry Expertise</p>
                <p className="text-muted-foreground text-sm">
                  Specialized recruiters who understand your sector&apos;s unique requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <MapPin className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Local & Remote Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Finding the perfect candidates regardless of geographic constraints.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md w-full max-w-md flex flex-col border p-8 gap-4">
              <p className="text-xl font-medium">Contact Us</p>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" type="text" placeholder="Enter your first name" />
              </div>
              
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" type="text" placeholder="Enter your last name" />
              </div>
              
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="company">Company</Label>
                <Input id="company" type="text" placeholder="Your company name" />
              </div>
              
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Your contact number" />
              </div>
              
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="details">Details <span className="text-xs text-muted-foreground">(not mandatory)</span></Label>
                <Textarea id="details" placeholder="Tell us more about your requirements..." />
              </div>
              <Button className="gap-4 w-full mt-2">
                Submit <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};