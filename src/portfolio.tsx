"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  User,
  FileType,
} from "lucide-react";
import { SiMedium } from "react-icons/si";
import { PiWhatsappLogoLight } from "react-icons/pi";
import Image from "next/image";
import taiwo from "../public/taiwo.png";
import goldies from "../public/goldies.png";
import finloop from "../public/finloop.png";
import billia from "../public/billia.png";
import blog from "../public/blogpost.png";
import beauty from "../public/beautyexpat.png";
import kiddies from "../public/kiddiesAuto.png";
import job from "../public/jobPosts.png";
import quizApp from "../public/quiz_app.png";
import wanderlay from "../public/wanderlay.png";
import tsu from "../public/TSU.png";
import events from "../public/events.png";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  tech: string[];
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, _setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Goldies Application",
      description:
        // "Collaborated in an e-commerce app suitable for sales of baked goods",
        "A high-performance e-commerce solution for specialty baked goods, featuring a robust, three-tier Role-Based Access Control (User, Admin, Super Admin) and optimized for seamless transactions and inventory management.",
      tech: [
        "Next.js",
        "TypeScript",
        "API Integration",
        "State management(Redux, Zustand)",
        "React Query",
        "ShadCN",
        "SCSS",
        "Jest",
      ],
      github: "https://github.com/idyWilliams/goldies_frontend/",
      demo: "https://goldies-frontend-v3.vercel.app/",
      image: goldies.src,
    },
    {
      id: 2,
      title: "Finloop Application",
      description:
        // "Developed an admin dashboard app suitable for loan management app.",
        "A robust, high-efficiency administrative dashboard built for a loan management system, designed to give administrators and loan officers a single, streamlined interface for processing, approving, and tracking high-volume financial data.",
      tech: [
        "Next.js",
        "TypeScript",
        "API Integration",
        "Tanstack",
        "ShadCN",
        "React Hook + Yup Resolver",
        "SCSS",
      ],
      github: "https://github.com/TaiwoSaidat/finloop-app",
      demo: "https://finloop-app.vercel.app/",
      image: finloop.src,
    },
    {
      id: 4,
      title: "Beauty Expert Application",
      description:
        // "This is an app that connects small business beauty technicians to customers. Features include sign in and sign up for experts and customers, customer booking system, and display for previous projects for experts. ",
        "A responsive, feature-rich service marketplace designed to empower local beauty professionals and simplify the booking process for customers.",
      tech: ["React", "Javascript", "React Router", "Tailwind", "SCSS"],

      github: "https://github.com/Lahitan/beautyexpert/",
      demo: "https://beautyxpert.netlify.app/",
      image: beauty.src,
    },
    {
      id: 5,
      title: "Kiddies Auto Application",
      description:
        // "An e-commerce store built. It displays a list of available products with pricing, description and image. Features include product display and payment system ",
        "A foundational e-commerce store frontend built for speed and maintainability. It features dynamic product listings (including pricing, descriptions, and imagery) and integrates a clean payment workflow simulation.",
      tech: ["Reactjs", "Typescript", "Tailwind", "CSS", "HTML"],
      github: "https://github.com/TaiwoSaidat/Kiddies-Auto-Web-App",
      demo: "https://kiddies-auto-web-app.vercel.app/",
      image: kiddies.src,
    },
    {
      id: 11,
      title: "Event Nest Application",
      description:
        "An app showcasing upcoming events in the neighborhood, for humans and their pets.",
      tech: ["Next.js", "TypeScript", "SCSS", " Fetch Api"],
      github: "https://github.com/TaiwoSaidat/event-nest",
      demo: "https://event-nest-eta.vercel.app/",
      image: events.src,
    },
    {
      id: 12,
      title: "Billia Application",
      description:
        // "Developed an app suitable for sorting and payment of bills.",
        "a focused, single-purpose application designed to streamline the chaotic process of bill management",
      tech: ["Next.js", "TypeScript", "ShadCN", "SCSS"],
      github: "https://github.com/TaiwoSaidat/billia-app",
      demo: "https://billia-app.vercel.app/",
      image: billia.src,
    },
    // {
    //   id: 6,
    //   title: "Job Listings Application",
    //   description:
    //     "This is a job listings app to display a list of job postings. Each job listing has a title, company name, and description. Clicking a job navigates to a detailed job page which displays the full details of the job. Other features include search for filtering, load more and a form where users can submit new job listings display.",
    //   tech: ["Next", "Typescript", "Tailwind", "SCSS"],
    //   github: "https://github.com/TaiwoSaidat/tech-jobs-listings-app",
    //   demo: "https://tech-jobs-listings-app.vercel.app/",
    //   image: job.src,
    // },
    // {
    //   id: 7,
    //   title: "Feedback App",
    //   description:
    //     "This is a review app . ",
    //   tech: ["React JS", "HTML", "Tailwind", "CSS"],
    //   github: "https://github.com/TaiwoSaidat/Feedback-Application",
    //   demo: "https://kiddies-auto-web-app.vercel.app/",
    //   image: tsu.src,
    // },
    // {
    //   id: 8,
    //   title: "Quiz Application",
    //   description:
    //     "This is a quiz application that displays questions and give a score at the end of the quiz.",
    //   tech: ["React JS", "HTML", "Tailwind", "CSS"],
    //   github: "https://github.com/TaiwoSaidat/Quiz_Application/",
    //   demo: "https://quiz-application-plum.vercel.app/",
    //   image: quizApp.src,
    // },
    // {
    //   id: 10,
    //   title: "Tech Start Up Application",
    //   description:
    //     "This is a business website for a Software Development start up.",
    //   tech: ["NextJS", "Typescript", "Tailwind", "HTML", "CSS"],
    //   github: "https://github.com/TaiwoSaidat/tech-start-up-app/",
    //   demo: "https://tech-start-up-app.vercel.app/",
    //   image: tsu.src,
    // },
    // {
    //   id: 9,
    //   title: "Wanderlay Application",
    //   description: `This is the landing page of a travel company's website.`,
    //   tech: ["NextJS", "Typescript", "HTML", "Tailwind", "CSS"],
    //   github: "https://github.com/TaiwoSaidat/wanderlay-travel-app/",
    //   demo: "https://wanderlay-travel-app.vercel.app/",
    //   image: wanderlay.src,
    // },
    // {
    //   id: 3,
    //   title: "Post Craft Application",
    //   description:
    //     "This is a CRUD app displaying blog posts. Each post has a title, date created by, number of likes, and a preview. Clicking on each post navigates to a pop-up showing the full post. Features include add, delete, like, dislike and edit posts.",
    //   tech: ["ReactJS", "Firebase", "Tailwind"],
    //   github: "https://github.com/TaiwoSaidat/Simple-Blog-Website",
    //   demo: "https://simple-blog-website-eta.vercel.app/",
    //   image: blog.src,
    // },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Freelance Projects",
      position: "Frontend Engineer",
      duration: "2025 - Present",
      description: [
        "Led front-end efforts by building frontend features for company sites improving lead generation and online visibility by 70%.",
        "Optimised company websites cutting page load times by 40% and boosting Lighthouse scores by 60%.",
        "Worked with clients to ascertain their needs to develop and optimize responsive applications, ",
        "Delivered features in agile sprints, increasing client satisfaction and securing repeat projects.",
      ],
      tech: [
        "React.js",
        "Next.js",
        "Typescript",
        "REST APIs",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "Redux",
        "Zustand",
        "React Query",
        "ShadCN",
        "SCSS",
        "Jest",
      ],
    },
    {
      id: 2,
      company: "i-Sentry Technologies",
      position: "Frontend Developer",
      duration: "2024 - 2025",
      description: [
        "Architected frontend features (including auth flow, checkout flow, shop, user pages) for an e-commerce app enhancing user experience by 80%.",
        "Consumed Rest API ensuring seamless backend integration.",
        "Conducted testing, identifying and documenting bugs via Jira for quick turnaround fixes improving page load times by 78%.",
        "●	Converted figma to responsive pixel perfect designs improving Lighthouse scores to 95%,",
      ],
      tech: [
        "Typescript",
        "Nextjs",
        "Tailwind",
        "REST APIs",
        "JavaScript (ES6+)",
        "Redux",
        "Zustand",
        "React Query",
        "ShadCN",
        "SCSS / SASS",
        "Jest",
      ],
    },
    {
      id: 3,
      company: "Tech4Dev",
      position: "Frontend Developer | Fellow",
      duration: "2023 - 2024",
      description: [
        "Developed a beauty marketplace to connecting beauticians with clients.",
        "Converted Figma wireframes into pixel-perfect, accessible, and cross-browser compatible UIs, ensuring mobile-first design.",
        "Implemented performance optimizations (code splitting, lazy loading, caching), cutting page load times by 40% and boosting Lighthouse scores.",
        "Collaborated in a cross-functional team working in an Agile environment to present MVP in a timely manner.",
      ],
      tech: ["Reactjs", "SASS", "Tailwind", "CSS", "JavaScript", "HTML5"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen  bg-slate-900 text-white  ">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="  flex justify-between gap-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              <Link href="/" className="flex items-center ">
                <p className="">Taiwo Oyewale</p>
              </Link>

              <div className=" items-center  flex ">
                <Link
                  href="/Taiwo_Oyewale_Resume_Frontend_Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-transparent rounded-full hover:bg-slate-700 transition-colors group"
                >
                  <FileType
                    size={16}
                    className="text-slate-300 group-hover:text-blue-400 transition-colors"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-left w-full text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="  min-h-screen pt-8 flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                {imageError ? (
                  <User size={48} className="text-blue-400" />
                ) : (
                  <Image
                    src={taiwo}
                    alt="Taiwo Oyewale"
                    className="rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-relaxed mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Taiwo Oyewale
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Frontend Developer crafting exceptional digital experiences
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable applications with modern
            technologies. Specialized in Next.js, Typescript, Tailwind, State
            Management, API integration and Jest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-none">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 cursor-pointer border border-slate-600 rounded-full font-medium hover:bg-slate-800 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          {/* social media links */}
          <div className="flex justify-center flex-wrap gap-4 p-4 ">
            <Link
              href="https://github.com/TaiwoSaidat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <Github
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/taiwo-oyewale199/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <Linkedin
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
            <Link
              href="/Taiwo_Oyewale_Resume_Frontend_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <FileType
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
            <Link
              href="https://medium.com/@oyewaletaiwo1803"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <SiMedium
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
            <Link
              href="mailto:oyewaletaiwo1803@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <Mail
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
            <Link
              href="https://wa.me/+2348145701901"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-115 transition-all duration-300 group"
            >
              <PiWhatsappLogoLight
                size={24}
                className="group-hover:text-blue-400 transition-colors"
              />
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With over 2 years of experience in software development, I
                specialize in creating robust, scalable applications that solve
                real-world problems. My journey began with a curiosity about how
                things work, which evolved into a passion for building
                innovative solutions.
              </p>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I thrive in collaborative environments where I can contribute to
                meaningful projects while continuously learning and growing. My
                approach combines technical excellence with user-centered design
                principles.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-slate-400">
                    Technologies Mastered
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    2+
                  </div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              {[
                {
                  category: "Frontend",
                  skills: [
                    "TypeScript",
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                    "Redux",
                    "Zustand",
                    "React Query",
                    "SCSS/SASS",
                    "CSS",
                    "HTML",
                  ],
                },
                {
                  category: "Tools and Platforms",
                  skills: [
                    "Firebase/Firestore",
                    "Postman",
                    "Jest",
                    "Git",
                    "GitHub",
                    "Figma",
                    "Vercel",
                    "Netlify",
                    "Jira",
                    "Teams",
                    "Slack",
                  ],
                },
                {
                  category: "Concepts and Practices",
                  skills: [
                    "REST APIs",
                    "Agile/Scrum",
                    "CI/CD",
                    "UI/UX Principles",
                    "Web Accessibility",
                  ],
                },
              ].map((skillGroup, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, _) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-slate-300 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="text-sm text-slate-400 bg-slate-700 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-slate-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-none">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="h-48 bg-slate-700 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-xs rounded text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto  space-y-4 py-4">
          <h2 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-none">
            {/* Let&apos;s Work Together */}
            Dear future employer,
          </h2>
          {/* <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dear future employer,
          </h3> */}
          <p className=" ">
            If you&apos;ve made it this far, thank you. You&apos;ve likely seen
            the projects, the code, and the case studies, and now you&apos;re
            looking for the person behind them — so here I am.
          </p>
          {/* <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s connect and discuss how we can create something
            amazing together.
          </p> */}
          <p className="">
            Let&apos;s skip the boilerplate. What I bring to the table is a
            proven ability to deliver tangible impact. You&apos;re not just
            hiring someone to just maintain the status quo; you&apos;re hiring a
            problem-solver who sees a roadmap.
          </p>
          <p className="">
            {/* For instance, I&apos;m particularly proud of{" "}
            <span className="text-bold">
              re-architecting the checkout flow for Goldies Application, which
              increased conversion by 15%.
            </span> */}
            {/* This isn&apos;t just a bullet point; it shows */}I don&apos;t
            settle for &quot;good enough&quot; when &quot;great&quot; is
            achievable. My approach is always rooted in the belief that the best
            solutions are the ones that are both technically robust and
            genuinely helpful to the user.
          </p>
          <h3 className=" text-center text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What You Can Expect from Me
          </h3>
          <ul>
            <li>
              <span className="text-blue-400 mr-2">•</span>A Proactive Partner
              &#129303;
            </li>
            <li>
              <span className="text-blue-400 mr-2">•</span>A Focus on the
              &quot;Why&quot; &#129300;
            </li>
            <li>
              <span className="text-blue-400 mr-2">•</span>
              Unflappable Energy &#128170;
            </li>
          </ul>

          {/* <p className="">You've seen the portfolio, now let’s talk about the impact.
          What I bring to your project isn't just a skillset; it’s a proven ability to deliver tangible, measurable results. I don’t just handle tasks; I solve the underlying problems. Case in point: [Insert your best, single, quantifiable achievement here, e.g., "re-architecting the checkout flow, which boosted conversion by 15%"].
          That achievement is just one example of how I approach every challenge: with proactive energy and a focus on both technical excellence and genuine user value. My goal is simple: to be the partner who seeks out the issues, proposes robust solutions, and elevates the entire product.
          You’re getting a resourceful team player who loves this work and is eager to jump into your biggest challenges. I'm ready to help you achieve something outstanding.
          Looking forward to our conversation.
          </p> */}
          <p className="">
            I&apos;m eager to take on your biggest challenges and contribute to
            a project I can be proud of. My aim is simple: to bring my unique
            blend of technical expertise and human-centered strategy to your
            mission and help us both achieve something truly outstanding.
          </p>
          <p className="">
            I look forward to discussing how I can deliver impact on your team.
            Cheers
          </p>
          <p className="">TSO🚀</p>

          <div className=" text-center grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <Mail
                size={32}
                className="mx-auto mb-4 text-blue-400 hover:scale-115 transition-all duration-300"
              />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-400 break-words">
                oyewaletaiwo1803@gmail.com
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <Linkedin
                size={32}
                className="mx-auto mb-4 text-blue-400 hover:scale-115 transition-all duration-300"
              />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400  break-words  ">
                www.linkedin.com/in/taiwo-oyewale199/
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <Github
                size={32}
                className="mx-auto mb-4 text-blue-400 hover:scale-115 transition-all duration-300"
              />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400">@TaiwoSaidat</p>
            </div>
          </div>
          <Link
            href="mailto:oyewaletaiwo1803@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium text-lg hover:shadow-lg hover:scale-115 transition-all duration-300 "
          >
            <Mail size={20} className="mr-2" />
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 text-center text-slate-400">
        <p>
          &copy; 2025{" "}
          <Link href="https://www.github.com/taiwosaidat">TaiwoSaidat</Link>.
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
