import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";
  
import zencartlogo from '../assets/projects/zencartlogo.png';
import whatsaplogo from '../assets/projects/whatsap.png';
import iandg from '../assets/projects/iandg.png';
import tshirt from '../assets/projects/tshirt.png';
import apple from '../assets/projects/iphone.jpg';
import xora from '../assets/projects/xora.svg';



import c from '../assets/skills/c.png';
import css  from '../assets/skills/css.png';
import docker  from '../assets/skills/docker.png';
import ex  from '../assets/skills/ex.webp';
import framerMotion  from '../assets/skills/framer-motion.svg';
import html  from '../assets/skills/html.png';
import jquery  from '../assets/skills/jquery.png';
import js  from '../assets/skills/js.png';
import laravel  from '../assets/skills/laravel.png';
import mongo  from '../assets/skills/mongo.png';
import net  from '../assets/skills/net.png';
import next from '../assets/skills/next.png';
import nodeJs  from '../assets/skills/nodejs.png';
import php  from '../assets/skills/php.png';
import postgress  from '../assets/skills/postgress.png';
import react  from '../assets/skills/react.png';
import sql  from '../assets/skills/sql.png';
import tcss from '../assets/skills/tcss.png';
import ts from '../assets/skills/ts.png';
import threejs from '../assets/skills/threjs.png';
import gsap from '../assets/skills/gsap.png';

// steps

import step1 from '../assets/steps/step1.webp';
import step2 from '../assets/steps/step2.webp';
import step3 from '../assets/steps/step3.jpg';


// projects to display

import przencart from '../assets/pr/zencart.png';
import priandg from '../assets/pr/iandg.png';
import priphone from '../assets/pr/ipone.png';
import prtshirt from '../assets/pr/tshirt.png';
import prwhatsapp from '../assets/pr/watsap.png';
import prxora from '../assets/pr/xora.png';

  
  export const navigation = [
    {
      id: "0",
      title: "Projects",
      url: "#projects",
    },
 
    {
      id: "2",
      title: "what am i working on",
      url: "#approach",
    },
    {
      id: "3",
      title: "Contact",
      url: "#contact",
    },
   
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
export const skillLogos = [html, css, tcss, ts, js, react, next, framerMotion];
export const skillLogos2 = [threejs, gsap, php, laravel, c, net, jquery,ex];
export const skillLogos3 = [nodeJs, mongo, sql, postgress, docker];

  
  export const brainwaveServices = [
    "Understanding the Basics of 3D Graphics and WebGL",
    "Getting Started with Three.js",
    "Advanced Features and Projects",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Mobile Apps",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Websites",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Send Me a Message",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Collaborating with innovative minds to craft unique digital experiences. Let's create something exceptional together!";
  
  export const collabContent = [
    {
      id: "0",
      title: "Plan & Design",
      text: 'I define the app’s purpose and target audience, then sketch the layout and features using tools like Figma or Sketch.',
    },
    {
      id: "1",
      title: "Develop the Frontend & Backend",
      text: 'I choose a tech stack (e.g., React for web or React Native for mobile) to build the user interface and connect it with backend services using Node.js, Firebase, etc.'
    },
    {
      id: "2",
      title: "Test & Deploy",
      text:'I test the app for functionality and usability, then deploy it using platforms like Vercel (web) or Google Play (mobile).'
    },
  ];
  
  export const collabApps = [
    {
      id: "5",
      title: "Protopie",
      icon: step1,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: step2,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: step3,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "ZenCart",
      text: "A multivendor e-commerce website allows users to effortlessly browse a variety of products from different sellers in one place. With multiple payment methods available, including credit cards, digital wallets, and bank transfers, customers can choose their preferred option for a seamless checkout experience. Additionally, real-time messaging enables instant communication between buyers and sellers, fostering a transparent shopping environment. This feature allows users to ask questions, negotiate prices, or seek assistance, enhancing overall customer satisfaction and trust in the platform.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: zencartlogo,
      imageUrl: przencart,
      link:'https://zencart.click/'
    },
    {
      id: "1",
      title: "I&G Company",
      text: "A logistics company specializes in the efficient management of supply chains, offering services like transportation, warehousing, and distribution. Utilizing advanced tracking systems, the company ensures real-time visibility of shipments, allowing customers to monitor their deliveries at every stage. The firm provides tailored solutions to meet specific client needs, enhancing flexibility and responsiveness. Additionally, a dedicated customer service team is available for instant support, addressing inquiries and resolving issues promptly. This comprehensive approach ensures that goods are delivered on time and in optimal condition, fostering trust and reliability within the logistics sector.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: iandg,
      imageUrl: priandg,
      light: true,
      link:'https://iandgcompany.com/'
    },
    {
      id: "2",
      title: "WhatsApp clone",
      text: "A WhatsApp clone enables users to communicate securely through Clerk authentication for easy account setup. The platform features video calling, allowing users to engage in face-to-face conversations in real-time. Group chatting facilitates discussions among multiple participants, enhancing collaboration and social interaction. Additionally, the live messaging system ensures instant delivery and notifications, keeping users updated on ongoing conversations. This combination of features creates a versatile communication app that prioritizes user experience while providing secure and convenient connectivity for all.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: whatsaplogo,
      imageUrl: prwhatsapp,
      link:'https://whatsapp-clone-two-xi.vercel.app/'
    },
    {
      id: "3",
      title: "3D T-shirt Ai",
      text: "A 3D T-shirt website offers a dynamic platform for users to create their custom apparel. It features an interactive 3D model that allows customers to visualize their designs in real time, with options for color customization to choose from a wide palette. Users can upload images or choose from a library of graphics to display on their T-shirts, ensuring personalized creations that reflect individual styles.The website incorporates texture-changing capabilities, allowing users to select various fabric options and see how they affect the overall look of the T-shirt. Additionally, an AI image generation feature empowers users to create unique designs by generating original graphics based on their inputs or preferences.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: tshirt,
      imageUrl: prtshirt,
      light: true,
      link:'https://three-js-ai.vercel.app/'
    },
    {
      id: "4",
      title: "Modern landing page",
      text: "A modern landing page offers a sleek and user-friendly interface designed to engage visitors from the moment they arrive. It features a clean, minimalist layout with bold typography and high-quality visuals that immediately capture attention. Interactive elements, such as smooth scroll animations and hover effects, enhance user experience and guide visitors through key sections seamlessly. The page includes a prominent call-to-action (CTA) button, strategically placed to drive conversions, with customizable options to suit different campaigns. A responsive design ensures flawless performance across devices, from desktop to mobile, providing an optimal viewing experience for all users.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: xora,
      imageUrl: prxora,
      link:'https://modern-landing-page-roan.vercel.app/'
    },
    {
      id: "5",
      title: "iPhone 15 Pro clone",
      text: "An iPhone 15 Pro website clone specializes in delivering an immersive digital experience that replicates the sleek aesthetics of Apple's official site. It features an intuitive interface that showcases the phone's advanced capabilities, such as its titanium frame, powerful A17 Pro chip, and innovative camera system. Utilizing dynamic visuals and interactive elements, users can explore product features through high-quality images, videos, and 3D models, enhancing their engagement.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: apple,
      imageUrl: priphone,
      link:'https://iphone-15-clone-ten.vercel.app/'
    },
  ];
  
  export const socials = [
    
    
    {
      id: "0",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/giorgilomaia24/",
    },
  
    {
      id: "1",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/giorgi.lomaia.5496",
    },
  ];