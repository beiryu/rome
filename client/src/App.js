import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8808/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <Router>
      {/* <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <p>{message}</p>
      </main>
      <Footer /> */}

      <div className="App">
        <Header />
        <Hero />
        <p>{message}</p>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

