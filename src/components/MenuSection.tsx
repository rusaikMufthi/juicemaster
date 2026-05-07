import { useState } from "react";

import mangoJuice from "@/assets/Mango Juice.png";
import papayaJuice from "@/assets/Papaya Juice.png";
import woodappleJuice from "@/assets/Wood Apple Juice.png";
import orangeJuice from "@/assets/Orange Juice.png";
import pineappleJuice from "@/assets/Pineapple Juice.png";
import avocadoJuice from "@/assets/Avocado Juice.png";
import pomegranateJuice from "@/assets/Pomegranate Juice.png";
import pomegranategingerJuice from "@/assets/Pomegranate Ginger Juice.png";
import passionfruitJuice from "@/assets/Passion Fruit Juice.png";
import guavaJuice from "@/assets/Guava Juice.png";
import limeJuice from "@/assets/Lime Juice.png";
import beetrootgingerJuice from "@/assets/Beetroot Ginger Juice.png";
import abcJuice from "@/assets/ABC Juice (Apple, Beetroot, Carrot).png";
import mangopneappleJuice from "@/assets/Mango Pineapple Juice.png";
import watermelonJuice from "@/assets/Water Melon Juice.png";
import watermeloncucumberJuice from "@/assets/Water Melon Cucumber Juice.png";
import applecarrotJuice from "@/assets/Apple Carrot Juice.png";
import grapelimeJuice from "@/assets/Grape Lime Juice.png";
import hugoCocktail from "@/assets/Hugo Cocktail.png";
import mangococonutJuice from "@/assets/Mango Coconut Juice.png";
import carrotorangeJuice from "@/assets/Carrot Orange Juice.png";
import pearlimeJuice from "@/assets/Pear Lime Juice.png";
import kiwipineappleJuice from "@/assets/Kiwi Pineapple Juice.png";
import mangoorangeJuice from "@/assets/Mango Orange Juice.png";
import masterspecialJuice from "@/assets/Master Special Juice.png";
import cucumberJuice from "@/assets/Cucumber Juice.png";
import mandarinJuice from "@/assets/Mandarin Juice.png";
import Nescafe from "@/assets/Nescafe.png";
import Coffee from "@/assets/Coffee.png";
import hotMilo from "@/assets/Hot Milo.png";
import milkTea from "@/assets/Milk Tea.png";
import masalaChai from "@/assets/Masala Chai.png";
import limeplainTea from "@/assets/Lime Plain Tea.png";
import strawberryMilkshake from "@/assets/Strawberry Milkshake.png";
import vanillaMilkshake from "@/assets/Vanilla Milkshake.png";
import chocolateMilkshake from "@/assets/Chocolate Milkshake.png";
import mangoMilkshake from "@/assets/Mango Milkshake.png";
import sweetLassi from "@/assets/Sweet Lassi.png";
import mangoLassi from "@/assets/Mango Lassi.png";
import strawberryLassi from "@/assets/Strawberry Lassi.png";
import chocolateLassi from "@/assets/Chocolate Lassi.png";
import strawberryMojito from "@/assets/Strawberry Mojito.png";
import passionfruitMojito from "@/assets/Passion Fruit Mojito.png";
import pineappleMojito from "@/assets/Pineapple Mojito.png";
import watermelonMojito from "@/assets/Watermelon Mojito.png";
import blueberryMojito from "@/assets/Blueberry Mojito.png";
import greenappleMojito from "@/assets/Green Apple Mojito.png";
import orangeMojito from "@/assets/Orange Mojito.png";
import bananaMojito from "@/assets/Banana Mojito.png";
import mangoMojito from "@/assets/Mango Mojito.png";
import milodinosaurSpecial from "@/assets/Milo Dinosaur Special.png";
import avocadoSpecial from "@/assets/Avocado Special.png";
import cantaloupepineappleJuice from "@/assets/Cantaloupe Pineapple Juice.png";
import Espresso from "@/assets/Espresso.png";
import doubleEspresso from "@/assets/Double Espresso.png";
import Americano from "@/assets/Americano.png";
import icedAmericano from "@/assets/Iced Americano.png";
import Cappuccino from "@/assets/Cappuccino.png";
import icedCappuccino from "@/assets/Iced Cappuccino.png";
import caffeLatte from "@/assets/Caffe Latte.png";
import icedLatte from "@/assets/Iced Latte.png";
import Mocha from "@/assets/Mocha.png";
import icedMocha from "@/assets/Iced Mocha.png";
import chocolateCoffee from "@/assets/Chocolate Coffee.png";
import crescentChickenDrummers from "@/assets/Crescent Chicken Drummers.png";
import crescentFishCutlets from "@/assets/Crescent Fish Cutlets.png";
import crescentFishFingers from "@/assets/Crescent Fish Fingers.png";
import Samosa from "@/assets/Samosa.png";
import ChickenPetties from "@/assets/Chicken Petties.png";
import CheesewithChickenRolls from "@/assets/Cheese with Chicken Rolls.png";
import VegRolls from "@/assets/Veg Rolls.png";
import CheeseVegRolls from "@/assets/Veg Rolls.png";

