import { useState } from "react";

import mangoJuice from "@/assets/Mango Juice.png";
import papayaJuice from "@/assets/Papaya Juice.png";
import woodappleJuice from "@/assets/Wood Apple Juice.png";
import appleJuice from "@/assets/Apple Juice.png";
import orangeJuice from "@/assets/Orange Juice.png";
import bananaspecialShake from "@/assets/Banana Special Shake.png";
import orangewithcarrotJuice from "@/assets/Orange With Carrot Juice.png";
import watermelonJuice from "@/assets/Water Melon Juice.png";
import watermelonlimeJuice from "@/assets/Watermelon Lime.png";
import watermelonpapayaJuice from "@/assets/Watermelon Papaya Juice.png";
import pineappleJuice from "@/assets/Pineapple Juice.png";
import avocadowithIcecream from "@/assets/Avocado With Ice Cream.png";
import avocadoJuice from "@/assets/Avocado Juice.png";
import pomegranateJuice from "@/assets/Pomegranate Juice.png";
import passionfruitJuice from "@/assets/Passion Fruit Juice.png";
import milkwithDates from "@/assets/Milk With Dates.png";
import guavaJuice from "@/assets/Guava Juice.png";
import limeJuice from "@/assets/Lime Juice.png";
import pomegranategingerJuice from "@/assets/Pomegranate Ginger Juice.png";
import beetrootgingerJuice from "@/assets/Beetroot Ginger Juice.png";
import abcJuice from "@/assets/ABC Juice (Apple, Beetroot, Carrot).png";
import mangopineappleJuice from "@/assets/Mango Pineapple Juice.png";
import watermelonmintJuice from "@/assets/Watermelon Mint Juice.png";
import watermeloncucumberJuice from "@/assets/Water Melon Cucumber Juice.png";
import applecarrotJuice from "@/assets/Apple Carrot Juice.png";
import grapelimeJuice from "@/assets/Grape Lime Juice.png";
import hugococktailJuice from "@/assets/Hugo Cocktail.png";
import mangococonutJuice from "@/assets/Mango Coconut Juice.png";
import carrotorrangeJuice from "@/assets/Carrot Orange Juice.png";
import pearlimeJuice from "@/assets/Pear Lime Juice.png";
import kiwipineappleJuice from "@/assets/Kiwi Pineapple Juice.png";
import mangoorrangeJuice from "@/assets/Mango Orange Juice.png";
import cantaloupepineappleJuice from "@/assets/Cantaloupe Pineapple Juice.png";
import masterspecialJuice from "@/assets/Master Special Juice.png";
import cucumberJuice from "@/assets/Cucumber Juice.png";
import mandarinJuice from "@/assets/Mandarin Juice.png";
import nescafe from "@/assets/Nescafe.png";
import coffee from "@/assets/Coffee.png";
import hotMilo from "@/assets/Hot Milo.png";
import milkTea from "@/assets/Milk Tea.png";
import masalaChai from "@/assets/Masala Chai.png";
import pittuVelari from "@/assets/Pittu Velari.png";
import limeplainTea from "@/assets/Lime Plain Tea.png";
import strawberryMilkshake  from "@/assets/Strawberry Milkshake.png";
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
import espresso from "@/assets/Espresso.png";
import doubleEspresso from "@/assets/Double Espresso.png";
import americano from "@/assets/Americano.png";
import icedAmericano from "@/assets/Iced Americano.png";
import cappuccino from "@/assets/Cappuccino.png";
import icedCappuccino from "@/assets/Iced Cappuccino.png";
import caffeLatte from "@/assets/Caffe Latte.png";
import mocha from "@/assets/Mocha.png";
import icedMocha from "@/assets/Iced Mocha.png";
import chocolateCoffee from "@/assets/Chocolate Coffee.png";
import crescentchickenDrummers from "@/assets/Crescent Chicken Drummers.png";
import crescentfishCutlets from "@/assets/Crescent Fish Cutlets.png";
import crescentfishFingers from "@/assets/Crescent Fish Fingers.png";
import samosa from "@/assets/Samosa.png";
import chickenPetties from "@/assets/Chicken Petties.png";
import cheesewithchickenRolls from "@/assets/Cheese with Chicken Rolls.png";
import vegRolls from "@/assets/Veg Rolls.png";
import cheesevegRolls from "@/assets/Cheese Veg Rolls.png";
import juicemasterchikenbunwithWattermelon from "@/assets/Juice Master Chiken Bun With Wattermelon.png";
import breadSet from "@/assets/Bread Set.png";
import fruitSalad from "@/assets/Fruit Salad.png";



type Category = "all" | "Fruit Juices" | "Hot Beverages" | "Milkshakes" | "Lassi" | "Mojitos" | "Juice Master Specials" | "Coffee" | "Savory Items" | "Breakfast" | "Salad";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: "Fruit Juices" | "Hot Beverages" | "Milkshakes" | "Lassi" | "Mojitos" | "Juice Master Specials" | "Coffee" | "Savory Items" | "Breakfast" | "Salad";
}

