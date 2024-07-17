import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe de react-router-dom
import Fragments from './components/Fragments'; // Importe Fragments 
import FragmentForm from './components/FragmentForm'; // Importe le composant FragmentForm 
import Info from './components/Info'; // Importe le composant Info 
import DarkModeToggle from './components/DarkModeToggle'; // Import DarkModeToggle

function App() {
  return (
    <Router> {/* Utilise le Router de react-router-dom pour gérer les routes */}
     <DarkModeToggle /> 
      <Routes>
        {/* Route pour afficher Fragments sur la page d'accueil et sur /fragments */}
        <Route path="/" element={<Fragments />} />
        <Route path="/fragments" element={<Fragments />} />

        {/* Route pour afficher FragmentForm*/}
        <Route path="/fragment-form" element={<FragmentForm />} />
        
        {/* Route pour afficher FragmentForm */}
        <Route path="/fragment-form/:id" element={<FragmentForm />} />
        
        {/* Route pour afficher Info */}
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
