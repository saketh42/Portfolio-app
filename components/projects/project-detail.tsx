"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

const AnimatedSection = motion.section;

interface ProjectDetailProps {
  project: Project;
  id: string;
}

export default function ProjectDetail({ project, id }: ProjectDetailProps) {
  return (
    <div className="px-6 md:px-8 py-8 md:py-12 space-y-10">
      {/* Back Button */}
      <AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <Button asChild variant="ghost" className="group transition-all duration-300 hover:-translate-x-1">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>
      </AnimatedSection>

      {/* Project Header */}
      <AnimatedSection className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="transition-all duration-300 hover:bg-violet-100 dark:hover:bg-violet-900/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">{project.description}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <Button asChild className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 hover:scale-105">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Live Demo{" "}
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" className="transition-all duration-300 hover:scale-105 group">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Code <Github className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </Button>
          )}
        </div>
      </AnimatedSection>

      {/* Main Image */}
      <AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="relative aspect-video w-full overflow-hidden rounded-lg border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </AnimatedSection>

      {/* Project Details */}
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <AnimatedSection className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <div className="prose prose-violet dark:prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="transition-all duration-300 hover:text-violet-700 dark:hover:text-violet-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <div className="h-2 w-2 mt-2 rounded-full bg-violet-500"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Gallery */}
          <AnimatedSection className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="space-y-8">
          {/* Project Info */}
          <AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Project Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Year</div>
                    <div className="transition-all duration-300 hover:text-violet-600">{project.year}</div>
                    <div className="text-muted-foreground">Type</div>
                    <div className="transition-all duration-300 hover:text-violet-600">Web Application</div>
                    <div className="text-muted-foreground">Role</div>
                    <div className="transition-all duration-300 hover:text-violet-600">Full-Stack Developer</div>
                    <div className="text-muted-foreground">Duration</div>
                    <div className="transition-all duration-300 hover:text-violet-600">3 months</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Technologies Used</h3>
                  <div className="space-y-4">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category} className="space-y-1">
                        <div className="text-sm font-medium text-violet-600 dark:text-violet-400">{category}</div>
                        <div className="flex flex-wrap gap-1">
                          {techs.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="transition-all duration-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Related Projects */}
          <AnimatedSection className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
            <h3 className="font-bold text-lg">Related Projects</h3>
            <div className="space-y-4">
              {Object.entries(projects)
                .filter(([projectId]) => projectId !== id)
                .slice(0, 2)
                .map(([projectId, relatedProject]) => (
                  <Card key={projectId} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <h4 className="font-bold">{relatedProject.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.description}</p>
                      <Button
                        asChild
                        variant="ghost"
                        className="p-0 h-auto text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 group"
                      >
                        <Link href={`/projects/${projectId}`} className="flex items-center gap-1">
                          View Project{" "}
                          <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}