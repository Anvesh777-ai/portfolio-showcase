import React from "react";
import { Card, CardContent } from "./components/UI/card";
import { Button } from "./components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript/TypeScript",
  "HTML & CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "UI/UX Design"
];

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills, projects, and resume.",
    link: "#"
  },
  {
    name: "Task Manager App",
    description: "A full-stack app to manage daily tasks with authentication and CRUD features.",
    link: "#"
  },
  {
    name: "Blog Platform",
    description: "A blogging platform built with MERN stack featuring user roles and markdown support.",
    link: "#"
  }
];

export default function PortfolioShowcase() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Anvesh Babu Yarlagadda</h1>
        <p className="text-lg text-gray-600">Full-Stack Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Anvesh777-ai" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/anveshyarlagadda/" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:babuanvesh@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </motion.div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <Card key={skill} className="text-center">
              <CardContent>{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map(project => (
            <Card key={project.name}>
              <CardContent>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
