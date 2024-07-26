import {
  faGift,
  faStar,
  faHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const navItems = ["Apparels", "shoes", "equipment", "gift"];
const navIcons = [faGift, faStar, faHeart, faTag];
const navbar = [
  {
    heading: "Account",
    items: ["Account details", "Orders", "Returns and Exhanges"],
    spanLength: "1",
  },
  {
    heading: "The Company",
    items: ["About us", "Careers", "Contact"],
    spanLength: "1",
  },
];

const bootData = [
  {
    image: "/images/Boots05.png",
    isMarkedDown: true,
    title: "Hargrave ankle boot",
    brand: "Superbalist",
    price: "500",
    isLowStock: false,
  },
  {
    image: "/images/Boots03.png",
    isMarkedDown: false,
    title: "Cameron Leather",
    brand: "Superbalist",
    price: "539",
    isLowStock: true,
  },
  {
    image: "/images/Boots01.png",
    isMarkedDown: true,
    title: "Grayson Brogue",
    brand: "Superbalist",
    price: "420",
    isLowStock: true,
  },
  {
    image: "/images/Boots04.png",
    isMarkedDown: true,
    title: "Orca",
    brand: "Jack and Jones",
    price: "500",
    isLowStock: true,
  },
  {
    image: "/images/Boots02.png",
    isMarkedDown: false,
    title: "Jean Hiker Boot",
    brand: "Superbalist",
    price: "600",
    isLowStock: false,
  },
];

export { navItems, navIcons, bootData, navbar };

//Create mock db with products?
//create data object with product info
