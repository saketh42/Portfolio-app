"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleBackground from './particles';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-[600px]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[length:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 dark:from-violet-950/30 dark:to-purple-950/30" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-700">
                <TypeAnimation
                  sequence={[
                    '',
                    1000,
                    'I am SAKETH',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                />
              </span>{" "}
              <br />
              Building the Future, One Line at a Time
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            I build innovative solutions using cutting-edge technologies, with a focus on creating responsive, user-friendly applications that solve real-world problems. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="gap-2 group">
              <Link href="/projects">
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
