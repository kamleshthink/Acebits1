import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Info, Users, Calendar, Image, Award, Settings } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        { name: "2K22", href: "/core" },
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
        { name: "Alumni Connect", href: "https://alumni-connect-frontend-n3ac.onrender.com/" }
      ]
    }
  ];

  return (
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
              <NavItem key={index} item={item} scrolled={scrolled} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden p-2 sm:p-3 rounded-xl hover:scale-95 transition-all duration-300 text-gray-800 hover:bg-gray-200/50"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
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
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ item, scrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="relative">
        <button
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
            scrolled 
              ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' 
              : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
          }`}
        >
          <item.icon size={20} className="drop-shadow-lg" />
          <span className="drop-shadow-sm">{item.name}</span>
          <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`absolute top-full left-0 mt-2 w-56 backdrop-blur-xl rounded-2xl shadow-2xl border py-3 animate-scale-in ${
              scrolled 
                ? 'bg-gradient-to-b from-blue-50/95 via-white/95 to-blue-50/95 border-blue-200/50' 
                : 'bg-gradient-to-b from-blue-200/95 to-indigo-300/95 border-blue-400/50'
            }`}
          >
            {item.dropdown.map((dropdownItem, index) => (
              dropdownItem.href && dropdownItem.href.startsWith('http') ? (
                <a
                  key={index}
                  href={dropdownItem.href}
                  className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 ${
                    scrolled 
                      ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' 
                      : 'text-slate-800 hover:text-blue-800 hover:bg-blue-200/50'
                  }`}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">{dropdownItem.name}</span>
                </a>
              ) : (
                <Link
                  key={index}
                  to={dropdownItem.href}
                  className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 ${
                    scrolled 
                      ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' 
                      : 'text-slate-800 hover:text-blue-800 hover:bg-blue-200/50'
                  }`}
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
      {item.href && item.href.startsWith('http') ? (
        <a
          href={item.href}
          className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
            scrolled 
              ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' 
              : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
          }`}
        >
          <item.icon size={20} className="drop-shadow-lg" />
          <span className="drop-shadow-sm">{item.name}</span>
        </a>
      ) : (
        <Link
          to={item.href}
          className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
            scrolled 
              ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50' 
              : 'text-gray-800 hover:text-blue-600 hover:bg-blue-100/50'
          }`}
        >
          <item.icon size={20} className="drop-shadow-lg" />
          <span className="drop-shadow-sm">{item.name}</span>
        </Link>
      )}
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
      {item.href && item.href.startsWith('http') ? (
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
      )}
  );
};

export default Navbar;
