import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Catalog from './Pages/Catalog';
import PolygraphyCalculator from './Pages/PolygraphyCalculator';
import HomePage from './Pages/HomePage';
import { NavBar } from './components/NavBar'; // Import NavBar
import { Footer } from './components/Footer';
import ProductPage from './Pages/ProductPage';
import ScrollToSection from './components/Actions/ScrollTosection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap everything in Router */}
      <NavBar />  {/* Place NavBar inside Router */}
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PolygraphyCalculator" element={<PolygraphyCalculator />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:productId" element={<ProductPage />} /> {/* Corrected route for product details page */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
