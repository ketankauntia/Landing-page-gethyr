import { User } from "lucide-react";
// import { Check, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const WhyUs = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Recruitment Process</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Why Choose GetHyr for Your Talent Acquisition Needs?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              India&apos;s #1 talent search company helping visionary founders build exceptional teams.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-muted h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Client Requirements Analysis</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Understanding the client&apos;s needs, including job descriptions, skill requirements, and cultural fit.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Screening and Evaluation</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Reviewing resumes, conducting initial interviews, and assessing candidates&apos; skills and qualifications.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Client Interviews</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Presenting shortlisted candidates to the client for interviews and coordinating the interview process.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Offer Negotiation</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Assisting with salary negotiations and ensuring both parties are satisfied with the terms.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Post-Offer Follow-Up</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                After the offer is accepted, we ensure a smooth transition by providing support, addressing concerns, and finalizing details.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Onboarding</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Facilitating the onboarding process, including paperwork, background checks (paid), and orientation.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Sourcing Candidates</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Utilizing various channels like job boards, social media, and own database to find suitable candidates.
              </p>
            </div>
          </div>

          <div className="bg-muted h-full rounded-md p-6 flex justify-between flex-col lg:col-span-2">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Post-Joining Follow-Up Plan</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                We continue to maintain communication to ensure successful integration, with periodic check-ins to address challenges, provide support, and gather feedback from both candidate and client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);