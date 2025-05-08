import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const VerticalExpertise = () => (
  <div className="w-full py-20 lg:py-12">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-12 flex-col items-start">
        <div>
          <Badge>Talent Pool</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Industry Expertise
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Specialized recruitment solutions across high-demand sectors.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Technology & Product</p>
                <p className="text-muted-foreground text-sm">
                  Building exceptional tech teams across the spectrum:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>Product & engineering team assembly</li>
                    <li>Technical talent for startups to enterprises</li>
                    <li>Full-stack developers & specialized roles</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>HFT & Hedge Funds</p>
                <p className="text-muted-foreground text-sm">
                  Elite talent acquisition for financial tech markets:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>Quantitative researchers & algorithmic traders</li>
                    <li>Low-latency C++ & FPGA developers</li>
                    <li>ML/AI specialists for financial modeling</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Telecommunication</p>
                <p className="text-muted-foreground text-sm">
                  Strategic telecom talent acquisition solutions:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>5G, IoT, CPaaS & VoIP specialists</li>
                    <li>Network engineers & infrastructure experts</li>
                    <li>Telecom software developers & architects</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Executive Leadership</p>
                <p className="text-muted-foreground text-sm">
                  Transformative leadership talent acquisition:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>Tech leaders: CTO, VP Engineering, Head of AI/ML</li>
                    <li>Business leaders: CEO, COO, CFO, CMO</li>
                    <li>Strategic advisors & board members</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>International Recruitment</p>
                <p className="text-muted-foreground text-sm">
                  Global talent acquisition expertise:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>Building offshore teams in India</li>
                    <li>Cross-border talent sourcing & relocation</li>
                    <li>Cultural fit assessment & integration</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>0 to 1 Team Building</p>
                <p className="text-muted-foreground text-sm">
                  Comprehensive startup team formation services:
                  <ul className="list-disc pl-5 pt-2 space-y-1">
                    <li>Founding team assembly for investor portfolios</li>
                    <li>Technical co-founder identification</li>
                    <li>Early-stage growth team formation</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);