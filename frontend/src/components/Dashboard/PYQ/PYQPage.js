import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    FileText, Download, Eye, Search, Filter, Calendar,
    ChevronRight, Star, BookmarkPlus, Share2, Clock
} from 'lucide-react';
import './PYQPage.css';

const PYQPage = () => {
    const { examType } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');

    const examCategories = [
        { id: 'gate', name: 'GATE', papers: 45, color: '#6366f1' },
        { id: 'ese', name: 'ESE', papers: 30, color: '#10b981' },
        { id: 'ssc-je', name: 'SSC JE', papers: 25, color: '#f59e0b' },
        { id: 'psc', name: 'State PSC', papers: 40, color: '#ec4899' },
        { id: 'university', name: 'University', papers: 100, color: '#06b6d4' },
    ];

    const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];

    const subjects = [
        'All Subjects',
        'Structural Engineering',
        'Geotechnical Engineering',
        'Hydraulics & Water Resources',
        'Transportation Engineering',
        'Environmental Engineering',
        'Construction Management',
        'Surveying',
        'Engineering Mathematics',
        'General Aptitude'
    ];

    // Sample papers data
    const papers = [
        {
            id: 1,
            title: 'GATE 2024 Civil Engineering',
            exam: 'GATE',
            year: '2024',
            subject: 'All Subjects',
            downloads: 2450,
            views: 5620,
            rating: 4.8,
            uploadedBy: 'Admin',
            date: '2024-02-15',
            fileSize: '2.4 MB',
            hasSolution: true
        },
        {
            id: 2,
            title: 'GATE 2024 Answer Key & Solutions',
            exam: 'GATE',
            year: '2024',
            subject: 'All Subjects',
            downloads: 1890,
            views: 4230,
            rating: 4.9,
            uploadedBy: 'Admin',
            date: '2024-02-16',
            fileSize: '3.1 MB',
            hasSolution: true
        },
        {
            id: 3,
            title: 'GATE 2023 Civil Engineering Set A',
            exam: 'GATE',
            year: '2023',
            subject: 'All Subjects',
            downloads: 3200,
            views: 7800,
            rating: 4.7,
            uploadedBy: 'Admin',
            date: '2023-02-12',
            fileSize: '2.2 MB',
            hasSolution: true
        },
        {
            id: 4,
            title: 'ESE 2024 Prelims Paper I',
            exam: 'ESE',
            year: '2024',
            subject: 'General Studies',
            downloads: 1560,
            views: 3400,
            rating: 4.6,
            uploadedBy: 'Faculty',
            date: '2024-01-20',
            fileSize: '1.8 MB',
            hasSolution: false
        },
        {
            id: 5,
            title: 'SSC JE 2024 Paper I',
            exam: 'SSC JE',
            year: '2024',
            subject: 'All Subjects',
            downloads: 980,
            views: 2100,
            rating: 4.5,
            uploadedBy: 'Admin',
            date: '2024-03-10',
            fileSize: '1.5 MB',
            hasSolution: true
        },
        {
            id: 6,
            title: 'BIT Sindri 5th Sem Structural Analysis',
            exam: 'University',
            year: '2023',
            subject: 'Structural Engineering',
            downloads: 560,
            views: 1200,
            rating: 4.4,
            uploadedBy: 'Student',
            date: '2023-12-20',
            fileSize: '1.2 MB',
            hasSolution: false
        },
    ];

    const filteredPapers = papers.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = selectedYear === 'all' || paper.year === selectedYear;
        const matchesSubject = selectedSubject === 'all' || paper.subject === selectedSubject;
        const matchesExam = !examType || paper.exam.toLowerCase().replace(' ', '-') === examType;
        return matchesSearch && matchesYear && matchesSubject && matchesExam;
    });

    return (
        <div className="pyq-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="header-content">
                    <h1><FileText size={28} /> Previous Year Questions</h1>
                    <p>Download PYQ papers for GATE, ESE, SSC JE, PSC & University exams</p>
                </div>
                <Link to="/dashboard/pyq/upload" className="upload-btn">
                    <FileText size={18} />
                    Upload Paper
                </Link>
            </div>

            {/* Exam Categories */}
            {!examType && (
                <div className="exam-categories">
                    {examCategories.map((exam) => (
                        <Link
                            key={exam.id}
                            to={`/dashboard/pyq/${exam.id}`}
                            className="exam-card"
                            style={{ '--exam-color': exam.color }}
                        >
                            <div className="exam-icon">
                                <FileText size={24} />
                            </div>
                            <div className="exam-info">
                                <h3>{exam.name}</h3>
                                <span>{exam.papers} papers</span>
                            </div>
                            <ChevronRight size={20} className="exam-arrow" />
                        </Link>
                    ))}
                </div>
            )}

            {/* Breadcrumb */}
            {examType && (
                <div className="breadcrumb">
                    <Link to="/dashboard/pyq">PYQ Papers</Link>
                    <ChevronRight size={16} />
                    <span>{examCategories.find(e => e.id === examType)?.name || examType.toUpperCase()}</span>
                </div>
            )}

            {/* Filters */}
            <div className="filters-section">
                <div className="search-filter">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search papers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="all">All Years</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        {subjects.map(subject => (
                            <option key={subject} value={subject === 'All Subjects' ? 'all' : subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Papers List */}
            <div className="papers-list">
                <div className="list-header">
                    <span className="results-count">{filteredPapers.length} papers found</span>
                    <div className="sort-options">
                        <Filter size={16} />
                        <select>
                            <option>Most Downloaded</option>
                            <option>Most Recent</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>

                <div className="papers-grid">
                    {filteredPapers.map((paper) => (
                        <div key={paper.id} className="paper-card">
                            <div className="paper-header">
                                <span className={`exam-badge ${paper.exam.toLowerCase().replace(' ', '-')}`}>
                                    {paper.exam}
                                </span>
                                {paper.hasSolution && (
                                    <span className="solution-badge">With Solutions</span>
                                )}
                            </div>
                            <h3 className="paper-title">{paper.title}</h3>
                            <div className="paper-meta">
                                <span><Calendar size={14} /> {paper.year}</span>
                                <span><Clock size={14} /> {paper.date}</span>
                                <span>{paper.fileSize}</span>
                            </div>
                            <div className="paper-stats">
                                <span><Download size={14} /> {paper.downloads.toLocaleString()}</span>
                                <span><Eye size={14} /> {paper.views.toLocaleString()}</span>
                                <span className="rating"><Star size={14} /> {paper.rating}</span>
                            </div>
                            <div className="paper-actions">
                                <button className="download-btn">
                                    <Download size={16} />
                                    Download
                                </button>
                                <button className="action-btn">
                                    <Eye size={16} />
                                </button>
                                <button className="action-btn">
                                    <BookmarkPlus size={16} />
                                </button>
                                <button className="action-btn">
                                    <Share2 size={16} />
                                </button>
                            </div>
                            <div className="paper-footer">
                                Uploaded by <span>{paper.uploadedBy}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button className="page-btn" disabled>Previous</button>
                <div className="page-numbers">
                    <button className="page-num active">1</button>
                    <button className="page-num">2</button>
                    <button className="page-num">3</button>
                    <span>...</span>
                    <button className="page-num">10</button>
                </div>
                <button className="page-btn">Next</button>
            </div>
        </div>
    );
};

export default PYQPage;
