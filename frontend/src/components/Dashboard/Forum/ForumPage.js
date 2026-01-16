import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageSquare, ThumbsUp, Eye, Clock, Search, Filter,
    TrendingUp, Tag, Plus, User, MessageCircle, Award,
    ChevronUp, ChevronDown, CheckCircle, Bookmark
} from 'lucide-react';
import './ForumPage.css';

const ForumPage = () => {
    const [activeTab, setActiveTab] = useState('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');

    const tags = [
        { name: 'All', count: 450 },
        { name: 'GATE', count: 120 },
        { name: 'Structures', count: 85 },
        { name: 'Geotechnical', count: 65 },
        { name: 'AutoCAD', count: 55 },
        { name: 'STAAD Pro', count: 45 },
        { name: 'Career', count: 40 },
        { name: 'Interview', count: 35 }
    ];

    const questions = [
        {
            id: 1,
            title: 'How to design RCC beam for cantilever projection more than 2m?',
            content: 'I am designing a residential building and there is a cantilever projection of 2.5m. What should be the depth of beam and reinforcement details?',
            author: 'Rahul Kumar',
            avatar: 'RK',
            time: '2 hours ago',
            views: 234,
            answers: 8,
            upvotes: 24,
            tags: ['Structures', 'RCC', 'Design'],
            isAnswered: true,
            isTrending: true
        },
        {
            id: 2,
            title: 'Best books for GATE Civil Engineering preparation?',
            content: 'I am preparing for GATE 2026. Can anyone suggest the best books for each subject? Especially for Structural Engineering and Geotechnical.',
            author: 'Priya Singh',
            avatar: 'PS',
            time: '5 hours ago',
            views: 567,
            answers: 18,
            upvotes: 45,
            tags: ['GATE', 'Books', 'Preparation'],
            isAnswered: true,
            isTrending: true
        },
        {
            id: 3,
            title: 'STAAD Pro vs ETABS - Which is better for high-rise building analysis?',
            content: 'Working on a 20-story building project. Should I use STAAD Pro or ETABS for structural analysis? What are the pros and cons?',
            author: 'Amit Sharma',
            avatar: 'AS',
            time: '1 day ago',
            views: 891,
            answers: 24,
            upvotes: 67,
            tags: ['STAAD Pro', 'ETABS', 'Software'],
            isAnswered: true,
            isTrending: false
        },
        {
            id: 4,
            title: 'What is the minimum lap length for Fe500 steel as per IS 456?',
            content: 'Need clarification on lap length requirements for Fe500 reinforcement in columns. Is it 45d or 50d?',
            author: 'Vikash Yadav',
            avatar: 'VY',
            time: '2 days ago',
            views: 345,
            answers: 6,
            upvotes: 18,
            tags: ['IS Code', 'RCC', 'Reinforcement'],
            isAnswered: true,
            isTrending: false
        },
        {
            id: 5,
            title: 'How to calculate bearing capacity of soil from SPT N-value?',
            content: 'Got SPT results for my site. N-value varies from 8 to 25 at different depths. How do I calculate safe bearing capacity?',
            author: 'Neha Gupta',
            avatar: 'NG',
            time: '3 days ago',
            views: 456,
            answers: 12,
            upvotes: 32,
            tags: ['Geotechnical', 'Foundation', 'SPT'],
            isAnswered: false,
            isTrending: false
        },
        {
            id: 6,
            title: 'AutoCAD Civil 3D - How to create corridor for road design?',
            content: 'New to Civil 3D. Need to design a 2km road with proper cross-sections. Any tutorial or step-by-step guide?',
            author: 'Rohit Verma',
            avatar: 'RV',
            time: '4 days ago',
            views: 289,
            answers: 5,
            upvotes: 15,
            tags: ['AutoCAD', 'Civil 3D', 'Road Design'],
            isAnswered: false,
            isTrending: false
        }
    ];

    const topContributors = [
        { name: 'Prof. A.K. Sharma', answers: 156, badge: 'Expert' },
        { name: 'Er. Rajesh Kumar', answers: 98, badge: 'Pro' },
        { name: 'Dr. S. Mishra', answers: 87, badge: 'Expert' },
        { name: 'Vikram Singh', answers: 65, badge: 'Active' },
    ];

    const filteredQuestions = questions.filter(q => {
        const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === 'all' || q.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
        return matchesSearch && matchesTag;
    });

    const sortedQuestions = [...filteredQuestions].sort((a, b) => {
        if (activeTab === 'trending') return b.upvotes - a.upvotes;
        if (activeTab === 'unanswered') return a.answers - b.answers;
        return 0; // recent - keep original order
    });

    return (
        <div className="forum-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="header-content">
                    <h1><MessageSquare size={28} /> Discussion Forum</h1>
                    <p>Ask questions, share knowledge, help fellow engineers</p>
                </div>
                <button className="ask-btn">
                    <Plus size={18} />
                    Ask Question
                </button>
            </div>

            {/* Forum Stats */}
            <div className="forum-stats">
                <div className="stat-box">
                    <MessageSquare size={24} />
                    <div>
                        <span className="stat-value">2,450</span>
                        <span className="stat-label">Questions</span>
                    </div>
                </div>
                <div className="stat-box">
                    <MessageCircle size={24} />
                    <div>
                        <span className="stat-value">8,920</span>
                        <span className="stat-label">Answers</span>
                    </div>
                </div>
                <div className="stat-box">
                    <User size={24} />
                    <div>
                        <span className="stat-value">1,250</span>
                        <span className="stat-label">Members</span>
                    </div>
                </div>
                <div className="stat-box">
                    <CheckCircle size={24} />
                    <div>
                        <span className="stat-value">78%</span>
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
                        {sortedQuestions.map((question) => (
                            <div key={question.id} className="question-card">
                                <div className="vote-section">
                                    <button className="vote-btn up">
                                        <ChevronUp size={20} />
                                    </button>
                                    <span className="vote-count">{question.upvotes}</span>
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
                                        {question.isTrending && (
                                            <span className="trending-badge">
                                                <TrendingUp size={14} /> Trending
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="question-title">
                                        <Link to={`/dashboard/forum/${question.id}`}>{question.title}</Link>
                                    </h3>
                                    <p className="question-excerpt">{question.content}</p>
                                    <div className="question-tags">
                                        {question.tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="question-meta">
                                        <div className="author">
                                            <div className="author-avatar">{question.avatar}</div>
                                            <span>{question.author}</span>
                                        </div>
                                        <div className="meta-stats">
                                            <span><Clock size={14} /> {question.time}</span>
                                            <span><Eye size={14} /> {question.views}</span>
                                            <span><MessageCircle size={14} /> {question.answers} answers</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="bookmark-btn">
                                    <Bookmark size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="forum-sidebar">
                    {/* Tags */}
                    <div className="sidebar-card">
                        <h3><Tag size={18} /> Popular Tags</h3>
                        <div className="tags-list">
                            {tags.map((tag, i) => (
                                <button
                                    key={i}
                                    className={`tag-btn ${selectedTag === (tag.name === 'All' ? 'all' : tag.name.toLowerCase()) ? 'active' : ''}`}
                                    onClick={() => setSelectedTag(tag.name === 'All' ? 'all' : tag.name.toLowerCase())}
                                >
                                    {tag.name}
                                    <span className="tag-count">{tag.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Top Contributors */}
                    <div className="sidebar-card">
                        <h3><Award size={18} /> Top Contributors</h3>
                        <div className="contributors-list">
                            {topContributors.map((contributor, i) => (
                                <div key={i} className="contributor">
                                    <div className="contributor-rank">{i + 1}</div>
                                    <div className="contributor-info">
                                        <span className="contributor-name">{contributor.name}</span>
                                        <span className="contributor-stats">{contributor.answers} answers</span>
                                    </div>
                                    <span className={`contributor-badge ${contributor.badge.toLowerCase()}`}>
                                        {contributor.badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

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
        </div>
    );
};

export default ForumPage;
