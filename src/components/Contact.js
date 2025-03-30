import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(-180deg, #041542FF, #041542FF);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
  font-size: 1rem;
  transition: all 0.3s;
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Textarea = styled.textarea`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Button = styled(motion.button)`
  padding: 0.9rem;
  background: #1496D3FF;
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #F2FDF9FF;
  }
`;

const ContactInfo = styled(motion.div)`
  margin-top: 2rem;
  overflow-x: hidden;
  width: 100%;
  max-width: 600px;
`;

const ContactSlider = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #e0e0e0;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  white-space: nowrap;
  a {
    color: #00d4ff;
    text-decoration: none;
    &:hover {
      color: #00b8e6;
    }
  }
`;

function Contact() {
  const [form, setForm] = useState({ name: '', society: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé (simulation) : ' + JSON.stringify(form));
    setForm({ name: '', society: '', phone: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: <FaEnvelope />, text: 'naina.p13.ceres@gmail.com' },
    { icon: <FaPhone />, text: '+261 38 87 100 45' },
    { icon: <FaMapMarkerAlt />, text: '301 Fianarantsoa' },
    { icon: <FaLinkedin />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/randrianantenaina-jean-christian-915915281/' },
    { icon: <FaGithub />, text: 'GitHub', link: '#' },
  ];

  return (
    <ContactSection>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CONTACT
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Envoyez-moi un message ou retrouvez-moi sur mes réseaux
      </motion.p>
      
      <ContactCard
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ContactForm onSubmit={handleSubmit}>
          <Input 
            placeholder="Votre nom" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
          />
          <Input 
            placeholder="Société (optionnel)" 
            value={form.society} 
            onChange={(e) => setForm({ ...form, society: e.target.value })} 
          />
          <Input 
            placeholder="Téléphone (optionnel)" 
            value={form.phone} 
            onChange={(e) => setForm({ ...form, phone: e.target.value })} 
          />
          <Input 
            type="email" 
            placeholder="Votre email" 
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            required 
          />
          <Textarea 
            placeholder="Votre message" 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            required 
          />
          <Button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
          >
            ENVOYER
          </Button>
        </ContactForm>
      </ContactCard>

      <ContactInfo>
        <ContactSlider
          animate={{
            x: ['0%', '-100%'],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            },
          }}
        >
          {[...contactItems, ...contactItems].map((item, index) => (
            <ContactItem key={index}>
              {item.icon}
              {item.link ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </ContactItem>
          ))}
        </ContactSlider>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact;