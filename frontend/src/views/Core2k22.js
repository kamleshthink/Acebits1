import React from "react";
import { Container } from "react-bootstrap";
import { 
  Users, 
  Award, 
  Star, 
  Linkedin,
  // Mail,
  Heart,
  Target,
  TrendingUp,
  GraduationCap
} from "lucide-react";

import abhay from "../assets/images/2k22/abhay.jpeg";
import abhishek from "../assets/images/2k22/abhishek.jpg";
import abhinav from "../assets/images/2k22/abhinav.jpg";
import aryan from "../assets/images/2k22/aryan.jpg";
import chandan from "../assets/images/2k22/chandan.jpg";
import deepak from "../assets/images/2k22/deepak.jpg";
import deepakp from "../assets/images/2k22/deepakp.jpg";
import divyanshus from "../assets/images/2k22/divyanshus.jpg";
import hritik from "../assets/images/2k22/hritik.jpg";
import kuwar from "../assets/images/2k22/kuwar.jpg";
import muskan from "../assets/images/2k22/muskan.jpg";
import nitish from "../assets/images/2k22/nitish.jpg";
import pradeep from "../assets/images/2k22/pradeep.jpg";
import priyanshu from "../assets/images/2k22/priyanshu2.jpg";
import rahulkali from "../assets/images/2k22/rahulkalindi.jpg";
import riyagupta from "../assets/images/2k22/riyagupta.jpg";
import shipra from "../assets/images/2k22/shipra.jpeg";
import sumit from "../assets/images/2k22/sumit.jpg";
import anjali from "../assets/images/2k22/anjali.jpg";
import divyanshu from "../assets/images/2k22/divyanshu.jpg";
import harshita from "../assets/images/2k22/harshita.jpeg";
import jaipraksh from "../assets/images/2k22/jaiprakash.jpeg";
import jaydeep from "../assets/images/2k22/jaydeep.jpg";
import manish from "../assets/images/2k22/manish3.jpg";
import prince from "../assets/images/2k22/prince.jpg";
import rahul from "../assets/images/2k22/rahul.jpg";
import raviranjan from "../assets/images/2k22/raviranjan.jpg";
import shraban from "../assets/images/2k22/shraban.jpg";
import shubham from "../assets/images/2k22/shubhamp.jpg";
import sneha from "../assets/images/2k22/sneha.jpg";
import upen from "../assets/images/2k22/upen.png";
import rimil from "../assets/images/2k22/rimilhansda.jpg";
import shubhams from "../assets/images/2k22/shubhams.jpeg";
import swami from "../assets/images/2k22/priyaswami.jpeg";
import sushant from "../assets/images/2k22/sushant.jpeg";
import sohel from "../assets/images/2k22/sohel.jpeg";
import sahil from "../assets/images/2k22/sahil.jpeg";

