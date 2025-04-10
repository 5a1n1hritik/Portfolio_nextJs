"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import profile from "@/components/data/images/profile.jpeg";
import { WaterBalloonEffect } from "./ui/water-balloon-effect";

const AboutSection = () => {
  return (
    <>
      <WaterBalloonEffect className="bg-muted/40">
        <section id="about" className="bg-muted/40 px-4 py-16 sm:px-6 md:py-24">
          <div className="container mx-auto items-center justify-center px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Get to know me and my background
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative h-75 w-75 sm:w-92 sm:h-82 md:w-96 md:h-96 overflow-hidden rounded-full lg:rounded-2xl border-2 border-primary">
                  <Image
                    src={profile}
                    alt="Profile"
                    fill
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold">Hello there!</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed ">
                  I'm Hritik Saini, a Full Stack Developer based in India. With
                  a passion for technology and a love for coding, I specialize
                  in creating dynamic and responsive web applications. I have a
                  strong foundation in both front-end and back-end development,
                  allowing me to build complete solutions that deliver
                  exceptional user experiences.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the
                  latest industry trends. I am always eager to explore new
                  technologies and frameworks to enhance my skill set. I enjoy
                  working on projects that push my boundaries and allow me to
                  grow as a developer. I am proficient in various programming
                  languages and frameworks, including React, Node.js, and
                  Express. I have a strong understanding of web development
                  principles and best practices, which enables me to create
                  efficient and scalable applications. I am also experienced in
                  working with databases, RESTful APIs, and version control
                  systems like Git.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold text-4xl text-primary">0+</h4>
                      <p className="text-sm text-muted-foreground">
                        Years Experience
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold text-4xl text-primary">5+</h4>
                      <p className="text-sm text-muted-foreground">
                        Projects Completed
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </WaterBalloonEffect>
    </>
  );
};

export default AboutSection;
