import { ProjectDetails } from "@/components/ProjectDialog";

export const projectsData: ProjectDetails[] = [
  {
    id: "modern-it-showcase",
    title: "Modern IT Showcase – Poster UI Design",
    type: "UI Design / Poster",
    tools: ["Canva", "No-Code"],
    description: "Designed a modern, tech-themed poster to represent the Information Technology department. It was built using Canva, with a focus on visual hierarchy, content clarity, and appealing layout for educational use.",
    skills: [
      "UI Design Principles",
      "No-code Tool (Canva)",
      "Visual Communication",
      "Typography & Layout",
      "IT Content Simplification"
    ],
    images: [
      "/lovable-uploads/85cf6d27-f705-4abb-a800-33e38649ab5c.png"
    ],
    learnings: "Learned how to combine clear technical information with modern design elements and how to use Canva effectively for academic projects.",
    links: {
      live: "/lovable-uploads/85cf6d27-f705-4abb-a800-33e38649ab5c.png",
      download: "/lovable-uploads/85cf6d27-f705-4abb-a800-33e38649ab5c.png"
    },
    feedback: "The poster effectively simplifies complex IT concepts through visual design. Great use of information hierarchy.",
    date: "May 2023",
    tags: ["#PosterDesign", "#Canva", "#UIUX", "#IT"]
  },
  {
    id: "qrcode-generator",
    title: "QR CODE GENERATOR",
    type: "Python Application",
    tools: ["Python", "Tkinter", "qrcode library"],
    description: "Built a Python-based QR code generator with a user-friendly interface using Tkinter. The app allows users to input text, URLs, or email addresses and instantly generate QR codes with customization options.",
    skills: [
      "Python Programming",
      "GUI Development with Tkinter",
      "Image Processing",
      "User Interface Design",
      "QR Code Technology Implementation"
    ],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format"
    ],
    learnings: "Gained experience in developing practical Python applications with GUIs and implementing third-party libraries for real-world use cases.",
    links: {
      github: "https://github.com/Pradesha2005/QRCODE-GENRATOR"
    },
    date: "January 2023",
    tags: ["#Python", "#QRCode", "#GUI", "#ImageProcessing"]
  },
  {
    id: "text-converter",
    title: "TEXT CONVERTER",
    type: "Web Application",
    tools: ["HTML", "CSS", "JavaScript"],
    description: "Created a user-friendly text conversion tool that allows users to upload text files and convert them to various formats with styling options and document export capabilities.",
    skills: [
      "Front-end Development",
      "JavaScript Programming",
      "File Handling",
      "UI/UX Design",
      "Error Handling"
    ],
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format"
    ],
    learnings: "Developed skills in working with file uploads and text processing in web applications while focusing on user experience design.",
    links: {
      live: "https://marvelous-stroopwafel-8d90d6.netlify.app"
    },
    date: "March 2023",
    tags: ["#WebDevelopment", "#TextProcessing", "#JavaScript"]
  },
  {
    id: "technology-blog",
    title: "TECHNOLOGY BLOG",
    type: "Blog Website",
    tools: ["HTML", "CSS", "Netlify"],
    description: "Developed and hosted a personal technology blog focused on AI, machine learning, cloud computing, and blockchain topics, designed with responsive layouts and optimal reading experience.",
    skills: [
      "Web Development",
      "Content Creation",
      "Responsive Design",
      "Technical Writing",
      "Web Hosting"
    ],
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format"
    ],
    learnings: "Improved my technical writing skills and learned how to create engaging, informative content while implementing responsive design principles.",
    links: {
      live: "https://quiet-panda-84ed62.netlify.app"
    },
    date: "August 2023 - Present",
    tags: ["#TechBlog", "#WebDevelopment", "#ContentCreation"]
  }
];
