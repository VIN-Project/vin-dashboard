import React from 'react';
import './css_folders/savedcars.css';

const NoCarsSaved = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="message-container">
        <div className="warning-icon">⚠️</div>
        <div className="message-text">
          <p>You have not saved any cars yet.</p>
          <p>
            Click <span className="decode-link">Decode</span> to save your car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoCarsSaved;
