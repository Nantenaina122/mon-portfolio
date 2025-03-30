import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 1rem;
  background: #0d1b2a;
  text-align: center;
  color: #dfe6e9;
`;

function Footer() {
  return (
    <FooterStyled>
      <p>© 2025 Jean Leveque. Tous droits réservés.</p>
    </FooterStyled>
  );
}

export default Footer;