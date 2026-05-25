import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_paage/home/HomePage';
import NotFound from "./landing_paage/NotFound";
import Navbar from "./landing_paage/Navbar";
import Footer from "./landing_paage/Footer";
import Signup from "./landing_paage/signupAndLogin/Signup";

import AboutPage from "./landing_paage/about/AboutPage";
import ProductPage from "./landing_paage/products/ProductPage";
import PricingPage from "./landing_paage/pricing/PricingPage";
import SupportPage from "./landing_paage/support/SupportPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
   <Navbar />
  
     <Routes>
       <Route path="/" element={<HomePage />} />
     
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    
       <Route path="*" element={<NotFound />} />
     </Routes>
      <Footer />
   </BrowserRouter>
);

