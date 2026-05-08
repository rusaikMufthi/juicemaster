import { Leaf, Coffee, Wind, Users } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Fruits", desc: "Carefully selected quality fruits daily" },
  { icon: Coffee, title: "Hot & Cold Coffee", desc: "Signature coffee blends to enjoy" },
  { icon: Wind, title: "Air Conditioned", desc: "Cool and comfortable dining space" },
  { icon: Users, title: "Family Friendly", desc: "Perfect for friends and family" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title font-display">
          About <span className="gradient-text">Juice Master LK</span>
        </h2>
        <p className="section-subtitle">Refreshing you since day one</p>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-foreground/80 leading-relaxed text-lg">
            Welcome to our fresh and vibrant juice shop, where quality meets taste. 😋 
            Enjoy freshly prepared fruit juices, hot and cold coffee, and tasty snacks like samosas and rolls.
            Relax in our fully air-conditioned dining space with friends and family while enjoying friendly service and a refreshing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card p-6 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-sans">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
