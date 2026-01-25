import Americano from "../assets/photo/Americano.png";
import SpanishLatte from "../assets/photo/SpanishLatte.png";
import ButterScoth from "../assets/photo/Buttterscoth.png";
import ArenLatte from "../assets/photo/ArenLatte.png";
import Chocolate from "../assets/photo/Chocolate.png";
import JapaneseMatcha from "../assets/photo/JapaneseMatcha.png";
import PinkPanther from "../assets/photo/PinkPanther.png";

export const menus = [
  {
    id: 1,
    name: "Americano",
    category: "Coffee",
    description: "Kopi espresso dengan air panas, rasa kuat dan smooth",
    ingredients: ["Espresso", "Air Dingin"],
    calories: 15,
    rating: 5,
    tags: ["Best Seller"],
    price: "Rp.10.000",
    image: Americano,
  },
  {
    id: 2,
    name: "Spanish Latte",
    category: "Coffee",
    description: "Latte gaya Spanyol dengan susu kental manis, creamy dan rich",
    ingredients: ["Espresso", "Susu Segar", "Susu Kental Manis", "Kayu Manis"],
    calories: 240,
    rating: 4.6,
    tags: ["Rich", "Creamy"],
    price: "Rp.10.000",
    image: SpanishLatte,
  },
  {
    id: 3,
    name: "Butter Scoth",
    category: "Coffee",
    description:
      "Kopi dengan rasa butterscotch yang kaya, manis gurih yang seimbang",
    ingredients: ["Espresso", "Susu", "Sirup Butterscotch", "Caramel Drizzle"],
    calories: 220,
    rating: 4.7,
    tags: ["Sweet", "Creamy"],
    price: "Rp.13.000",
    image: ButterScoth,
  },
  {
    id: 4,
    name: "Aren Latte",
    category: "Coffee",
    description:
      "Perpaduan latte dengan gula aren asli, creamy dengan rasa karamel alami",
    ingredients: ["Espresso", "Susu Segar", "Gula Aren", "Vanilla"],
    calories: 180,
    rating: 4.9,
    tags: ["Signature", "Trending"],
    price: "Rp.12.000",
    image: ArenLatte,
  },
  {
    id: 5,
    name: "Chocolate",
    category: "Non-Coffee",
    description: "lorem ipsum",
    ingredients:'',
    calories: 180,
    rating: 4.9,
    tags: ["Signature", "Trending"],
    price: "Rp.15.000",
    image: Chocolate,
  },
  {
    id: 6,
    name: "Japanese Matcha",
    category: "Non-Coffee",
    description: "lorem ipsum",
    ingredients:'',
    calories: 180,
    rating: 4.9,
    tags: ["Signature", "Trending"],
    price: "Rp.15.000",
    image: JapaneseMatcha,
  },
  {
    id: 7,
    name: "Pink Panther",
    category: "Non-Coffee",
    description: "lorem ipsum",
    ingredients:'',
    calories: 180,
    rating: 4.9,
    tags: ["Signature", "Trending"],
    price: "Rp.15.000",
    image: PinkPanther,
  },
];
