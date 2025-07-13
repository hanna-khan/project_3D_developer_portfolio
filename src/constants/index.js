import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  company,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  invent,
  pamp,
  karobar,
  propinspectauto,
  server,
  linux,
  vue,
  mysql,
  php,
  laravel
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "GoEnterprise",
    icon: company,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Architect and develop web application using Next.js and Laravel framework and other related technologies.",
      "Build and maintain mobile application using React Native for seamless cross-platform experiences",
      "Design and implement RESTful APIs to facilitate communication between frontend and backend systems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborate with cross-functional teams to gather requirements and translate them into technical specifications to create high-quality products.",
    ],
  },
  {
    title: "Freelance",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Created responsive, mobile-friendly UIs with modern styling tools.",
      "Worked with designers and developers to deliver quality features.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cryptofunding for Bitcoin",
    description:
      "A secure cryptocurrency investment dashboard designed for managing digital assets, tracking performance, and monitoring trading activities with user-friendly login and access control features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: invent,
    source_code_link: "https://www.inventonbtc.com/",
  },
  {
    name: "Pulsechain Against Mediocre Politicians",
    description:
      "Facilitates direct cryptocurrency donations to support Donald Trump’s 2024 campaign, promoting political transparency and accountability, Created responsive and interactive user interfaces using Mern and Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pamp,
    source_code_link: "https://demo-pamp.netlify.app/",
  },
  {
    name: "Karobar",
    description:
      "A business management tool tailored for small businesses and retailers, featuring inventory tracking, sales monitoring, and customer management, built for ease of use and mobility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: karobar,
    source_code_link: "https://karobarwebsite.web.app/",
  },
  {
    name: "Pro Inspect Auto",
    description:
      "An automotive inspection service platform that enables users to schedule vehicle inspections, view detailed reports, and connect with certified inspectors—ensuring transparency and peace of mind in vehicle purchasing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: propinspectauto,
    source_code_link: "https://proinspectautos.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
