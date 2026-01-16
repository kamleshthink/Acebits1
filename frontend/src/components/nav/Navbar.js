import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Info, Users, Calendar, Image, Award, Settings, LogIn, Eye, EyeOff, GraduationCap, Moon, Sun, UserPlus } from "lucide-react";
import logo from "../../assets/images/logo.png";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const Navbar = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    rollNumber: '',
    branch: '',
    year: '',
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const branches = [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics & Communication',
    'Computer Science',
    'Information Technology',
    'Chemical Engineering',
    'Production Engineering',
    'Mining Engineering',
    'Metallurgical Engineering'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  // Check for saved user and dark mode on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('aceUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setUserName(user.name);
    }

    // Restore dark mode preference
    const savedDarkMode = localStorage.getItem('aceDarkMode') === 'true';
    if (savedDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('aceUser', JSON.stringify(data.data));
        setUserName(data.data.name);
        setIsLoggedIn(true);
        setLoginOpen(false);
        setLoginData({ email: '', password: '' });
        history.push('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
          registrationNumber: signupData.rollNumber,
          branch: signupData.branch,
          year: signupData.year
        })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('aceUser', JSON.stringify(data.data));
        setUserName(data.data.name);
        setIsLoggedIn(true);
        setLoginOpen(false);
        setSignupData({ name: '', rollNumber: '', branch: '', year: '', email: '', password: '' });
        history.push('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('aceUser');
    setIsLoggedIn(false);
    setUserName('');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('aceDarkMode', newDarkMode.toString());
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (approximately 100vh)
      const heroHeight = window.innerHeight;
      const scrollThreshold = heroHeight * 0.8; // 80% of hero height for better transition
      
      if (window.scrollY > scrollThreshold) {
        setScrolled(true); // White with light blue when scrolled down
      } else {
        setScrolled(false); // White with light blue sky on hero section
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Faculty", href: "/faculty", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Gallery", href: "/gallery", icon: Image },
    { 
      name: "Team", 
      href: "#",
      icon: Award,
      dropdown: [
        { name: "2K23", href: "/team2k23" },
        { name: "2K22", href: "/team2k22" },
        { name: "2K21", href: "/team2k21" },
        { name: "2K20", href: "/team2k20" }
      ]
    },
    {
      name: "Others",
      href: "#",
      icon: Settings,
      dropdown: [
        { name: "Constitution", href: "/constitution" },
        { name: "Magazine", href: "/magazine" },
        { name: "Contact Us", href: "/contact" },
        { name: "Laboratory", href: "/lab" },
        { name: "Alumni Connect", href: "https://alumniconnect.acebits.in/" }
      ]
    }
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl shadow-2xl border-b ${
        scrolled
          ? 'bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 border-blue-200/50'
          : 'bg-gradient-to-r from-sky-100/95 via-white/95 to-sky-100/95 border-sky-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <img
                src={logo}
                alt="ACE Logo"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain group-hover:rotate-12 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl lg:text-3xl font-bold font-heading text-gray-800">
                ACE BITS
              </span>
              <div className="text-xs sm:text-sm lg:text-sm font-medium text-blue-600">
                Association of Civil Engineers
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} scrolled={scrolled} isRightAligned={index >= navItems.length - 2} />
            ))}

            {/* Dark Mode Toggle - Icon Only */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 transition-colors"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Login/Profile - Icon Only */}
            {!isLoggedIn ? (
              <button
                onClick={() => setLoginOpen(true)}
                className="p-1.5 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                title="Login / Sign Up"
              >
                <LogIn size={16} />
              </button>
            ) : (
              <div className="flex items-center">
                <Link
                  to="/dashboard"
                  className="p-1.5 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                  title="Dashboard"
                >
                  <GraduationCap size={16} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Icons + Menu Button */}
          <div className="lg:hidden flex items-center space-x-1">
            {/* Dark Mode - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Login - Mobile */}
            {!isLoggedIn ? (
              <button
                onClick={() => setLoginOpen(true)}
                className="p-1.5 rounded-full text-gray-500 hover:text-blue-600 transition-colors"
                title="Login"
              >
                <LogIn size={16} />
              </button>
            ) : (
              <Link
                to="/dashboard"
                className="p-1.5 rounded-full text-blue-600 transition-colors"
                title="Dashboard"
              >
                <GraduationCap size={16} />
              </Link>
            )}

            {/* Hamburger Menu */}
            <button
              onClick={toggleNavbar}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-200/50 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`lg:hidden backdrop-blur-xl border-t animate-slide-down z-50 ${
            scrolled 
              ? 'bg-gradient-to-b from-blue-50/95 via-white/95 to-blue-50/95 border-blue-200/50' 
              : 'bg-gradient-to-b from-sky-100/95 via-white/95 to-sky-100/95 border-sky-200/50'
          }`}
        >
          <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2 max-h-[75vh] overflow-y-auto">
            {navItems.map((item, index) => (
              <MobileNavItem key={index} item={item} onClose={() => setIsOpen(false)} scrolled={scrolled} />
            ))}

            {/* Logged in user options */}
            {isLoggedIn && (
              <div className="mt-4 pt-4 border-t border-gray-200/50 space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2.5 text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-medium"
                >
                  <GraduationCap size={16} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-red-500 text-sm hover:bg-red-50 rounded-xl"
                >
                  <X size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </nav>

      {/* Login/Signup Modal - OUTSIDE NAV for proper z-index */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => { setLoginOpen(false); setAuthTab('login'); }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md mx-4 relative"
            style={{ maxHeight: '85vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setLoginOpen(false); setAuthTab('login'); }}
              className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setAuthTab('login')}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  authTab === 'login'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <LogIn size={16} className="inline mr-2" />
                Login
              </button>
              <button
                onClick={() => setAuthTab('signup')}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  authTab === 'signup'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <UserPlus size={16} className="inline mr-2" />
                Sign Up
              </button>
            </div>

            <div className="p-6">
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {authTab === 'login' && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 text-sm">Login to access dashboard</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }); setError(''); }}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-10"
                        placeholder="Enter password"
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm disabled:opacity-50"
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </form>
              )}

              {/* Signup Form */}
              {authTab === 'signup' && (
                <form onSubmit={handleSignup} className="space-y-3">
                  <div className="text-center mb-3">
                    <h2 className="text-xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 text-sm">Join ACE BITS student portal</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={signupData.name}
                      onChange={(e) => { setSignupData({ ...signupData, name: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      placeholder="Enter your name"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Registration / Roll No.</label>
                    <input
                      type="text"
                      value={signupData.rollNumber}
                      onChange={(e) => { setSignupData({ ...signupData, rollNumber: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      placeholder="e.g. 2021UGCE001"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Branch</label>
                    <select
                      value={signupData.branch}
                      onChange={(e) => { setSignupData({ ...signupData, branch: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white"
                      required
                      disabled={loading}
                    >
                      <option value="">Select Branch</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Year of Study</label>
                    <select
                      value={signupData.year}
                      onChange={(e) => { setSignupData({ ...signupData, year: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white"
                      required
                      disabled={loading}
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={signupData.email}
                      onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }); setError(''); }}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={signupData.password}
                        onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }); setError(''); }}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-10"
                        placeholder="Min 6 characters"
                        required
                        disabled={loading}
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all text-sm mt-2 disabled:opacity-50"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ item, scrolled, isRightAligned }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
            scrolled
              ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
              : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
          }`}
        >
          <item.icon size={20} className="drop-shadow-lg" />
          <span className="drop-shadow-sm whitespace-nowrap">{item.name}</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div
            className={`absolute top-full ${isRightAligned ? 'right-0' : 'left-0'} mt-1 w-56 backdrop-blur-xl rounded-2xl shadow-2xl border py-3 z-[100] ${
              scrolled
                ? 'bg-white/95 border-gray-200'
                : 'bg-white/95 border-gray-200'
            }`}
          >
            {item.dropdown.map((dropdownItem, index) => (
              dropdownItem.href && dropdownItem.href.startsWith('http') ? (
                <a
                  key={index}
                  href={dropdownItem.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">{dropdownItem.name}</span>
                </a>
              ) : (
                <Link
                  key={index}
                  to={dropdownItem.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">{dropdownItem.name}</span>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    item.href && item.href.startsWith('http') ? (
      <a
        href={item.href}
        className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
          scrolled ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
        }`}
      >
        <item.icon size={20} className="drop-shadow-lg" />
        <span className="drop-shadow-sm">{item.name}</span>
      </a>
    ) : (
      <Link
        to={item.href}
        className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
          scrolled ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
        }`}
      >
        <item.icon size={20} className="drop-shadow-lg" />
        <span className="drop-shadow-sm">{item.name}</span>
      </Link>
    )
  );
};

const MobileNavItem = ({ item, onClose, scrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left rounded-xl transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-100/50 font-semibold"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <item.icon size={20} className="sm:w-6 sm:h-6 drop-shadow-lg" />
            <span className="text-sm sm:text-base font-medium drop-shadow-sm">{item.name}</span>
          </div>
          <ChevronDown 
            size={18} 
            className={`sm:w-5 sm:h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        {isDropdownOpen && (
          <div className="ml-6 sm:ml-8 mt-2 space-y-1 animate-slide-up bg-white/90 backdrop-blur-sm rounded-xl p-2 border border-gray-200/50 shadow-lg">
            {item.dropdown.map((dropdownItem, index) => (
              dropdownItem.href && dropdownItem.href.startsWith('http') ? (
                <a
                  key={index}
                  href={dropdownItem.href}
                  onClick={onClose}
                  className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-100/50 font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm sm:text-base">{dropdownItem.name}</span>
                </a>
              ) : (
                <Link
                  key={index}
                  to={dropdownItem.href}
                  onClick={onClose}
                  className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-100/50 font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm sm:text-base">{dropdownItem.name}</span>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    item.href && item.href.startsWith('http') ? (
      <a
        href={item.href}
        onClick={onClose}
        className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-100/50 font-medium"
      >
        <item.icon size={20} className="sm:w-6 sm:h-6 drop-shadow-lg" />
        <span className="text-sm sm:text-base font-medium drop-shadow-sm">{item.name}</span>
      </a>
    ) : (
      <Link
        to={item.href}
        onClick={onClose}
        className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-100/50 font-medium"
      >
        <item.icon size={20} className="sm:w-6 sm:h-6 drop-shadow-lg" />
        <span className="text-sm sm:text-base font-medium drop-shadow-sm">{item.name}</span>
      </Link>
    )
  );
};

export default Navbar;
