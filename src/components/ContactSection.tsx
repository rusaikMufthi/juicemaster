import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title font-display">
          Find <span className="gradient-text">Us</span>
        </h2>
        <p className="section-subtitle">We'd love to see you!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-sans">Our Location</h3>
                <p className="text-muted-foreground text-sm">
                  53 W.A. Silva Mawatha, Colombo 00600, Sri Lanka
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-sans">Call Us</h3>
                <a href="tel:+94703443465" className="text-primary font-medium hover:underline">
                  +94 70 344 3465
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-sans">Opening Hours</h3>
                <p className="text-muted-foreground text-sm">7:00 AM – 11:00 PM (Open Daily)</p>
                <p className="text-muted-foreground text-sm mt-1">Dine-in & Takeaway</p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:bg-primary/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold font-sans">Follow us on Facebook</h3>
                <p className="text-muted-foreground text-sm">Stay updated with our latest offers</p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8612!3d6.8975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnNTEuMCJOIDc5wrA1MScxMC4zIkU!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Juice Master LK Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
