import { MenuType, SosialMediaType } from "../types/data.type";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export const menu: MenuType[] = [
  { href: "/", title: "Beranda" },
  { href: "/structure", title: "Struktur" },
  { href: "/blogs", title: "Blog" },
  { href: "/contact-us", title: "Hubungi Kami" },
];

export const sosialMedia: SosialMediaType[] = [
  {
    href: "https://google.com/",
    icon: <FaFacebookF className="text-base md:text-lg" />,
  },
  {
    href: "https://google.com/",
    icon: <FaTwitter className="text-base md:text-lg" />,
  },
  {
    href: "https://google.com/",
    icon: <FaInstagram className="text-base md:text-lg" />,
  },
];
