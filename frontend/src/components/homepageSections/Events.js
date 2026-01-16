import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  BookOpen,
  Star,
  TrendingUp,
  Lightbulb,
  Target
} from "lucide-react";
import risce2024 from "../../../assets/images/RISCE 2024.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "RISCE 2024 - Civil Engineering Conference",
      date: "25 Aug 2024",
      time: "9:00 AM",
      location: "Main Auditorium, BIT Sindri",
      attendees: "200+",
      type: "Conference",
      color: "from-red-500 to-pink-500",
      icon: Star,
      status: "upcoming",
      image: risce2024
    },
    {
      id: 2,
      title: "Technical Workshop on Modern Construction",
      date: "15 Aug 2024",
      time: "10:00 AM",
      location: "Civil Department, BIT Sindri",
      attendees: "50+",
      type: "Workshop",
      color: "from-blue-500 to-cyan-500",
      icon: BookOpen,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Industry Expert Talk Series",
      date: "22 Aug 2024",
      time: "2:00 PM",
      location: "Main Auditorium",
      attendees: "100+",
      type: "Seminar",
      color: "from-purple-500 to-pink-500",
      icon: Users,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Civil Engineering Competition",
      date: "30 Aug 2024",
      time: "9:00 AM",
      location: "Workshop Area",
      attendees: "75+",
      type: "Competition",
      color: "from-green-500 to-emerald-500",
      icon: Award,
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Bridge Design Challenge",
      date: "10 Jul 2024",
      attendees: "60+",
      type: "Competition",
      color: "from-orange-500 to-red-500",
      icon: Target,
      status: "completed"
    },
    {
      id: 5,
      title: "Sustainable Construction Seminar",
      date: "25 Jun 2024",
      attendees: "80+",
      type: "Seminar",
      color: "from-teal-500 to-cyan-500",
      icon: Lightbulb,
      status: "completed"
    },
    {
      id: 6,
      title: "CAD Software Training",
      date: "15 Jun 2024",
      attendees: "40+",
      type: "Training",
      color: "from-indigo-500 to-purple-500",
      icon: BookOpen,
      status: "completed"
    }
  ];

  const eventStats = [
    { icon: Calendar, value: "100+", label: "Events Organized", color: "text-blue-600" },
    { icon: Users, value: "1000+", label: "Participants", color: "text-green-600" },
    { icon: Award, value: "25+", label: "Awards Won", color: "text-purple-600" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", color: "text-orange-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Container className="relative z-10">
        {/* Header */}
                  <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 text-white animate-slide-up">
              <Calendar className="w-4 h-4 mr-2" />
              Our Events & Activities
            </div>
            <div className="mb-4">
              <Link to="/risce" className="text-blue-400 hover:text-blue-300 underline">
                Test: Click here to go to RISCE page
              </Link>
            </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Upcoming & Past
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            Join us for exciting workshops, seminars, competitions, and industry expert talks 
            that will enhance your civil engineering knowledge and skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {eventStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center animate-slide-up" style={{animationDelay: '0.8s'}}>
            <Star className="w-8 h-8 inline mr-3 text-yellow-400" />
            Upcoming Events
          </h3>
          
          <Row className="g-6">
            {upcomingEvents.map((event, index) => (
              <Col key={event.id} lg={4} md={6}>
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up overflow-hidden particle-hover"
                  style={{animationDelay: `${1.0 + index * 0.1}s`}}
                >
                  {/* Event Image - If Available */}
                  {event.image && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      {event.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link 
                      to="/risce" 
                      onClick={() => {
                        console.log("View Details clicked, navigating to /risce");
                        console.log("Current location:", window.location.href);
                      }}
                      className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-105 text-center"
                    >
                      View Details
                    </Link>
                    <a 
                      href="https://risce.org" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white/10 text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 text-center"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center animate-slide-up" style={{animationDelay: '1.2s'}}>
            <Award className="w-8 h-8 inline mr-3 text-yellow-400" />
            Past Events
          </h3>
          
          <Row className="g-6">
            {pastEvents.map((event, index) => (
              <Col key={event.id} lg={4} md={6}>
                <div
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-slide-up glow-wave-hover"
                  style={{animationDelay: `${1.4 + index * 0.1}s`}}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-medium">
                      {event.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} participants</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white/10 text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                    View Details
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '1.6s'}}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get notified about upcoming events, workshops, 
              and opportunities in civil engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all duration-300 w-full sm:w-80"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Events;
