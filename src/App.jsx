// App.jsx
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header title="Ostad Application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
