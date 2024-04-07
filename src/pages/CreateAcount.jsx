import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CreateAccountForm = () => {
    const [confirmation, setConfirmation] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);
    const handleConfirmationChange = (event) => {
        setConfirmation(event.target.value);
      };
      const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
      };
    

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email_address: '',
    telephone: '',
    url: '',
    company: '',
    vat: '',
    accept_terms_cbox: false,
    accept_gdpr_cbox: false,
    street_address: '',
    postcode: '',
    city: '',
    country: '',
    password_create_account: '',
    confirmation: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='maincontent'>
        <div className='section-bg-w-br-30 create-account px-3 px-lg-5 pb-0 pb-lg-5'>    <form name="create_account" id="create_account" action="https://www.fos-lighting.eu/create_account.php" method="post" noValidate onSubmit={handleSubmit}>
      <input type="hidden" name="action" value="process" />
      <div className="row text-center">
        <div className="col-12 col-lg-11 offset-lg-1">
          <div>
            <h1 className="headingtitle text-left pt-4 pb-3 pt-lg-5 pb-lg-5">Create Account</h1>
          </div>
        </div>
      </div>

      <div className="row pb-5 mb-5">
        <div className="col-lg-5 offset-lg-1">
          <div className="create-account-title">Personal Details</div>
          <div className="separator"></div>
          {/* Personal details input fields */}
          <div className="field">
            <div className="fieldlabel">First name:</div>
            <div className="fieldkey">
              <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleInputChange} />
              <span className="inputRequirement">*</span>
            </div>
            <div className="clear"></div>
          </div>
          <div className="field">
            <div className="fieldlabel">Last name:</div>
            <div className="fieldkey">
              <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleInputChange} />
              <span className="inputRequirement">*</span>
            </div>
            <div className="clear"></div>
          </div>
          {/* Repeat similar div structures for other personal details fields */}
        </div>
        <div className="col-lg-5">
          <div className="create-account-title">Address</div>
          <div className="separator"></div>
          {/* Address input fields */}
          <div className="field">
            <div className="fieldlabel">Street Address:</div>
            <div className="fieldkey">
              <input type="text" name="street_address" id="street_address" value={formData.street_address} onChange={handleInputChange} />
              <span className="inputRequirement">*</span>
            </div>
            <div className="clear"></div>
          </div>
          {/* Repeat similar div structures for other address fields */}

          {/* Password input fields */}
          <div className="create-account-title pass">Password</div>
          <div className="separator"></div>
          <div className="field">
            <div className="fieldlabel">Password</div>
            <div className="fieldkey">
              <input type="password" name="password_create_account" id="password_create_account" value={formData.password_create_account} onChange={handleInputChange} maxLength="40" />
              <span className="inputRequirement">*</span>
            </div>
            <div className="clear"></div>
          </div>
          <div className="field">
      <div className="fieldlabel">Confirm new Password:</div>
      <div className="fieldkey">
        <input type="password" name="confirmation" id="confirmation"  maxlength="40" />
        <span className="inputRequirement">*</span>
      </div>
      <div className="clear"></div>
    </div>
          {/* Repeat similar div structures for other password fields */}
          <div className="field text-center">
        <div className="fieldkey captcha" style={{ height: 'auto', marginBottom: '40px' }}>
          <ReCAPTCHA
            sitekey="your_site_key"
            onChange={handleCaptchaChange}
          />
        </div>
      </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="col-12 text-center" style={{ borderTop: 'solid 1px #f3f3f3', marginTop: '30px' }}>
        <div className="column submit">
          <div className="field">
            <div className="fieldkey">
              <input type="submit" border="0" alt="Continue" value="Continue" title="Continue" className="shop-btn" id="create_account_confirm" />
            </div>
            <div className="clear"></div>
          </div>
          
        </div>
      </div>
    </form>
    </div>
    </div>

  );
};

export default CreateAccountForm;
