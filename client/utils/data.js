import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const menu = [
   { href: "/", title: "Beranda" },
   { href: "/structure", title: "Struktur" },
   { href: "/blogs", title: "Blog" },
   { href: "/contact-us", title: "Hubungi Kami" },
];

export const sosialMedia = [
   {
      href: "https://google.com/",
      icon: <FaFacebookF className="text-lg" />,
   },
   { href: "https://google.com/", icon: <FaTwitter className="text-lg" /> },
   {
      href: "https://google.com/",
      icon: <FaInstagram className="text-lg" />,
   },
];

export const hero = [
   {
      title: "Pelaksanaan Ibadah Bulanan HIMATIF Pertama",
      date: "08.08.2021",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl.",
      tag: "Divisi Agama dan Pendidikan",
      img: "https://source.unsplash.com/random/900×700/?church",
   },
   {
      title: "Rapat Progress Kerja dari setiap divisi",
      date: "08.08.2021",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl.",
      tag: "Pertemuan",
      img: "https://source.unsplash.com/random/900×700/?meeting",
   },
   {
      title: "Perkenalan BPH dengan Divisi",
      date: "08.08.2021",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam lorem, eu aliquam nisl lorem eu nisl.",
      tag: "Pertemuan",
      img: "https://source.unsplash.com/random/900×700/?politician",
   },
];
