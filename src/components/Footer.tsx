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
                  <path d="M12.5 2v10.02a4.5 4.5 0 1 1-2.5-4V7.5a7 7 0 1 0 2.5-5.5z" />
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
                  <path d="M20.52 3.48A11.9 11.9 0 1 0 21 12.08L21 21l-2.99-.76A11.9 11.9 0 0 0 20.52 3.48zM12 20.5a8.3 8.3 0 0 1-4.5-1.3L6 18l1.1-1.6A8.3 8.3 0 1 1 12 20.5z" />
                  <path d="M17.6 14.2c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-1 1.2-.2.2-.38.25-.68.1-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.37-.05-.52-.05-.15-.68-1.6-.93-2.2-.24-.57-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01s-.5.07-.76.36c-.26.29-1 1-1 2.45s1.03 2.86 1.17 3.06c.13.2 2.02 3.08 4.9 4.3 2.18 1 2.98 1.06 3.24 1.05.26-.01.84-.34.96-.67.12-.33.12-.61.08-.67-.04-.06-.14-.1-.3-.15z" />
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
