import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './css_folders/dealers.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
    country: 'PK',
    state: 'Punjab',
    city: 'Kahna Nau',
    address: '',
    employees: '',
    logo: null,
  });

  const navigate = useNavigate(); // Create a navigate function for redirection

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        logo: files[0],
      }));
    } else if (name.startsWith('social')) {
      const platform = name.split('_')[1];
      setFormData((prevState) => ({
        ...prevState,
        social: {
          ...prevState.social,
          [platform]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log('Form Data:', formData);

    // Redirect to another page after submission
    navigate('/thank-you');
  };

  return (
    <div className="deal-register-container" id="dealers-page">
      <div className="deal-register-left">
        <h1>Welcome to our</h1>
        <h2>Dealers Network</h2>
        <p className="deal-subheading">Join NOW to grow your Business!</p>
        <h3>Register Today!</h3>
        <h4>What Benefits do you get with DVH Dealers Network?</h4>
        <ul>
          <li><span className="deal-checkmark">✔</span> Premium access to special packages for dealerships, garages, service shops, and businesses</li>
          <li><span className="deal-checkmark">✔</span> Monthly and yearly subscriptions for additional savings</li>
          <li><span className="deal-checkmark">✔</span> Accurate window stickers for every manufacturer that can be customized and branded.</li>
          <li><span className="deal-checkmark">✔</span> Dedicated account manager to assist with onboarding and inquiries.</li>
          <li><span className="deal-checkmark">✔</span> Leverage our detailed vehicle reports & access to auction history to increase your business ROI.</li>
          <li><span className="deal-checkmark">✔</span> Award-winning customer support team.</li>
          <li><span className="deal-checkmark">✔</span> Access to upcoming services and maintenance records for vehicles.</li>
        </ul>
      </div>
      <div className="deal-register-right">
        <h3>Fill out the form to register:</h3>
        <form className="deal-form-container" onSubmit={handleSubmit}>
          <div className="deal-form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="deal-form-input"
              required
            />
          </div>
          <div className="deal-form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="deal-form-input"
              required
            />
          </div>
          <div className="deal-form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="deal-form-input"
              required
            />
          </div>
          <div className="deal-form-group deal-phone-group">
            <label>Phone*</label>
            <div className="deal-phone-input-container">
              <input
                type="text"
                value="1"
                className="deal-country-code-input"
                readOnly
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+923247663563"
                className="deal-phone-input"
                required
              />
            </div>
          </div>
          <div className="deal-form-group">
            <label>Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="deal-form-input"
              required
            />
          </div>

          <div className="deal-form-group">
            <label>Company Website*</label>
            <input
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="Company Website"
              className="deal-form-input"
              required
            />
          </div>

          <div className="deal-form-group">
            <label>Social (Optional)</label>
            <div className="deal-social-input">
            <FontAwesomeIcon icon={faFacebook} className='fa_icons'/>
              <input
                type="text"
                name="social_facebook"
                value={formData.social.facebook}
                onChange={handleChange}
                placeholder="e.g. @facebook"
                className="deal-form-input"
              />
            </div>
            <div className="deal-social-input">
            <FontAwesomeIcon icon={faTwitter} className='fa_icons' />
              <input
                type="text"
                name="social_twitter"
                value={formData.social.twitter}
                onChange={handleChange}
                placeholder="@twitter123"
                className="deal-form-input"
              />
            </div>
            <div className="deal-social-input">
            <FontAwesomeIcon icon={faInstagram}  className='fa_icons'/>
              <input
                type="text"
                name="social_instagram"
                value={formData.social.instagram}
                onChange={handleChange}
                placeholder="@instagram123"
                className="deal-form-input"
              />
            </div>
          </div>

          <div className="deal-form-group">
            <label>Country*</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="deal-form-input"
              required
            >
              <option value="PK">PK</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="deal-form-group">
            <label>State or Province*</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="deal-form-input"
              required
            >
              <option value="Punjab">Punjab</option>
              {/* Add more states or provinces as needed */}
            </select>
          </div>

          <div className="deal-form-group">
            <label>City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="deal-form-input"
            >
              <option value="Kahna Nau">Kahna Nau</option>
              {/* Add more cities as needed */}
            </select>
          </div>

          <div className="deal-form-group">
            <label>Address*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="e.g. 123 Main Street"
              className="deal-form-input"
              required
            />
          </div>

          <div className="deal-form-group">
            <label>Employees (Optional)</label>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="deal-form-input"
            >
              <option value="">Select Number of Employees</option>
              {/* Add more employee ranges as needed */}
            </select>
          </div>

          <div className="deal-form-group">
            <label>Dealership Logo (Optional)</label>
            <input
              type="file"
              name="logo"
              onChange={handleChange}
              className="deal-upload-button"
            />
          </div>

          <button type="submit" className="deal-register-button">
            REGISTER NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
