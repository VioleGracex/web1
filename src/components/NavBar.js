import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from '../assets/img/logo 25@2x.png';
import navIcon1 from "../assets/img/vk white.png";
import navIcon2 from "../assets/img/telegram white.png";
import navIcon3 from "../assets/img/whatsapp white.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-yellow-400 py-0" : "py-4"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </a>
        <div className="flex items-center">
          <ul className="flex space-x-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'projects', label: 'Проекты' },
              { id: 'price-list', label: 'Прайс-лист' }
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-lg font-bold text-black no-underline transition-opacity ${
                    activeLink === link.id ? "opacity-100" : "opacity-75"
                  } hover:opacity-100`}
                  onClick={() => onUpdateActiveLink(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/Search" className="text-black text-xl ml-4 no-underline">
            <FaMagnifyingGlass />
          </a>
          <div className="flex space-x-4 ml-6 ">
            {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="relative w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden group"
              >
                {/* Circle fill effect */}
                <span className="absolute w-full h-full bg-cyan-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                {/* Social icon */}
                <img 
                  src={icon} 
                  alt="social-icon" 
                  className="relative z-10 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:brightness-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
