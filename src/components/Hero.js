import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const GreetingText = styled(motion.div)`
  font-size: 3rem;
  color: #F7F3F4FF;
  margin-bottom: 1rem;
  min-height: 3.5rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const NameText = styled(motion.h1)`
  font-size: 2.5rem;
  color: #e0f7fa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const SubText = styled(motion.p)`
  font-size: 1.5rem;
  color: #b0bec5;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: #1EE5F3FF;
  border: none;
  color: #0E0D0DFF;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #45AA73FF;
    transform: scale(1.1);
  }
`;

const BackgroundEffect = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(171, 71, 188, 0.2);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(20px, 20px); }
    100% { transform: translate(0, 0); }
  }
`;

function Hero() {
  const greetings = ['Bienvenue sur mon portfolio!'];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!greetings || greetings.length === 0) return;

    const currentGreeting = greetings[currentGreetingIndex] || '';
    let index = isTyping ? 0 : currentGreeting.length;

    const typeOrDelete = () => {
      if (isTyping) {
        if (index <= currentGreeting.length) {
          setDisplayedText(currentGreeting.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 2500);
          return;
        }
      } else {
        if (index >= 0) {
          setDisplayedText(currentGreeting.slice(0, index));
          index--;
        } else {
          setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setIsTyping(true);
          return;
        }
      }
      setTimeout(typeOrDelete, isTyping ? 200 : 150);
    };

    const timeout = setTimeout(typeOrDelete, isTyping ? 200 : 150);
    return () => clearTimeout(timeout);
  }, [currentGreetingIndex, isTyping]);

  return (
    <HeroSection>
      <BackgroundEffect
        initial={{ x: -100, y: -100 }}
        animate={{ x: 100, y: 100 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <GreetingText
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          |
        </motion.span>
      </GreetingText>
      <NameText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 1 }}
      >
        RANDRIANANTENAINA Jean christian <FaLaptopCode />
      </NameText>
      <SubText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Développeur Web - Mobile
      </SubText>
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
                <Link to="Profile" smooth duration={500}>      </Link>


          PLUS D'INFO
        </Button>
    </HeroSection>
  );
}

export default Hero;