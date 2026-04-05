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
            Welcome to our fresh and vibrant fruit juice shop, where quality meets taste. 😋 
            We serve a wide variety of freshly prepared fruit juices made from carefully selected 
            fruits to give you the perfect refreshment any time of the day. Along with our 
            signature juices, we offer delicious hot and cold coffee, plus freshly made fried 
            snacks like samosas and rolls. Enjoy our fully air-conditioned, comfortable dining 
            space with tables and chairs, perfect for relaxing with friends and family. With 
            friendly staff and excellent service, we are committed to giving every customer a 
            refreshing and satisfying experience.
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
