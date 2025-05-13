export const projects = {
  "e-commerce": {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, inventory management, and analytics dashboard.",
    longDescription:
      "This e-commerce platform provides businesses with everything they need to sell products online. It includes a responsive storefront, secure payment processing with Stripe, comprehensive inventory management, and a powerful analytics dashboard to track sales and customer behavior.\n\nThe application is built with a React frontend and Node.js backend, with MongoDB as the database. It features user authentication, product search and filtering, shopping cart functionality, order tracking, and admin controls for managing products and orders.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632375/pexels-photo-5632375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    features: [
      "Responsive product catalog",
      "Secure payment processing",
      "User accounts and profiles",
      "Order history and tracking",
      "Admin dashboard",
      "Inventory management",
      "Sales analytics",
      "Email notifications"
    ],
    technologies: {
      Frontend: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      Backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      DevOps: ["Docker", "AWS", "CI/CD", "Jest"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2023"
  },
  "task-management": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, file sharing, and team communication.",
    longDescription:
      "This task management application helps teams organize their work and collaborate effectively. It provides real-time updates so everyone stays in sync, file sharing capabilities for project resources, and built-in communication tools to reduce context switching.\n\nBuilt with Next.js and Firebase, the app offers a smooth, responsive user experience with real-time data synchronization. It includes features like task assignment, due dates, priority levels, progress tracking, and customizable workflows to adapt to different team processes.",
    image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/3243092/pexels-photo-3243092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3243091/pexels-photo-3243091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3243089/pexels-photo-3243089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3243088/pexels-photo-3243088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets", "React Query"],
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "File sharing and storage",
      "Team chat and comments",
      "Calendar integration",
      "Custom workflows",
      "Notifications",
      "Activity logs"
    ],
    technologies: {
      Frontend: ["Next.js", "React Query", "Tailwind CSS", "DnD Kit"],
      Backend: ["Firebase", "Cloud Functions", "Firestore"],
      DevOps: ["Vercel", "GitHub Actions", "Cypress"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2022"
  },
  "fitness-tracker": {
    title: "Health & Fitness Tracker",
    description: "A comprehensive health tracking application with data visualization, goal setting, and progress monitoring.",
    longDescription:
      "This health and fitness tracker helps users monitor their physical activity, nutrition, and overall wellness. It provides intuitive data visualizations to help users understand their progress, goal setting features to stay motivated, and comprehensive tracking for various health metrics.\n\nDeveloped with React Native for cross-platform compatibility, the app uses GraphQL for efficient data fetching and D3.js for creating interactive charts and graphs. It integrates with various health devices and services through APIs to automatically import activity data.",
    image: "https://images.pexels.com/photos/3927386/pexels-photo-3927386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/3927385/pexels-photo-3927385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3927384/pexels-photo-3927384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3927383/pexels-photo-3927383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3927382/pexels-photo-3927382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    tags: ["React Native", "GraphQL", "TypeScript", "D3.js", "Apollo"],
    features: [
      "Activity tracking",
      "Nutrition logging",
      "Weight and body measurements",
      "Goal setting and tracking",
      "Data visualization",
      "Progress reports",
      "Integration with fitness devices",
      "Personalized recommendations"
    ],
    technologies: {
      Frontend: ["React Native", "TypeScript", "D3.js", "Apollo Client"],
      Backend: ["Node.js", "GraphQL", "PostgreSQL", "TypeORM"],
      DevOps: ["Expo", "AWS Amplify", "Jest", "Detox"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2022"
  },
    "edu-platform": {
    title: "Online Learning Platform",
    description: "Interactive platform offering video lessons, quizzes, progress tracking, and certification.",
    longDescription:
      "An online learning platform that allows students to enroll in courses, watch video lectures, complete quizzes, and earn certificates. Teachers can manage course content and track student progress.\n\nBuilt with React, Node.js, and PostgreSQL, the platform supports user roles, video streaming, real-time quiz evaluation, and certificate generation.",
    image: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      "https://images.pexels.com/photos/4145189/pexels-photo-4145189.jpeg"
    ],
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Cloudinary"],
    features: [
      "Video streaming",
      "Interactive quizzes",
      "Progress tracking",
      "Certification",
      "Teacher/admin roles",
      "Course enrollment",
      "Discussion forums"
    ],
    technologies: {
      Frontend: ["React", "Redux", "Tailwind CSS", "Video.js"],
      Backend: ["Node.js", "Express", "PostgreSQL"],
      DevOps: ["Heroku", "Docker", "GitHub Actions"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2023"
  },

  "recipe-app": {
    title: "Recipe Sharing App",
    description: "A community platform for sharing, saving, and reviewing recipes with step-by-step instructions.",
    longDescription:
      "Users can upload their favorite recipes, follow other cooks, rate dishes, and save recipes to personal collections. Includes a recommendation engine based on taste preferences and dietary filters.\n\nUses Next.js and Supabase for rapid development, with image hosting and authentication features integrated.",
    image: "https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg",
      "https://images.pexels.com/photos/4252138/pexels-photo-4252138.jpeg"
    ],
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Image Upload", "Filtering"],
    features: [
      "User profiles",
      "Recipe uploads",
      "Step-by-step cooking guides",
      "Ratings and reviews",
      "Favorites and bookmarks",
      "Tag-based filtering",
      "Recipe suggestions"
    ],
    technologies: {
      Frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
      Backend: ["Supabase", "PostgreSQL"],
      DevOps: ["Vercel", "GitHub Actions"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2023"
  },

  "chat-app": {
    title: "Real-Time Chat App",
    description: "A secure and scalable real-time messaging app with emoji support and media sharing.",
    longDescription:
      "Built using WebSockets and Firebase, this chat app supports one-on-one and group chats with real-time syncing, typing indicators, image/file sharing, and emoji reactions.\n\nFeatures a clean UI and focuses on performance and message delivery reliability.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg"
    ],
    tags: ["React", "Firebase", "WebSockets", "Emoji Picker", "Chat"],
    features: [
      "Private & group chat",
      "Real-time typing indicators",
      "Media sharing",
      "Message history",
      "Push notifications",
      "Online status",
      "Dark mode"
    ],
    technologies: {
      Frontend: ["React", "Tailwind CSS", "Socket.IO Client"],
      Backend: ["Firebase", "Cloud Functions"],
      DevOps: ["Netlify", "GitHub Actions"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2023"
  },

  "portfolio-generator": {
    title: "AI Portfolio Generator",
    description: "Tool to auto-generate stunning portfolios using AI and Markdown templates.",
    longDescription:
      "Users input their project details or upload a resume, and the app uses AI to generate a complete portfolio website. It offers downloadable HTML/CSS, PDF exports, and GitHub Pages deployment.\n\nLeverages OpenAI’s GPT for content, and markdown-to-HTML conversion for fast prototyping.",
    image: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg",
    gallery: [],
    tags: ["AI", "Markdown", "OpenAI", "HTML Generator", "Resume"],
    features: [
      "Resume to portfolio conversion",
      "Markdown-based customization",
      "Dark/light mode",
      "Instant preview",
      "Downloadable source code",
      "Live deployment to GitHub Pages"
    ],
    technologies: {
      Frontend: ["React", "Tailwind CSS", "Marked.js"],
      Backend: ["Node.js", "Express", "OpenAI API"],
      DevOps: ["GitHub Pages", "CI/CD", "Jest"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2024"
  },

  "budget-tracker": {
    title: "Personal Budget Tracker",
    description: "Manage income, expenses, and goals with rich visual analytics and notifications.",
    longDescription:
      "A mobile-friendly personal finance app that helps users monitor budgets, set saving goals, and get notified of overspending. Built using React Native with Redux and SQLite for offline support.",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    gallery: [],
    tags: ["React Native", "Finance", "SQLite", "Redux", "Notifications"],
    features: [
      "Income/expense tracking",
      "Budget limits and alerts",
      "Spending categories",
      "Savings goals",
      "Visual reports",
      "Offline functionality"
    ],
    technologies: {
      Frontend: ["React Native", "Redux", "Victory Charts"],
      Backend: ["Local SQLite", "Expo Secure Store"],
      DevOps: ["Expo", "Firebase Crashlytics", "Jest"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2022"
  },

  "event-booking": {
    title: "Event Booking System",
    description: "Platform to browse, book, and manage event tickets with QR-based check-in.",
    longDescription:
      "An event discovery and booking platform for concerts, workshops, and meetups. Users can browse events, book tickets, and check in via QR codes. Admins can create and manage events, view bookings, and export attendee data.",
    image: "https://images.pexels.com/photos/7991561/pexels-photo-7991561.jpeg",
    gallery: [],
    tags: ["MERN", "QR Code", "Stripe", "Admin Panel"],
    features: [
      "Event listing and search",
      "Ticket booking and payment",
      "QR code generation",
      "User dashboard",
      "Admin event management",
      "Email confirmations"
    ],
    technologies: {
      Frontend: ["React", "Redux Toolkit", "Tailwind"],
      Backend: ["Node.js", "MongoDB", "Express"],
      DevOps: ["Heroku", "GitHub Actions", "SendGrid"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2024"
  },

  "ai-resume-review": {
    title: "AI Resume Reviewer",
    description: "Analyzes resumes and provides detailed feedback using AI.",
    longDescription:
      "Upload a resume and receive suggestions to improve it using GPT-based scoring algorithms. Offers ATS compatibility checks, keyword analysis, and readability scores to help job seekers stand out.",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    gallery: [],
    tags: ["AI", "Resume", "NLP", "OpenAI", "ATS"],
    features: [
      "Resume uploads (PDF/DOCX)",
      "AI-generated feedback",
      "ATS score analysis",
      "Role-based keyword match",
      "Download feedback report",
      "Content and grammar analysis"
    ],
    technologies: {
      Frontend: ["React", "Tailwind", "React Dropzone"],
      Backend: ["Python Flask", "OpenAI API", "spaCy"],
      DevOps: ["Render", "Sentry", "GitHub Actions"]
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    year: "2024"
  }
};

export type Project = typeof projects[keyof typeof projects];

export function getAllProjects() {
  return Object.entries(projects).map(([id, project]) => ({
    id,
    ...project,
  }));
}

export function getFeaturedProjects() {
  return getAllProjects().slice(0, 3);
}

export function getProjectById(id: string) {
  return projects[id as keyof typeof projects];
}