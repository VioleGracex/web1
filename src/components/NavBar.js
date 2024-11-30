import { useState, useEffect } from "react";
import { FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";
import logo from '../assets/img/logo 25@2x.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md bg-white" : ""}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="w-24">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[
             { id: '/', label: 'Главная' },
             { id: '/#services', label: 'Услуги' },
             { id: '/#price', label: 'Прайс-лист' }, 
             { id: '/catalog', label: 'Каталог' }, // Updated link for price section
          ].map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className={`text-lg font-bold text-black transition-opacity no-underline ${
                  activeLink === link.id ? "opacity-100" : "opacity-75"
                } hover:opacity-100`}
                onClick={() => onUpdateActiveLink(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Search Icon */}
          <div className="relative ml-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-black text-xl focus:outline-none">
              <FaMagnifyingGlass />
            </button>
            {/* Hidden search bar */}
            {searchOpen && (
              <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded shadow-md p-2">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="w-40 p-1 text-sm border border-gray-400 rounded focus:outline-none"
                />
              </div>
            )}
          </div>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl focus:outline-none">
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white space-y-4 py-4">
          {[
            { id: '/', label: 'Главная' },
            { id: '/#services', label: 'Услуги' },
            { id: '/#price', label: 'Прайс-лист' }, 
            { id: '/catalog', label: 'Каталог' },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className="text-lg font-bold text-black block"
                onClick={() => { setMenuOpen(false); onUpdateActiveLink(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Mobile Search Bar */}
          <li>
            <input
              type="text"
              placeholder="Поиск..."
              className="w-40 p-2 border border-gray-400 rounded focus:outline-none"
            />
          </li>
        </ul>
      )}
    </nav>
  );
};
