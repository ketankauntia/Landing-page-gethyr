import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ResearchGroupSection = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto bg-gray-50 py-15 rounded-md">
      <div className="flex gap-4 py-20 lg:py-20 flex-col items-start">
        {/* <div>
          <Badge>Platform</Badge>
        </div> */}
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Research Areas
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Learn new technologies, craft innovative solutions, build impactful
            projects.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>AI/ML</p>
                <p className="text-muted-foreground text-sm">
                  Join our group to explore cutting-edge research in AI and ML.
                  We provide students with hands-on training, tools, and
                  resources to deepen their expertise while promoting ethical,
                  responsible AI development for the benefit of society.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Speech Processing</p>
                <p className="text-muted-foreground text-sm">
                  The Speech Processing Research Group pushes the boundaries of
                  speech technology through innovative research in areas like
                  speech recognition, synthesis, and analysis. We develop
                  impactful applications such as virtual assistants and
                  transcription services.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>NLP</p>
                <p className="text-muted-foreground text-sm">
                  The NLP Research Group advances language technologies through
                  pioneering research and practical applications like sentiment
                  analysis and machine translation. We focus on both theoretical
                  foundations and real-world challenges.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Image processing</p>
                <p className="text-muted-foreground text-sm">
                  Image processing enhances and analyzes visual data to extract
                  meaningful information. It is widely used in healthcare for
                  detecting diseases from scans and in AI for facial recognition
                  and object detection. This technology powers innovations
                  across various industries.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Blockchain</p>
                <p className="text-muted-foreground text-sm">
                  Blockchain is a decentralized digital ledger that securely
                  records transactions across a network of computers. Its
                  transparent and tamper-proof nature ensures trust without the
                  need for intermediaries, making it a cornerstone of
                  cryptocurrencies like Bitcoin.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p>Web Devlopment</p>
                <p className="text-muted-foreground text-sm">
                  Web development is the process of building and maintaining
                  websites, combining design, coding, and functionality. It
                  includes front-end development for user interfaces and
                  back-end development for server-side logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
