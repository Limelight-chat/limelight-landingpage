"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar5 = () => {
  const pathname = usePathname();

  // Dynamically change the label based on route
  const isConsumerPage = pathname.startsWith("/consumer");
  const consumerLabel = isConsumerPage ? "Business" : "Consumer";
  const consumerHref = isConsumerPage ? "/" : "/consumer";

  return (
    <section className="py-4 relative z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav className="flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={Logo}
              className="max-h-9"
              alt="Navbar Logo"
              width={14}
              height={14}
            />
            <span className="text-lg font-semibold tracking-tighter m-1">
              Limelight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu
            className="hidden lg:block absolute left-1/2 -translate-x-1/2"
            suppressHydrationWarning
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={consumerHref}
                  className={navigationMenuTriggerStyle()}
                >
                  {consumerLabel}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/pricing"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blog"
                  className={navigationMenuTriggerStyle()}
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/docs/getting-started"
                  className={navigationMenuTriggerStyle()}
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="secondary">Log In</Button>
            <Button variant={"outline"}>Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-1">
                    <Image
                      src={Logo}
                      className="max-h-9"
                      alt="Navbar Logo"
                      width={14}
                      height={14}
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Limelight
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {/* Mobile version: also dynamic */}
                  <a href={consumerHref} className="font-medium">
                    {consumerLabel}
                  </a>

                  <a href="/pricing" className="font-medium">
                    Pricing
                  </a>
                  <a href="/blog" className="font-medium">
                    Blog
                  </a>
                  <a href="/contact" className="font-medium">
                    Contact Us
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Log In</Button>
                  <Button>Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
