import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Moon,
  Sun,
  ShieldCheck,
  Layout,
  FileText,
  Clock,
  Layers,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  achievements: string[];
}

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-slate-900 dark:text-slate-100"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 dark:text-slate-400 text-base max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-1.5 bg-primary rounded-full mt-4 mx-auto md:mx-0"
    />
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Efficiency Optimization Protocol",
      description: "Implemented a series of troubleshooting guides and standardized dispute processes, reducing average resolution time by 33%.",
      tags: ["Strategy", "Operations", "Optimization"],
      image: "https://picsum.photos/seed/analysis/800/600",
      link: "#"
    },
    {
      id: 2,
      title: "Fraud Detection Workflow",
      description: "Designed a systematic transaction analysis framework that boosted dispute resolution efficiency by 35% in its first quarter.",
      tags: ["Security", "Risk Assessment", "Audit"],
      image: "https://picsum.photos/seed/shield/800/600",
      link: "#"
    },
    {
      id: 3,
      title: "Virtual Support Infrastructure",
      description: "Developed a comprehensive digital organization system for legal documentation and contract maintenance for internal stakeholders.",
      tags: ["VA", "Administration", "Management"],
      image: "https://picsum.photos/seed/office/800/600",
      link: "#"
    }
  ];

  const experience: Experience[] = [
    {
      id: 1,
      company: "Teletech",
      title: "Customer Service Representative",
      period: "Nov 2022 – Nov 2024",
      location: "San Fernando, Pampanga",
      achievements: [
        "Handled 150+ customer inquiries daily using active listening and problem-solving skills",
        "Reduced repeat calls by 20% and increased customer satisfaction scores by 15%",
        "Improved resolution time from 12 to 8 minutes by creating troubleshooting guides",
        "Trained new hires, contributing to a 30% increase in first-call resolution rates"
      ]
    },
    {
      id: 2,
      company: "Concentrix",
      title: "Fraud and Dispute Analyst",
      period: "Mar 2022 – Nov 2022",
      location: "Clark, Pampanga",
      achievements: [
        "Resolved 150+ customer disputes weekly through transaction analysis",
        "Increased dispute resolution efficiency by 35% and reduced resolution time by 50%",
        "Boosted team productivity by 40% by standardizing dispute processes",
        "Managed over 600 cases monthly with high accuracy and compliance"
      ]
    },
    {
      id: 3,
      company: "Clark Development Corporation",
      title: "Legal Administrative Assistant",
      period: "Apr 2019 – Jan 2021",
      location: "Clark, Pampanga",
      achievements: [
        "Organized and maintained 1,000+ legal documents, reducing retrieval time by 40%",
        "Reviewed 200+ contracts annually to ensure compliance and reduce risk",
        "Coordinated with internal and external stakeholders to speed up approvals by 20%"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-slate-950 border-b border-border dark:border-slate-800 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-extrabold tracking-tighter flex items-center gap-1.5 group cursor-pointer text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            JP.MARCELO
          </motion.div>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-6 text-[0.875rem] font-medium text-text-muted dark:text-slate-400">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors focus:outline-none">{item}</a>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <a href="#contact" className="hidden sm:block btn-primary text-sm py-2">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 bg-bg-main dark:bg-slate-950 transition-colors">
        <div className="section-padding">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-10 flex flex-col justify-center"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight dark:text-white">
                John Paul Marcelo
              </h1>
              <p className="text-sm text-text-muted dark:text-slate-400 mb-8 leading-relaxed">
                Senior Virtual Assistant & Fraud Analyst specialized in high-performance operational workflows and scalable support systems.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#projects" className="btn-primary w-full">
                  View Portfolios
                </a>
                <a href="#contact" className="px-5 py-2.5 border border-border dark:border-slate-800 dark:text-white rounded-md font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-center">
                  Contact Me
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card"
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/professional/1200/800" 
                  alt="John Paul Marcelo Portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 transition-colors">
        <div className="section-padding">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
            <div className="card glass-card p-8">
              <span className="section-title-label">About Me</span>
              <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed mb-6">
                Passionate about crafting clean workflows and optimized user experiences. With over 4 years of industry experience, I help clients build efficient systems that combine operational excellence with business-driven results.
              </p>
              <div className="flex flex-wrap">
                {["TypeScript", "React", "CRM", "Fraud Analysis", "Legal Admin", "VA Ops"].map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-8">
                <span className="section-title-label">Mission Statement</span>
                <p className="text-lg text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
                  "Streamlining complex processes through analytical precision and a client-first mentality, ensuring every interaction adds measurable value to the organization."
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Cases Handled", value: "1,000+", icon: <Layers size={18} /> },
                  { label: "Professional Exp", value: "4+ years", icon: <Clock size={18} /> },
                  { label: "Eff. Increase", value: "+35%", icon: <CheckCircle2 size={18} /> },
                  { label: "Inquiries Daily", value: "150+", icon: <Layout size={18} /> },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-5 text-center">
                    <span className="text-xl font-bold block dark:text-white uppercase">{stat.value}</span>
                    <span className="text-[10px] text-text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="section-padding">
          <SectionHeading subtitle="A versatile toolkit blending technical proficiency with essential soft skills.">
            Skills & Core Competencies
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                category: "Client Support", 
                items: ["Customer & Chat Support", "Email Management", "Communication Skills", "Interpersonal Relations"],
                icon: <User size={24} />
              },
              { 
                category: "Analysis & Compliance", 
                items: ["Fraud & Dispute Analysis", "Legal Admin Support", "Contract Review", "Data Entry"],
                icon: <ShieldCheck size={24} />
              },
              { 
                category: "Productivity Tools", 
                items: ["CRM & Ticketing Systems", "Google Workspace", "Microsoft Office Suite", "Basic Canva Design"],
                icon: <Code2 size={24} />
              }
            ].map((skillcat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:shadow-xl transition-all border-none bg-white dark:bg-slate-900"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {skillcat.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 dark:text-white">{skillcat.category}</h3>
                <ul className="space-y-4">
                  {skillcat.items.map((skill, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group/item">
                      <CheckCircle2 size={16} className="text-primary/40 group-hover/item:text-primary transition-colors" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="section-padding">
          <SectionHeading subtitle="A career progression focused on trust, precision, and operational excellence.">
            Professional Experience
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="space-y-6">
              <span className="section-title-label">Career Timeline</span>
              {experience.map((job) => (
                <div key={job.id} className="relative pl-6 border-l-2 border-border dark:border-slate-800 pb-8 last:pb-0">
                  <div className="absolute -left-[6px] top-1 timeline-dot" />
                  <h4 className="font-bold text-sm dark:text-white">{job.title} @ {job.company}</h4>
                  <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 leading-none">{job.period}</p>
                  <ul className="space-y-1">
                    {job.achievements.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-xs text-text-muted dark:text-slate-400 leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-8">
                <span className="section-title-label">Education</span>
                <div className="relative pl-6 border-l-2 border-border dark:border-slate-800 pb-2">
                  <div className="absolute -left-[6px] top-1 timeline-dot" />
                  <h4 className="font-bold text-sm dark:text-white">BS in Entrepreneurship</h4>
                  <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider leading-none">Don Honorio Ventura Tech</p>
                  <p className="text-xs text-text-muted mt-2">Graduated: April 2017</p>
                </div>
              </div>

              <div className="glass-card p-8 group">
                <span className="section-title-label">Quick Contact</span>
                <div className="text-xs text-text-muted mb-4">Available for select enterprise projects and VA consulting.</div>
                <div className="p-3 border border-border dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 text-xs italic">
                  johnpaulmarcelo2@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-bg-main dark:bg-slate-950 transition-colors">
        <div className="section-padding">
          <SectionHeading subtitle="Strategic impact cases optimized for high-performance and business growth.">
            Selected Work
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col group"
              >
                <div className="h-40 bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] text-text-muted uppercase tracking-[0.2em] overflow-hidden">
                  <img src={project.image} alt="" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold mb-1 dark:text-white uppercase tracking-tight">{project.title}</h3>
                  <p className="text-[11px] text-text-muted dark:text-slate-400 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="section-padding">
          <div className="glass-card p-10 md:p-16">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-border dark:border-slate-800 mb-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">Let's build something together</h2>
                  <p className="text-sm text-text-muted dark:text-slate-400">Available for select freelance projects and operational consulting.</p>
                </div>
                <div className="text-primary font-bold text-lg">
                  johnpaulmarcelo2@gmail.com
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-6 text-[0.8rem] text-text-muted">
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Pampanga, PH</div>
                  <div className="flex items-center gap-2"><Smartphone size={14} className="text-primary" /> +63 931 871 3004</div>
                </div>
                
                <div className="flex gap-4">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="text-primary font-bold text-[0.8rem] hover:underline transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-950 transition-colors border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-[10px] font-bold text-white">
              JM
            </div>
            <span className="font-bold tracking-tight dark:text-white">JohnPaul Marcelo</span>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">
            Specializing in high-impact Virtual Assistance and Fraud Analysis. <br />
            Based in Pampanga, Philippines. Available for remote collaboration.
          </p>
          <div className="flex justify-center gap-8 mb-8 text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
