"use client";

import { motion } from 'framer-motion';
import { 
  Code, Database, Globe, Layout, 
  BarChart, Server, Terminal 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-violet-500" />,
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Backend",
    icon: <Server className="h-6 w-6 text-violet-500" />,
    skills: ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"]
  },
  {
    id: 3,
    title: "Database",
    icon: <Database className="h-6 w-6 text-violet-500" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    id: 4,
    title: "DevOps",
    icon: <Terminal className="h-6 w-6 text-violet-500" />,
    skills: ["Docker", "GCP"]
  },
  {
    id: 5,
    title: "Languages",
    icon: <Code className="h-6 w-6 text-violet-500" />,
    skills: ["JavaScript", "Python", "Java", "C++"]
  },
  {
    id: 6,
    title: "Tools & Methods",
    icon: <Globe className="h-6 w-6 text-violet-500" />,
    skills: ["Git", "Figma"]
  },
  {
    id: 7,
    title: "Web & Mobile",
    icon: <Globe className="h-6 w-6 text-violet-500" />,
    skills: ["Responsive Design", "PWA", "React Native", "Flutter", "SEO", "Accessibility"]
  },
  {
    id: 8,
    title: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-violet-500" />,
    skills: ["Data Visualization", "Analytics"]
  },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground">
          Technologies and tools I&apos;ve worked with throughout my career.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-violet-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500/70" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}