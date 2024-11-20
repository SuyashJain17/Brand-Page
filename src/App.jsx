import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PageTransition from './components/PageTransition';
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Menu from "./components/Menu/Menu";
import Location from "./components/Location/Location";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div>
        <Navigation cartCount={cartCount} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <HeroSection />
              </PageTransition>
            } />
            <Route path="/menu" element={
              <PageTransition>
                <Menu onAddToCart={handleAddToCart} />
              </PageTransition>
            } />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
