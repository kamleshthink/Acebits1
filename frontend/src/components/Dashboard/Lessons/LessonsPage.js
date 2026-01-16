import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    BookOpen, Download, Eye, Search, Filter, Upload, Calendar,
    ChevronRight, Star, FileText, File, User, Clock, Heart
} from 'lucide-react';
import './LessonsPage.css';

const LessonsPage = () => {
    const { subject } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    const subjects = [
        {
            id: 'structural',
            name: 'Structural Engineering',
            icon: '🏗️',
            notes: 85,
            color: '#6366f1',
            description: 'RCC, Steel, Structural Analysis, Design'
        },
        {
            id: 'geotechnical',
            name: 'Geotechnical Engineering',
            icon: '⛏️',
            notes: 65,
            color: '#f59e0b',
            description: 'Soil Mechanics, Foundation Engineering'
        },
        {
            id: 'hydraulics',
            name: 'Hydraulics & Water Resources',
            icon: '💧',
            notes: 55,
            color: '#06b6d4',
            description: 'Fluid Mechanics, Hydrology, Irrigation'
        },
        {
            id: 'transportation',
            name: 'Transportation Engineering',
            icon: '🛣️',
            notes: 45,
            color: '#10b981',
            description: 'Highway, Traffic, Railway Engineering'
        },
        {
            id: 'environmental',
            name: 'Environmental Engineering',
            icon: '🌿',
            notes: 40,
            color: '#22c55e',
            description: 'Water Treatment, Waste Management'
        },
        {
            id: 'survey',
            name: 'Surveying',
            icon: '📐',
            notes: 35,
            color: '#8b5cf6',
            description: 'Chain, Compass, Theodolite, Total Station'
        },
        {
            id: 'construction',
            name: 'Construction Management',
            icon: '🏢',
            notes: 30,
            color: '#ec4899',
            description: 'Project Management, Estimation, PERT/CPM'
        },
        {
            id: 'materials',
            name: 'Building Materials',
            icon: '🧱',
            notes: 28,
            color: '#ef4444',
            description: 'Cement, Concrete, Steel, Timber'
        }
    ];

    const semesters = ['1st Sem', '2nd Sem', '3rd Sem', '4th Sem', '5th Sem', '6th Sem', '7th Sem', '8th Sem'];
    const types = ['All Types', 'Notes', 'Handwritten', 'Slides', 'Books', 'Question Bank'];

    const notes = [
        {
            id: 1,
            title: 'Complete RCC Design Notes',
            subject: 'structural',
            author: 'Prof. A.K. Sharma',
            type: 'Notes',
            semester: '5th Sem',
            pages: 120,
            downloads: 2450,
            rating: 4.9,
            date: '2024-01-10',
            fileSize: '15 MB',
            thumbnail: 'rcc'
        },
        {
            id: 2,
            title: 'Structural Analysis - Theory & Problems',
            subject: 'structural',
            author: 'Er. Rajesh Kumar',
            type: 'Handwritten',
            semester: '4th Sem',
            pages: 85,
            downloads: 1890,
            rating: 4.8,
            date: '2024-01-05',
            fileSize: '12 MB',
            thumbnail: 'sa'
        },
        {
            id: 3,
            title: 'Soil Mechanics Complete Notes',
            subject: 'geotechnical',
            author: 'Dr. S. Mishra',
            type: 'Notes',
            semester: '4th Sem',
            pages: 95,
            downloads: 1650,
            rating: 4.7,
            date: '2023-12-20',
            fileSize: '10 MB',
            thumbnail: 'soil'
        },
        {
            id: 4,
            title: 'Fluid Mechanics Handwritten Notes',
            subject: 'hydraulics',
            author: 'Amit Singh',
            type: 'Handwritten',
            semester: '3rd Sem',
            pages: 75,
            downloads: 1420,
            rating: 4.6,
            date: '2023-12-15',
            fileSize: '8 MB',
            thumbnail: 'fluid'
        },
        {
            id: 5,
            title: 'Highway Engineering - Complete Guide',
            subject: 'transportation',
            author: 'Prof. P.K. Verma',
            type: 'Notes',
            semester: '6th Sem',
            pages: 110,
            downloads: 1200,
            rating: 4.8,
            date: '2023-12-10',
            fileSize: '14 MB',
            thumbnail: 'highway'
        },
        {
            id: 6,
            title: 'Environmental Engineering Notes',
            subject: 'environmental',
            author: 'Dr. R. Gupta',
            type: 'Slides',
            semester: '7th Sem',
            pages: 65,
            downloads: 980,
            rating: 4.5,
            date: '2023-11-25',
            fileSize: '6 MB',
            thumbnail: 'env'
        },
        {
            id: 7,
            title: 'Steel Design IS 800:2007',
            subject: 'structural',
            author: 'Er. Vikram Yadav',
            type: 'Notes',
            semester: '6th Sem',
            pages: 90,
            downloads: 1560,
            rating: 4.7,
            date: '2023-11-20',
            fileSize: '11 MB',
            thumbnail: 'steel'
        },
        {
            id: 8,
            title: 'Foundation Engineering Notes',
            subject: 'geotechnical',
            author: 'Prof. M. Kumar',
            type: 'Notes',
            semester: '5th Sem',
            pages: 80,
            downloads: 1340,
            rating: 4.6,
            date: '2023-11-15',
            fileSize: '9 MB',
            thumbnail: 'found'
        }
    ];

    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSemester = selectedSemester === 'all' || note.semester === selectedSemester;
        const matchesType = selectedType === 'all' || note.type === selectedType;
        const matchesSubject = !subject || note.subject === subject;
        return matchesSearch && matchesSemester && matchesType && matchesSubject;
    });

    const currentSubject = subjects.find(s => s.id === subject);

    return (
        <div className="lessons-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="header-content">
                    <h1><BookOpen size={28} /> Lessons & Notes</h1>
                    <p>Download study materials, notes, and resources</p>
                </div>
                <button className="upload-btn">
                    <Upload size={18} />
                    Upload Notes
                </button>
            </div>

            {/* Subject Categories */}
            {!subject && (
                <div className="subjects-grid">
                    {subjects.map((subj) => (
                        <Link
                            key={subj.id}
                            to={`/dashboard/lessons/${subj.id}`}
                            className="subject-card"
                            style={{ '--subj-color': subj.color }}
                        >
                            <div className="subj-icon">{subj.icon}</div>
                            <div className="subj-info">
                                <h3>{subj.name}</h3>
                                <p>{subj.description}</p>
                                <span className="notes-count">
                                    <FileText size={14} /> {subj.notes} notes
                                </span>
                            </div>
                            <ChevronRight size={20} className="subj-arrow" />
                        </Link>
                    ))}
                </div>
            )}

            {/* Breadcrumb & Subject Header */}
            {subject && currentSubject && (
                <>
                    <div className="breadcrumb">
                        <Link to="/dashboard/lessons">Lessons & Notes</Link>
                        <ChevronRight size={16} />
                        <span>{currentSubject.name}</span>
                    </div>

                    <div className="subject-header" style={{ '--subj-color': currentSubject.color }}>
                        <div className="subj-header-icon">{currentSubject.icon}</div>
                        <div className="subj-header-info">
                            <h2>{currentSubject.name}</h2>
                            <p>{currentSubject.description}</p>
                            <div className="subj-header-stats">
                                <span><FileText size={16} /> {currentSubject.notes} Notes</span>
                                <span><Download size={16} /> 10K+ Downloads</span>
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
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                    >
                        <option value="all">All Semesters</option>
                        {semesters.map(sem => (
                            <option key={sem} value={sem}>{sem}</option>
                        ))}
                    </select>
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        {types.map(type => (
                            <option key={type} value={type === 'All Types' ? 'all' : type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Notes Grid */}
            <div className="notes-section">
                <div className="section-header">
                    <h3>{filteredNotes.length} Notes Available</h3>
                    <div className="sort-options">
                        <Filter size={16} />
                        <select>
                            <option>Most Downloaded</option>
                            <option>Most Recent</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>

                <div className="notes-grid">
                    {filteredNotes.map((note) => (
                        <div key={note.id} className="note-card">
                            <div className={`note-thumbnail ${note.thumbnail}`}>
                                <div className="note-type-badge">{note.type}</div>
                            </div>
                            <div className="note-content">
                                <h4 className="note-title">{note.title}</h4>
                                <div className="note-author">
                                    <User size={14} />
                                    <span>{note.author}</span>
                                </div>
                                <div className="note-meta">
                                    <span><Calendar size={14} /> {note.semester}</span>
                                    <span><File size={14} /> {note.pages} pages</span>
                                    <span>{note.fileSize}</span>
                                </div>
                                <div className="note-stats">
                                    <span><Download size={14} /> {note.downloads.toLocaleString()}</span>
                                    <span className="rating"><Star size={14} /> {note.rating}</span>
                                </div>
                                <div className="note-actions">
                                    <button className="download-btn">
                                        <Download size={16} />
                                        Download
                                    </button>
                                    <button className="action-btn">
                                        <Eye size={16} />
                                    </button>
                                    <button className="action-btn">
                                        <Heart size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Tips */}
            <div className="tips-section">
                <h3>📚 Study Tips</h3>
                <div className="tips-grid">
                    <div className="tip-card">
                        <span className="tip-icon">📝</span>
                        <p>Start with handwritten notes for better understanding</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">🎯</span>
                        <p>Focus on previous year questions for exam prep</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">⏰</span>
                        <p>Revise notes regularly for better retention</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">📊</span>
                        <p>Practice numerical problems daily</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonsPage;
