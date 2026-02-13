import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Home, FileText, BookOpen, Monitor, Calendar, MessageSquare,
    Briefcase, User, Menu, X, Bell, Search, ChevronDown, ChevronLeft,
    GraduationCap, Settings, LogOut, Award, Users
} from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const location = useLocation();

    // Check login state on mount
    React.useEffect(() => {
        const storedUser = localStorage.getItem('aceUser');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setIsLoggedIn(true);
                setUserName(user.name || user.email.split('@')[0]);
            } catch (e) {
                console.error("Invalid user data");
                localStorage.removeItem('aceUser');
            }
        }

        // Handle mobile sidebar on resize
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('aceUser');
        setIsLoggedIn(false);
        setUserName('');
        setProfileOpen(false);
        window.location.href = '/';
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
            {/* Mobile Sidebar Overlay */}
            {window.innerWidth <= 768 && sidebarOpen && (
                <div
                    className="sidebar-overlay visible"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

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
                        {/* Desktop: ChevronLeft to collapse. Mobile: X to close */}
                        {window.innerWidth > 768 ? (
                            sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />
                        ) : (
                            <X size={20} />
                        )}
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

                        {/* Profile Dropdown */}
                        <div className="header-dropdown">
                            <button
                                className="header-btn profile-btn"
                                onClick={() => {
                                    console.log('Profile button clicked', !profileOpen);
                                    setProfileOpen(!profileOpen);
                                }}
                            >
                                <div className="profile-avatar">
                                    {userName ? userName.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <span className="profile-name">{userName || 'User'}</span>
                                <ChevronDown size={16} />
                            </button>
                            {profileOpen && (
                                <div className="dropdown-menu profile-menu">
                                    <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                                        <p className="text-sm font-semibold text-gray-800">{userName}</p>
                                    </div>
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
                    </div>
                </header>

                {/* Page Content */}
                <main className="dashboard-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
