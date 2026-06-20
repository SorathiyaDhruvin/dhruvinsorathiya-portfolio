/**
 * ============================================================
 *  EDIT YOUR PERSONAL DETAILS HERE
 *  Fields marked  // TODO: REPLACE  are placeholders.
 * ============================================================
 */

export const profile = {
  name: "Dhruvin Sorathiya",
  logo: "Dhruvin",
  email: "sorathiyadhruvin2005@gmail.com",
  phone: "+91 9499816850",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/SorathiyaDhruvin",
  linkedin: "https://linkedin.com/in/sorathiya-dhruvin",
  resume: "/Sorathiya_Dhruvin_Resume.pdf",
  photo: "/ProfilePhoto.jpeg",
  cgpa: "8.4",
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export const roles = ["Software Engineer", "Full Stack Developer", "AI Enthusiast"]

export const stats = [
  { value: 150, suffix: "+", label: "DSA Problems Solved" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Certifications" },
  { value: 2, suffix: "", label: "Internships Completed" },
]

export const interests = ["AI/ML", "Full Stack", "AR/VR", "Android", "DSA", "Open Source"]

export const whatIDo = [
  "Full-stack web apps with React.js, Node.js, MongoDB",
  "AI-powered tools using OpenAI API",
  "AR/VR experiences with Unity and 360° tech",
  "Android apps with Kotlin",
]

export const skillGroups = [
  { category: "Programming Languages", items: ["Java", "C++", "C", "SQL"] },
  { category: "Web Development", items: ["Node.js", "HTML5", "CSS3"] },
  { category: "Backend & Database", items: ["JavaScript", "MongoDB", "NodeJS", "Firebase"] },
  { category: "Tools & Platforms", items: ["AWS", "Git", "GitHub", "Render", "Vercel", "Linux", "VS Code"] },
]

export const projects = [
  {
    title: "My Portfolio",
    category: "Web",
    description:
      "A professional, responsive portfolio showcasing projects, skills, and experience with smooth animations and an interactive user interface.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Vite", "Tailwind CSS"],
    tags: ["Web", "Full Stack", "Portfolio"],
    live: "https://dhruvinsorathiya-portfolio.vercel.app/",
    repo: "https://github.com/SorathiyaDhruvin",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quote Android App",
    category: "Android",
    description:
      "A modern quote application with a creative splash and loading screen, featuring inspirational quotes displayed in elegant cards with smooth navigation and copy-share functionality.",
    tech: ["Kotlin", "Android Studio", "UI/UX", "Copy & Share"],
    tags: ["Android", "Kotlin", "UI/UX"],
    live: "https://github.com/SorathiyaDhruvin/Random-Quote-Generator",
    repo: "https://github.com/SorathiyaDhruvin/Random-Quote-Generator",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quiz Android App",
    category: "Android",
    description:
      "An interactive quiz application with a clean splash experience, offering question-answer cards, show-answer functionality, and smooth navigation in a simple, user-friendly UI.",
    tech: ["Kotlin", "Android Studio", "UI/UX", "Previous/Next", "Add/Edit/Delete"],
    tags: ["Android", "Kotlin", "UI/UX"],
    live: "https://github.com/SorathiyaDhruvin/Flashcard-Quiz",
    repo: "https://github.com/SorathiyaDhruvin/Flashcard-Quiz",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
  },
]

export const experience = [
  {
    role: "AR / VR Internship",
    company: "Parul University",
    period: "Nov 2025 – Present",
    type: "Internship",
    description: "Building immersive AR/VR experiences and campus navigation concepts.",
  },
  {
    role: "CodeAlpha Internship",
    company: "Remote",
    period: "Sep 2025 – Oct 2025",
    type: "Remote Internship",
    description: "Worked on small projects using App technologies.",
  },
]

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Parul University",
    period: "2023 – Present",
    detail: "Learning software development, databases, and AI.",
  },
  {
    degree: "Higher Secondary Education (12th)",
    school: "Jamnagar, Gujarat",
    period: "2022 – 2023",
    detail: "Focus on Physics, Mathematics, and Computer Science.",
  },
]

export const certifications = [
  { name: "Gemini Certified Student", issuer: "Google for Education", link: "/certificates/gemini.jpg" },
  { name: "Generative AI: Prompt Engineering Basics", issuer: "Coursera (IBM)", link: "/certificates/prompt-eng.jpg" },
  { name: "AWS Cloud Technical Essentials", issuer: "Coursera (Amazon Web Services)", link: "/certificates/AWS.jpg" },
  { name: "AWS Students Community Day", issuer: "AWS Cloud Club Parul University", link: "/certificates/aws_community.png" },
  { name: "Introduction to Web Development with HTML, CSS, JavaScript", issuer: "Coursera (IBM)", link: "/certificates/IBM-WEB-Development.jpg" },
  { name: "Introduction to HTML, CSS, & JavaScript", issuer: "Coursera (IBM)", link: "/certificates/IBM introduction html,css,js.jpg" },
  { name: "Blockchain Bootcamp", issuer: "IDS Inc (Bharat Blockchain Network)", link: "/certificates/Block Chain bootcamp.png" },
  { name: "Java Course - Mastering the Fundamentals", issuer: "Scaler Topics", link: "/certificates/java.png" },
  { name: "C Tutorial Module", issuer: "Scaler Topics", link: "/certificates/C language.png" },
  { name: "SQL v/s NoSQL Course", issuer: "Scaler Topics", link: "/certificates/SQL.png" },
  { name: "Computer Networks And Internet Protocol", issuer: "NPTEL (IIT Kharagpur)", link: "/certificates/NPTEL.png" },
  { name: "App Development Internship", issuer: "CodeAlpha", link: "/certificates/internship.png" },
  { name: "Vadodara Hackathon 6.0 (Participation Certificate)", issuer: "Parul University", link: "/certificates/hackathon.png" },
  { name: "AI Tools Workshop", issuer: "be10X", link: "/certificates/workshop.png" },
  { name: "Masterclass on Building Smart Prompt Packs", issuer: "TechNest Intern", link: "/certificates/TechNest Ai webinar.jpg" },
]

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "SorathiyaDhruvin",
    accent: "#ffa116",
    url: "https://leetcode.com/u/SorathiyaDhruvin/",
    stats: [
      { label: "Solved", value: "150+" },
      { label: "Easy", value: "70" },
      { label: "Medium", value: "65" },
      { label: "Hard", value: "15" },
    ],
    note: "Ranking: Top 20%",
  },
  {
    platform: "CodeChef",
    username: "dhruvin_2005",
    accent: "#5b4638",
    url: "https://www.codechef.com/users/dhruvin_2005",
    stats: [
      { label: "Rating", value: "Unrated" },
      { label: "Stars", value: "1★" },
      { label: "Solved", value: "211" },
      { label: "Contests", value: "0" },
    ],
    note: "Problem Solver - Bronze Badge",
  },
  {
    platform: "HackerRank",
    username: "DhruvinSorathiya",
    accent: "#2ec866",
    url: "https://www.hackerrank.com/profile/DhruvinSorathiya",
    stats: [
      { label: "C Language", value: "5★" },
      { label: "C++", value: "3★" },
      { label: "Java", value: "3★" },
      { label: "Python", value: "2★" },
    ],
    note: "Problem Solving & Java (Basic) Certified",
  },
]
