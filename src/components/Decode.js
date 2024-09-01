import React, { useState } from 'react';
import Select from 'react-select';
import './css_folders/decode.css'; // Import the CSS file

const states = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'Arizona', label: 'Arizona' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'California', label: 'California' },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Connecticut', label: 'Connecticut' },
  { value: 'Delaware', label: 'Delaware' },
  { value: 'Florida', label: 'Florida' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Hawaii', label: 'Hawaii' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Indiana', label: 'Indiana' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Maine', label: 'Maine' },
  { value: 'Maryland', label: 'Maryland' },
  { value: 'Massachusetts', label: 'Massachusetts' },
  { value: 'Michigan', label: 'Michigan' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Montana', label: 'Montana' },
  { value: 'Nebraska', label: 'Nebraska' },
  { value: 'Nevada', label: 'Nevada' },
  { value: 'New Hampshire', label: 'New Hampshire' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Ohio', label: 'Ohio' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Pennsylvania', label: 'Pennsylvania' },
  { value: 'Rhode Island', label: 'Rhode Island' },
  { value: 'South Carolina', label: 'South Carolina' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Vermont', label: 'Vermont' },
  { value: 'Virginia', label: 'Virginia' },
  { value: 'Washington', label: 'Washington' },
  { value: 'West Virginia', label: 'West Virginia' },
  { value: 'Wisconsin', label: 'Wisconsin' },
  { value: 'Wyoming', label: 'Wyoming' }
];

const DecoderDashboard = () => {
  const [activeTab, setActiveTab] = useState('vin');
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleVinChange = (e) => {
    const inputVin = e.target.value;
    if (inputVin.length <= 17) {
      setVin(inputVin);
    }
  };

  const handleLicensePlateChange = (e) => {
    const inputLicensePlate = e.target.value;
    if (inputLicensePlate.length <= 9) {
      setLicensePlate(inputLicensePlate);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeTab === 'vin' && vin.length < 17) {
      setErrorMessage('Please enter a vehicle identification number (VIN) to continue.');
      return;
    }

    if (activeTab === 'license' && licensePlate.length === 0) {
      setErrorMessage('The License plate field is empty. Please enter a license plate number to continue.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

      // Replace this with your actual API call logic
      const data = null; // Simulate a failed lookup

      if (data) {
        setData(data);
        setErrorMessage('');
      } else {
        setData(null);
        if (activeTab === 'vin') {
          setErrorMessage('The VIN you entered is incorrect. Please enter a correct VIN.');
        } else {
          setErrorMessage('The License plate you entered is incorrect. Please enter a correct license plate.');
        }
      }
    } catch (error) {
      setData(null);
      setErrorMessage('An error occurred while processing your request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const vinHelperClass = vin.length === 17 ? 'decode-form-helper-green' : 'decode-form-helper-red';

  return (
    <div className="decode-container" id="dealers-page">
      <header className="decode-header">
        <h1 className="decode-header-title">Decode VIN or License Plate</h1>
      </header>
      
      <div className="decode-tabs">
        <nav className="decode-tabs-nav" aria-label="Tabs">
          <button
            className={`decode-tab-button ${activeTab === 'vin' ? 'decode-active' : ''}`}
            onClick={() => setActiveTab('vin')}
          >
            VIN Decoder
          </button>
          <button
            className={`decode-tab-button ${activeTab === 'license' ? 'decode-active' : ''}`}
            onClick={() => setActiveTab('license')}
          >
            License Plate Decoder
          </button>
        </nav>
      </div>

      {activeTab === 'vin' && (
        <div className="decode-tab-content">
          <h2 className="decode-content-title">VIN Decoder</h2>
          <p className="decode-content-description">Decode any VIN (USA) to get detailed vehicle specifications</p>
          <form className="decode-form" onSubmit={handleSubmit}>
            <label htmlFor="vin" className="decode-form-label-vin">VIN</label>
            <input
              type="text"
              id="vin"
              name="vin"
              placeholder="Enter VIN number"
              className="decode-form-input"
              value={vin}
              onChange={handleVinChange}
            />
            <p className={`decode-form-helper ${vinHelperClass}`}>VIN: {vin.length}/17</p>
            <button
              type="submit"
              className="decode-form-button"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'DECODE VIN'}
            </button>
            {errorMessage && <p className="decode-form-label">{errorMessage}</p>}
            {data && <p className="decode-form-data">Vehicle Data: {JSON.stringify(data)}</p>}
          </form>
        </div>
      )}

      {activeTab === 'license' && (
        <div className="decode-tab-content">
          <h2 className="decode-content-title">License Plate Decoder</h2>
          <p className="decode-content-description">Decode any license plate (USA) to get VIN and detailed vehicle specifications</p>
          <form className="decode-form" onSubmit={handleSubmit}>
            <div className="decode-form-grid">
              <div className="decode-form-group">
                <label htmlFor="license-plate" className="decode-form-label-plate">License Plate</label>
                <input
                  type="text"
                  id="license-plate"
                  name="license-plate"
                  placeholder="Enter License Plate"
                  className="decode-form-input-plate"
                  value={licensePlate}
                  onChange={handleLicensePlateChange}
                />
              </div>
              <div className="decode-form-group">
                <label htmlFor="state" className="decode-form-label-plate">State</label>
                <Select
                  id="state"
                  name="state"
                  options={states}
                  className="decode-form-select"
                />
              </div>
            </div>
            <button
              type="submit"
              className="decode-form-button"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'DECODE PLATE'}
            </button>
            {errorMessage && <p className="decode-form-label">{errorMessage}</p>}
            {data && <p className="decode-form-data">Vehicle Data: {JSON.stringify(data)}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default DecoderDashboard;
