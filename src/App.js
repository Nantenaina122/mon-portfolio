import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile.js';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #dfe6e9;
  background: #1a252f;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Element name="hero"><Hero /></Element>
      <Element name="profile"><Profile /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="portfolio"><Portfolio /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </AppContainer>
  );
}

export default App;