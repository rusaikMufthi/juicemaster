import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(20_15%_8%)] text-white/80 dark:bg-[hsl(20_12%_6%)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & tagline */}
          <div>
            <img src={logo} alt="Juice Master LK" className="h-14 rounded-lg mb-4" />
            <p className="text-sm text-white/60 leading-relaxed">
              Freshness in every sip. Quality fruits, refreshing juices, and a comfortable space to unwind.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>53 W.A. Silva Mawatha</p>
              <p>Colombo 00600, Sri Lanka</p>
              <a href="tel:+94711228796" className="block hover:text-primary transition-colors">
                +94 71 122 8796
              </a>
              <p>Open Daily: 7:00 AM – 11:00 PM</p>
            </div>

            {/* Social Media Icons */}
            
           <div className="mt-4 flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1EGxcknz41/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@juicemaster00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-white/80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 2v6.02a4.5 4.5 0 1 0 4.5 4.5v2.47a7 7 0 1 1-7-7V2h2.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white/80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94711228796"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-white/80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.07.69 3.98 1.84 5.5L2 22l4.96-1.3A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.59 12.14c-.19.57-1.12 1.38-1.41 1.45-.28.08-.53.11-.86.03-.33-.08-1.24-.49-2.05-.96-.81-.47-1.31-.92-1.62-1.22-.31-.3-.66-.72-.95-1.18-.29-.46-.63-.42-.95-.27-.3.15-1.14.45-1.39.5-.24.05-.44.11-.64-.16-.2-.27-.74-.87-1.13-1.22-.4-.35-.35-.55-.3-.63.05-.08.25-.21.43-.4.18-.18.23-.34.34-.56.1-.22.05-.44-.02-.62-.08-.19-.66-1.59-.9-2.18-.25-.58-.49-.5-.69-.51-.19-.01-.39-.01-.59-.01-.19 0-.5.06-.73.34-.23.28-1.02 1-1.02 2.45 0 1.44 1.02 2.88 1.16 3.08.13.2 2.02 3.2 5.03 4.5.71.3 1.26.49 1.7.63.7.23 1.34.19 1.84.11.57-.08 1.74-.71 1.99-1.41.25-.69.25-1.29.17-1.41-.08-.12-.18-.19-.31-.34z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          © 2026 Juice Master LK. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
