import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, rgba(20, 30, 48, 0.95) 0%, rgba(36, 59, 85, 0.95) 100%);
  backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) => 
    isScrolled 
      ? '0 4px 20px rgba(0, 255, 255, 0.2)' 
      : '0 2px 15px rgba(0, 255, 255, 0.1)'};
  transition: all 0.3s ease;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: rgba(20, 30, 48, 0.98);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 255, 255, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: #a0b1c5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(90deg, #00ffff, #00b4d8);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:hover:before {
    width: 100%;
  }

  &.active {
    color: #00ffff;
    &:before {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    font-size: 1.3rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  img {
    height: 60px; /* Increased size for better visibility */
    width: 60px; /* Equal width and height for a perfect circle */
    border-radius: 50%; /* Makes it circular */
    object-fit: cover; /* Ensures the image fills the circle */
    border: 2px solid #00ffff; /* Cyan border */
    transition: all 0.3s ease;
    animation: pulseGlow 2s infinite ease-in-out;
  }

  &:hover img {
    transform: rotate(360deg); /* Spins on hover */
    filter: brightness(1.2) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7));
  }

  @keyframes pulseGlow {
    0% {
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
    }
  }

  @media (max-width: 900px) {
    img {
      height: 50px; /* Slightly smaller for mobile */
      width: 50px;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  color: #00ffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 900px) {
    display: block;
    padding: 0.5rem;
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  @media (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: 'hero', label: 'Accueil' },
    { to: 'profile', label: 'Profil' },
    { to: 'skills', label: 'Compétences' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      isScrolled={isScrolled}
    >
      <Logo
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/images/logo.jpg" alt="RJC Logo" />
      </Logo>

      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Overlay
        isOpen={isOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        onClick={toggleMenu}
      />

      <NavLinks isOpen={isOpen}>
        {navItems.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            smooth
            duration={500}
            spy
            activeClass="active"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </NavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}

export default Header;