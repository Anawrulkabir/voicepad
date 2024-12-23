'use client'
import React, { useRef, useEffect, use, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useAnimate,
  useSpring,
} from 'framer-motion'
import {
  ChevronRight,
  Mic,
  Brain,
  Share2,
  Chrome,
  Clock,
  Shield,
  Star,
  ArrowRightIcon,
} from 'lucide-react'
import { BackgroundLines } from '../ui/background-lines'
import { RainbowButton } from '../ui/rainbow-button'
import AnimatedShinyText from '../ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import HeroVideoDialog from '../ui/hero-video-dialog'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// import { BackgroundBeams } from '../ui/background-beams'

const LandingPage2 = () => {
  const containerRef = useRef(null)
  const [scope, animate] = useAnimate()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  interface Star {
    x: number
    y: number
    delay: number
  }

  const [stars, setStars] = useState<Star[]>([])
  // Generate consistent random values for stars after mount
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setStars(generatedStars)
  }, [])

  // Custom star animations
  useEffect(() => {
    if (stars.length > 0) {
      stars.forEach((star, i) => {
        animate(
          `#star-${i}`,
          {
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1, 0.8],
          },
          {
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }
        )
      })
    }
  }, [stars, animate])

  // Custom starfield effect
  // useEffect(() => {
  //   const stars = Array.from({ length: 50 }).map((_, i) => ({
  //     x: Math.random() * 100,
  //     y: Math.random() * 100,
  //     delay: Math.random() * 2,
  //   }))

  //   stars.forEach((star, i) => {
  //     animate(
  //       `#star-${i}`,
  //       {
  //         opacity: [0.2, 1, 0.2],
  //         scale: [0.8, 1, 0.8],
  //       },
  //       {
  //         duration: 3,
  //         repeat: Infinity,
  //         delay: star.delay,
  //       }
  //     )
  //   })
  // }, [animate])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white ">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        {/* Animated stars */}
        <div ref={scope} className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              id={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href={'/'} className="relative font-mono text-2xl font-bold">
              VOICEPAD
              <span className="text-green-500 animate-pulse">_</span>
            </Link>
            <div className="hidden md:flex space-x-12">
              <NavLink key="features" href="#features">
                Features
              </NavLink>
              <NavLink key="pricing" href="#pricing">
                Pricing
              </NavLink>
              <NavLink key="about" href="#about">
                About
              </NavLink>
            </div>
            <div className="flex space-x-4">
              {/* <Button variant="outline" aria-label="Login">
                Login
              </Button> */}
              <Button aria-label="Get Started">Get Started</Button>

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 ">
        <div className="container mx-auto px-6 relative z-10 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative z-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Transform Your{' '}
                <span className="relative">
                  <motion.span
                    className="absolute -inset-1 rounded-lg bg-white/5 skew-x-12"
                    // initial={{ scaleX: 0, originX: 0 }}
                    // animate={{ scaleX: 1 }}
                    // transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}
                  />

                  <span className="relative transition duration-700 text-transparent bg-clip-text bg-gradient-to-r from-green-50 to-green-300 delay-500 skew-x-12">
                    Meetings
                  </span>
                </span>
              </div>
            </motion.h1>
            <motion.div
              className="text-xl text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-neutral-500 max-w-lg mx-auto my-2 text-center relative z-10">
                Record, transcribe, and enhance your virtual meetings with
                AI-powered notes. Never miss an important detail again.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center  w-full gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* <Button size="lg">Install Extension </Button> */}
              <RainbowButton className="group">
                Install Extension{' '}
                <ChevronRight
                  className="transition duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </RainbowButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* demo video section */}
      <motion.div
        className="relative px-6 md:px-24 md:pb-32 pb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <HeroVideoDialog
          className="dark:hidden block "
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="VoicePad demo video thumbnail - light mode"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="VoicePad demo video thumbnail - dark mode"
        />
      </motion.div>

      {/* Features Grid */}
      <section className="relative py-12 md:py-32" id="features">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold text-center mb-24"
            style={{
              y: useTransform(scrollYProgress, [0.2, 0.4], [100, -100]),
            }}
          >
            Everything You Need
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {' '}
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-12 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-24">
            Trusted by Teams Worldwide
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Microsoft', 'Spotify', 'Airbnb', 'Netflix'].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="text-2xl font-bold text-white/30 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {company}
                  </motion.div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto px-6 text-center relative z-10 w-full flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
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
          <div className="flex flex-col   justify-center text-center md:text-left  md:grid md:grid-cols-4 gap-12 ">
            <div>
              {/* <span className="absolute -inset-1 rounded-lg transition-all duration-300" /> */}
              <Link href="/" className=" font-mono text-2xl font-bold mb-3">
                VOICEPAD
                <span className="text-green-500 animate-pulse">_</span>
              </Link>

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

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  ariaLabel,
}: {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
  ariaLabel?: string
}) => {
  const baseStyles =
    'relative rounded-lg font-medium transition-all duration-300 flex items-center justify-center overflow-hidden group'
  const sizeStyles = {
    default: 'px-4 py-2',
    lg: 'px-8 py-4 text-lg',
  }
  const variantStyles = {
    default: 'bg-white text-black hover:bg-gray-100',
    outline: 'border border-white/20 hover:border-white/40',
  }

  return (
    <motion.button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      <motion.div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <span className="relative">{children}</span>
    </motion.button>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 backdrop-blur-sm group relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="mb-6 text-white/80">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

interface FooterColumnProps {
  title: string
  links: string[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default LandingPage2
