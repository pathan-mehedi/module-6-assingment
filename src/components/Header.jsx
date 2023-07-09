// Header.jsx
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
`;

function Header({ title }) {
  return <Heading>{title}</Heading>;
}

export default Header;
