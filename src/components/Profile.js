import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProfileSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #041542FF, #FBFEFFFF); /* Dégradé subtil pour le fond */
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileCard = styled(motion.div)`
  flex: 1;
  background: #0d1b2a;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 196, 204, 0.2);
  text-align: left;
  color: #dfe6e9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Intermedriaire = styled(motion.section)`
  height: 40vh; /* Hauteur réduite comme dans l'image */
  width: 100vw; /* S'étend sur toute la largeur de la page */
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
  margin-left: calc(-50vw + 50%); /* Centrage pour une largeur pleine page */
  margin-right: calc(-50vw + 50%); /* Centrage pour une largeur pleine page */
  margin-top: 5rem; /* Ajout d'espace entre Intermedriaire et ProfileContainer */
  @media (max-width: 768px) {
    height: 30vh; /* Hauteur encore plus réduite sur mobile */
    margin-top: 3rem; /* Espace réduit sur mobile */
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

const ProfileImageWrapper = styled(motion.div)`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20%;
  border: 4px solid #F6F2F7FF;
  object-fit: cover;
`;

const CVImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #1EE5F3FF;
  color: #0F0F0FFF;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 25px;
  margin-top: 1rem;
  transition: background 0.3s;
  &:hover {
    background: #45AA73FF;
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #4a90e2;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StatusText = styled(motion.p)`
  color: #1EE5F3FF;
  font-weight: bold;
  margin-top: 1rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

function Profile() {
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
    <ProfileSection>
      <Title>À PROPOS DE MOI</Title>
      <ProfileContainer>
        <ProfileCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ProfileHeader>
            <ProfileImage
              src="/profile/naina.jpg"
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <p>
                Bonjour, je suis un étudiant en troisième année de licence en informatique, parcours Développement d'Application Intranet et Internet.
              </p>
              <p>
                Fraîchement diplômé d’un TP DE DÉVELOPPEUR WEB et en formation autodidacte depuis un an, je souhaite renforcer mes nouvelles compétences. D’un naturel curieux, logique et pragmatique, j’aimerais intégrer un poste de développeur Web full stack afin de monter en compétence technique.
              </p>
              <p>
                Passionné par les technologies, la physique et le monde qui nous entoure, je suis ouvert à tous types de secteurs et pourrais faire profiter de mon expérience du milieu industriel et de mes qualités d’organisation dans la conduite de projets.
              </p>
            </div>
          </ProfileHeader>
          <StatusText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Actuellement : En recherche d’opportunités
          </StatusText>
        </ProfileCard>
        <ProfileImageWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <CVImage src="/profile/cv.png" alt="CV Preview" />
          <DownloadButton
            href="file:///home/ramanga/T%C3%A9l%C3%A9chargements/CV-1.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Télécharger CV
          </DownloadButton>
        </ProfileImageWrapper>
      </ProfileContainer>
      <Intermedriaire
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IntermedriaireText
          key={currentQuoteIndex} // Clé pour déclencher l'animation à chaque changement
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {quotes[currentQuoteIndex].text}
        </IntermedriaireText>
        <IntermedriaireAuthor
          key={`${currentQuoteIndex}-author`} // Clé pour déclencher l'animation
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
    </ProfileSection>
  );
}

export default Profile;