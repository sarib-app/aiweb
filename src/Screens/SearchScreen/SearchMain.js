import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import Search from './Search.json';
import './SearchMain.css';

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const filteredSuggestions = Search.suggestions
    .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 4);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleImageSelection = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="container">
      <h1 className="main-heading">ASK US ANYTHING</h1>
      <div className="d-flex justify-content-center">
        <div className={`searchbar ${isExpanded ? 'expanded' : ''}`}>
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setExpanded(true)}
          />
          <a href="#" className="search_icon">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>

      <div className={selectedImages.length > 0 ? 'ImageContainer mt-2' : ''}>
        {selectedImages.length > 0 && (
          <div className="selected-images-container">
            {selectedImages.map((image, index) => (
              <div key={index} className="selected-image">
                <img src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} />
                <span onClick={() => removeImage(index)}>&times;</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="options">
        <div className="option">
          <button type="button" className="option-button">
            <i className="fas fa-bullseye"></i> Focus
          </button>
        </div>
        <div className="option">
          <label htmlFor="imageInput" className="option-button">
            <i className="fas fa-plus"></i> Attach
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleImageSelection}
          />
        </div>
        <div className="option-right">
          <button type="button" className="option-button switch">
            <div className="switch-container">
              <div className="slider"></div>
            </div>
            Co-pilot
          </button>
        </div>
      </div>

      {/* New Option Buttons */}
      <div className="row mt-2" style={{ padding: '0.1rem 0.1rem' }}>
      <div className="col-md-5 mb-2 btn btn-secondary mr-2 btn-sm option-button"   style={{ padding: '0.2rem 0.5rem',backgroundColor:"#e74c3c" }}>
      🎾 Wimbledon 2023 winners
</div>
        {/* Add more buttons with different suggestions */}
      <div className="col-md-5 mb-2 btn btn-secondary mr-2 btn-sm option-button"   style={{ padding: '0.2rem 0.5rem',backgroundColor:"grey"  }}>
      🤖 Ai and Earning
</div>
<div className="col-md-5 mb-2 btn btn-secondary btn-sm option-button"   style={{ padding: '0.2rem 0.5rem' }}>
🚀 Space and Sciences
</div>
      </div>

      {showSuggestions && (
        <ul className="suggestion-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchMain;
