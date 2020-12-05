import React from 'react';
import './App.css';
import './styles/style.css';

import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
