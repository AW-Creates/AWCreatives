/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, useInView } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Star, 
  Phone, 
  Play, 
  CheckCircle2,
  Users,
  Award,
  ShieldCheck,
  Zap,
  Sparkles,
  Cpu,
  MessageSquare,
  Image as ImageIcon,
  BarChart3,
  Command,
  Cloud,
  Hexagon,
  Triangle,
  Box,
  Globe
} from 'lucide-react';
import { Logo } from './components/Logo';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
];

const services = [
  {
    title: 'AI-Powered Ads',
    description: 'Hyper-targeted campaigns that optimize in real-time to maximize ROI.',
    icon: BarChart3,
    features: [
      'Real-time Optimization', 
      'Predictive Audience Modeling', 
      'Automated A/B Testing', 
      'Dynamic Creative Optimization',
      'Cross-platform Attribution',
      'Real-time ROI Tracking',
      'Budget Optimization AI',
      'Competitor Analysis Insights',
      'Multi-touch Attribution'
    ]
  },
  {
    title: 'Creative Automation',
    description: 'Scale your brand content with AI-generated assets that maintain brand soul.',
    icon: ImageIcon,
    features: [
      'AI Image Generation', 
      'Video Automation', 
      'Batch Content Production', 
      'Style-consistent Assets',
      'Automated Brand Voice Tuning',
      'Dynamic Video Personalization',
      'AI-driven Color Palette Optimization',
      'Content Performance Prediction'
    ]
  },
  {
    title: 'Custom AI Chatbots',
    description: 'Our chatbots are built to understand your business type and handle support.',
    icon: MessageSquare,
    features: [
      'Custom-trained Models', 
      'Multi-language Support', 
      'Sentiment Analysis', 
      'Seamless Human Handoff',
      'Omnichannel Deployment',
      'Voice Interaction Capabilities',
      'Automated Appointment Scheduling',
      'Knowledge Base Auto-sync'
    ]
  }
];

const trustBadges = [
  { name: 'Google Partner', icon: ShieldCheck },
  { name: 'Meta Business Partner', icon: Award },
  { name: 'Clutch Top Agency', icon: Star },
];

