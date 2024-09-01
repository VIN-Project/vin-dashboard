import React, { useState } from 'react';
import { FaSearch, FaFileAlt } from 'react-icons/fa';
import './css_folders/myreports.css'; // Import the CSS file

const MyReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reportFound, setReportFound] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSearch = () => {
    setLoading(true);
    setSearchPerformed(false);
    setProgress(0);

    // Simulate a delay to represent loading time with a progress bar
    const loadingInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loadingInterval);
          setLoading(false);
          setSearchPerformed(true);

          // Simulate a report search
          if (searchTerm === 'exampleVIN') {
            setReportFound(true);
          } else {
            setReportFound(false);
          }
        }
        return prevProgress + 10;
      });
    }, 200); // Progress bar increments every 200ms, total duration 2 seconds
  };

  return (
    <div className="MyRepo-container" id="dealers-page">
      <header className="MyRepo-header">
        <h1 className="MyRepo-header-title">My Reports</h1>
        <div className="MyRepo-header-actions">
          <div className="MyRepo-search-bar">
            <input
              type="text"
              placeholder="Search VIN"
              className="MyRepo-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="MyRepo-search-icon" />
          </div>
          <button className="MyRepo-search-button" onClick={handleSearch}>Search</button>
          <button className="MyRepo-newest-button">
            <FaFileAlt className="MyRepo-newest-icon" /> Newest
          </button>
        </div>
      </header>
      <div className="MyRepo-content">
        {loading ? (
          <div className="MyRepo-loading">
            <div className="MyRepo-progress-bar">
              <div
                className="MyRepo-progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p>Loading report...</p>
          </div>
        ) : searchPerformed ? (
          reportFound ? (
            <p className="MyRepo-content-text">
              Here is your report for VIN: {searchTerm}.
            </p>
          ) : (
            <div className="MyRepo-no-reports">
              <FaSearch className="MyRepo-no-reports-icon" />
              <p className="MyRepo-no-reports-text">No reports found for VIN: {searchTerm}</p>
            </div>
          )
        ) : (
          <p className="MyRepo-content-text">
            This is a summary of the reports that you ran in the past. You can see, manage, and view your past reports again.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyReports;
