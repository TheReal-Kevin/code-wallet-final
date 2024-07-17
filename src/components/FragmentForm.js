import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addFragment, updateFragment, getFragmentById, deleteFragment } from './localstorage';
import './FragmentForm.css';

const FragmentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID du fragment 
  const [title, setTitle] = useState(''); // État pour le titre du fragment
  const [code, setCode] = useState(''); // État pour le code du fragment

  //  pour charger les données du fragment lorsque l'ID change
  useEffect(() => {
    if (id) {
      const fragment = getFragmentById(Number(id)); // Obtient le fragment par son ID
      if (fragment) {
        setTitle(fragment.title); // Met à jour le titre du fragment
        setCode(fragment.code); // Met à jour le code du fragment
      }
    }
  }, [id]);

  // Fonction pour gérer le clic sur le bouton "Save"
  const handleSaveClick = () => {
    const fragment = { id: id ? Number(id) : Date.now(), title, code }; // Crée l'objet fragment à enregistrer

    if (id) {
      updateFragment(fragment); // Met à jour le fragment existant
    } else {
      addFragment(fragment); // Ajoute un nouveau fragment
      alert('Fragment added successfully'); // Affiche une alerte de succès pour l'ajout
    }

    navigate('/fragments'); // Redirige vers la liste des fragments après l'ajout ou la modification
  };

  // Fonction pour gérer le clic sur le bouton "Delete"
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this fragment?')) {
      if (id) {
        deleteFragment(Number(id)); // Supprime le fragment par son ID
        alert('Fragment deleted successfully'); // Affiche une alerte de succès pour la suppression
      }
      navigate('/fragments'); // Redirige vers la liste des fragments après la suppression
    }
  };

  // Fonction pour gérer le clic sur le titre "Code Wallet" dans l'en-tête
  const handleTitleClick = () => {
    navigate('/fragments'); // Redirige vers la liste des fragments au clic sur le titre
  };

  // Rendu du FragmentForm
  return (
    <div className="form-container">
      <header className="form-header">
        {/* Gestion du clic sur le titre "Code Wallet" */}
        <h1 onClick={handleTitleClick}>Code Wallet</h1>
        {/* Bouton d'information pour accéder aux détails de l'application */}
        <button className="info-button" onClick={() => navigate('/info')}>Info ℹ️</button>
      </header>
      <div className="form-content">
        <form>
          {/* Champ de saisie pour le titre du fragment */}
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Zone de texte pour le code du fragment */}
          <label htmlFor="code">Code:</label>
          <textarea
            id="code"
            name="code"
            rows="10"
            className="code-block"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </form>
      </div>
      {/* Actions du formulaire: Supprimer et Enregistrer */}
      <div className="form-actions">
        <button className="delete-button" onClick={handleDeleteClick}>
          <span role="img" aria-label="Delete">🗑️</span> Delete
        </button>
        <button className="save-button" onClick={handleSaveClick}>
          <span role="img" aria-label="Save">💾</span> Save
        </button>
      </div>
    </div>
  );
};

export default FragmentForm;
