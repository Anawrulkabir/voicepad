import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ChevronRight,
  Mic,
  Brain,
  Share2,
  Chrome,
  Clock,
  Shield,
  Link,
} from 'lucide-react'
import { SparklesCore } from '../ui/sparkles'

import { Button } from '../ui/button'

const LandingPage = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const words = [
    {
      text: 'Transform',
      className: 'text-white',
    },
    {
      text: 'your',
      className: 'text-white',
    },
    {
      text: 'meetings',
      className: 'text-white',
    },
    {
      text: 'with',
      className: 'text-white',
    },
    {
      text: 'VoiceMemo',
      className:
        'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500',
    },
  ]

  const testimonials = [
    {
      quote:
        'VoiceMemo has completely transformed how we handle meeting notes.',
      name: 'Sarah Johnson',
      title: 'Product Manager at Microsoft',
      image: '/api/placeholder/100/100',
    },
    {
      quote: 'The AI-powered summaries save us hours every week.',
      name: 'Michael Chen',
      title: 'Engineering Lead at Spotify',
      image: '/api/placeholder/100/100',
    },
    {
      quote: "Best investment we've made for our remote team collaboration.",
      name: 'Emily Rodriguez',
      title: 'Director at Netflix',
      image: '/api/placeholder/100/100',
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(0,0,0)"
          gradientBackgroundEnd="rgb(20,20,20)"
          firstColor="18,18,18"
          secondColor="30,30,30"
          thirdColor="40,40,40"
          fourthColor="50,50,50"
          size="40"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-[40px] h-[40px] inline-block align-middle mr-2"
              />
              VoiceMemo
            </motion.div>
            <div className="hidden md:flex space-x-12">
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <TypewriterEffect words={words} className="text-6xl" />
            </div>
            <div className="mb-12">
              <TextGenerateEffect
                words="Record, transcribe, and enhance your virtual meetings with AI-powered notes. Never miss an important detail again."
                className="text-xl text-gray-400"
              />
            </div>
            <div className="flex justify-center space-x-6">
              <Button size="lg">
                Install Extension <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <TracingBeam className="py-32">
        <section className="container mx-auto px-6" id="features">
          <motion.h2
            className="text-5xl font-bold text-center mb-24"
            style={{
              y: useTransform(scrollYProgress, [0.2, 0.4], [100, -100]),
            }}
          >
            Everything You Need
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Mic size={32} />,
                title: 'Easy Recording',
                description:
                  'One-click recording for Google Meet, Zoom, and other platforms.',
              },
              {
                icon: <Brain size={32} />,
                title: 'AI-Powered Notes',
                description:
                  'Automatic transcription, summaries, and action items extraction.',
              },
              {
                icon: <Share2 size={32} />,
                title: 'Team Collaboration',
                description:
                  'Share notes, collaborate in real-time, and keep everyone aligned.',
              },
              {
                icon: <Chrome size={32} />,
                title: 'Chrome Extension',
                description:
                  'Simple browser extension for all major conferencing platforms.',
              },
              {
                icon: <Clock size={32} />,
                title: 'Save Time',
                description:
                  'Focus on the conversation while VoiceMemo handles note-taking.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Enterprise Security',
                description:
                  'End-to-end encryption and GDPR compliance for peace of mind.',
              },
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </section>
      </TracingBeam>

      {/* Testimonials */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-24">
            Trusted by Teams Worldwide
          </h2>
          <MovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={800}
              className="absolute inset-0"
              particleColor="#FFFFFF"
            />
            <h2 className="text-5xl font-bold mb-8">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join thousands of professionals who are already saving time with
              VoiceMemo.
            </p>
            <Button size="lg">Get Started for Free</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">VoiceMemo</h3>
              <p className="text-gray-400">
                Making meetings more productive, one recording at a time.
              </p>
            </div>
            <FooterColumn
              title="Product"
              links={['Features', 'Pricing', 'Security']}
            />
            <FooterColumn
              title="Company"
              links={['About', 'Careers', 'Blog']}
            />
            <FooterColumn
              title="Legal"
              links={['Privacy', 'Terms', 'Security']}
            />
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            © 2024 VoiceMemo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ... (Previous component definitions for NavLink, Button, FeatureCard, FooterColumn remain the same)

export default LandingPage
