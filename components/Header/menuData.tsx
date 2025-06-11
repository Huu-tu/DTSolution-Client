import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "TRANG CHỦ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "DỊCH VỤ",
    path: "/service",
    newTab: false,
  },
  {
    id: 33,
    title: "BLOG",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "ỨNG DỤNG",
    path: "/realuse",
    newTab: false,
  },
  {
    id: 4,
    title: "XEM THÊM",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "VỀ CHÚNG TÔI",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "LIÊN HỆ",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
