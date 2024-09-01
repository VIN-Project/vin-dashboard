import React, { useState } from 'react';
import Select from 'react-select';
import './css_folders/tools.css';

const years = Array.from({ length: 75 }, (_, i) => ({
  value: 1950 + i,
  label: 1950 + i
}));

const makes = [
  { value: 'ford', label: 'Ford' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'toyota', label: 'Toyota' },
  // Add more options as needed
];

const models = [
  { value: 'mustang', label: 'Mustang' },
  { value: 'corvette', label: 'Corvette' },
  { value: 'camry', label: 'Camry' },
  // Add more options as needed
];

const ServiceAndMaintenance = () => {
  const [activeTab, setActiveTab] = useState('service'); // Default tab is "service"
  const [activeSearch, setActiveSearch] = useState('vin'); // Default search by VIN
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  const handleMakeChange = (selectedOption) => {
    setSelectedMake(selectedOption);
  };

  const handleModelChange = (selectedOption) => {
    setSelectedModel(selectedOption);
  };

  return (
    <div className="tls-container">
      <header className="tls-header">
        <h1 className="tls-title">Tools</h1>
        <nav className="tls-tab-nav">
          <button
            className={`tls-tab-button ${activeTab === 'service' ? 'tls-active' : ''}`}
            onClick={() => setActiveTab('service')}
          >
            Upcoming Service and Maintenance
          </button>
          <button
            className={`tls-tab-button ${activeTab === 'recall' ? 'tls-active' : ''}`}
            onClick={() => setActiveTab('recall')}
          >
            Recall Check
          </button>
        </nav>
      </header>

      {activeTab === 'service' && (
        <div className="tls-content-section">
          <h2>Upcoming Service and Maintenance</h2>
          <form className="tls-service-form">
            <div className="tls-input-group">
              <label htmlFor="vin">VIN</label>
              <input type="text" id="vin" placeholder="Enter VIN number" />
            </div>
            <div className="tls-input-group">
              <label htmlFor="odometer">Odometer Reading</label>
              <div className="tls-three_switches">
                <input type="text" id="odometer" placeholder="Enter current Odometer Reading" />
                <span className="tls-help-icon">?</span>
                <div className="tls-toggle-group">
                  <span>KM</span>
                  <label className="tls-switch">
                    <input type="checkbox" />
                    <span className="tls-slider"></span>
                  </label>
                  <span>MILE</span>
                </div>
              </div>
            </div>
            <button type="submit" className="tls-submit-button">
              GET MAINTENANCE RECORDS
            </button>
          </form>
        </div>
      )}

      {activeTab === 'recall' && (
        <div className="tls-content-section">
          <h2 className="tls-recall-title">Recall Check</h2>
          <form className="tls-recall-form">
            <div className="tls-search-by">
              <button
                className={`tls-search-option ${activeSearch === 'vin' ? 'tls-active-search' : ''}`}
                onClick={() => setActiveSearch('vin')}
                type="button"
              >
                VIN
              </button>
              <button
                className={`tls-search-option ${activeSearch === 'ymm' ? 'tls-active-search' : ''}`}
                onClick={() => setActiveSearch('ymm')}
                type="button"
              >
                Year / Make / Model
              </button>
            </div>
            {activeSearch === 'vin' && (
              <div className="tls-input-group">
                <input type="text2" id="recall-vin" placeholder="Enter VIN number" maxLength="17" />
                <div className="tls-char-counter">0 / 17</div>
              </div>
            )}
            {activeSearch === 'ymm' && (
              <div className="tls-input-group">
                <label htmlFor="year-select" className="form-label">Year</label>
                <Select
                  id="year-select"
                  options={years}
                  value={selectedYear}
                  onChange={handleYearChange}
                  placeholder="Select a year..."
                  className="form-select"
                />
                <label htmlFor="make-select" className="form-label">Make</label>
                <Select
                  id="make-select"
                  options={makes}
                  value={selectedMake}
                  onChange={handleMakeChange}
                  placeholder="Select a make..."
                  className="form-select"
                />
                <label htmlFor="model-select" className="form-label">Model</label>
                <Select
                  id="model-select"
                  options={models}
                  value={selectedModel}
                  onChange={handleModelChange}
                  placeholder="Select a model..."
                  className="form-select"
                />
              </div>
            )}
            <button type="submit" className="tls-submit-button">
              CHECK RECALLS
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ServiceAndMaintenance;
