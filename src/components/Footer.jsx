// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin-bottom: 60px; /* Adjust this value based on your needs */
`;

function Footer() {
  return (
    <ContentContainer>
      {/* Your page content goes here */}
      {/* Place the Footer component at the end of your page */}
      <FooterContainer>
      “So many books, so little time.” ― Frank Zappa
      </FooterContainer>
    </ContentContainer>
  );
}

export default Footer;
