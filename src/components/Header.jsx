// Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

function Header({ title }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
