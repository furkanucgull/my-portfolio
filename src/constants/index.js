export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "AI Help Bot App",
    desc: "This is an AI-powered chatbot application built using modern web technologies. The project utilizes OpenAI's GPT model to provide intelligent responses to user queries in natural language.",
    subdesc: [
      "🧠 AI-driven chatbot for answering user questions",
      "      🌐 Built with Next.js for a seamless and modern UI",
      "      🔄 Real-time data fetching using GraphQL",
      "      🎨 Styled with Tailwind CSS for a responsive and clean design",
      "      🚀 Deployed on Vercel for fast and easy access,",
    ],

    href: "https://ai-help-bot-app.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/Nextjs.svg",
      },
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "GraphQl",
        path: "/assets/graphql.svg",
      },
    ],
  },
  {
    title: "React Movie App",
    desc: "React Movie App is a movie search application built with React.js, Vite, and Tailwind CSS. It fetches movie data from The Movie Database (TMDb) API and allows users to search for movies while tracking trending searches using Appwrite.",
    subdesc: [
      "⚠️ Warning: This API does not work in Turkey. It functions properly outside of Turkey.",
      "🔍 Search Movies: Users can search for movies by title.\n",
      "📈 Trending Movies: Displays trending movies based on user searches.\n",
      "⚡ Fast Performance: Built with Vite for a smooth development experience.\n",
      "🎨 Styled with Tailwind CSS: Modern and responsive UI.\n",
      "📊 Search Analytics: Tracks search popularity using Appwrite.",
    ],

    href: "https://furkanucgull-movie-app.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "AppWrite",
        path: "/assets/appwrite.svg",
      },
    ],
  },
  {
    title: "Real-Time Chat Application",
    desc: "A real-time chat application built with Next.js, Socket.io, and React. This application allows users to join specific rooms, send messages, and view messages instantly. The backend is built using Node.js and Socket.io, facilitating WebSocket communication for real-time messaging between users.",
    subdesc: [
      "💬 Real-Time Messaging: Users can send and receive messages instantly using Socket.io.\n",
      "🚪 Join Rooms: Users can join rooms by specifying a room name.\n",
      "🎨 User-Friendly Interface: Responsive design built with React and Tailwind CSS.\n",
      "📢 System Messages: System messages notify when a user joins or leaves a room.\n",
      "🔧 Currently it works only on local server socket",
    ],

    href: "https://real-time-chat-app-plum-seven.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/Nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "E-Commerce App",
    desc: "A modern e-commerce application built with React, Redux Toolkit, and Tailwind CSS. This app allows users to browse products, add them to a basket, and manage their shopping cart. It also integrates with a fake store API to fetch product data.",
    subdesc: [
      "📦 Product Listing: Fetch and display products from a fake store API. ",
      "🔍 Product Search: Search for products by name or description.",
      "🛒 Shopping Basket: Add and remove products from the basket.",
      "💾 Persistent Basket: Basket data is stored in localStorage for persistence across page reloads.",
      "⏳ Loading State: Display a loading spinner while fetching data.",
      "📱 Responsive Design: The application is fully responsive and works seamlessly on all devices.",
    ],

    href: "https://e-commerceapptrial.netlify.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "React Redux",
        path: "/assets/redux.svg",
      },
    ],
  },
];

// export const calculateSizes = (isSmall, isMobile, isTablet) => {
//   return {
//     deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.1,
//     deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -11, 0],
//     cubePosition: isSmall
//       ? [4, -5, 0]
//       : isMobile
//         ? [5, -8, 0]
//         : isTablet
//           ? [5, -5, 0]
//           : [12, -7, 0],
//     reactLogoPosition: isSmall
//       ? [3, 4, 0]
//       : isMobile
//         ? [5, 4, 0]
//         : isTablet
//           ? [5, 4, 0]
//           : [12, 3, 0],
//     ringPosition: isSmall
//       ? [-5, 7, 0]
//       : isMobile
//         ? [-33, 20, 0]
//         : isTablet
//           ? [-38, 20, 0]
//           : [-48, 20, 0],
//     targetPosition: isSmall
//       ? [-5, -10, -10]
//       : isMobile
//         ? [-8, -10, -10]
//         : isTablet
//           ? [-11, -7, -10]
//           : [-13, -13, -10],
//   };
// };
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.1,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -10.5, 0],
    cubePosition: isSmall
      ? [4, -9, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [13, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-20, -13, -10],
  };
};
export const workExperiences = [
  {
    id: 1,
    name: "Freelancer",
    pos: "Full Stack Developer | React & .NET",
    duration: "2022 - Present",
    title:
      "Building scalable web applications with React on the frontend and .NET on the backend. Experienced in developing interactive UIs, RESTful APIs, and database management. Passionate about writing clean, maintainable code and continuously improving development workflows.",
    icon: "/assets/freelance.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "European Union",
    pos: "Content Creator, Educator, English Teacher",
    duration: "2023 - 2024",
    title:
      "As part of my ESC project in Gdynia, Poland, I conducted engaging lessons for kids and young adults, covering front-end development and English language skills. I introduced students to essential web technologies (HTML, CSS, JavaScript) , guiding them in building real-world projects. Additionally, I tailored interactive English lessons to different proficiency levels, focusing on grammar, vocabulary, speaking, and listening skills while integrating multimedia resources to enhance learning.",
    icon: "/assets/eu.svg",
    animation: "victory",
  },

  {
    id: 2,
    name: "Birlesim Engineering",
    pos: "Field Engineer",
    duration: "2022 - 2023",
    title:
      " Mechanical Field Engineer – Turkey’s Second-Largest Airport Project\n" +
      "Managed mechanical operations for the terminal building, overseeing the installation, testing, and commissioning of HVAC, plumbing, and fire protection systems. Worked closely with architects and contractors to ensure timely execution and compliance with industry standards. Held key responsibility for 25% of all mechanical works related to the terminal building.",
    icon: "/assets/birlesim.png",
    animation: "clapping",
  },

];
