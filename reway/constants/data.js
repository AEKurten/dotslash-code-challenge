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
    id: 0,
  },
  {
    image: "/images/Boots03.png",
    isMarkedDown: false,
    title: "Cameron Leather",
    brand: "Superbalist",
    price: "539",
    isLowStock: true,
    id: 1,
  },
  {
    image: "/images/Boots01.png",
    isMarkedDown: true,
    title: "Grayson Brogue",
    brand: "Superbalist",
    price: "420",
    isLowStock: true,
    id: 2,
  },
  {
    image: "/images/Boots04.png",
    isMarkedDown: true,
    title: "Orca",
    brand: "Jack and Jones",
    price: "500",
    isLowStock: true,
    id: 3,
  },
  {
    image: "/images/Boots02.png",
    isMarkedDown: false,
    title: "Jean Hiker Boot",
    brand: "Superbalist",
    price: "600",
    isLowStock: false,
    id: 4,
  },
];

const sizes = [5, 6, 7, 8, 9, 10, 11, 12];
const quantity = [1, 2, 3, 4];

export { navItems, navIcons, bootData, navbar, sizes, quantity };
