import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import ContactHero from "./ContactHero";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <>
      <ContactHero />
      <div className='p-4 flex items-center justify-between px-4 border-b border-gray-300 rounded'>
        {/* Fixed Logo */}
        <div className='flex items-center'>
          <Logo />
        </div>
        <ul className={`hidden lg:flex gap-8 items-center`}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className=' text-md font-semibold hover:text-yellow-500 p-4'
                to={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger menu for small screens */}
        <button
          className='text-2xl lg:hidden relative z-10'
          onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <GiHamburgerMenu size={24} />}
        </button>
        {/* Sidebar */}
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Navbar;
