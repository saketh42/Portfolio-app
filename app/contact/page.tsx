"use client"

import { Badge } from "@/components/ui/badge"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Code, } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import PageTransition from "@/components/contact/page-transition"
import AnimatedSection from "@/components/animations/animated-section"
import AnimatedText from "@/components/animations/animated-text"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-12 space-y-8">
        <AnimatedSection className="space-y-4" delay={0.1}>
          <AnimatedText
            text="Get In Touch"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            delay={0.1}
          />
          <p className="text-muted-foreground max-w-[700px]">
            Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you. Fill out the
            form below or reach out through any of the provided contact methods.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-violet-500 focus:ring-violet-500"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-violet-500 focus:ring-violet-500"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-violet-500 focus:ring-violet-500"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-violet-500 focus:ring-violet-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-violet-600 hover:bg-violet-700 transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Mail className="h-5 w-5 text-violet-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link
                          href="mailto:sakethspai04@gmail.com"
                          className="hover:text-violet-600 transition-colors duration-300"
                        >
                          sakethspai04@gmail.com
                        </Link>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Phone className="h-5 w-5 text-violet-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link href="tel:+919072242443" className="hover:text-violet-600 transition-colors duration-300">
                          +91 90722 42443
                        </Link>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <MapPin className="h-5 w-5 text-violet-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">Thrissur, India</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Follow me on social media or check out my work.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        href="https://github.com/saketh42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-300 hover:scale-105"
                      >
                        <Github className="h-5 w-5 text-violet-600" />
                        <div>
                          <h3 className="font-medium">GitHub</h3>
                          <p className="text-xs text-muted-foreground">@saketh42</p>
                        </div>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        href="https://linkedin.com/in/saketh-pai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-300 hover:scale-105"
                      >
                        <Linkedin className="h-5 w-5 text-violet-600" />
                        <div>
                          <h3 className="font-medium">LinkedIn</h3>
                          <p className="text-xs text-muted-foreground">@Saketh Pai</p>
                        </div>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link
                        href="https://x.com/SakethSP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-300 hover:scale-105"
                      >
                        <Twitter className="h-5 w-5 text-violet-600" />
                        <div>
                          <h3 className="font-medium">Twitter</h3>
                          <p className="text-xs text-muted-foreground">@SakethSP</p>
                        </div>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link
                        href="leetcode.com/u/saketh42"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-300 hover:scale-105"
                      >
                        <Code className="h-5 w-5 text-violet-600" />
                        <div>
                          <h3 className="font-medium">Leetcode</h3>
                          <p className="text-xs text-muted-foreground">@saketh42</p>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                  <CardDescription>
                    Currently available for freelance projects and full-time opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-sm font-medium">Freelance Projects</span>
                      <Badge className="bg-green-500 transition-all duration-300 hover:bg-green-600">Available</Badge>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <span className="text-sm font-medium">Full-time Position</span>
                      <Badge
                        variant="outline"
                        className="text-yellow-500 border-yellow-500 transition-all duration-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/10"
                      >
                        Open to Offers
                      </Badge>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-sm font-medium">Response Time</span>
                      <span className="text-sm">Within 24 hours</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


