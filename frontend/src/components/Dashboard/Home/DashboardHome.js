import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, BookOpen, Monitor, MessageSquare, Users, Download,
    TrendingUp, Clock, Star, Award, ArrowRight, Play, Eye
} from 'lucide-react';
import './DashboardHome.css';

const DashboardHome = () => {
    // Stats data
    const stats = [
        {
            title: 'Total Papers',
            value: '2,500+',
            icon: FileText,
            change: '+125 this month',
            color: '#6366f1'
        },
        {
            title: 'Study Notes',
            value: '850+',
            icon: BookOpen,
            change: '+45 this week',
            color: '#10b981'
        },
        {
            title: 'Video Tutorials',
            value: '320+',
            icon: Monitor,
            change: '+12 new',
            color: '#f59e0b'
        },
        {
            title: 'Active Members',
            value: '2.5K',
            icon: Users,
            change: '+89 joined',
            color: '#ec4899'
        }
    ];

    // Recent PYQ Papers
    const recentPapers = [
        { id: 1, title: 'GATE 2024 Civil Engineering', type: 'GATE', downloads: 1250, date: '2 days ago' },
        { id: 2, title: 'ESE 2024 Prelims Paper', type: 'ESE', downloads: 890, date: '5 days ago' },
        { id: 3, title: 'SSC JE 2024 Set A', type: 'SSC JE', downloads: 650, date: '1 week ago' },
        { id: 4, title: 'BIT Sindri 5th Sem Structures', type: 'University', downloads: 420, date: '2 weeks ago' },
    ];

    // Popular Courses
    const popularCourses = [
        { id: 1, title: 'AutoCAD Civil 3D Complete', lessons: 42, duration: '12 hrs', rating: 4.8 },
        { id: 2, title: 'STAAD Pro for Beginners', lessons: 35, duration: '10 hrs', rating: 4.7 },
        { id: 3, title: 'Revit Architecture', lessons: 28, duration: '8 hrs', rating: 4.6 },
    ];

    // Recent Forum Questions
    const forumQuestions = [
        { id: 1, title: 'How to design RCC beam for cantilever?', replies: 12, views: 234 },
        { id: 2, title: 'Best book for GATE Geotechnical?', replies: 18, views: 567 },
        { id: 3, title: 'STAAD Pro vs ETABS - which is better?', replies: 24, views: 891 },
    ];

    // Upcoming Events
    const upcomingEvents = [
        { id: 1, title: 'Workshop: Advanced STAAD Pro', date: 'Jan 20, 2026', type: 'Workshop' },
        { id: 2, title: 'GATE 2026 Mock Test', date: 'Jan 25, 2026', type: 'Test' },
        { id: 3, title: 'Industry Visit: L&T', date: 'Feb 1, 2026', type: 'Visit' },
    ];

    return (
        <div className="dashboard-home">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-content">
                    <h1>Welcome back, <span className="gradient-text">Engineer!</span></h1>
                    <p>Continue your learning journey. Here's what's new for you.</p>
                </div>
                <div className="quick-actions">
                    <Link to="/dashboard/pyq" className="quick-action-btn primary">
                        <FileText size={18} />
                        Browse PYQ Papers
                    </Link>
                    <Link to="/dashboard/forum" className="quick-action-btn secondary">
                        <MessageSquare size={18} />
                        Ask a Question
                    </Link>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card" style={{ '--accent-color': stat.color }}>
                        <div className="stat-icon">
                            <stat.icon size={24} />
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-title">{stat.title}</span>
                        </div>
                        <div className="stat-change">
                            <TrendingUp size={14} />
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="content-grid">
                {/* Recent PYQ Papers */}
                <div className="content-card papers-card">
                    <div className="card-header">
                        <h2><FileText size={20} /> Recent PYQ Papers</h2>
                        <Link to="/dashboard/pyq" className="view-all">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="card-content">
                        {recentPapers.map((paper) => (
                            <div key={paper.id} className="paper-item">
                                <div className="paper-info">
                                    <span className={`paper-type ${paper.type.toLowerCase().replace(' ', '-')}`}>
                                        {paper.type}
                                    </span>
                                    <h4>{paper.title}</h4>
                                    <span className="paper-date">
                                        <Clock size={12} /> {paper.date}
                                    </span>
                                </div>
                                <div className="paper-stats">
                                    <span><Download size={14} /> {paper.downloads}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Courses */}
                <div className="content-card courses-card">
                    <div className="card-header">
                        <h2><Monitor size={20} /> Popular Tutorials</h2>
                        <Link to="/dashboard/software" className="view-all">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="card-content">
                        {popularCourses.map((course) => (
                            <div key={course.id} className="course-item">
                                <div className="course-thumbnail">
                                    <Play size={20} />
                                </div>
                                <div className="course-info">
                                    <h4>{course.title}</h4>
                                    <div className="course-meta">
                                        <span>{course.lessons} lessons</span>
                                        <span>{course.duration}</span>
                                        <span className="rating">
                                            <Star size={12} /> {course.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Forum Activity */}
                <div className="content-card forum-card">
                    <div className="card-header">
                        <h2><MessageSquare size={20} /> Forum Activity</h2>
                        <Link to="/dashboard/forum" className="view-all">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="card-content">
                        {forumQuestions.map((question) => (
                            <div key={question.id} className="forum-item">
                                <h4>{question.title}</h4>
                                <div className="forum-meta">
                                    <span><MessageSquare size={12} /> {question.replies} replies</span>
                                    <span><Eye size={12} /> {question.views} views</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="content-card events-card">
                    <div className="card-header">
                        <h2><Award size={20} /> Upcoming Events</h2>
                        <Link to="/dashboard/events" className="view-all">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="card-content">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="event-item">
                                <div className="event-date">
                                    <span className="event-day">{event.date.split(',')[0].split(' ')[1]}</span>
                                    <span className="event-month">{event.date.split(',')[0].split(' ')[0]}</span>
                                </div>
                                <div className="event-info">
                                    <h4>{event.title}</h4>
                                    <span className={`event-type ${event.type.toLowerCase()}`}>{event.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
                <h3>Quick Access</h3>
                <div className="quick-links-grid">
                    <Link to="/dashboard/pyq/gate" className="quick-link">
                        <span className="ql-icon gate">G</span>
                        <span>GATE Papers</span>
                    </Link>
                    <Link to="/dashboard/software/autocad" className="quick-link">
                        <span className="ql-icon autocad">A</span>
                        <span>AutoCAD</span>
                    </Link>
                    <Link to="/dashboard/software/staad" className="quick-link">
                        <span className="ql-icon staad">S</span>
                        <span>STAAD Pro</span>
                    </Link>
                    <Link to="/dashboard/lessons/structural" className="quick-link">
                        <span className="ql-icon structural">📐</span>
                        <span>Structures</span>
                    </Link>
                    <Link to="/dashboard/jobs" className="quick-link">
                        <span className="ql-icon jobs">💼</span>
                        <span>Jobs</span>
                    </Link>
                    <Link to="/dashboard/forum" className="quick-link">
                        <span className="ql-icon forum">💬</span>
                        <span>Forum</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
