"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Bachelor's in Computer Science and Engineering",
    company: "Morden Institute of Technology & Research Center - Alwar, Rajasthan",
    period: "2021 - 2025",
    description:
      "Focused on software development methodologies and programming fundamentals. Participated in multiple hackathons and coding competitions.",
    type: "education",
  },
  {
    id: 2,
    title: "School - 12th Grade",
    company: "Apoorva Public Sr. Sec. School - Rajgarh, Alwar, Rajasthan",
    period: "2020 - 2021",
    description:
      "Completed my 12th grade with a focus on Science and Mathematics. Participated in various extracurricular activities, including coding clubs and science fairs.",
    type: "education",
  },
];

const ExperienceEducation = () => {
  return (
    <section id="experience" className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
            >
              <div
                className={`flex ${
                  index % 2 === 0
                    ? "flex-row md:pr-8"
                    : "flex-row-reverse md:pl-8"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="w-full md:w-1/2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                      <div className="rounded-full bg-primary p-1 text-primary-foreground">
                        {exp.type === "work" ? (
                          <Briefcase className="h-4 w-4" />
                        ) : (
                          <GraduationCap className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <Badge className="ml-auto">{exp.period}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
