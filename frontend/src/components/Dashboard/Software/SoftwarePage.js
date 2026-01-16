import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Monitor, Play, Clock, Star, Users, BookOpen, ChevronRight,
    Search, Filter, Heart, Share2, PlayCircle, CheckCircle
} from 'lucide-react';
import './SoftwarePage.css';

const SoftwarePage = () => {
    const { software } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('all');

    const softwareList = [
        {
            id: 'autocad',
            name: 'AutoCAD',
            icon: '🖊️',
            courses: 12,
            students: 2500,
            color: '#ef4444',
            description: 'Industry standard CAD software for 2D and 3D design'
        },
        {
            id: 'staad',
            name: 'STAAD Pro',
            icon: '🏗️',
            courses: 8,
            students: 1800,
            color: '#10b981',
            description: 'Structural analysis and design software'
        },
        {
            id: 'revit',
            name: 'Revit',
            icon: '🏢',
            courses: 10,
            students: 1500,
            color: '#3b82f6',
            description: 'Building Information Modeling (BIM) software'
        },
        {
            id: 'etabs',
            name: 'ETABS',
            icon: '🏛️',
            courses: 6,
            students: 1200,
            color: '#8b5cf6',
            description: 'Building analysis and design software'
        },
        {
            id: 'primavera',
            name: 'Primavera P6',
            icon: '📊',
            courses: 5,
            students: 900,
            color: '#f59e0b',
            description: 'Project management and scheduling software'
        },
        {
            id: 'ms-project',
            name: 'MS Project',
            icon: '📋',
            courses: 4,
            students: 750,
            color: '#06b6d4',
            description: 'Microsoft project management software'
        }
    ];

    const courses = [
        {
            id: 1,
            title: 'AutoCAD Civil 3D - Complete Course',
            software: 'autocad',
            instructor: 'Prof. Sharma',
            duration: '12 hours',
            lessons: 42,
            level: 'Beginner',
            rating: 4.8,
            students: 1250,
            thumbnail: 'autocad',
            progress: 0,
            topics: ['Interface', '2D Drawing', '3D Modeling', 'Civil 3D Tools', 'Plotting']
        },
        {
            id: 2,
            title: 'AutoCAD for Civil Engineers - Advanced',
            software: 'autocad',
            instructor: 'Er. Kumar',
            duration: '8 hours',
            lessons: 28,
            level: 'Advanced',
            rating: 4.7,
            students: 650,
            thumbnail: 'autocad',
            progress: 0,
            topics: ['Dynamic Blocks', 'Lisp Programming', 'Sheet Sets', 'Data Extraction']
        },
        {
            id: 3,
            title: 'STAAD Pro - From Zero to Hero',
            software: 'staad',
            instructor: 'Dr. Mishra',
            duration: '15 hours',
            lessons: 55,
            level: 'Beginner',
            rating: 4.9,
            students: 980,
            thumbnail: 'staad',
            progress: 35,
            topics: ['Modeling', 'Loading', 'Analysis', 'Design', 'Reports']
        },
        {
            id: 4,
            title: 'STAAD Pro - RCC & Steel Design',
            software: 'staad',
            instructor: 'Prof. Singh',
            duration: '10 hours',
            lessons: 38,
            level: 'Intermediate',
            rating: 4.6,
            students: 520,
            thumbnail: 'staad',
            progress: 0,
            topics: ['IS Codes', 'RCC Design', 'Steel Design', 'Foundation Design']
        },
        {
            id: 5,
            title: 'Revit Architecture - Complete BIM Course',
            software: 'revit',
            instructor: 'Ar. Patel',
            duration: '18 hours',
            lessons: 65,
            level: 'Beginner',
            rating: 4.8,
            students: 780,
            thumbnail: 'revit',
            progress: 60,
            topics: ['BIM Basics', 'Modeling', 'Families', 'Schedules', 'Rendering']
        },
        {
            id: 6,
            title: 'ETABS - Multi-Story Building Design',
            software: 'etabs',
            instructor: 'Dr. Gupta',
            duration: '14 hours',
            lessons: 48,
            level: 'Intermediate',
            rating: 4.7,
            students: 620,
            thumbnail: 'etabs',
            progress: 0,
            topics: ['Modeling', 'Seismic Analysis', 'Wind Analysis', 'Design']
        },
        {
            id: 7,
            title: 'Primavera P6 - Project Scheduling',
            software: 'primavera',
            instructor: 'Er. Yadav',
            duration: '10 hours',
            lessons: 35,
            level: 'Beginner',
            rating: 4.5,
            students: 450,
            thumbnail: 'primavera',
            progress: 0,
            topics: ['WBS', 'Activities', 'Resources', 'Scheduling', 'Reports']
        },
        {
            id: 8,
            title: 'MS Project - Construction Planning',
            software: 'ms-project',
            instructor: 'Er. Verma',
            duration: '6 hours',
            lessons: 22,
            level: 'Beginner',
            rating: 4.4,
            students: 380,
            thumbnail: 'ms-project',
            progress: 0,
            topics: ['Gantt Charts', 'Resources', 'Tracking', 'Reports']
        }
    ];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
        const matchesSoftware = !software || course.software === software;
        return matchesSearch && matchesLevel && matchesSoftware;
    });

    const currentSoftware = softwareList.find(s => s.id === software);

    return (
        <div className="software-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="header-content">
                    <h1><Monitor size={28} /> Software Tutorials</h1>
                    <p>Master civil engineering software with video tutorials</p>
                </div>
            </div>

            {/* Software Categories */}
            {!software && (
                <div className="software-grid">
                    {softwareList.map((sw) => (
                        <Link
                            key={sw.id}
                            to={`/dashboard/software/${sw.id}`}
                            className="software-card"
                            style={{ '--sw-color': sw.color }}
                        >
                            <div className="sw-icon">{sw.icon}</div>
                            <div className="sw-info">
                                <h3>{sw.name}</h3>
                                <p>{sw.description}</p>
                                <div className="sw-stats">
                                    <span><BookOpen size={14} /> {sw.courses} courses</span>
                                    <span><Users size={14} /> {sw.students.toLocaleString()}</span>
                                </div>
                            </div>
                            <ChevronRight size={20} className="sw-arrow" />
                        </Link>
                    ))}
                </div>
            )}

            {/* Breadcrumb & Software Header */}
            {software && currentSoftware && (
                <>
                    <div className="breadcrumb">
                        <Link to="/dashboard/software">Software Tutorials</Link>
                        <ChevronRight size={16} />
                        <span>{currentSoftware.name}</span>
                    </div>

                    <div className="software-header" style={{ '--sw-color': currentSoftware.color }}>
                        <div className="sw-header-icon">{currentSoftware.icon}</div>
                        <div className="sw-header-info">
                            <h2>{currentSoftware.name}</h2>
                            <p>{currentSoftware.description}</p>
                            <div className="sw-header-stats">
                                <span><BookOpen size={16} /> {currentSoftware.courses} Courses</span>
                                <span><Users size={16} /> {currentSoftware.students.toLocaleString()} Students</span>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Filters */}
            <div className="filters-section">
                <div className="search-filter">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                    >
                        <option value="all">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="courses-section">
                <h3>{filteredCourses.length} Courses Available</h3>
                <div className="courses-grid">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className={`course-thumbnail ${course.thumbnail}`}>
                                <div className="play-overlay">
                                    <PlayCircle size={48} />
                                </div>
                                {course.progress > 0 && (
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                            <div className="course-content">
                                <div className="course-header">
                                    <span className={`level-badge ${course.level.toLowerCase()}`}>
                                        {course.level}
                                    </span>
                                    {course.progress > 0 && (
                                        <span className="progress-text">{course.progress}% complete</span>
                                    )}
                                </div>
                                <h4 className="course-title">{course.title}</h4>
                                <p className="course-instructor">by {course.instructor}</p>
                                <div className="course-meta">
                                    <span><Clock size={14} /> {course.duration}</span>
                                    <span><Play size={14} /> {course.lessons} lessons</span>
                                </div>
                                <div className="course-topics">
                                    {course.topics.slice(0, 3).map((topic, i) => (
                                        <span key={i} className="topic-tag">{topic}</span>
                                    ))}
                                    {course.topics.length > 3 && (
                                        <span className="topic-more">+{course.topics.length - 3}</span>
                                    )}
                                </div>
                                <div className="course-footer">
                                    <div className="course-rating">
                                        <Star size={14} />
                                        <span>{course.rating}</span>
                                        <span className="students">({course.students.toLocaleString()})</span>
                                    </div>
                                    <div className="course-actions">
                                        <button className="action-btn"><Heart size={16} /></button>
                                        <button className="action-btn"><Share2 size={16} /></button>
                                    </div>
                                </div>
                                <button className="start-btn">
                                    {course.progress > 0 ? (
                                        <><Play size={16} /> Continue Learning</>
                                    ) : (
                                        <><PlayCircle size={16} /> Start Course</>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwarePage;
