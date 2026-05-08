import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { StoryDetail } from './pages/StoryDetail';
import { AboutUs } from './pages/AboutUs';
import { Archive } from './pages/Archive';
// Wrapper component to handle AnimatePresence with useLocation
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </AnimatePresence>);

};
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-minder-black relative selection:bg-minder-yellow selection:text-minder-black">
        {/* Global Grain Overlay */}
        <div className="grain-overlay" />

        {/* Custom Cursor (hidden on mobile via CSS) */}
        <CustomCursor />

        {/* Layout */}
        <Navbar />

        {/* Main Content */}
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>);

}