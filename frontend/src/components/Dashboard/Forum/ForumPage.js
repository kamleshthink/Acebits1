import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageSquare, ThumbsUp, Eye, Clock, Search, Filter,
    TrendingUp, Tag, Plus, User, MessageCircle, Award,
    ChevronUp, ChevronDown, CheckCircle, Bookmark, X
} from 'lucide-react';
import './ForumPage.css';

const ForumPage = () => {
    const [activeTab, setActiveTab] = useState('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAskModalOpen, setIsAskModalOpen] = useState(false);

    // New Question Form State
    const [newQuestion, setNewQuestion] = useState({
        title: '',
        content: '',
        tags: ''
    });
    const [submitting, setSubmitting] = useState(false);

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

    // Fetch questions
    useEffect(() => {
        fetchQuestions();
    }, [activeTab, selectedTag, searchQuery]);

    const fetchQuestions = async () => {
        try {
            setLoading(true);
            let url = `${API_URL}/api/forum?sort=${activeTab}`;

            if (selectedTag !== 'all') {
                url += `&tag=${selectedTag}`;
            }

            if (searchQuery) {
                // Debounce could be added here
                url += `&search=${searchQuery}`;
            }

            const res = await fetch(url);
            const data = await res.json();

            if (data.success) {
                setQuestions(data.data);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAskQuestion = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const userStr = localStorage.getItem('aceUser');
            const user = userStr ? JSON.parse(userStr) : null;

            const tagsArray = newQuestion.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

            const res = await fetch(`${API_URL}/api/forum`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: newQuestion.title,
                    content: newQuestion.content,
                    tags: tagsArray,
                    author: user ? (user.name || user.email.split('@')[0]) : 'Anonymous Engineer',
                    authorId: user ? user.id : null
                })
            });

            const data = await res.json();

            if (data.success) {
                setIsAskModalOpen(false);
                setNewQuestion({ title: '', content: '', tags: '' });
                fetchQuestions(); // Refresh list
                alert('Question posted successfully!');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error posting question:', error);
            alert('Failed to post question');
        } finally {
            setSubmitting(false);
        }
    };

    // Calculate dynamic stats
    const totalViews = questions.reduce((acc, q) => acc + (q.views || 0), 0);
    const totalAnswers = questions.reduce((acc, q) => acc + (q.answers ? q.answers.length : 0), 0);
    const resolvedCount = questions.filter(q => q.isAnswered).length;
    const resolvedPercentage = questions.length > 0 ? Math.round((resolvedCount / questions.length) * 100) : 0;

    // Calculate tag counts dynamically
    const getTagCounts = () => {
        const counts = { 'all': questions.length };
        questions.forEach(q => {
            if (q.tags && Array.isArray(q.tags)) {
                q.tags.forEach(tag => {
                    const normalized = tag.toLowerCase();
                    counts[normalized] = (counts[normalized] || 0) + 1;
                });
            }
        });
        return counts;
    };

    const tagCounts = getTagCounts();
    const sortedTags = Object.keys(tagCounts)
        .filter(tag => tag !== 'all')
        .sort((a, b) => tagCounts[b] - tagCounts[a])
        .slice(0, 8); // Top 8 tags

    return (
        <div className="forum-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="header-content">
                    <h1><MessageSquare size={28} /> Discussion Forum</h1>
                    <p>Ask questions, share knowledge, help fellow engineers</p>
                </div>
                <button className="ask-btn" onClick={() => setIsAskModalOpen(true)}>
                    <Plus size={18} />
                    Ask Question
                </button>
            </div>

            {/* Forum Stats */}
            <div className="forum-stats">
                <div className="stat-box">
                    <MessageSquare size={24} />
                    <div>
                        <span className="stat-value">{questions.length}</span>
                        <span className="stat-label">Questions</span>
                    </div>
                </div>
                <div className="stat-box">
                    <MessageCircle size={24} />
                    <div>
                        <span className="stat-value">{totalAnswers}</span>
                        <span className="stat-label">Answers</span>
                    </div>
                </div>
                <div className="stat-box">
                    <Eye size={24} />
                    <div>
                        <span className="stat-value">{totalViews}</span>
                        <span className="stat-label">Total Views</span>
                    </div>
                </div>
                <div className="stat-box">
                    <CheckCircle size={24} />
                    <div>
                        <span className="stat-value">{resolvedPercentage}%</span>
                        <span className="stat-label">Resolved</span>
                    </div>
                </div>
            </div>

            <div className="forum-content">
                {/* Main Content */}
                <div className="forum-main">
                    {/* Tabs & Search */}
                    <div className="forum-controls">
                        <div className="forum-tabs">
                            <button
                                className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
                                onClick={() => setActiveTab('recent')}
                            >
                                <Clock size={16} /> Recent
                            </button>
                            <button
                                className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
                                onClick={() => setActiveTab('trending')}
                            >
                                <TrendingUp size={16} /> Trending
                            </button>
                            <button
                                className={`tab ${activeTab === 'unanswered' ? 'active' : ''}`}
                                onClick={() => setActiveTab('unanswered')}
                            >
                                <MessageSquare size={16} /> Unanswered
                            </button>
                        </div>
                        <div className="forum-search">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Questions List */}
                    <div className="questions-list">
                        {loading ? (
                            <div className="loading-state">Loading discussions...</div>
                        ) : questions.length === 0 ? (
                            <div className="empty-state">
                                <MessageSquare size={48} />
                                <h3>No questions found</h3>
                                <p>Be the first to ask a question in this category!</p>
                            </div>
                        ) : (
                            questions.map((question) => (
                                <div key={question._id || question.id} className="question-card">
                                    <div className="vote-section">
                                        <button className="vote-btn up">
                                            <ChevronUp size={20} />
                                        </button>
                                        <span className="vote-count">{question.upvotes ? question.upvotes.length : 0}</span>
                                        <button className="vote-btn down">
                                            <ChevronDown size={20} />
                                        </button>
                                    </div>
                                    <div className="question-content">
                                        <div className="question-header">
                                            {question.isAnswered && (
                                                <span className="answered-badge">
                                                    <CheckCircle size={14} /> Answered
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="question-title">
                                            <Link to={`/dashboard/forum/${question._id || question.id}`}>{question.title}</Link>
                                        </h3>
                                        <p className="question-excerpt">
                                            {question.content && question.content.length > 150
                                                ? `${question.content.substring(0, 150)}...`
                                                : question.content}
                                        </p>
                                        <div className="question-tags">
                                            {question.tags && question.tags.map((tag, i) => (
                                                <span key={i} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="question-meta">
                                            <div className="author">
                                                <div className="author-avatar">{question.avatar || (question.author ? question.author.charAt(0) : 'U')}</div>
                                                <span>{question.author}</span>
                                            </div>
                                            <div className="meta-stats">
                                                <span><Clock size={14} /> {new Date(question.createdAt).toLocaleDateString()}</span>
                                                <span><Eye size={14} /> {question.views || 0}</span>
                                                <span><MessageCircle size={14} /> {question.answers ? question.answers.length : 0} answers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="forum-sidebar">
                    {/* Tags */}
                    <div className="sidebar-card">
                        <h3><Tag size={18} /> Popular Tags</h3>
                        <div className="tags-list">
                            <button
                                className={`tag-btn ${selectedTag === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedTag('all')}
                            >
                                All <span className="tag-count">{questions.length}</span>
                            </button>
                            {sortedTags.map((tag, i) => (
                                <button
                                    key={i}
                                    className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                                    onClick={() => setSelectedTag(tag)}
                                >
                                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                    <span className="tag-count">{tagCounts[tag]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Guidelines */}

                    {/* Guidelines */}
                    <div className="sidebar-card guidelines">
                        <h3>📝 Posting Guidelines</h3>
                        <ul>
                            <li>Search before asking to avoid duplicates</li>
                            <li>Be specific and provide details</li>
                            <li>Use relevant tags</li>
                            <li>Be respectful to others</li>
                            <li>Accept answers that helped you</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Ask Question Modal */}
            {isAskModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content animate-in">
                        <button
                            onClick={() => setIsAskModalOpen(false)}
                            className="modal-close-btn"
                        >
                            <X size={20} />
                        </button>

                        <div className="modal-header">
                            <h3>
                                <Plus size={20} />
                                Ask a Question
                            </h3>
                        </div>

                        <form onSubmit={handleAskQuestion} className="modal-form">
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g., How to calculate beam deflection?"
                                    value={newQuestion.title}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Details</label>
                                <textarea
                                    required
                                    rows={6}
                                    placeholder="Describe your problem in detail..."
                                    value={newQuestion.content}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Tags (comma separated)</label>
                                <input
                                    type="text"
                                    placeholder="e.g., structures, rcc, design"
                                    value={newQuestion.tags}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, tags: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="submit-btn"
                            >
                                {submitting ? 'Posting...' : 'Post Question'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForumPage;
