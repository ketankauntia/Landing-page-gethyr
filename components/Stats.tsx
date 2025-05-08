import { Trophy, Users, Database, UserCheck } from "lucide-react";

export const Stats = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">      
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
          Our Impact by the Numbers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 lg:gap-8">
          <div className="flex flex-col p-6 border rounded-md hover:shadow-md transition-shadow">
            <Trophy className="w-5 h-5 mb-4 text-primary" />
            <h3 className="text-4xl tracking-tighter font-bold mb-2">
              300+
            </h3>
            <p className="text-base text-muted-foreground">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col p-6 border rounded-md hover:shadow-md transition-shadow">
            <Users className="w-5 h-5 mb-4 text-primary" />
            <h3 className="text-4xl tracking-tighter font-bold mb-2">
              2500+
            </h3>
            <p className="text-base text-muted-foreground">
              Roles we served
            </p>
          </div>
          <div className="flex flex-col p-6 border rounded-md hover:shadow-md transition-shadow">
            <Database className="w-5 h-5 mb-4 text-primary" />
            <h3 className="text-4xl tracking-tighter font-bold mb-2">
              1 M+
            </h3>
            <p className="text-base text-muted-foreground">
              Internal candidate pool
            </p>
          </div>
          <div className="flex flex-col p-6 border rounded-md hover:shadow-md transition-shadow">
            <UserCheck className="w-5 h-5 mb-4 text-primary" />
            <h3 className="text-4xl tracking-tighter font-bold mb-2">
              92%
            </h3>
            <p className="text-base text-muted-foreground">
              Offer to joining ratio
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);