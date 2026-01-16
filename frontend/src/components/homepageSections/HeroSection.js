import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Play, Users, GraduationCap, Globe } from "lucide-react";
import { useHistory } from "react-router-dom";

const HeroSection = () => {
  const history = useHistory();

  const features = [
    { icon: GraduationCap, title: "Quality Education", desc: "Hands-on learning experiences" },
    { icon: Globe, title: "Industry Connect", desc: "Bridge academia and industry" },
    { icon: Users, title: "Community", desc: "Strong alumni network" }
  ];

  // Typing animation for the title: "Association of Civil Engineers" (continuous loop)
  const partOne = useMemo(() => "Association of ", []);
  const partTwo = useMemo(() => "Civil Engineers", []);
  const totalLength = partOne.length + partTwo.length;
  const [shownCount, setShownCount] = useState(0); // how many characters to show from combined string
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const typeMs = 70;      // typing speed
    const deleteMs = 40;    // deleting speed
    const pauseEndMs = 1000;  // pause after full typed
    const pauseStartMs = 600; // pause before re-typing after deletion

    let timeoutId;

    if (phase === 'typing') {
      if (shownCount < totalLength) {
        timeoutId = setTimeout(() => setShownCount(shownCount + 1), typeMs);
      } else {
        timeoutId = setTimeout(() => setPhase('pausing'), pauseEndMs);
      }
    } else if (phase === 'pausing') {
      timeoutId = setTimeout(() => setPhase('deleting'), pauseEndMs);
    } else if (phase === 'deleting') {
      if (shownCount > 0) {
        timeoutId = setTimeout(() => setShownCount(shownCount - 1), deleteMs);
      } else {
        timeoutId = setTimeout(() => setPhase('typing'), pauseStartMs);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [phase, shownCount, totalLength]);

  // derive how many chars of each part to show from combined shownCount
  const partOneCount = Math.min(shownCount, partOne.length);
  const partTwoCount = Math.max(0, Math.min(shownCount - partOne.length, partTwo.length));

  return (
    <div className="relative min-h-[72vh] md:min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden pt-16 md:pt-0">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.6, zIndex: 1 }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Civil Engineering Elements Overlay */}
      <div className="ce-elements-overlay absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Bridge SVG */}
        <svg className="ce-bridge absolute" style={{ top: '10%', left: '5%', width: '120px', opacity: 0.15 }} viewBox="0 0 200 100">
          <path d="M10 80 Q50 20 100 80 Q150 20 190 80" stroke="#60a5fa" strokeWidth="3" fill="none" className="animate-bridge"/>
          <line x1="30" y1="80" x2="30" y2="50" stroke="#60a5fa" strokeWidth="2"/>
          <line x1="100" y1="80" x2="100" y2="20" stroke="#60a5fa" strokeWidth="2"/>
          <line x1="170" y1="80" x2="170" y2="50" stroke="#60a5fa" strokeWidth="2"/>
          <line x1="10" y1="80" x2="190" y2="80" stroke="#60a5fa" strokeWidth="3"/>
        </svg>

        {/* Floating Building SVG */}
        <svg className="ce-building absolute" style={{ top: '15%', right: '10%', width: '80px', opacity: 0.12 }} viewBox="0 0 100 150">
          <rect x="10" y="30" width="80" height="120" stroke="#a78bfa" strokeWidth="2" fill="none"/>
          <rect x="20" y="40" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="45" y="40" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="65" y="40" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="20" y="70" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="45" y="70" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="65" y="70" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="20" y="100" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="45" y="100" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <rect x="65" y="100" width="15" height="20" stroke="#a78bfa" strokeWidth="1" fill="none"/>
          <polygon points="10,30 50,5 90,30" stroke="#a78bfa" strokeWidth="2" fill="none"/>
        </svg>

        {/* Floating Crane SVG */}
        <svg className="ce-crane absolute" style={{ bottom: '20%', left: '8%', width: '100px', opacity: 0.1 }} viewBox="0 0 120 150">
          <line x1="60" y1="150" x2="60" y2="20" stroke="#fbbf24" strokeWidth="4"/>
          <line x1="20" y1="20" x2="110" y2="20" stroke="#fbbf24" strokeWidth="3"/>
          <line x1="60" y1="20" x2="100" y2="60" stroke="#fbbf24" strokeWidth="2"/>
          <rect x="90" y="55" width="20" height="25" stroke="#fbbf24" strokeWidth="2" fill="none" className="animate-crane-load"/>
          <line x1="40" y1="150" x2="80" y2="150" stroke="#fbbf24" strokeWidth="4"/>
        </svg>

        {/* Floating Dam SVG */}
        <svg className="ce-dam absolute" style={{ bottom: '15%', right: '5%', width: '140px', opacity: 0.1 }} viewBox="0 0 200 100">
          <path d="M10 90 L30 20 L170 20 L190 90 Z" stroke="#22d3ee" strokeWidth="2" fill="none"/>
          <line x1="50" y1="90" x2="50" y2="30" stroke="#22d3ee" strokeWidth="1"/>
          <line x1="100" y1="90" x2="100" y2="20" stroke="#22d3ee" strokeWidth="1"/>
          <line x1="150" y1="90" x2="150" y2="30" stroke="#22d3ee" strokeWidth="1"/>
          <path d="M0 95 Q50 85 100 95 Q150 105 200 95" stroke="#22d3ee" strokeWidth="2" fill="none" className="animate-water"/>
        </svg>

        {/* Blueprint Grid Lines */}
        <div className="blueprint-grid absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-start md:items-center justify-center min-h-[56vh] md:min-h-screen">
        <Container className="py-6 md:py-20">
          <Row className="justify-content-center">
            {/* Centered Content */}
            <Col lg={8} className="text-center text-white">
              <div className="animate-fade-in">
                {/* Badge */}
                

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-3 md:mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
                  {/* Welcome to - Static White */}
                  <span className="text-white font-extrabold tracking-wide relative block mb-2">
                    Welcome to
                  </span>
                  
                  {/* Association of Civil Engineers - Continuous Typing */}
                  <span className="block">
                    <span className={`bg-gradient-to-r from-white via-sky-200 to-sky-300 bg-clip-text text-transparent font-extrabold tracking-wide`}>
                      {partOne.slice(0, partOneCount)}
                    </span>
                    <span className={`bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent font-extrabold tracking-wide ml-2`}>
                      {partTwo.slice(0, partTwoCount)}
                    </span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-5 md:mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
                  Building the future through innovation, collaboration, and excellence in civil engineering at 
                  <span className="text-yellow-400 font-semibold"> BIT Sindri, Dhanbad</span>
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  {features.map((feature, index) => {
                    const isAlumniFeature = feature.title === "Community";
                    const FeatureWrapper = isAlumniFeature ? 'a' : 'div';
                    const wrapperProps = isAlumniFeature ? {
                      href: "https://alumniconnect.acebits.in/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {};

                    return (
                      <FeatureWrapper
                        key={index}
                        {...wrapperProps}
                        className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start space-y-2 md:space-y-0 md:space-x-3 p-2 md:p-3 rounded-xl backdrop-blur-sm border border-white/5 ring-1 ring-white/3 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 cursor-pointer lightning-hover"
                        style={{
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 12px 28px rgba(0,0,0,0.55)'
                        }}
                      >
                        <span className="pointer-events-none absolute -top-6 -left-6 w-1/2 h-1/2 bg-white/5 blur-xl rounded-full opacity-50 md:opacity-25"></span>

                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mb-2" />
                        <div className="text-center">
                          <div className="font-semibold text-sm md:text-base text-white mb-1">{feature.title}</div>
                          <div className="text-xs md:text-sm text-gray-300">{feature.desc}</div>
                        </div>
                      </FeatureWrapper>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
                  <button
                    onClick={() => history.push('/about')}
                    className="group relative px-5 md:px-7 py-2.5 md:py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full text-sm md:text-lg transition-all duration-300 hover:from-yellow-400 hover:to-orange-400 hover:scale-105 hover:shadow-2xl flex items-center justify-center aurora-hover"
                  >
                    <Play size={20} className="mr-2 group-hover:animate-pulse" />
                    Explore About Us
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>

                  <button
                    onClick={() => history.push('/contact')}
                    className="group relative px-5 md:px-7 py-2.5 md:py-3.5 border-2 border-white text-white font-semibold rounded-full text-sm md:text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl flex items-center justify-center overflow-hidden bg-transparent hover:bg-white hover:text-slate-900 glow-wave-hover"
                  >
                    <Users size={20} className="mr-2 transition-all duration-300 group-hover:scale-110" />
                    <span className="transition-all duration-300">Join Our Community</span>
                    
                    {/* Enhanced Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                    
                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-indigo-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default HeroSection;
