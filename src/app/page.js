"use client";
import Image from "next/image";
import dp from "../../public/dp.jpg";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image3 from "../../public/3.jpg";
import image4 from "../../public/4.jpg";
// import image5 from "../public/5.png";

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "Modern web quiz application with advanced features",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: image1,
      liveUrl: "https://vmishradev.github.io/Quiz/",
      sourceUrl: "https://github.com/Vmishradev/Quiz",
    },
    {
      title: "Project 2",
      description: "Tic-Tac-Toe Game",
      technologies: ["React"],
      image: image2,
      liveUrl: "https://tic-tac-toe-game-2025.netlify.app/",
      sourceUrl: "https://github.com/Vmishradev/tic-tac-toe-game",
    },
    {
      title: "Project 3",
      description:
        "A normal multi-page react website with a visually appealing landing page",
      technologies: ["React"],
      image: image3,
      liveUrl: "https://astro-nexus-one.vercel.app/",
      sourceUrl: "https://github.com/Vmishradev/Astro_Nexus",
    },
    {
      title: "Project 4",
      description: "Mobile-first social media application",
      technologies: ["React", "Tailwind CSS", "Motion"],
      image: image4,
      liveUrl: "https://cookcraft-alpha.vercel.app/",
      sourceUrl: "https://github.com/Vmishradev/cookcraft",
    },
    // {
    //   title: "Project 5",
    //   description: "AI-powered content management system",
    //   technologies: ["Python", "TensorFlow", "Docker"],
    //   // image: image5,
    //   liveUrl: "https://project5-demo.com",
    //   sourceUrl: "https://github.com/username/project5",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950/20 transition-all duration-500">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-conic from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow reverse"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between mb-16"
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm">
              <Image
                src={dp}
                alt="profile picture"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill
              />
            </div>
          </motion.div>
        </motion.header>

        <main className="space-y-20">
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.h1
                className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Vishal Mishra
              </motion.h1>
              <div className="flex items-center justify-center gap-3 text-lg text-slate-600 dark:text-slate-400">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 font-medium">
                  Web Developer
                </span>
                <span className="text-slate-400">•</span>
                <span>Delhi, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                Crafting Modern, Responsive & Interactive Web Experiences
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Frontend developer with expertise in{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    HTML, CSS, JavaScript, React
                  </span>{" "}
                  and modern styling frameworks like{" "}
                  <span className="font-semibold text-azure-600 dark:text-azure-400">
                    Tailwind CSS
                  </span>
                  . Proficient in building highly responsive, accessible, and
                  user-friendly interfaces.
                </p>
                <p>
                  Experienced in crafting dynamic UI animations using{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Framer Motion
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    GSAP
                  </span>
                  . Passionate about delivering seamless digital experiences
                  while collaborating effectively in fast-paced team
                  environments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4"
            >
              <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </Button>

              <div className="flex items-center gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Vmishradev",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/vishal-mishra-805b92267/",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaTwitter,
                    href: "https://x.com/codeitvishal?t=DAbs_2PrTw7SYfpYsakQnA&s=09",
                    label: "Twitter",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Education
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-300/50 dark:hover:border-emerald-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="space-y-2">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        September, 2022 - Present
                      </p>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        BCA
                      </h3>
                      <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
                        St. Andrews Institute of Technology and Management,
                        Affiliated by Maharishi Dayanand University
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Had already given the final exams for this degree just
                    awaiting for their results.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button
                              variant="default"
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-full"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                          <Link
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
                            >
                              <FaGithub className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-center py-8 border-t border-slate-200/50 dark:border-slate-700/50"
          >
            <p className="text-slate-500 dark:text-slate-400">
              © 2025 Vishal Mishra. Crafted with passion and precision.
            </p>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}
