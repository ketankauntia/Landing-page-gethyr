"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Research Groups",
      description: "Join the Research Group that suits you best ;)",
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
    // {
    //   title: "Company",
    //   description: "Managing a small business today is already tough.",
    //   items: [
    //     {
    //       title: "About us",
    //       href: "/about",
    //     },
    //     {
    //       title: "Fundraising",
    //       href: "/fundraising",
    //     },
    //     {
    //       title: "Investors",
    //       href: "/investors",
    //     },
    //     {
    //       title: "Contact us",
    //       href: "/contact",
    //     },
    //   ],
    // },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b bg-white">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Check out now
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* FOR AN IAMGE (if used in future) 
        
        <div className="w-full flex justify-center lg:w-auto lg:justify-center">
            <img
                src="/your-image-path.png"
                alt="Logo"
                className="w-full max-w-xs object-contain lg:w-auto lg:max-w-none"
            />
        </div>
        
        */}
        {/* <div className="flex lg:justify-center">
          <p className="font-semibold">Student Research Center</p>
          {/* <p className="font-semibold">SRC</p> 
        </div> */}
        {/* <div className="w-full flex justify-center lg:w-auto lg:justify-center">
          <p className="font-semibold text-center lg:text-left">
            Student Research Center
          </p>
        </div> */}
        <div className="w-full flex justify-center lg:w-auto lg:justify-center">
          <p className="font-semibold whitespace-nowrap text-center lg:text-left ml-4">
            Student Research Center
          </p>
        </div>

        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline">
            All Events
          </Button>
          <Button variant="ghost" className="hidden md:inline">
            Contact Us
          </Button>
          <div className="border-r hidden md:inline"></div>
          {/* <Button variant="outline">Contact Us</Button> */}
          <Button className="hidden md:flex">Register Now</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-14 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
