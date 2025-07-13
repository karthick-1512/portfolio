import {
  aws_logo,
  backend,
  cpp,
  creator,
  css,
  docker,
  flutter,
  git,
  github1,
  html,
  icd,
  java_logo,
  maestrominds,
  mobile,
  mongodb,
  node_logo,
  rag,
  react_logo,
  sql,
  web
} from "../assets";
import a3e_dip from "../assets/a3e_dip.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "App Developer (Flutter)",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: web,
  },
  {
    title: "Backend Developer(Node.js)",
    icon: mobile,
  },
  
  {
    title: "Innovative Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node js",
    icon: node_logo,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  
  {
    name: "Flutter",
    icon: flutter,
  },
  
 
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React js",
    icon: react_logo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github1,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java_logo,
  },
   {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "AWS",
    icon: aws_logo,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  
  {
    title: "SDE Intern",
    company_name: "Maestrominds",
    icon: maestrominds,
    iconBg: "#383E56",
    date: "Sep 2024 -  May 2025",
    points: [
      "Led a team in developing and successfully deploying 3 apps on the Play Store",
      "Integrated OTP login, Razorpay payments, Multi-language support, Geo-tagging, and YouTube streaming.",
      
      "Delivered a scalable MVP with clean UI/UX and smooth data sync.",
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
    image: "https://logowik.com/content/uploads/images/github9775.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://th.bing.com/th/id/R.14f8d0d8ea255a03471032d79087fdf0?rik=Jcph23UZL08iCA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fColor-of-the-LinkedIn-Logo.jpg&ehk=hT5Ibkg%2fFPa%2f7TPm%2fs2TP8Fxdd7ySQQBuZmn88xh5j0%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png",
  },
];

const projects = [
  {
    name: "A3E - Diploma in Patient Care",
    description:
    "A3E is a mobile application developed for a client to empower underprivileged women by providing structured training and certification as trained caretakers. The platform offers comprehensive online training modules, skill assessments, and real-time certification tracking, enabling women to gain meaningful employment.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Serverless",
        color: "orange-text-gradient",
      },
    ],
    image: a3e_dip,
    source_code_link: "https://play.google.com/store/apps/details?id=com.education.nurse&pcampaignid=web_share",
  },
  {
    name: "ICD Code Mapper",
    description:
      "This project automates the assignment of ICD (International Classification of Diseases) codes to patient medical data. This System intelligently maps patient data to most relevant ICD codes. Mistral AI was integrated to enhance contextual understanding, achieving 91% accuracy in ICD prediction.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Mistral AI",
        color: "green-text-gradient",
      },
      {
        name: "RAG",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
    ],
    image: icd,
    source_code_link: "https://github.com/Karthick-2305-dev/ICD-Code-Matching",
  },
  {
    name: "AskMyDoc",
    description:
      "It is an document-aware conversational AI system built using RAG. It allows users to upload one or more documents and then interact with it, similar to how ChatGPT works, but with knowledge of uploaded documents. By combining semantic search with LLM, the system provides accurate responses.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Weaviate",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Web UI",
        color: "orange-text-gradient",
      },
    ],
    image: rag,
    source_code_link: "https://github.com/Karthick-2305-dev/RAG-PDF-Chat",
  },
];

export { experiences, projects, services, technologies, testimonials };

