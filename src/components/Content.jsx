// Content.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 80vh;
    width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px 40px;
  margin-bottom: 20px;
  background-color: #00bbff;
  color: #000000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 450px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  resize: vertical;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  resize: none!important;
`;

const DisplayText = styled.p`
  width: 600px;
  height: auto;
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0px 7px 63px -40px;
`;

function Content() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const storedText = localStorage.getItem('enteredText');
    if (storedText) {
      setText(storedText);
      setDisplayedText(storedText);
    }
  }, []);

  const handleButtonClick = () => {
    setDisplayedText(text);
    localStorage.setItem('enteredText', text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>Click Me</Button>
      <TextArea value={text} onChange={handleChange}></TextArea>
      {displayedText && (
        <DisplayText>Entered Text: {displayedText}</DisplayText>
      )}
    </Container>
  );
}

export default Content;