const clientLogos = [
  { name: 'Acme Corp', icon: Box },
  { name: 'GlobalTech', icon: Globe },
  { name: 'Nexus', icon: Hexagon },
  { name: 'Vertex', icon: Triangle },
  { name: 'CloudSync', icon: Cloud },
  { name: 'Command', icon: Command },
];

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const testimonials = [
  {
    quote: "Game-changer for our support team. The custom chatbot they built now handles over 80% of our incoming queries — and it's doing it better than our live agents ever could.",
    name: "Sarah K.",
    title: "Head of CX",
    company: "eCommerce Brand",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "They actually get AI — and business. We've worked with a few agencies before, but these folks actually understand how to build AI tools that solve real problems.",
    name: "Alex T.",
    title: "Founder",
    company: "Creative Agency",
    image: "https://picsum.photos/seed/alex/100/100"
  },
  {
    quote: "One of the best tech decisions we made. They developed an AI content engine that now creates our social media and blog content. It's accurate, on-brand, and insanely efficient.",
    name: "David R.",
    title: "Marketing Lead",
    company: "SaaS Startup",
    image: "https://picsum.photos/seed/david/100/100"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 1000], ['0%', '-30%']);
  const textSkew = useTransform(scrollY, [0, 500], [0, -3]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const servicesRef = useRef<HTMLElement>(null);
  const { scrollYProgress: servicesScrollY } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const servicesY = useTransform(servicesScrollY, [0, 1], [0, -100]);
  
  const cardY1 = useTransform(servicesScrollY, [0, 1], [40, -40]);
  const cardY2 = useTransform(servicesScrollY, [0, 1], [70, -70]);
  const cardY3 = useTransform(servicesScrollY, [0, 1], [50, -50]);
  const cardYs = [cardY1, cardY2, cardY3];

  const headlineX = useTransform(mouseXSpring, [-0.5, 0.5], [-25, 25]);
  const headlineY = useTransform(mouseYSpring, [-0.5, 0.5], [-25, 25]);
  const headlineRotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const headlineRotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  const subheadlineX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const subheadlineY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);
  const subheadlineRotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const subheadlineRotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  const bgElementX = useTransform(mouseXSpring, [-0.5, 0.5], [40, -40]);
  
  const backgroundYScroll = useTransform(scrollY, [0, 1000], ['0%', '40%']);
  const bgElementYMouse = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40]);
  
  // Individual blob parallax
  const blob1Y = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const blob2Y = useTransform(scrollY, [0, 1000], ['0%', '35%']);
  const blob3Y = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  
  // Scale depth
  const blobScale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const blobBlur = useTransform(scrollY, [0, 500], [0, 30]);
  const blobRotate = useTransform(scrollY, [0, 1000], [0, 60]);
  const blurFilter = useMotionTemplate`blur(${blobBlur}px)`;
  
  // Combine scroll and mouse Y for background
  const combinedBgY = useTransform(
    [backgroundYScroll, bgElementYMouse],
    ([scroll, mouse]) => `calc(${scroll} + ${mouse}px)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50 p-4 md:p-6 pointer-events-none">
        <nav className={`max-w-7xl mx-auto transition-all duration-500 pointer-events-auto ${scrolled ? 'bg-[#0f100f]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full py-3 px-6' : 'bg-transparent py-4 px-2'}`}>
          <div className="flex justify-between items-center">
            <Logo />
            
            <div className="hidden lg:flex items-center gap-8 bg-[#151615] rounded-full px-6 py-2 border border-white/5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-gray hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+15550000000" className="text-sm font-medium text-gray hover:text-white transition-colors flex items-center gap-2">
                <Phone size={16} /> (555) 000-0000
              </a>
              <button className="bg-white text-black font-display font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 text-sm">
                Let's Talk
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <ArrowRight size={14} className="text-black" />
                </div>
              </button>
            </div>

            <button className="lg:hidden text-white p-2 bg-white/10 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[40] bg-[#0f100f] p-6 pt-32 flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-display font-bold"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                <a href="tel:+15550000000" className="text-xl font-medium flex items-center gap-3">
                  <Phone size={24} className="text-accent" /> (555) 000-0000
                </a>
                <button className="btn-primary mt-4 w-full">
                  Get Started Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-animated-gradient"
        onMouseMove={handleMouseMove}
      >
        {/* Abstract Background Elements */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ y: combinedBgY, opacity, x: bgElementX }}
        >
          <motion.div 
            style={{ y: blob1Y, scale: blobScale, filter: blurFilter, rotate: blobRotate }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full animate-blob mix-blend-screen" 
          />
          <motion.div 
            style={{ y: blob2Y, scale: blobScale, animationDelay: '2s', filter: blurFilter, rotate: blobRotate }}
            className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-[#0c6132]/30 blur-[120px] rounded-full animate-blob mix-blend-screen" 
          />
          <motion.div 
            style={{ y: blob3Y, scale: blobScale, animationDelay: '4s', filter: blurFilter, rotate: blobRotate }}
            className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] bg-[#235137]/20 blur-[120px] rounded-full animate-blob mix-blend-screen" 
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            style={{ y: textY, skewY: textSkew }}
            className="flex flex-col items-center perspective-1000"
          >
            <div className="relative">
              <motion.h1 
                style={{ 
                  x: headlineX, 
                  y: headlineY,
                  rotateX: headlineRotateX,
                  rotateY: headlineRotateY,
                  transformStyle: "preserve-3d"
                }}
                className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.1] tracking-tight mb-6"
              >
                {"We grow local brands with".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20,
                      delay: 0.1 + (i * 0.1)
                    }}
                    className="inline-block mr-[0.2em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 1, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    delay: 0.8
                  }}
                  className="text-accent inline-block"
                >
                  — AI-powered marketing
                </motion.span>
              </motion.h1>
              
              <motion.p 
                style={{ 
                  x: subheadlineX, 
                  y: subheadlineY,
                  rotateX: subheadlineRotateX,
                  rotateY: subheadlineRotateY,
                  transformStyle: "preserve-3d"
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 15,
                  delay: 1.2
                }}
                className="text-lg md:text-xl text-gray max-w-2xl mb-10 mx-auto"
              >
                We create smart solutions that help brands move fast, work smarter, and grow to their full potential.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Get Your Free Strategy Call
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0f100f]">
                  <ArrowRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-y border-white/5 bg-[#030705]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center md:justify-between items-center gap-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.1 
              }}
              className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex text-accent group-hover:text-white transition-all duration-300"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ 
                      default: { delay: 0.1 + (i * 0.05), type: "spring" },
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }
                    }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </motion.div>
              <span className="text-sm font-medium ml-2">4.9/5 Google Rating</span>
            </motion.div>
            {trustBadges.map((badge, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2 + (i * 0.1) 
                }}
                className="flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default group"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="transition-transform duration-300"
                >
                  <badge.icon size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <span className="group-hover:text-white transition-colors duration-300">{badge.name}</span>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5 
              }}
              className="flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default group"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="transition-transform duration-300"
              >
                <Users size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span className="group-hover:text-white transition-colors duration-300">250+ Local Clients</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.6 
              }}
              className="flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default group"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="transition-transform duration-300"
              >
                <Zap size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span className="group-hover:text-white transition-colors duration-300">
                <Counter value={1200} />+ Projects Completed
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Video Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="gradient-border">
                <div className="gradient-border-inner overflow-hidden relative aspect-[4/3]">
                  <img 
                    src="https://picsum.photos/seed/founder-video/1200/900?grayscale" 
                    alt="Founder Video" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_30px_rgba(100,231,158,0.3)] group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium">60 Second Overview</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                From <span className="text-accent">automation</span> to creative <span className="text-accent">AI</span>, <br/>
                <span className="text-gray italic font-normal">our services unlock what's next</span>
              </h2>
              <p className="text-lg text-gray mb-10 leading-relaxed">
                We didn't start an AI agency to replace creativity. We started it to unleash it. 
                Our mission is to give local brands the same technological firepower as global giants, 
                without the corporate complexity.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f100f] border border-white/5 w-fit">
                <img 
                  src="https://picsum.photos/seed/founder/100/100" 
                  alt="Founder" 
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display font-bold text-lg">Alex Wilcher</div>
                  <div className="text-sm text-gray">Founder & Lead Strategist</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 md:py-32 bg-[#030705]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            style={{ y: useTransform(servicesScrollY, [0, 0.5], [0, -30]) }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What We <span className="text-accent">Offer</span>
            </h2>
            <p className="text-lg text-gray">
              AI solutions that solve real problems, not just look cool.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i}
                style={{ y: cardYs[i % cardYs.length] }}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -15, filter: 'blur(10px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0,
                    filter: 'blur(0px)',
                    transition: {
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                      duration: 1,
                      staggerChildren: 0.12
                    }
                  }
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="gradient-border h-full group perspective-1000"
              >
                <div className="gradient-border-inner p-8 flex flex-col h-full transition-all duration-500 group-hover:bg-white/[0.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, rotate: -20 },
                      visible: { 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0,
                        transition: { type: "spring", stiffness: 200, damping: 12 }
                      }
                    }}
                    className="w-14 h-14 rounded-2xl bg-[#151b17] flex items-center justify-center mb-8 border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500"
                  >
                    <service.icon size={28} className="text-accent group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                  </motion.div>
                  
                  <motion.h3 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { type: "spring", stiffness: 100 }
                      }
                    }}
                    className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors duration-500"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="text-gray mb-8 flex-grow leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                    className="space-y-3 mb-8"
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={{
                          hidden: { opacity: 0, x: -10, scale: 0.95 },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            scale: 1,
                            transition: { type: "spring", stiffness: 150, damping: 15 }
                          }
                        }}
                        className="flex items-center gap-3 text-sm text-gray group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-accent" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 bg-[#030705] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h3 className="text-sm font-medium text-gray uppercase tracking-[0.2em]">Trusted by innovative teams worldwide</h3>
        </div>
        <div 
          className="relative flex overflow-hidden group"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                {clientLogos.map((logo, idx) => (
                  <div key={idx} className="group flex items-center gap-3 opacity-50 hover:opacity-100 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                    <logo.icon size={32} className="text-gray group-hover:text-accent transition-colors duration-500" />
                    <span className="text-2xl font-display font-bold tracking-tight text-gray group-hover:text-white transition-colors duration-500">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What Our <span className="text-accent">Clients</span> Say
            </h2>
            <p className="text-lg text-gray">
              — Real Businesses. Real results.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="gradient-border h-full"
              >
                <div className="gradient-border-inner p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 text-accent mb-6">
                      {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-lg leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-display font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray">{testimonial.title}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="text-accent">Go</span> Ahead <br/>
                <span className="text-gray font-normal italic">— Ask us anything</span>
              </h2>
              <p className="text-lg text-gray mb-12">
                Ready to build your growth engine? Fill out the form or skip the wait and book your strategy call directly.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+15550000000" className="flex items-center gap-4 p-6 rounded-2xl bg-[#0f100f] border border-white/5 hover:border-white/20 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#151b17] flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray mb-1">Direct Line</div>
                    <div className="font-display font-bold text-xl">(555) 000-0000</div>
                  </div>
                </a>
                <a href="mailto:hello@wilcher.ai" className="flex items-center gap-4 p-6 rounded-2xl bg-[#0f100f] border border-white/5 hover:border-white/20 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#151b17] flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray mb-1">Email Us</div>
                    <div className="font-display font-bold text-xl">hello@wilcher.ai</div>
                  </div>
                </a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gradient-border"
            >
              <div className="gradient-border-inner p-8 md:p-10">
                <h3 className="text-2xl font-display font-bold mb-8">Get in Touch</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray ml-1">Name</label>
                      <input type="text" className="w-full bg-[#030705] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors" placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray ml-1">Email</label>
                      <input type="email" className="w-full bg-[#030705] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray ml-1">Business Website</label>
                    <input type="url" className="w-full bg-[#030705] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors" placeholder="https://yourbrand.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray ml-1">Message</label>
                    <textarea rows={4} className="w-full bg-[#030705] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your goals..." />
                  </div>
                  <button className="btn-secondary w-full justify-center py-4">
                    Submit Request
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <ArrowRight size={14} className="text-black" />
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#030705]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo />
            <div className="flex flex-wrap justify-center gap-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-sm text-gray hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray">
              © {new Date().getFullYear()} Wilcher Creative Lab.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
