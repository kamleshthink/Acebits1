import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Home, FileText, BookOpen, Monitor, Calendar, MessageSquare,
    Briefcase, User, Menu, X, Bell, Search, ChevronDown,
    GraduationCap, Settings, LogOut, Award, Users, TrendingUp, LogIn, Eye, EyeOff
} from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [userName, setUserName] = useState('');
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple login - just store the email as name
        if (loginData.email && loginData.password) {
            setUserName(loginData.email.split('@')[0]);
            setIsLoggedIn(true);
            setLoginOpen(false);
            setLoginData({ email: '', password: '' });
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
        setProfileOpen(false);
    };

    const menuItems = [
        {
            title: 'Home',
            icon: Home,
            path: '/dashboard',
            exact: true
        },
        {
            title: 'PYQ Papers',
            icon: FileText,
            path: '/dashboard/pyq',
            submenu: [
                { title: 'GATE', path: '/dashboard/pyq/gate' },
                { title: 'ESE', path: '/dashboard/pyq/ese' },
                { title: 'SSC JE', path: '/dashboard/pyq/ssc-je' },
                { title: 'State PSC', path: '/dashboard/pyq/psc' },
                { title: 'University', path: '/dashboard/pyq/university' },
            ]
        },
        {
            title: 'Lessons & Notes',
            icon: BookOpen,
            path: '/dashboard/lessons',
            submenu: [
                { title: 'Structural Engineering', path: '/dashboard/lessons/structural' },
                { title: 'Geotechnical', path: '/dashboard/lessons/geotechnical' },
                { title: 'Hydraulics', path: '/dashboard/lessons/hydraulics' },
                { title: 'Transportation', path: '/dashboard/lessons/transportation' },
                { title: 'Environmental', path: '/dashboard/lessons/environmental' },
                { title: 'Survey', path: '/dashboard/lessons/survey' },
                { title: 'Construction', path: '/dashboard/lessons/construction' },
            ]
        },
        {
            title: 'Software Tutorials',
            icon: Monitor,
            path: '/dashboard/software',
            submenu: [
                { title: 'AutoCAD', path: '/dashboard/software/autocad' },
                { title: 'STAAD Pro', path: '/dashboard/software/staad' },
                { title: 'Revit', path: '/dashboard/software/revit' },
                { title: 'ETABS', path: '/dashboard/software/etabs' },
                { title: 'Primavera', path: '/dashboard/software/primavera' },
                { title: 'MS Project', path: '/dashboard/software/ms-project' },
            ]
        },
        {
            title: 'Events',
            icon: Calendar,
            path: '/dashboard/events'
        },
        {
            title: 'Forum',
            icon: MessageSquare,
            path: '/dashboard/forum'
        },
        {
            title: 'Jobs & Internships',
            icon: Briefcase,
            path: '/dashboard/jobs'
        },
        {
            title: 'Profile',
            icon: User,
            path: '/dashboard/profile'
        },
    ];

    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleSubmenu = (title) => {
        setExpandedMenus(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    const isActive = (path, exact = false) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    const notifications = [
        { id: 1, text: 'New GATE 2024 papers uploaded', time: '2 hours ago', unread: true },
        { id: 2, text: 'Workshop on STAAD Pro this Saturday', time: '5 hours ago', unread: true },
        { id: 3, text: 'Your question got 5 upvotes', time: '1 day ago', unread: false },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <Link to="/dashboard" className="sidebar-logo">
                        <GraduationCap size={32} className="logo-icon" />
                        {sidebarOpen && <span className="logo-text">ACE BITS</span>}
                    </Link>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => (
                        <div key={item.title} className="nav-item-wrapper">
                            {item.submenu ? (
                                <>
                                    <button
                                        className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu(item.title)}
                                    >
                                        <item.icon size={20} className="nav-icon" />
                                        {sidebarOpen && (
                                            <>
                                                <span className="nav-text">{item.title}</span>
                                                <ChevronDown
                                                    size={16}
                                                    className={`nav-arrow ${expandedMenus[item.title] ? 'rotated' : ''}`}
                                                />
                                            </>
                                        )}
                                    </button>
                                    {sidebarOpen && expandedMenus[item.title] && (
                                        <div className="submenu">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`submenu-item ${isActive(subItem.path, true) ? 'active' : ''}`}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`nav-item ${isActive(item.path, item.exact) ? 'active' : ''}`}
                                >
                                    <item.icon size={20} className="nav-icon" />
                                    {sidebarOpen && <span className="nav-text">{item.title}</span>}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {sidebarOpen && (
                    <div className="sidebar-footer">
                        <div className="sidebar-stats">
                            <div className="stat-item">
                                <Users size={16} />
                                <span>2.5k+ Members</span>
                            </div>
                            <div className="stat-item">
                                <Award size={16} />
                                <span>500+ Resources</span>
                            </div>
                        </div>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <div className={`dashboard-main ${sidebarOpen ? '' : 'expanded'}`}>
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu size={24} />
                        </button>
                        <div className="search-box">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search papers, notes, tutorials..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="header-right">
                        {/* Notifications */}
                        <div className="header-dropdown">
                            <button
                                className="header-btn notification-btn"
                                onClick={() => setNotificationOpen(!notificationOpen)}
                            >
                                <Bell size={20} />
                                <span className="notification-badge">2</span>
                            </button>
                            {notificationOpen && (
                                <div className="dropdown-menu notifications-menu">
                                    <div className="dropdown-header">
                                        <h4>Notifications</h4>
                                        <button className="mark-read">Mark all read</button>
                                    </div>
                                    <div className="dropdown-content">
                                        {notifications.map((notif) => (
                                            <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                                                <p>{notif.text}</p>
                                                <span className="notif-time">{notif.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/dashboard/notifications" className="dropdown-footer">
                                        View all notifications
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Login/Profile */}
                        {!isLoggedIn ? (
                            <button
                                className="login-btn"
                                onClick={() => setLoginOpen(true)}
                            >
                                <LogIn size={18} />
                                <span>Login</span>
                            </button>
                        ) : (
                            <div className="header-dropdown">
                                <button
                                    className="header-btn profile-btn"
                                    onClick={() => setProfileOpen(!profileOpen)}
                                >
                                    <div className="profile-avatar">
                                        {userName.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="profile-name">{userName}</span>
                                    <ChevronDown size={16} />
                                </button>
                                {profileOpen && (
                                    <div className="dropdown-menu profile-menu">
                                        <Link to="/dashboard/profile" className="dropdown-item">
                                            <User size={16} />
                                            My Profile
                                        </Link>
                                        <Link to="/dashboard/settings" className="dropdown-item">
                                            <Settings size={16} />
                                            Settings
                                        </Link>
                                        <hr />
                                        <button className="dropdown-item logout" onClick={handleLogout}>
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </header>

                {/* Login Modal */}
                {loginOpen && (
                    <div className="login-modal-overlay" onClick={() => setLoginOpen(false)}>
                        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setLoginOpen(false)}>
                                <X size={20} />
                            </button>
                            <div className="login-header">
                                <GraduationCap size={32} className="login-logo" />
                                <h2>Login to ACE BITS</h2>
                            </div>
                            <form onSubmit={handleLogin} className="login-form">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="password-input">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="toggle-password"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="submit-btn">
                                    <LogIn size={18} />
                                    Login
                                </button>
                            </form>
                            <p className="login-footer">
                                Don't have an account? <Link to="/register" onClick={() => setLoginOpen(false)}>Register</Link>
                            </p>
                        </div>
                    </div>
                )}

                {/* Page Content */}
                <main className="dashboard-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
