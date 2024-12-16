import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Contact Us",
      href: "/",
      description: "",
      items: [
        {
          title: "Dr. Satya Ranjan Dash",
          href: "/",
        },
        {
          title:
            "(Associate Professor & Dean) School of Computer Applications (KIT-DU) ",
          href: "/",
        },
        {
          title: "sdashfca@kiit.ac.in",
          href: "/",
        },
      ],
    },
    {
      title: "Research Groups",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "AI/ML",
          href: "/ai-ml",
        },
        {
          title: "Speech Processing",
          href: "/speech-processing",
        },
        {
          title: "NLP",
          href: "/nlp",
        },
        {
          title: "Blockchain",
          href: "/blockchain",
        },
        {
          title: "web dev",
          href: "/web-dev",
        },
        {
          title: "Image Processing",
          href: "/image-processing",
        },
      ],
    },
    {
      title: "Imp Links",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Contact Us",
          href: "/contactUs",
        },
        {
          title: "All Events",
          href: "/events",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Student Research Center
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                A place where Knowledge Sparks, Innovation Ignites, Future
                Reshapes.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-row text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link className="mr-6" href="/">
                  Privacy Policy
                </Link>
                <Link href="/">Terms of service</Link>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                {/* <p>1 Tailwind Way</p>
                <p>Menlo Park</p>
                <p>CA 94025</p> */}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