const Core2k22 = () => {
  const teamData = [
    {
      name: "Abhay Kr. Mahato",
      position: "Development Team",
      image: abhay,
      linkedin: "https://www.linkedin.com/in/abhay-kr-mahato-a7aa3a236/",
      // email: "abhay.kumar@bitsindri.ac.in"
    },
    {
      name: "Abhishek Thakur",
      position: "Social Media Team",
      image: abhishek,
      linkedin: "https://linkedin.com/in/abhishek-singh",
      // email: "abhishek.singh@bitsindri.ac.in"
    },
    {
      name: "Abhinav Gourav",
      position: "Editorial Team",
      image: abhinav,
      linkedin: "https://linkedin.com/in/abhinav-kumar",
      // email: "abhinav.kumar@bitsindri.ac.in"
    },
    {
      name: "Aryan Kumar",
      position: "Ideation Team",
      image: aryan,
      linkedin: "https://linkedin.com/in/aryan-sharma",
      // email: "aryan.sharma@bitsindri.ac.in"
    },
    {
      name: "Jaydeep Kumar",
      position: "Ideation Team",
      image: chandan,
      linkedin: "https://linkedin.com/in/chandan-kumar",
      // email: "chandan.kumar@bitsindri.ac.in"
    },
    {
      name: "Deepak Verma",
      position: "Technical Head",
      image: deepak,
      linkedin: "https://linkedin.com/in/deepak-verma",
      // email: "deepak.verma@bitsindri.ac.in"
    },
    {
      name: "Deepak Prakash",
      position: "Operational Team",
      image: deepakp,
      linkedin: "https://www.linkedin.com/in/deepak-prakash-702ba3256",
      // email: "deepak.patel@bitsindri.ac.in"
    },
    {
      name: "Divyanshu Singh",
      position: "Operational Team",
      image: divyanshus,
      linkedin: "https://linkedin.com/in/divyanshu-singh",
      // email: "divyanshu.singh@bitsindri.ac.in"
    },
    {
      name: "Hritik Kumar",
      position: "Designing Team, Sports And Cultural Team",
      image: hritik,
      linkedin: "https://linkedin.com/in/hritik-kumar",
      // email: "hritik.kumar@bitsindri.ac.in"
    },
    {
      name: "Kuwar Singh",
      position: "Research & Project Application Team",
      image: kuwar,
      linkedin: "https://linkedin.com/in/kuwar-singh",
      // email: "kuwar.singh@bitsindri.ac.in"
    },
    {
      name: "Muskan Kumari",
      position: "Counselling Team , Research & Project Application Team",
      image: muskan,
      linkedin: "https://linkedin.com/in/muskan-kumari",
      // email: "muskan.kumari@bitsindri.ac.in"
    },
    {
      name: "Nitish Kumar",
      position: "Editorial Team",
      image: nitish,
      linkedin: "https://linkedin.com/in/nitish-kumar",
      // email: "nitish.kumar@bitsindri.ac.in"
    },
    {
      name: "Pradeep Kumar",
      position: "Designing Team",
      image: pradeep,
      linkedin: "https://linkedin.com/in/pradeep-kumar",
      // email: "pradeep.kumar@bitsindri.ac.in"
    },
    {
      name: "Priyanshu Kumar",
      position: "Sports And Cultural Team",
      image: priyanshu,
      linkedin: "https://linkedin.com/in/priyanshu-kumar",
      // email: "priyanshu.kumar@bitsindri.ac.in"
    },
    {
      name: "Rahul Kalindi",
      position: "Development Team",
      image: rahulkali,
      linkedin: "https://linkedin.com/in/rahul-kalindi",
      // email: "rahul.kalindi@bitsindri.ac.in"
    },
    {
      name: "Riya Gupta",
      position: "Designing Team & Social Media Team",
      image: riyagupta,
      linkedin: "https://linkedin.com/in/riya-gupta",
      // email: "riya.gupta@bitsindri.ac.in"
    },
    {
      name: "Shipra Kumari",
      position: "Operational Team & Public Relations Team",
      image: shipra,
      linkedin: "https://linkedin.com/in/shipra-kumari",
      // email: "shipra.kumari@bitsindri.ac.in"
    },
    {
      name: "Sumit Kumar",
      position: "Marketing Team",
      image: sumit,
      linkedin: "https://linkedin.com/in/sumit-kumar",
      // email: "sumit.kumar@bitsindri.ac.in"
    },
    {
      name: "Anjali Kumari",
      position: "Editorial Team",
      image: anjali,
      linkedin: "https://linkedin.com/in/anjali-kumari",
      // email: "anjali.kumari@bitsindri.ac.in"
    },
    {
      name: "Divyanshu Kumar",
      position: "Counselling Team , Sponsorship Team",
      image: divyanshu,
      linkedin: "https://linkedin.com/in/divyanshu-kumar",
      // email: "divyanshu.kumar@bitsindri.ac.in"
    },
    {
      name: "Harshita Kumari",
      position: "Operational Team ,",
      image: harshita,
      linkedin: "https://linkedin.com/in/harshita-kumari",
      // email: "harshita.kumari@bitsindri.ac.in"
    },
    {
      name: "Jaiprakash Kumar",
      position: "Designing Team",
      image: jaipraksh,
      linkedin: "https://linkedin.com/in/jaiprakash-kumar",
      // email: "jaiprakash.kumar@bitsindri.ac.in"
    },
    {
      name: "Jaydeep Kumar",
      position: "Ideation Team",
      image: jaydeep,
      linkedin: "https://linkedin.com/in/jaydeep-kumar",
      // email: "jaydeep.kumar@bitsindri.ac.in"
    },
    {
      name: "Manish Kumar",
      position: "Designing Team",
      image: manish,
      linkedin: "https://linkedin.com/in/manish-kumar",
      // email: "manish.kumar@bitsindri.ac.in"
    },
    {
      name: "Prince Kumar",
      position: "Research & Project Application Team",
      image: prince,
      linkedin: "https://linkedin.com/in/prince-kumar",
      // email: "prince.kumar@bitsindri.ac.in"
    },
    {
      name: "Rahul Kumar",
      position: "Editorial Team",
      image: rahul,
      linkedin: "https://linkedin.com/in/rahul-kumar",
      // email: "rahul.kumar@bitsindri.ac.in"
    },
    {
      name: "Ravi Ranjan",
      position: "Editorial Team",
      image: raviranjan,
      linkedin: "https://linkedin.com/in/ravi-ranjan",
      // email: "ravi.ranjan@bitsindri.ac.in"
    },
    {
      name: "Shraban Kumar",
      position: "Editorial Team",
      image: shraban,
      linkedin: "https://linkedin.com/in/shraban-kumar",
      // email: "shraban.kumar@bitsindri.ac.in"
    },
    {
      name: "Shubham Patel",
      position: "Industrial Relation Team",
      image: shubham,
      linkedin: "https://linkedin.com/in/shubham-patel",
      // email: "shubham.patel@bitsindri.ac.in"
    },
    {
      name: "Sneha Kumari",
      position: "Marketing Team",
      image: sneha,
      linkedin: "https://linkedin.com/in/sneha-kumari",
      // email: "sneha.kumari@bitsindri.ac.in"
    },
    {
      name: "Upen Kumar",
      position: "GATE-ESE Forum",
      image: upen,
      linkedin: "https://linkedin.com/in/upen-kumar",
      // email: "upen.kumar@bitsindri.ac.in"
    },
    {
      name: "Rimil Hansda",
      position: "Sponsorship Team",
      image: rimil,
      linkedin: "https://linkedin.com/in/rimil-hansda",
      // email: "rimil.hansda@bitsindri.ac.in"
    },
    {
      name: "Shubham Singh",
      position: "Industrial Relation Team",
      image: shubhams,
      linkedin: "https://linkedin.com/in/shubham-singh",
      // email: "shubham.singh@bitsindri.ac.in"
    },
    {
      name: "Priya Swami",
      position: "Public Relations Team",
      image: swami,
      linkedin: "https://linkedin.com/in/priya-swami",
      // email: "priya.swami@bitsindri.ac.in"
    },
    {
      name: "Sushant Kumar",
      position: "GATE-ESE Forum,Marketing Team",
      image: sushant,
      linkedin: "https://linkedin.com/in/sushant-kumar",
      // email: "sushant.kumar@bitsindri.ac.in"
    },
    {
      name: "Sohel Khan",
      position: "Sports And Cultural Team",
      image: sohel,
      linkedin: "https://linkedin.com/in/sohel-khan",
      // email: "sohel.khan@bitsindri.ac.in"
    },
    {
      name: "Sahil Kumar",
      position: "Sponsorship Team",
      image: sahil,
      linkedin: "https://linkedin.com/in/sahil-kumar",
      // email: "sahil.kumar@bitsindri.ac.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              2K22 Team 2022-2023
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Dynamic Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated leaders and coordinators who drove ACE BITS to new heights of success
            </p>
          </div>
        </Container>
      </div>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">35</h3>
              <p className="text-slate-600">Core Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">18+</h3>
              <p className="text-slate-600">Departments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">80+</h3>
              <p className="text-slate-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">2+</h3>
              <p className="text-slate-600">Years of Success</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Dynamic
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the talented individuals who made ACE BITS a success through their dedication and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Member Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        2K22 Team
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                                        {/* <Mail className="w-4 h-4 mr-2" />
                <span className="truncate">{member.email}</span> */}
                      </div>
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Achievements */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The milestones and successes achieved by our dedicated team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Achieved outstanding results in technical competitions and events
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Introduced new technologies and modern approaches to civil engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leadership</h3>
              <p className="text-gray-300">
                Demonstrated exceptional leadership skills and team management
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Core2k22;
