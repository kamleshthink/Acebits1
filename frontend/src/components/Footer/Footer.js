import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart,
  Building,
  Users,
  Award,
  Globe,
  ArrowUp,
  Calendar,
  BookOpen,
  Shield,
  Target,
  Star
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/acebitsindri", 
      label: "Facebook", 
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/AceSindri/", 
      label: "Twitter", 
      color: "from-sky-500 to-sky-600",
      hoverColor: "hover:shadow-sky-500/50"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/acebitsindri", 
      label: "Instagram", 
      color: "from-pink-600 to-rose-600",
      hoverColor: "hover:shadow-pink-500/50"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/ace-bits-sindri", 
      label: "LinkedIn", 
      color: "from-blue-700 to-indigo-700",
      hoverColor: "hover:shadow-blue-700/50"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/core" },
    { name: "Events", href: "/events" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact", href: "/contact" }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "BIT Sindri, Dhanbad Jharkhand, India", 
      color: "from-red-500 to-pink-500",
      link: "https://maps.google.com/?q=BIT+Sindri+Dhanbad"
    },
    { 
      icon: Mail, 
      text: "acebitsindri@gmail.com", 
      color: "from-blue-500 to-cyan-500",
      link: "mailto:acebitsindri@gmail.com"
    },
    { 
      icon: Phone, 
      text: "+91 6203112525 (President)", 
      color: "from-green-500 to-emerald-500",
      link: "tel:+916203112525"
    },
    { 
      icon: Phone, 
      text: "+91 7505198506 (Prof. Incharge)", 
      color: "from-green-500 to-emerald-500",
      link: "tel:+917505198506"
    }
  ];

  const achievements = [
    { title: "5+ Years", desc: "Of Excellence" },
    { title: "400+", desc: "General Members" },
    { title: "100+", desc: "Events Organized" },
    { title: "Leading", desc: "Civil Organization" }
  ];

  const visionPoints = [
    "Excellence in Technical Education",
    "Sustainable Development Focus", 
    "Industry-Academia Bridge",
    "Innovation & Research Culture"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

      {/* Enhanced Header Section */}
      <div className="relative z-10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">ACE BIT SINDRI</h2>
              <p className="text-blue-200 text-lg font-medium">Association of Civil Engineers</p>
              <p className="text-gray-300 text-sm mt-2 max-w-md">
                Premier student organization dedicated to fostering excellence in civil engineering education, industry connections, and community building.
              </p>
            </div>
            
            {/* Enhanced Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20`}
                >
                  <social.icon size={22} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Enhanced Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Quick Links - Clean */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-200 mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                link.href && link.href.startsWith('http') ? (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300">›</span>
                    <span className="font-medium text-sm">{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300">›</span>
                    <span className="font-medium text-sm">{link.name}</span>
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Contact Information - Clean */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-200 mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <info.icon size={16} className="mr-3 mt-1 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Our Achievements - Simple */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-200 mb-6">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div className="text-lg font-bold text-white">{achievement.title}</div>
                  <div className="text-xs text-gray-400">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Vision - Clean */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-200 mb-6">Our Vision</h3>
            <div className="space-y-3">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Institute Mission Statement - Commented Out */}
        {/* <div className="mt-20 p-10 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <h3 className="text-3xl font-bold text-white">Institute Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-5xl mx-auto text-lg">
              To provide valuable human resources for the industry and society through excellence 
              in technical education and scientific research for sustainable development.
            </p>
            <p className="text-yellow-400 font-semibold text-xl">
              "Building the future, one engineer at a time"
            </p>
          </div>
        </div> */}
      </div> 

      {/* Enhanced Footer Bottom */}
      <div className="relative z-10 border-t border-white/30 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-300 text-sm font-medium">
                Copyright © {currentYear} Association of Civil Engineers, BIT Sindri. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by</span>
              <a
                href="https://kamtech-solutions.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Pragyatek
              </a>
              <span>&</span>
              <span className="text-white font-medium">ACE Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-3xl transition-all duration-300 z-50 group border-2 border-white/20"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </footer>
  );
};

export default Footer;
