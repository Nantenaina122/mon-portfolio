import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 6rem 3rem;
  background: linear-gradient(360deg, #FBFEFFFF, #041542FF);
  text-align: center;
  color: #e8e8e8;
`;

const SkillsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: rgba(30, 42, 68, 0.9);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    background: linear-gradient(180deg, #0C5EF8FF, #FBFEFFFF);
    border-radius: 50%;
    transform: rotate(45deg);
  }

  h3 {
    color: #4a90e2;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  transition: transform 0.3s;

  ${SkillItem}:hover & {
    transform: scale(1.2);
  }
`;

const SkillName = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #d3d3d3;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background: #828486FF;
  border-radius: 8px;
  overflow: hidden;
  height: 8px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(to right, #4a90e2, #56c1ff);
  width: ${({ level }) => `${level}%`};
  transition: width 0.5s ease-in-out;
`;

const Intermedriaire = styled(motion.section)`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/int.jpg'); 
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: 8rem; /* Espace entre SkillsGrid et Intermedriaire */
  @media (max-width: 768px) {
    height: 30vh;
    margin-top: 5rem;
  }
`;

const IntermedriaireText = styled(motion.p)`
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IntermedriaireAuthor = styled(motion.p)`
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

function Skills() {
  const skillsData = {
    'Front-end': {
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 60 },
        { name: 'Bootstrap', level: 50 },
        { name: 'React', level: 45 },
      ],
    },
    'Back-end': {
      skills: [
        { name: 'Node', level: 70 },
        { name: 'Laravel', level: 50 },
        { name: 'Python', level: 40 },
        { name: 'MySQL', level: 75 },
        { name: 'PostgreSQL', level: 30 },
      ],
    },
    'Mobile': {
      skills: [
        { name: 'React-Native', level: 30 },
        { name: 'Flutter', level: 20 },
      ],
    },
    'Outils': {
      skills: [
        { name: 'Postman', level: 80 },
        { name: 'git', level: 70 },
      ],
    },
  };

  const quotes = [
    {
      text: "Codez toujours comme si la personne qui allait maintenir votre code était un violent psychopathe qui sait où vous habitez.",
      author: "John Woods",
    },
    {
      text: "La programmation, c'est l'art de dire à une machine quoi faire, et espérer qu'elle le fasse correctement.",
      author: "Anonymous",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // 5 secondes
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Fonctions pour changer manuellement
  const handlePrev = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const handleNext = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <SkillsSection>
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>COMPÉTENCES</h2>
      <SkillsGrid>
        {Object.entries(skillsData).map(([category], index) => (
          <SkillCategory key={category}>
            <h3>{category}</h3>
            {skillsData[category].skills.map((skill) => (
              <SkillItem key={`${category}-${skill.name}`}>
                <SkillImage
                  src={`/skills/${skill.name.toLowerCase().replace(/ /g, '-').replace('(', '').replace(')', '')}.svg`}
                  alt={`${skill.name} logo`}
                  onError={(e) => (e.target.src = '/skills/default.svg')} // Fallback image
                />
                <SkillName>{skill.name}</SkillName>
                <ProgressBarContainer>
                  <ProgressBar level={skill.level} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
      <Intermedriaire
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IntermedriaireText
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {quotes[currentQuoteIndex].text}
        </IntermedriaireText>
        <IntermedriaireAuthor
          key={`${currentQuoteIndex}-author`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {quotes[currentQuoteIndex].author}
        </IntermedriaireAuthor>
        <NavigationButtons>
          <NavButton
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowLeft />
          </NavButton>
          <NavButton
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowRight />
          </NavButton>
        </NavigationButtons>
      </Intermedriaire>
    </SkillsSection>
  );
}

export default Skills;