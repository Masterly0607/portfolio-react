import Image1 from "../../assets/project1.png";
import Image2 from "../../assets/project2.png";
import Image3 from "../../assets/project3.png";
import Image4 from "../../assets/project4.png";

const data = [
  {
    id: 1,
    category: "full-stack",
    image: Image1,
    title: "Video Interview Platform",
    desc: "A real-time video interview platform built with Next.js, supporting secure authentication, live video/audio calling, role-based access, and interview scheduling.",
    demo: "https://interview-hub-nextjs.vercel.app/",
    github: "https://github.com/Masterly0607/interview-hub-nextjs",
  },
  {
    id: 2,
    category: "full-stack",
    image: Image2,
    title: "MERN E-commerce Platform",
    desc: "A full-stack e-commerce application built with React and Express, featuring JWT authentication, Stripe payments, Redis caching, and Cloudinary image uploads.",
    demo: "https://mern-commerce-cj71.onrender.com/",
    github: "https://github.com/Masterly0607/mern-commerce",
  },
  {
    id: 3,
    category: "frontend",
    image: Image3,
    title: "E-learning Platform",
    desc: "Developed the frontend of an e-learning system using Vue.js and Quasar during an internship, contributing to frontend components and user interface enhancements.",
    demo: "https://ibf-frontend.netlify.app/",
    github: "https://github.com/Masterly0607/ibpf-framework",
  },
  {
    id: 4,
    category: "backend",
    image: Image4,
    title: "Stock Management System",
    desc: "A web-based inventory management system built with Laravel, Filament, and MySQL, providing role-based access control and real-time stock tracking across branches.",
    demo: "",
    github: "https://github.com/Masterly0607/Stock-Management-System",
  },
];

export default data;
