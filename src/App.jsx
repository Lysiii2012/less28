import React from "react"; 
import AppContent from './components/AppContent/AppContent'
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";   
import './App.css';
 
function App() { 
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;