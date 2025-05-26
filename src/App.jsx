import React from "react";
import { Card, CardContent } from "./components/ui/card";
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
    <div className="min-h-screen flex flex-col justify-center items-center p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center"
      >
        <img
          src="./src/assets/anvesh.jpg"
          alt="Anvesh Babu Yarlagadda"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Anvesh Babu Yarlagadda</h1>
        <p className="text-lg text-gray-600">Frontend Engineering Lead</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Anvesh777-ai" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/anveshyarlagadda" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:babuanvesh@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </motion.div>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <Card key={skill} className="text-center">
              <CardContent>{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
        <div className="space-y-4">
          {projects.map(project => (
            <Card key={project.name}>
              <CardContent>
                <h3 className="text-xl font-bold text-center">{project.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{project.description}</p>
                <div className="flex justify-center">
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
