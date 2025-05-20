import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/sections";


{/* Education & Experience */}
export default function EducationAndExperience() {
    return (
        <AnimatedSection className="space-y-6" delay={0.4}>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">Education</h2>
          <div className="flex justify-center">
          {/* <div className="grid gap-6 md:grid-cols-2"> */}
            <Card className="transition-all duration-300 hover:shadow-lg max-w-2xl w-full">
              <CardContent className="p-6 space-y-4">
                {/* <h3 className="text-xl font-bold">Education</h3> */}
                <div className="space-y-4">
                  {[
                    {
                      degree: "Bachelor of Technology in Computer Science",
                      institution: "Amrita Vishwa Vidyapeetham",
                      year: "2022 - present",
                      description:
                        "Pursuing CSE with a focus on full-stack development, AI/ML, and hands-on projects.",
                    },
                    {
                      degree: "High School",
                      institution: "Chinmaya Vidyalaya",
                      year: "2021 - 2022",
                      description:
                        "Pursued foundational education with a strong emphasis on academics, discipline, and holistic development.",
                    },
                  ].map((edu, index) => (
                    <div
                      key={index}
                      className="space-y-1 pb-3 border-b last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="font-bold">{edu.degree}</div>
                      <div className="text-violet-600 dark:text-violet-400">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.year}</div>
                      <p className="text-sm text-muted-foreground pt-1">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Experience</h3>
                <div className="space-y-4">
                  {[
                    {
                      position: "Senior Full-Stack Developer",
                      company: "Tech Innovations Inc.",
                      year: "2023 - Present",
                      description:
                        "Leading development of enterprise applications, mentoring junior developers, and implementing best practices.",
                    },
                    {
                      position: "Full-Stack Developer",
                      company: "Digital Solutions Ltd.",
                      year: "2020 - 2023",
                      description:
                        "Built and maintained multiple client projects using React, Node.js, and various database technologies.",
                    },
                    {
                      position: "Front-End Developer",
                      company: "Creative Web Agency",
                      year: "2018 - 2020",
                      description:
                        "Developed responsive and accessible user interfaces for various client websites and web applications.",
                    },
                  ].map((exp, index) => (
                    <div
                      key={index}
                      className="space-y-1 pb-3 border-b last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="font-bold">{exp.position}</div>
                      <div className="text-violet-600 dark:text-violet-400">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.year}</div>
                      <p className="text-sm text-muted-foreground pt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </AnimatedSection>
    );
}
