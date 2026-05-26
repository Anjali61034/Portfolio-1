import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  tailwind,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Full Stack App Developer Intern",
    company_name: "CURE International India Trust",
    iconBg: "#0a192f",
    date: "Feb 2025 - Present",
    points: [
      "Contributing to development of the Canary Indoor Navigation App - an accessible indoor navigation system for visually impaired users.",
      "Integrated Navigine SDK with Android application for real-time indoor positioning and navigation.",
      "Implemented BLE beacon based navigation with voice guidance features for enhanced accessibility.",
      "Supported development of accessibility-focused navigation features, earning NSS Certificate of Achievement.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Uniway App",
    iconBg: "#1a1a2e",
    date: "2025",
    points: [
      "Built and published college updates mobile application on Google Play Store.",
      "Developed Flutter frontend with Django backend for seamless cross-platform experience.",
      "Implemented centralized platform for notices, announcements, and academic updates.",
      "Managed full development lifecycle from design to deployment on Play Store.",
    ],
  },
];

const achievements = [
  {
    title: "Research Paper Presentation",
    description: "Presented 'IoT-based AQI Monitoring System for a Sustainable Campus' at Equinox 2025 International Conference",
  },
  {
    title: "Build With India Hackathon",
    description: "Ranked among Top 5,000 teams out of 25,000 participants",
  },
  {
    title: "Web-a-thon 3rd Place",
    description: "Secured 3rd Place at Avagahan Academic Fest, Maitreyi College",
  },
  {
    title: "Google Cloud GenAI",
    description: "Completed Google Cloud GenAI Study Jams 2024-2025",
  },
];

const projects = [
  {
    name: "Merit Portal",
    description:
      "A comprehensive student merit and academic management portal with responsive frontend and seamless backend data integration for tracking academic achievements and performance.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Anjali61034/",
    live_link: "#",
  },
  {
    name: "Netflix Clone",
    description:
      "A streaming interface built using JavaScript and Vite, featuring dynamic UI components, optimized loading performance, and responsive design for an immersive viewing experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Anjali61034/",
    live_link: "#",
  },
  {
    name: "Canary Navigation App",
    description:
      "An accessible indoor navigation system for visually impaired users featuring BLE beacon integration, real-time positioning with Navigine SDK, and voice-guided navigation.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "ble",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Anjali61034/",
    live_link: "#",
  },
];

export { services, technologies, experiences, achievements, projects };
