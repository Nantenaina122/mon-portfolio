import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #041542FF, #FBFEFFFF); /* Dégradé subtil pour le fond */
`;

const PortfolioGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PortfolioCard = styled(motion.div)`
  background: #040F2EFF;
  padding: 2rem;
  border-radius:15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 20px #A84C17FF;
  }
`;

function Portfolio() {
  const projects = [
    { title: 'Application web:"gestion-stagiaire"', desc: 'React, Node.js' },
    { title: 'Application Chat', desc: 'Socket.io' },
    { title: 'Portfolio Perso', desc: 'React, Styled-Components' },
    { title: 'Application web:"gestion-stagiaire"', desc: 'React, Node.js' },
    { title: 'Application Chat', desc: 'Socket.io' },
    { title: 'Portfolio Perso', desc: 'React, Styled-Components' },
  ];

  return (
    <PortfolioSection>
      <h2>PORTFOLIO</h2>
      <PortfolioGrid>
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <Link to="#" smooth={true} duration={500} style={{ color: '#191A1AFF' }}>Voir le proje</Link>
          </PortfolioCard>
        ))}
      </PortfolioGrid>
    </PortfolioSection>
  );
}

export default Portfolio;