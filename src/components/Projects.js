import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: #dfe6e9;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
`;

function Projects() {
  const projects = [
    { title: 'Plateforme E-commerce', desc: 'React, Node.js, MongoDB', link: 'https://github.com' },
    { title: 'Application de Chat', desc: 'Socket.io, Express', link: 'https://github.com' },
    { title: 'Portfolio', desc: 'React, Styled-Components', link: 'https://github.com' },
  ];

  return (
    <ProjectsSection>
      <h2>Mes Projets</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;