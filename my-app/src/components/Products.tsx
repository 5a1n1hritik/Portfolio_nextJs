"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import blog from "../../public/assets/blog.jpeg";
import Ecommerse from "../../public/assets/e-commerce.jpeg";
import onlineLearning from "../../public/assets/online-education.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: Ecommerse,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, file sharing, and team communication features.",
    image: "https://image.lexica.art/full_webp/a1cc89f5-90b9-489c-81b0-97d63adde5af",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description:
      "A comprehensive health tracking application with workout plans, nutrition logging, and progress visualization.",
    image: "https://image.lexica.art/full_webp/c2651ae5-78d4-4e60-9665-f3936edbf61d",
    tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather forecasting application with real-time data, location tracking, and customizable themes.",
    image: "https://store-images.s-microsoft.com/image/apps.28549.14334287415126216.4c73be19-2133-4cd4-b94a-a32e25381959.0a3374a3-4415-45dc-8363-b062c1907d2d",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    demoUrl: "https://weather-app-blond-ten-28.vercel.app/",
    githubUrl: "https://github.com/5a1n1hritik/Weather-App",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A blogging platform with user authentication, post creation, commenting, and social sharing features.",
    image: blog,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "A real-time chat application with user authentication, group chats, and media sharing capabilities.",
    image: "https://image.lexica.art/full_webp/252b27a2-51c7-4a9d-8150-a7ba705d7be9",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Online Learning Platform",
    description:
      "An online learning platform with course creation, video hosting, and user progress tracking.",
    image: onlineLearning,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Social Media Dashboard",
    description:
      "A social media management dashboard with post scheduling, analytics, and user engagement features.",
    image: "https://image.lexica.art/full_webp/01ba2498-805f-4547-a7eb-1836d5b82173",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Travel Planner",
    description:
      "A travel planning application with itinerary creation, location suggestions, and user reviews.",
    image: "https://image.lexica.art/full_webp/6d58189b-f5c4-42a1-81b5-c2a9dd2813b6",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];

const Products = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            A selection of my recent work
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative w-full aspect-[16/9] group overflow-hidden rounded-t-md">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
