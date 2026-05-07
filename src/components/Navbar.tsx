import { useState, useEffect } from "react";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
          : "bg-background/70 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Juice Master LK" className="h-10 md:h-12 rounded-lg" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="relative font-medium text-foreground/80 hover:text-primary transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: dark mode toggle + call now (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Dark mode toggle — always visible */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full border border-border bg-card/80 hover:bg-accent transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-foreground/70" />}
          </button>

          {/* Call Now — desktop only */}
          <a href="tel:+94703443465" className="hidden md:inline-flex btn-primary-juice text-sm">
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-up">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className="font-medium text-lg text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a href="tel:+94703443465" className="btn-primary-juice text-sm">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
