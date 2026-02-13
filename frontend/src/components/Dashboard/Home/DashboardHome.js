import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, BookOpen, Monitor, MessageSquare, Users, Download,
    TrendingUp, Clock, Star, Award, ArrowRight, Play, Eye, UploadCloud, X
} from 'lucide-react';
import './DashboardHome.css';

const DashboardHome = () => {
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [uploadFile, setUploadFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [stats, setStats] = useState([
        { title: 'Total Papers', value: '0', icon: FileText, change: 'No recent activity', color: '#6366f1' },
        { title: 'Study Notes', value: '0', icon: BookOpen, change: 'No recent activity', color: '#10b981' },
        { title: 'Other Resources', value: '0', icon: Monitor, change: 'No new uploads', color: '#f59e0b' },
        { title: 'Active Members', value: '0', icon: Users, change: 'Community growing', color: '#ec4899' }
    ]);
    const [recentPapers, setRecentPapers] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
                const res = await fetch(`${API_URL}/api/resources`);
                const data = await res.json();

                if (data.success) {
                    const resources = data.data;
                    const papersCount = resources.filter(r => r.fileType === 'pdf').length;
                    const notesCount = resources.filter(r => r.fileType === 'doc').length;
                    const othersCount = resources.length - papersCount - notesCount;

                    setStats(prev => [
                        { ...prev[0], value: papersCount.toString(), change: 'Updated just now' },
                        { ...prev[1], value: notesCount.toString(), change: 'Updated just now' },
                        { ...prev[2], value: othersCount.toString(), change: 'Updated just now' },
                        prev[3]
                    ]);

                    // Update recent papers list
                    const recent = resources.slice(0, 5).map(r => ({
                        id: r._id,
                        title: r.title,
                        type: r.category,
                        downloads: 0,
                        date: new Date(r.createdAt).toLocaleDateString()
                    }));
                    setRecentPapers(recent);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchResources();
    }, [uploading]); // Refetch when uploading finishes

    // Popular Courses - Empty State (No backend for this yet)
    const popularCourses = [];

    // Recent Forum Questions - Empty State
    const forumQuestions = [];

    // Upcoming Events - Empty State
    const upcomingEvents = [];

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setUploadFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!uploadFile) return;
        setUploading(true);

        const formData = new FormData();
        formData.append('file', uploadFile);
        formData.append('title', uploadFile.name);
        formData.append('category', 'Other'); // You can add a category selector in the modal later

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
            const res = await fetch(`${API_URL}/api/resources`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                alert(`File "${uploadFile.name}" uploaded successfully!`);
                setUploadModalOpen(false);
                setUploadFile(null);
                // Optionally refresh list here
            } else {
                alert(`Upload failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Upload Error:', error);
            alert('Upload failed due to connection error.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="dashboard-home">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-content">
                    <h1>Welcome back, <span className="gradient-text">Engineer!</span></h1>
                    <p>Your learning dashboard is ready. Upload resources to contribute.</p>
                </div>
                <div className="quick-actions">
                    <button
                        onClick={() => setUploadModalOpen(true)}
                        className="quick-action-btn primary"
                    >
                        <UploadCloud size={18} />
                        Upload Resource
                    </button>
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

            {/* Main Content Grid - Empty States */}
            <div className="content-grid">
                {/* Recent PYQ Papers */}
                <div className="content-card papers-card">
                    <div className="card-header">
                        <h2><FileText size={20} /> Recent Resources</h2>
                        <Link to="/dashboard/pyq" className="view-all">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="card-content">
                        {recentPapers.length > 0 ? (
                            recentPapers.map((paper) => (
                                <div key={paper.id} className="paper-item">
                                    <div className="paper-info">
                                        <span className={`paper-type ${paper.type ? paper.type.toLowerCase() : 'other'}`}>
                                            {paper.type || 'Resource'}
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
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm p-4">No resources uploaded yet.</p>
                        )}
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
                    <div className="card-content empty-state">
                        <p>No tutorials watched yet.</p>
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
                    <Link to="/dashboard/forum" className="quick-link">
                        <span className="ql-icon forum">💬</span>
                        <span>Forum</span>
                    </Link>
                </div>
            </div>

            {/* Upload Modal */}
            {uploadModalOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setUploadModalOpen(false)}
                            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <UploadCloud size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Upload Resource</h3>
                            <p className="text-sm text-gray-500 mt-1">Share papers, notes, or tutorials with the community.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-colors cursor-pointer relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                />
                                {uploadFile ? (
                                    <div className="text-blue-600 font-medium flex items-center justify-center gap-2">
                                        <FileText size={16} />
                                        {uploadFile.name}
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-sm font-medium text-gray-700">Click to selecet file</p>
                                        <p className="text-xs text-gray-400 mt-1">PDF, DOCX, JPG up to 10MB</p>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={handleUpload}
                                disabled={!uploadFile || uploading}
                                className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {uploading ? 'Uploading...' : 'Upload Now'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardHome;
