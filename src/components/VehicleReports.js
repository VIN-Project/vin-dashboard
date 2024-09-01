import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css_folders/vehiclereports.css';

const VehicleHistoryReport = () => {
    const [loadingButtons, setLoadingButtons] = useState({});
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        setLoadingButtons((prev) => ({ ...prev, [product]: true }));

        // Simulate a loading period, then redirect to the Add to Cart page
        setTimeout(() => {
            setLoadingButtons((prev) => ({ ...prev, [product]: false }));
            navigate(`/add-to-cart?product=${product}`); // Replace with your actual Add to Cart page route and product identifier
        }, 2000); // 2 seconds loading time
    };

    return (
        <div className="vr-report-container" id="dealers-page">
            <h1 className="vr-report-title">Order Vehicle History Reports</h1>
            <p className="vr-report-description">Want to uncover a hidden past of any vehicle?<br/>Order vehicle history reports now.</p>
            <p className="vr-report-terms">
                By selecting "Proceed to Checkout" you are confirming that you have read and agree to Detailed Vehicle History's 
                <a href="/terms-of-use" className="vr-link-terms"> Terms of Use </a> and 
                <a href="/privacy-policy" className="vr-link-privacy"> Privacy Policy.</a>
            </p>

            <div className="vr-pricing-section">
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">1 CREDIT</div>
                    <div className="vr-pricing-price">$15</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> 1 Report</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('1-credit')}
                        disabled={loadingButtons['1-credit']}
                    >
                        {loadingButtons['1-credit'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">2 CREDITS</div>
                    <div className="vr-pricing-price">$25</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> 2 Reports</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('2-credits')}
                        disabled={loadingButtons['2-credits']}
                    >
                        {loadingButtons['2-credits'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">5 CREDITS</div>
                    <div className="vr-pricing-price">$55</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> 5 Reports</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('5-credits')}
                        disabled={loadingButtons['5-credits']}
                    >
                        {loadingButtons['5-credits'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">10 CREDITS</div>
                    <div className="vr-pricing-price">$105</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> 10 Reports</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('10-credits')}
                        disabled={loadingButtons['10-credits']}
                    >
                        {loadingButtons['10-credits'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">50 CREDITS</div>
                    <div className="vr-pricing-price">$450</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> 50 Reports</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('50-credits')}
                        disabled={loadingButtons['50-credits']}
                    >
                        {loadingButtons['50-credits'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                <div className="vr-pricing-card">
                    <div className="vr-pricing-header">MONTHLY PACKAGE</div>
                    <div className="vr-pricing-price">$55</div>
                    <div className="vr-pricing-details">
                        <p><strong>Reports:</strong> Unlimited</p>
                        <p><strong>Delivery:</strong> INSTANT</p>
                        <p><strong>Expiration:</strong> Never</p>
                    </div>
                    <button
                        className="vr-checkout-button"
                        onClick={() => handleAddToCart('monthly-package')}
                        disabled={loadingButtons['monthly-package']}
                    >
                        {loadingButtons['monthly-package'] ? 'Loading...' : 'PROCEED TO CHECKOUT'}
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default VehicleHistoryReport;