type Category = "all" | "Fruit Juices" | "Hot Beverages" | "Milkshakes" | "Lassi" | "Mojitos" | "Juice Master Specials" | "Beverages" | "Short Eats";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: "Fruit Juices" | "Hot Beverages" | "Milkshakes" | "Lassi" | "Mojitos" | "Juice Master Specials" | "Beverages" |  "Short Eats";
}

const menuItems: MenuItem[] = [
  { name: "Mango Juice", price: "LKR 400", image: mangoJuice, category: "Fruit Juices" },
  { name: "Papaya Juice", price: "LKR 400", image: papayaJuice, category: "Fruit Juices" },
  { name: "Wood Apple Juice", price: "LKR 450", image: woodappleJuice, category: "Fruit Juices" },
  { name: "Orange Juice", price: "LKR 400", image: orangeJuice, category: "Fruit Juices" },
  { name: "Pineapple Juice", price: "LKR 400", image: pineappleJuice, category: "Fruit Juices" },
  { name: "Avocado Juice", price: "LKR 450", image: avocadoJuice, category: "Fruit Juices" },
  { name: "Pomegranate Juice", price: "LKR 450", image: pomegranateJuice, category: "Fruit Juices" },
  { name: "Pomegranate Ginger Juice", price: "LKR 700", image: pomegranategingerJuice, category: "Fruit Juices" },
  { name: "Passion Fruit Juice", price: "LKR 350", image: passionfruitJuice, category: "Fruit Juices" },
  { name: "Guava Juice", price: "LKR 400", image: guavaJuice, category: "Fruit Juices" },
  { name: "Lime Juice", price: "LKR 250", image: limeJuice, category: "Fruit Juices" },
  { name: "Beetroot Ginger Juice", price: "LKR 650", image: beetrootgingerJuice, category: "Fruit Juices" },
  { name: "ABC Juice (Apple, Beetroot, Carrot)", price: "LKR 700", image: abcJuice, category: "Fruit Juices" },
  { name: "Mango Pineapple Juice", price: "LKR 600", image: mangopneappleJuice, category: "Fruit Juices" },
  { name: "Water Melon Mint Juice", price: "LKR 600", image: watermelonJuice, category: "Fruit Juices" },
  { name: "Water Melon Cucumber Juice", price: "LKR 650", image: watermeloncucumberJuice, category: "Fruit Juices" },
  { name: "Apple Carrot Juice", price: "LKR 650", image: applecarrotJuice, category: "Fruit Juices" },
  { name: "Grape Lime Juice", price: "LKR 650", image: grapelimeJuice, category: "Fruit Juices" },
  { name: "Hugo Cocktail", price: "LKR 650", image: hugoCocktail, category: "Fruit Juices" },
  { name: "Mango Coconut Juice", price: "LKR 650", image: mangococonutJuice, category: "Fruit Juices" },
  { name: "Carrot Orange Juice", price: "LKR 700", image: carrotorangeJuice, category: "Fruit Juices" },
  { name: "Pear Lime Juice", price: "LKR 550", image: pearlimeJuice, category: "Fruit Juices" },
  { name: "Kiwi Pineapple Juice", price: "LKR 650", image: kiwipineappleJuice, category: "Fruit Juices" },
  { name: "Mango Orange Juice", price: "LKR 600", image: mangoorangeJuice, category: "Fruit Juices" },
  { name: "Cantaloupe Pineapple Juice", price: "LKR 650", image: cantaloupepineappleJuice, category: "Fruit Juices" },
  { name: "Cucumber Juice", price: "LKR 400", image: cucumberJuice, category: "Fruit Juices" },
  { name: "Mandarin Juice", price: "LKR 350", image: mandarinJuice, category: "Fruit Juices" },
  { name: "Nescafe", price: "LKR 150", image: Nescafe, category: "Hot Beverages" },
  { name: "Coffee", price: "LKR 100", image: Coffee, category: "Hot Beverages" },
  { name: "Hot Milo", price: "LKR 150", image: hotMilo, category: "Hot Beverages" },
  { name: "Milk Tea", price: "LKR 150", image: milkTea, category: "Hot Beverages" },
  { name: "Masala Chai", price: "LKR 250", image: masalaChai, category: "Hot Beverages" },
  { name: "Lime Plain Tea", price: "LKR 50", image: limeplainTea, category: "Hot Beverages" },
  { name: "Strawberry Milkshake", price: "LKR 600", image: strawberryMilkshake, category: "Milkshakes" },
  { name: "Vanilla Milkshake", price: "LKR 535", image: vanillaMilkshake, category: "Milkshakes" },
  { name: "Chocolate Milkshake", price: "LKR 665", image: chocolateMilkshake, category: "Milkshakes" },
  { name: "Mango Milkshake", price: "LKR 600", image: mangoMilkshake, category: "Milkshakes" },
  { name: "Sweet Lassi", price: "LKR 600", image: sweetLassi, category: "Lassi" },
  { name: "Mango Lassi", price: "LKR 665", image: mangoLassi, category: "Lassi" },
  { name: "Strawberry Lassi", price: "LKR 665", image: strawberryLassi, category: "Lassi" },
  { name: "Chocolate Lassi", price: "LKR 735", image: chocolateLassi, category: "Lassi" },
  { name: "Strawberry Mojito", price: "LKR 920", image: strawberryMojito, category: "Mojitos" },
  { name: "Passion Fruit Mojito", price: "LKR 785", image: passionfruitMojito, category: "Mojitos" },
  { name: "Pineapple Mojito", price: "LKR 920", image: pineappleMojito, category: "Mojitos" },
  { name: "Watermelon Mojito", price: "LKR 785", image: watermelonMojito, category: "Mojitos" },
  { name: "Blueberry Mojito", price: "LKR 920", image: blueberryMojito, category: "Mojitos" },
  { name: "Green Apple Mojito", price: "LKR 920", image: greenappleMojito, category: "Mojitos" },
  { name: "Orange Mojito", price: "LKR 920", image: orangeMojito, category: "Mojitos" },
  { name: "Banana Mojito", price: "LKR 785", image: bananaMojito, category: "Mojitos" },
  { name: "Mango Mojito", price: "LKR 785", image: mangoMojito, category: "Mojitos" },
  { name: "Milo Dinosaur Special", price: "LKR 1185", image: milodinosaurSpecial, category: "Juice Master Specials" },
  { name: "Avocado Special", price: "LKR 1100", image: avocadoSpecial, category: "Juice Master Specials" },
  { name: "Master Special Juice", price: "LKR 500", image: masterspecialJuice, category: "Juice Master Specials" },
  { name: "Espresso", price: "LKR 350", image: Espresso, category: "Beverages" },
  { name: "Double Espresso", price: "LKR 450", image: doubleEspresso, category: "Beverages" },
  { name: "Americano", price: "LKR 400", image: Americano, category: "Beverages" },
  { name: "Iced Americano", price: "LKR 450", image: icedAmericano, category: "Beverages" },
  { name: "Cappuccino", price: "LKR 500", image: Cappuccino, category: "Beverages" },
  { name: "Iced Cappuccino", price: "LKR 520", image: icedCappuccino, category: "Beverages" },
  { name: "Caffe Latte", price: "LKR 500", image: caffeLatte, category: "Beverages" },
  { name: "Iced Latte", price: "LKR 520", image: icedLatte, category: "Beverages" },
  { name: "Mocha", price: "LKR 550", image: Mocha, category: "Beverages" },
  { name: "Iced Mocha", price: "LKR 580", image: icedMocha, category: "Beverages" },
  { name: "Chocolate Coffee", price: "LKR 550", image: chocolateCoffee, category: "Beverages" },
  { name: "Crescent Chicken Drummers (3 Pieces)", price: "LKR 730", image: crescentChickenDrummers, category: "Short Eats" },
  { name: "Crescent Fish Cutlets (3 Pieces)", price: "LKR 400", image: crescentFishCutlets, category: "Short Eats" },
  { name: "Crescent Fish Fingers (3 Pieces)", price: "LKR 665", image: crescentFishFingers, category: "Short Eats" },
  { name: "Samosa", price: "LKR 115", image: Samosa, category: "Short Eats" },
  { name: "Chicken Petties", price: "LKR 160", image: ChickenPetties, category: "Short Eats" },
  { name: "Cheese with Chicken Rolls", price: "LKR 265", image: CheesewithChickenRolls, category: "Short Eats" },
  { name: "Veg Rolls", price: "LKR 115", image: VegRolls, category: "Short Eats" },
  { name: "Cheese Veg Rolls", price: "LKR 240", image: CheeseVegRolls, category: "Short Eats" },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Fruit Juices", value: "Fruit Juices" },
  { label: "Hot Beverages", value: "Hot Beverages" },
  { label: "Beverages", value: "Beverages" },
  { label: "Milkshakes", value: "Milkshakes" },
  { label: "Lassi", value: "Lassi" },
  { label: "Mojitos", value: "Mojitos" },
  { label: "Juice Master Specials", value: "Juice Master Specials" },
  { label: "Short Eats", value: "Short Eats" },
];

const MenuSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title font-display">
          Our <span className="gradient-text">Menu</span>
        </h2>
        <p className="section-subtitle">Made fresh, served with love</p>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                active === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground/70 hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div key={item.name} className="glass-card overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold text-foreground font-sans">{item.name}</h3>
                <span className="font-bold text-primary text-sm">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          🛵 Order via <strong>PickMe</strong> — search for "Juice Master LK" on the app!
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
