"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Software Developer",
    organization: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Managing a team of 5 developers and implementing CI/CD practices.",
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client web applications. Implemented new features and optimized performance for existing systems.",
    type: "work"
  },
  {
    id: 3,
    title: "Master's in Computer Science",
    organization: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in software engineering and cloud computing. Thesis on scalable microservices architecture.",
    type: "education"
  },
  {
    id: 4,
    title: "Junior Developer",
    organization: "StartUp Hub",
    period: "2017 - 2018",
    description: "Worked on front-end development using React. Contributed to the design and implementation of user interfaces.",
    type: "work"
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    organization: "State University",
    period: "2013 - 2017",
    description: "Fundamentals of programming, data structures, algorithms, and software design principles.",
    type: "education"
  }
];

export default function Journey() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground">
            The path I&apos;ve taken through education and professional experience.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 top-0 h-full w-px bg-border"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-5 gap-4",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Period - Left side on even, right side on odd */}
                <div className={cn(
                  "md:col-span-2",
                  index % 2 === 0 ? "md:order-1" : "md:order-3"
                )}>
                  <div className={cn(
                    "flex items-center gap-2",
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  )}>
                    <span className="text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                </div>
                
                {/* Icon in the middle */}
                <div className="relative md:col-span-1 md:order-2 flex justify-center">
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center z-10",
                      item.type === 'education' ? 'bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300' : 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300'
                    )}
                  >
                    {item.type === 'education' ? (
                      <GraduationCapIcon className="h-5 w-5" />
                    ) : (
                      <BriefcaseIcon className="h-5 w-5" />
                    )}
                  </div>
                </div>
                
                {/* Content - Right side on even, left side on odd */}
                <div className={cn(
                  "md:col-span-2",
                  index % 2 === 0 ? "md:order-3" : "md:order-1"
                )}>
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.organization}</p>
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}