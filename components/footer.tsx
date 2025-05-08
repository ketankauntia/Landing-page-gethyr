import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Quick Contact",
      items: [],
    },
    {
      title: "Services",
      items: [
        {
          title: "Technology & Product",
          href: "/#services",
        },
        {
          title: "HFT & Hedge Funds",
          href: "/#services",
        },
        {
          title: "Telecommunication",
          href: "/#services",
        },
        {
          title: "Executive Leadership",
          href: "/#services",
        },
      ],
    },
    {
      title: "Quick Links",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Testimonials",
          href: "/#testimonials",
        },
        {
          title: "FAQ",
          href: "/#faq",
        },
        {
          title: "Contact us",
          href: "/#contact",
        },
      ],
    },
    
  ];

  return (
    <div className="w-full py-20 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-bold text-left">
                GetHyr
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                India&apos;s #1 talent search company
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg">Follow us:</p>
              <div className="flex gap-4 flex-row">
                <Link href="https://instagram.com" className="hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://facebook.com" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://youtube.com" className="hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="flex gap-2 text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of service</Link> | 
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-3 flex-col items-start"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-xl">{item.title}</p>
                  {item.items && item.items.length > 0 &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center hover:text-primary transition-colors"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                  {item.title === "Quick Contact" && (
                    <div className="flex flex-col gap-2 text-sm text-background/75">
                      <p className="text-background/75">B-158, Sector 63, Noida, Uttar Pradesh, India 201-301</p>
                      <Link href="mailto:info@gethyr.com" className="hover:text-primary transition-colors">info@gethyr.com</Link>
                      <Link href="tel:+917897777870" className="hover:text-primary transition-colors">+91 7897777870</Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};