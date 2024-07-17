import React, { useEffect } from 'react';
import './Modal.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const Modal = ({ isOpen, onClose, code }) => {
  useEffect(() => {
    hljs.highlightAll(); // Applique la coloration à tous les blocs de code
  }, [code]);

  const handleCopy = async () => {
    try {
      // Vérifier si le navigateur prend en charge 'clipboard' et que le document a le focus
      if (!navigator.clipboard || !document.hasFocus()) {
        throw new Error('not supported');
      }

      await navigator.clipboard.writeText(code); // Copie le code dans le presse-papiers
      alert('Code copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy code to clipboard');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="code-content">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code).value }} />
          </pre>
        </div>
        <button className="copy-button" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default Modal;
