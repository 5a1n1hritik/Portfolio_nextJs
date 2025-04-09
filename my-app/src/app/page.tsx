"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroParallax } from "@/components/ui/hero-parallax";
import profile from "@/components/data/images/profile.jpeg";
import AboutSection from "@/components/AboutSection";
import BlobBackground from "@/components/BlobBackground";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="min-h-screen">
      <BlobBackground />
      <HeroParallax className="min-h-[calc(100vh-4rem)]">
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] items-center py-12 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-0 -left-40 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 -right-40 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container px-4 md:px-6 lg:px-8 mx-auto flex items-center justify-center h-full">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 mt-5 text-sm text-primary">
                      Full Stack Developer
                    </span>
                  </motion.div>
                  <motion.h1
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Hi, I'm{" "}
                    <span className="relative z-10 text-primary">
                      Hritik Saini
                    </span>
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground sm:text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    I create exceptional digital experiences that make an
                    impact. Specializing in modern web applications with clean,
                    efficient code.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button size="lg" onClick={scrollToContact} className="group">
                    Let's Talk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#projects">View Projects</a>
                  </Button>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    href="https://github.com/5a1n1hritik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/hritik-saini-559a7b252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:sainihritik033@gmail.com"
                    className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96">
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse"
                    style={{ animationDuration: "4s" }}
                  />
                  <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-primary/20 bg-muted/50 backdrop-blur-sm">
                    <Image
                      src={profile}
                      alt="hritik saini"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground font-bold text-sm backdrop-blur-sm">
                    <span>
                      1+ Years
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </HeroParallax>

      <AboutSection />
    </main>
  );
}
