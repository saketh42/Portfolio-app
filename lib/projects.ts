export const projects = {
  "hopelens": {
    title: "HopeLens",
    description: "An mental health risk assessment platform integrating AI-driven insights with privacy-focused design.",
    longDescription:
      "HopeLens is a full-stack, privacy-conscious mental health risk assessment platform designed to facilitate early detection and awareness of mental health challenges. It combines a user-friendly React.js frontend, a resilient Spring Boot backend, and a FastAPI-based machine learning service to deliver real-time, personalized risk assessments based on user input. The platform features a clean and intuitive interface where users can provide emotional and personal details, which are processed by a trained ML model to assess potential suicide risk levels. \n\nDesigned with empathy and simplicity at its core, HopeLens ensures that no user data is stored or shared, reinforcing a strong commitment to privacy. If a high-risk prediction is returned, the platform instantly displays helpful resources and supportive messages tailored to the user’s risk level. Although HopeLens is currently a prototype for educational purposes and not intended for clinical use, it highlights the potential of AI-driven technology in making mental health tools more accessible, responsive, and human-centered.",
    image: "/hopelens-0.png",
    gallery: [
      "/hopelens-1.png",
      "/hopelens-2.png",
      "/hopelens-3.png",  
    ],
    tags: [
      // Frontend
      "React.js",
      "Spring Boot",
      "FastAPI",
    ],
    features: [
      "Risk prediction interface with simple form inputs",
      "User-friendly and responsive UI",
      "Privacy-focused design with no data storage",
      "Personalized risk feedback messages",
      "Crisis help resources displayed for high-risk users",
      "Backend API gateway handling requests and fallbacks",
      "Health check endpoints for backend and ML services",
      "ML-powered suicide risk prediction service"
    ],
    technologies: {
      Frontend: ["React.js","HTML", "CSS", "Fetch API"],
      Backend: [  "Spring Boot", "Java", "REST APIs", "Maven"],
      "Machine Learning": ["FastAPI", "Python", "scikit-learn", "Pandas", "NumPy", ]
    },
    liveUrl: "https://hopelens.onrender.com/",
    githubUrl: "https://github.com/saketh42/Hopelens",
    year: "2025",
    type: "Web Application"
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