const menuItems: MenuItem[] = [
  { name: "Mango Juice", price: "LKR 450", image: mangoJuice, category: "Fruit Juices" },
  { name: "Papaya Juice", price: "LKR 450", image: papayaJuice, category: "Fruit Juices" },
  { name: "Wood Apple Juice", price: "LKR 450", image: woodappleJuice, category: "Fruit Juices" },
  { name: "Apple Juice", price: "LKR 450", image: appleJuice, category: "Fruit Juices" },
  { name: "Orange Juice", price: "LKR 450", image: orangeJuice, category: "Fruit Juices" },
  { name: "Banana Special Shake", price: "LKR 890", image: bananaspecialShake, category: "Milkshakes" },
  { name: "Orange With Carrot Juice", price: "LKR 500", image: orangewithcarrotJuice, category: "Fruit Juices" },
  { name: "Water Melon Juice", price: "LKR 400", image: watermelonJuice, category: "Fruit Juices" },
  { name: "Watermelon Lime Juice", price: "LKR 600", image: watermelonlimeJuice, category: "Fruit Juices" },
  { name: "Watermelon Papaya Juice", price: "LKR 600", image: watermelonpapayaJuice, category: "Fruit Juices" },
  { name: "Pineapple Juice", price: "LKR 450", image: pineappleJuice, category: "Fruit Juices" },
  { name: "Avocado With Ice Cream", price: "LKR 450", image: avocadowithIcecream, category: "Juice Master Specials" },
  { name: "Avocado Juice", price: "LKR 450", image: avocadoJuice, category: "Fruit Juices" },
  { name: "Pomegranate Juice", price: "LKR 500", image: pomegranateJuice, category: "Fruit Juices" },
  { name: "Passion Fruit Juice", price: "LKR 350", image: passionfruitJuice, category: "Fruit Juices" },
  { name: "Milk With Dates", price: "LKR 590", image: milkwithDates, category: "Hot Beverages" },
  { name: "Guava Juice", price: "LKR 400", image: guavaJuice, category: "Fruit Juices" },
  { name: "Lime Juice", price: "LKR 250", image: limeJuice, category: "Fruit Juices" },
  { name: "Pomegranate Ginger Juice", price: "LKR 700", image: pomegranategingerJuice, category: "Fruit Juices" },
  { name: "Beetroot Ginger Juice", price: "LKR 650", image: beetrootgingerJuice, category: "Fruit Juices" },
  { name: "ABC Juice (Apple, Beetroot, Carrot)", price: "LKR 700", image: abcJuice, category: "Fruit Juices" },
  { name: "Mango Pineapple Juice", price: "LKR 600", image: mangopineappleJuice, category: "Fruit Juices" },
  { name: "Watermelon Mint Juice", price: "LKR 600", image: watermelonmintJuice, category: "Fruit Juices" },
  { name: "Water Melon Cucumber Juice", price: "LKR 650", image: watermeloncucumberJuice, category: "Fruit Juices" },
  { name: "Apple Carrot Juice", price: "LKR 650", image: applecarrotJuice, category: "Fruit Juices" },
  { name: "Grape Lime Juice", price: "LKR 650", image: grapelimeJuice, category: "Fruit Juices" },
  { name: "Hugo Cocktail", price: "LKR 650", image: hugococktailJuice, category: "Mojitos" },
  { name: "Mango Coconut Juice", price: "LKR 650", image: mangococonutJuice, category: "Fruit Juices" },
  { name: "Carrot Orange Juice", price: "LKR 700", image: carrotorrangeJuice, category: "Fruit Juices" },
  { name: "Pear Lime Juice", price: "LKR 550", image: pearlimeJuice, category: "Fruit Juices" },
  { name: "Kiwi Pineapple Juice", price: "LKR 650", image: kiwipineappleJuice, category: "Fruit Juices" },
  { name: "Mango Orange Juice", price: "LKR 600", image: mangoorrangeJuice, category: "Fruit Juices" },
  { name: "Cantaloupe Pineapple Juice", price: "LKR 650", image: cantaloupepineappleJuice, category: "Fruit Juices" },
  { name: "Master Special Juice", price: "LKR 500", image: masterspecialJuice, category: "Juice Master Specials" },
  { name: "Cucumber Juice", price: "LKR 400", image: cucumberJuice, category: "Fruit Juices" },
  { name: "Mandarin Juice", price: "LKR 350", image: mandarinJuice, category: "Fruit Juices" },
  { name: "Nescafe", price: "LKR 150", image: nescafe, category: "Hot Beverages" },
  { name: "Coffee", price: "LKR 100", image: coffee, category: "Hot Beverages" },
  { name: "Hot Milo", price: "LKR 150", image: hotMilo, category: "Hot Beverages" },
  { name: "Milk Tea", price: "LKR 150", image: milkTea, category: "Hot Beverages" },
  { name: "Masala Chai", price: "LKR 250", image: masalaChai, category: "Hot Beverages" },
  { name: "Pittu Velari", price: "LKR 400", image: pittuVelari, category: "Hot Beverages" },
  { name: "Lime Plain Tea", price: "LKR 50", image: limeplainTea, category: "Hot Beverages" },
  { name: "Strawberry Milkshake", price: "LKR 450", image: strawberryMilkshake, category: "Milkshakes" },
  { name: "Vanilla Milkshake", price: "LKR 400", image: vanillaMilkshake, category: "Milkshakes" },
  { name: "Chocolate Milkshake", price: "LKR 500", image: chocolateMilkshake, category: "Milkshakes" },
  { name: "Mango Milkshake", price: "LKR 450", image: mangoMilkshake, category: "Milkshakes" },
  { name: "Sweet Lassi", price: "LKR 450", image: sweetLassi, category: "Lassi" },
  { name: "Mango Lassi", price: "LKR 500", image: mangoLassi, category: "Lassi" },
  { name: "Strawberry Lassi", price: "LKR 500", image: strawberryLassi, category: "Lassi" },
  { name: "Chocolate Lassi", price: "LKR 550", image: chocolateLassi, category: "Lassi" },
  { name: "Strawberry Mojito", price: "LKR 690", image: strawberryMojito, category: "Mojitos" },
  { name: "Passion Fruit Mojito", price: "LKR 590", image: passionfruitMojito, category: "Mojitos" },
  { name: "Pineapple Mojito", price: "LKR 690", image: pineappleMojito, category: "Mojitos" },
  { name: "Watermelon Mojito", price: "LKR 590", image: watermelonMojito, category: "Mojitos" },
  { name: "Blueberry Mojito", price: "LKR 690", image: blueberryMojito, category: "Mojitos" },
  { name: "Green Apple Mojito", price: "LKR 690", image: greenappleMojito, category: "Mojitos" },
  { name: "Orange Mojito", price: "LKR 690", image: orangeMojito, category: "Mojitos" },
  { name: "Banana Mojito", price: "LKR 590", image: bananaMojito, category: "Mojitos" },
  { name: "Mango Mojito", price: "LKR 590", image: mangoMojito, category: "Mojitos" },
  { name: "Milo Dinosaur Special", price: "LKR 890", image: milodinosaurSpecial, category: "Juice Master Specials" },
  { name: "Avocado Special", price: "LKR 790", image: avocadoSpecial, category: "Juice Master Specials" },
  { name: "Espresso", price: "LKR 350", image: espresso, category: "Coffee" },
  { name: "Double Espresso", price: "LKR 450", image: doubleEspresso, category: "Coffee" },
  { name: "Americano", price: "LKR 400", image: americano, category: "Coffee" },
  { name: "Iced Americano", price: "LKR 450", image: icedAmericano, category: "Coffee" },
  { name: "Cappuccino", price: "LKR 500", image: cappuccino, category: "Coffee" },
  { name: "Iced Cappuccino", price: "LKR 520", image: icedCappuccino, category: "Coffee" },
  { name: "Caffe Latte", price: "LKR 500", image: caffeLatte, category: "Coffee" },
  { name: "Mocha", price: "LKR 550", image: mocha, category: "Coffee" },
  { name: "Iced Mocha", price: "LKR 580", image: icedMocha, category: "Coffee" },
  { name: "Chocolate Coffee", price: "LKR 550", image: chocolateCoffee, category: "Coffee" },
  { name: "Crescent Chicken Drummers", price: "LKR 550", image: crescentchickenDrummers, category: "Savory Items" },
  { name: "Crescent Fish Cutlets", price: "LKR 300", image: crescentfishCutlets, category: "Savory Items" },
  { name: "Crescent Fish Fingers", price: "LKR 500", image: crescentfishFingers, category: "Savory Items" },
  { name: "Samosa", price: "LKR 100", image: samosa, category: "Savory Items" },
  { name: "Chicken Petties", price: "LKR 120", image: chickenPetties, category: "Savory Items" },
  { name: "Cheese with Chicken Rolls", price: "LKR 200", image: cheesewithchickenRolls, category: "Savory Items" },
  { name: "Veg Rolls", price: "LKR 100", image: vegRolls, category: "Savory Items" },
  { name: "Cheese Veg Rolls", price: "LKR 180", image: cheesevegRolls, category: "Savory Items" },
  { name: "Juice Master Chicken Bun With Watermelon", price: "LKR 770", image: juicemasterchikenbunwithWattermelon, category: "Savory Items" },
  { name: "Bread Set", price: "LKR 699", image: breadSet, category: "Breakfast" },
  { name: "Fruit Salad", price: "LKR 350", image: fruitSalad, category: "Salad" },


];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Fruit Juices", value: "Fruit Juices" },
  { label: "Hot Beverages", value: "Hot Beverages" },
  { label: "Milkshakes", value: "Milkshakes" },
  { label: "Lassi", value: "Lassi" },
  { label: "Mojitos", value: "Mojitos" },
  { label: "Juice Master Specials", value: "Juice Master Specials" },
  { label: "Coffee", value: "Coffee" },
  { label: "Savory Items", value: "Savory Items" },
  { label: "Breakfast", value: "Breakfast" },
  { label: "Salad", value: "Salad" },
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
