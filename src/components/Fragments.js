import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFragments } from './localstorage'; // Importe la fonction getFragments depuis './localstorage'
import './Fragments.css'; 
import Modal from './Modal'; 

function Fragments() {
  const navigate = useNavigate(); // Initialise la navigation de React Router
  const [fragments, setFragments] = useState([]); // État pour stocker la liste des fragments
  const [isModalOpen, setModalOpen] = useState(false); // État pour contrôler l'ouverture du modal
  const [selectedCode, setSelectedCode] = useState(''); // État pour stocker le code sélectionné

  //  charger les fragments
  useEffect(() => {
    setFragments(getFragments()); // Charge les fragments en utilisant la fonction getFragments
  }, []);

  // Fonction pour gérer le clic sur le bouton "New" 
  const handleNewClick = () => {
    navigate('/fragment-form'); // Redirige l'utilisateur vers '/fragment-form' lors du clic sur "New"
  };

  // Fonction pour gérer le clic sur le bouton "Info"
  const handleInfoClick = () => {
    navigate('/info'); // Redirige l'utilisateur vers '/info'"
  };

  // Fonction pour gérer le clic sur le bouton voir un fragment
  const handleViewClick = (code) => {
    setSelectedCode(code); // recupere le code sélectionné et l'affiche dans la fenetre modal
    setModalOpen(true); 
  };

  // Fonction pour fermer la fenetre modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Fonction pour gérer le clic sur un fragment pour editer 
  const handleFragmentClick = (id) => {
    navigate(`/fragment-form/${id}`); // Redirige l'utilisateur vers la page du fragment
  };

  // Fonction pour gérer le clic
  const handleTitleClick = () => {
    navigate('/fragment-form'); // Redirige l'utilisateur vers '/fragment-form' au clic sur le titre
  };

  // Rendu du Fragment
  return (
    <div className="fragments-container">
      <header className="fragments-header">
        <h1 onClick={handleTitleClick}>Code Wallet</h1>
        <div className="header-buttons">
          {/* Bouton "New" pour ajouter un nouveau fragment */}
          <button className="new-button" onClick={handleNewClick} style={{ color: 'black' }}>New ➕</button>
          {/* Bouton "Info" pour accéder aux informations de l'application */}
          <button className="info-button" onClick={handleInfoClick}>Info ℹ️</button>
        </div>
      </header>
      {/* Liste des fragments à afficher */}
      <div className="fragments-list">
        {fragments.map((fragment) => (
          <div key={fragment.id} className="fragment-item" onClick={() => handleFragmentClick(fragment.id)}>
            {/* Titre du fragment */}
            <span className="fragment-title">{fragment.title}</span>
            {/* Bouton pour voir le code du fragment */}
            <button className="view-button" onClick={(e) => { e.stopPropagation(); handleViewClick(fragment.code); }}>
              <i className="view-icon">🧿</i>
            </button>
          </div>
        ))}
      </div>
      {/* Modal pour afficher le code du fragment */}
      <Modal isOpen={isModalOpen} onClose={closeModal} code={selectedCode} />
    </div>
  );
}

export default Fragments;
