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
              src="./Pic.jpg"
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
                  I&apos;m a passionate software developer and student, just starting my journey in tech with a strong interest 
                  in full-stack development and AI/ML. I love bringing ideas to life by building applications that solve 
                  meaningful problems — from mental health support to productivity enhancement. One such project is HopeLens, 
                  an app focused on making mental wellness more accessible.
                </p>
                <p>
                  Curious by nature, I thrive on learning new technologies and tackling real-world challenges through innovative 
                  solutions. Whether I&amp;m collaborating in a team or building something solo, I find joy in the process of 
                  creation and iteration.
                </p>
                <p>
                  Outside of coding, I’m into photography, football, and a bit of gaming. I’ve recently started contributing 
                  to open-source projects, aiming to grow as a developer while giving back to the community. My journey is 
                  just beginning, but I’m excited to keep learning, building, and growing every step of the way.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 hover:scale-105">
                  <Link href="/contact" className='text-white'>Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="transition-all duration-300 hover:scale-105 group">
                  <Link href="./Main.pdf" download>
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