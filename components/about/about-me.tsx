"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';


export default function AboutMe() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-5 gap-8 items-center"
      >
        <div className="md:col-span-2">
          <div className="relative w-full max-w-sm mx-auto aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a passionate software developer with over 5 years of experience in building 
                  web applications and digital solutions for various industries. My journey in 
                  software development began during my university years and has evolved into a 
                  fulfilling career focused on creating impactful digital experiences.
                </p>
                <p>
                  Specializing in full-stack development, I enjoy working with modern JavaScript 
                  frameworks and libraries to build responsive, user-friendly applications. I&apos;m 
                  particularly interested in creating solutions that solve real-world problems and 
                  enhance user experiences.
                </p>
                <p>
                  Beyond coding, I&apos;m an advocate for best practices in software development, including 
                  test-driven development, continuous integration, and writing clean, maintainable code. 
                  I believe in lifelong learning and constantly stay updated with the latest technologies 
                  and industry trends.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new hiking trails, experimenting with 
                  photography, or contributing to open-source projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 hover:scale-105">
                  <Link href="/contact" className='text-white'>Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="transition-all duration-300 hover:scale-105 group">
                  <Link href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />{" "}
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}