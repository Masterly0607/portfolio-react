import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.facebook.com/masterly.chanon",
    icon: <AiOutlineFacebook />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/masterlychanon",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/masterlysok/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 4, link: "https://github.com/Masterly0607", icon: <AiFillGithub /> },
];
