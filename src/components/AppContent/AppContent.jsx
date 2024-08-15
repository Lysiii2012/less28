import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import { useTheme } from "../ThemeContext/ThemeContext";


function AppContent() {
    const { theme } = useTheme();
  
    return (
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default AppContent;