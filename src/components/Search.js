import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import LogoSearch from '../assets/images/vhr.webp';
import LogoSearch2 from '../assets/images/sticker.png';
import TrustLogo from '../assets/images/trustlogo.png'
import {
  FaCheckCircle,
  FaFileAlt,
  FaUser,
  FaGavel,
  FaLock,
  FaCarCrash,
  FaCog,
  FaClipboardList,
  FaCalendarAlt,
  FaCar,
  FaWrench,
  FaDollarSign,
  FaPalette,
  FaTools,
  FaCoins,
  FaSearchDollar,
  FaShieldAlt
} from 'react-icons/fa';
import './css_folders/search.css'; // Import the CSS file
import { ReactComponent as NumberOne } from '../assets/images/number1.svg';
import { ReactComponent as NumberTwo } from '../assets/images/numer2.svg';
import { ReactComponent as NumberThree } from '../assets/images/number3.svg';

const VehicleHistorySection = () => {
  const [activeTab, setActiveTab] = useState('vehicleHistory');

  return (
    <div className="dvh-container" id="dealers-page">
      <header className="dvh-header">
        <h1 className="dvh-header-title">
          Explore our Products
        </h1>
      </header>

      <div className="dvh-tabs">
        <nav className="dvh-tab-nav" aria-label="Tabs">
          <button
            className={`dvh-tab-button ${activeTab === 'vehicleHistory' ? 'active' : ''}`}
            onClick={() => setActiveTab('vehicleHistory')}
          >
            Vehicle History Report
          </button>
          <button
            className={`dvh-tab-button ${activeTab === 'windowSticker' ? 'active' : ''}`}
            onClick={() => setActiveTab('windowSticker')}
          >
            Window Sticker
          </button>
        </nav>
      </div>

      {activeTab === 'vehicleHistory' && (
        <div>
          <div className="dvh-content-section">
            <div className="dvh-content-text">
              <h2 className="dvh-content-title">Vehicle History Report</h2>
              <div className="dvh-content-description">
                <p>Learn about facts and uncover any vehicle’s hidden history in seconds with Detailed Vehicle History.</p>
                <ul className="dvh-content-list">
                  <li>Most detailed vehicle history reports in the market</li>
                  <li>Reports never expire and are easily downloadable</li>
                  <li>Authentic information from trusted data sources</li>
                  <li>Up to 37% cheaper rates than competitors</li>
                </ul>
                <div className="dvh-button-container">
                  <button type="button" className="dvh-buy-button">BUY VEHICLE HISTORY REPORT(S)</button>
                </div>
              </div>
            </div>
            <div className="dvh-content-image">
              <img src={LogoSearch} alt="Vehicle History Report" className="dvh-image" />
              <a href="https://detailedvehiclehistory.com/report/vin/1HGFA15547L116880" className="dvh-sample-link">View Sample Report</a>
            </div>
          </div>

          <div className="dvh-info-section">
            <h2 className="dvh-info-title">What's Included in Detailed Vehicle History Reports</h2>
            <div className="dvh-info-grid four-column">
            <div className="dvh-info-card">
                <FaCarCrash className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Accident Records</h3>
                <p className="dvh-info-card-text">Track down the accident and damage history of any vehicle to make an informed decision.</p>
              </div>
              <div className="dvh-info-card">
                <FaFileAlt className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Title History</h3>
                <p className="dvh-info-card-text">Find out if the vehicle’s title history is clean or possesses junk, rebuilt, salvage, or lemon title.</p>
              </div>
              <div className="dvh-info-card">
                <FaCog className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Technical Specs</h3>
                <p className="dvh-info-card-text">Get detailed vehicle specifications covering all possible data points.</p>
              </div>
              <div className="dvh-info-card">
                <FaCalendarAlt className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Sale History</h3>
                <p className="dvh-info-card-text">How many times the vehicle was sold, and where—tap into vehicle history and know more.</p>
              </div>
              <div className="dvh-info-card">
                <FaUser className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Ownership Records</h3>
                <p className="dvh-info-card-text">Learn the number of previous owners of the vehicle and where it was located during its lifetime.</p>
              </div>
              
              <div className="dvh-info-card">
                <FaGavel className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Auction Records</h3>
                <p className="dvh-info-card-text">Learn if the vehicle has ever been auctioned or sold—access up to 10+ auction photos.</p>
              </div>
              <div className="dvh-info-card">
                <FaLock className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Theft Records</h3>
                <p className="dvh-info-card-text">Uncover if any vehicle has hidden history of theft or was ever been stolen.</p>
              </div>
              <div className="dvh-info-card">
                <FaClipboardList className="dvh-info-icon" />
                <h3 className="dvh-info-card-title">Recall Data</h3>
                <p className="dvh-info-card-text">Learn if the vehicle has any open recalls by the manufacturer to ensure safety.</p>
              </div>
             
            
            </div>
          </div>
        </div>
      )}

      {activeTab === 'windowSticker' && (
        <div>
          <div className="dvh-content-section">
            <div className="dvh-content-text">
              <h2 className="dvh-content-title">Window Sticker</h2>
              <div className="dvh-content-description">
                <p>Get the original window sticker of any vehicle in seconds.</p>
                <ul className="dvh-content-list">
                  <li>Authentic window stickers from trusted sources</li>
                  <li>Easy to download and print</li>
                  <li>Comprehensive vehicle details at your fingertips</li>
                  <li>Affordable pricing options</li>
                </ul>
                <div className="dvh-button-container">
                  <button type="button" className="dvh-buy-button">BUY WINDOW STICKER</button>
                </div>
              </div>
            </div>
            <div className="dvh-content-image">
              <img src={LogoSearch2} alt="Window Sticker" className="dvh-image" />
              <a href="https://detailedvehiclehistory.com/report/vin/1HGFA15547L116880" className="dvh-sample-link">View Sample Sticker</a>
            </div>
          </div>

          <div className="dvh-info-section">
            <h2 className="dvh-info-title">What's Included in Window Sticker</h2>
            <div className="dvh-info-grid two-column">
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Vehicle Description</h3>
                  <p className="dvh-info-card-text">Detailed information about the vehicle model, including make, model, and year.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Factory Installed Standard Equipment</h3>
                  <p className="dvh-info-card-text">Contains necessary information about factory-installed equipment.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Mechanical Features</h3>
                  <p className="dvh-info-card-text">Includes engine, battery, brakes, and suspension details.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Optional Equipment Information</h3>
                  <p className="dvh-info-card-text">Information if fitted by the manufacturer at the factory.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Safety and Security Options</h3>
                  <p className="dvh-info-card-text">Includes airbags, traction control, child locks, etc.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Pricing</h3>
                  <p className="dvh-info-card-text">Includes MSRP and shipping charges to the destination.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Fuel Economy</h3>
                  <p className="dvh-info-card-text">Includes fuel economy information and annual fuel costs.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Environment Safety Ratings</h3>
                  <p className="dvh-info-card-text">Includes smog and CO2 emission ratings.</p>
                </div>
              </div>
              <div className="dvh-info-card2">
                <FaCheckCircle className="dvh-info-icon2" />
                <div className="icons_contents">
                  <h3 className="dvh-info-card-title">Vehicle Warranty Information</h3>
                  <p className="dvh-info-card-text">Includes bumper-to-bumper and powertrain warranties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Steps to Search for a Vehicle History Report Section */}
      <div className="vehicle-history-container">
      <h2 className="title_villa">Steps to Search for a Vehicle History Report</h2>
      <div className="steps">
        <div className="step">
          <div className="icon-container">
            <NumberOne className="icon" />
          </div>
          <h3>Get Credits</h3>
        </div>
        <div className="step">
          <div className="icon-container">
            <NumberTwo className="icon" />
          </div>
          <h3>Enter VIN or License Plate</h3>
        </div>
        <div className="step">
          <div className="icon-container">
            <NumberThree className="icon" />
          </div>
          <h3>Get Your Report</h3>
        </div>
      </div>
    </div>

  <div className="updated_report_contain">
       <div className='updated_txt_left'>
            <h1 className='txt_ipolo'>
                    Why should you get a Vehicle History Report from us?
            </h1>
            <div className="icons_contents">
                  <FaCheckCircle className="dvh-info-icon2" />
                  <p FaCheckCircle className="dvh-trust-title">Cheaper rates yet high quality</p>
            </div>
            <div className="icons_contents">
                  <FaCheckCircle className="dvh-info-icon2" />
                  <p FaCheckCircle className="dvh-trust-title">Auction records with photos</p>
            </div>
            <div className="icons_contents">
                  <FaCheckCircle className="dvh-info-icon2" />
                  <p FaCheckCircle className="dvh-trust-title">Market value pricing</p>
            </div>
            <div className="icons_contents">
                  <FaCheckCircle className="dvh-info-icon2" />
                  <p FaCheckCircle className="dvh-trust-title">Extended vehicle information</p>
            </div>
            <div className="icons_contents">
                  <FaCheckCircle className="dvh-info-icon2" />
                  <p FaCheckCircle className="dvh-trust-title">24/7 Live chat support</p>
            </div>
       </div>
       <div className='updated_pic_right'>
              <img src={TrustLogo} alt="Vehicle History Report" className="dvh-image-trusted" />
       </div>
  </div>
    </div>
  );
};

export default VehicleHistorySection;
