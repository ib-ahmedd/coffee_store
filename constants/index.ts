import { MenuCardProps } from "@types";

export const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Menu", path: "/menu" },
  { title: "Contact", path: "/contact" },
];

export const footerSlidesArray = [
  {
    src: "/images/footer/slide-1-img.jpg",
    alt: "first slide image",
    display: "block",
    delay: "0",
  },
  {
    src: "/images/footer/slide-2-img.jpg",
    alt: "second slide image",
    display: "block",
    delay: "100",
  },
  {
    src: "/images/footer/slide-3-img.jpg",
    alt: "third slide image",
    display: "block",
    delay: "200",
  },
  {
    src: "/images/footer/slide-4-img.jpg",
    alt: "fought slide image",
    display: "hidden",
    delay: "300",
  },
  {
    src: "/images/footer/slide-5-img.jpg",
    alt: "last slide image",
    display: "hidden",
    delay: "400",
  },
];

export const featuredMenuArray = [
  { picNo: "01", price: 3.5, title: "Dark Coffee" },
  { picNo: "02", price: 4.9, title: "Latte Machiatto" },
  { picNo: "03", price: 3.75, title: "Cafe Latte" },
  { picNo: "04", price: 2.9, title: "Cappuccino" },
];

export const reviewSectionArray = [
  { pic: "/images/home/reviews/img-1.jpg", user: "Claudia Taylor" },
  { pic: "/images/home/reviews/img-2.jpg", user: "Winston Oliver" },
];

export const menuPageMenuArray: MenuCardProps[] = [
  {
    picNo: "1",
    title: "Caffè Lattè",
    price: 2.5,
    desc: "Like a traditional Caffè Machiatto",
  },
  {
    picNo: "2",
    title: "Cappuccino",
    price: 3.5,
    desc: "Espresso and a milk foam mixture",
  },
  {
    picNo: "3",
    title: "Double Espresso",
    price: 3.0,
    desc: "A shot of espresso, whipped cream",
  },
  {
    picNo: "4",
    title: "Flat White",
    price: 2.9,
    desc: "Espresso and lightly frosted milk",
  },
  {
    picNo: "5",
    title: "Frappè",
    price: 2.7,
    desc: "Espresso and lightly frosted milk",
  },
  {
    picNo: "6",
    title: "Iced Lattè",
    price: 2.5,
    desc: "Espresso and lightly frosted milk",
  },
  {
    picNo: "7",
    title: "Irish Coffe",
    price: 3.5,
    desc: "Classic coffee with Irish whiskey",
  },
  {
    picNo: "8",
    title: "Lattè Machiatto",
    price: 2.0,
    desc: "Like a traditional caffè latte",
  },
];
