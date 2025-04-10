"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-b from-blue-100 to-black bg-clip-text text-transparent"
        >
          HSaini
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              {/* <ModeToggle /> */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-t z-50">
                <nav className="container px-4 py-4">
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-muted-foreground hover:text-foreground transition-colors",
                            activeSection === link.href.substring(1) &&
                              "text-primary font-semibold"
                          )}
                          // className={cn(
                          //   "text-muted-foreground hover:text-foreground transition-colors",
                          //   pathname === link.href &&
                          //     "text-primary font-semibold"
                          // )}
                          onClick={closeMenu}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300",
                        activeSection === link.href.substring(1) &&
                          "text-foreground font-semibold after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-primary after:transition-all after:duration-300"
                      )}
                      // className={cn(
                      //   "relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300",
                      //   pathname === link.href &&
                      //     "text-foreground font-semibold after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-primary after:transition-all after:duration-300"
                      // )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* <ModeToggle /> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
