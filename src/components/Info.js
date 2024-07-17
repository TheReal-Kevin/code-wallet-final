// src/components/Info.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function Info() {
  return (
    <div className="info-container">
      <div className="info-header">
        <Link to="/" className="app-button">Code Wallet</Link>
        <Link to="/info" className="info-button">Info ℹ️</Link>
      </div>
      <div className="info-content">
        <h2>General Information</h2>
        <p className="texte-info">
          Application Functionality<br/><br/>
          Developer Information<br/><br/>
          Name : Kouame<br/><br/>
          Surname : Adamou Kevin<br/><br/>
          Legal Information for Data Management of Application<br/><br/>
          Add a New Code Fragment.<br/><br/>
          Modifying Existing Fragments.<br/><br/>
          Delete a Code Fragment.<br/><br/>
          Detailed Display of Code Fragments in a List.<br/><br/>
          Displaying code in a modal window to view the code.<br/><br/>
          Copy the code from the modal window.<br/><br/>
        </p>
      </div>
    </div>
  );
}

export default Info;

