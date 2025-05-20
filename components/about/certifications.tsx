"use client";

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Career Essentials in Software Development",
    issuer: "Linkedin and Microsoft",
    date: "2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/15e65075ac6b83349b84591591efb5d8afa95580010e892773e3c073bea4b11e?trk=share_certificate"
  },
  {
    id: 2,
    title: "AI Fundamentals certificate",
    issuer: "Datacamp",
    date: "2022",
    credentialUrl: "https://www.datacamp.com/skill-verification/AIF0023082677649"
  }
];

export default function Certifications() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={cert.id}>
                  <div className="flex items-start gap-4">
                    <div className="bg-violet-500/10 p-2 rounded-full">
                      <Award className="h-5 w-5 text-violet-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-semibold">{cert.title}</h3>
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                      {cert.credentialUrl && (
                        <Button variant="ghost" size="sm" className="h-8 gap-1 p-0" asChild>
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <span className="text-xs text-violet-500">View Credential</span>
                            <ExternalLink className="h-3 w-3 text-violet-500" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  {index < certifications.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}