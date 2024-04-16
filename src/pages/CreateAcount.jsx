import React from 'react';

const CreateAccountForm = () => {
    return (
        <div className="mainbody">
        <div className="breadcrumb" id="breadcrumb_static">
          <div className="mainwrap container-fluid">
            <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
            <i>/</i>
            <a href="https://www.fos-lighting.eu/projects.php" className="headerNavigation">Our Projects</a>
          </div>
        </div>
  
        <div id="maincontent" className="maincontent">
          <div className="category-description-container container-fluid">
            <div className="row">
              <div className="col-12 col-xl-6 mx-auto title">
                <div className="headingtitle w-100 text-center">
                </div>
                <div className="text-center mt-2"></div>
              </div>
            </div>
          </div>
  
          <div className="breadcrumb_container">
            <div className="breadcrumb" id="breadcrumb_static">
              <div className="mainwrap container-fluid">
                <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
                <i>/</i>
                <a href="https://www.fos-lighting.eu/projects.php" className="headerNavigation">Our Projects</a>
              </div>
            </div>
          </div>
        <div className="container-fluid">
            <div className="section-bg-w-br-30 create-account px-3 px-lg-5 pb-0 pb-lg-5">
                <form name="create_account" id="create_account" action="https://www.fos-lighting.eu/create_account.php" method="post" noValidate>
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
                <div className="field">
                    <div className="fieldlabel">First name:</div>
                    <div className="fieldkey">
                        <input type="text" name="firstname" id="firstname" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Last name:</div>
                    <div className="fieldkey">
                        <input type="text" name="lastname" id="lastname" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Email Address:</div>
                    <div className="fieldkey">
                        <input type="text" name="email_address" id="email_address" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Telephone:</div>
                    <div className="fieldkey">
                        <input type="text" name="telephone" id="telephone" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Website:</div>
                    <div className="fieldkey">
                        <input type="text" name="url" id="url" />
                        <span className="inputRequirement">ENTRY_URL_TEXT</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="separator"></div>
                <div className="create-account-title">Company Details</div>
                <div className="separator"></div>
                <div className="field">
                    <div className="fieldlabel">Company name:</div>
                    <div className="fieldkey">
                        <input type="text" name="company" id="company" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">VAT:</div>
                    <div className="fieldkey">
                        <input type="text" name="vat" id="vat" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                {/* Additional fields */}
                {/* Acceptance checkboxes */}
                <div className="field mainwrap d-flex flex-column p-0">
                    <div className="">&nbsp;</div>
                    <div className="fieldkey accept_terms d-flex flex-column">
                        <div className="cboxcontainer accept_terms d-flex flex-column">
                            <input type="checkbox" name="accept_terms_cbox" value="in" id="accept_terms_cbox" className="filter show_only css-checkbox accept_terms_cbox" />
                            <label htmlFor="accept_terms_cbox" className="css-label">I accept <a href="https://www.fos-lighting.eu/terms-of-cooperation-pr-3.html" target="_blank">cooperation terms</a></label>
                            <div className="clear"></div>
                            <div className="clear"></div>
                        </div>
                        <div className="accept_terms_error">You must accept the terms of cooperation to continue.</div>
                    </div>
                </div>
                <div className="field mainwrap d-flex flex-column p-0">
                    <div className="">&nbsp;</div>
                    <div className="fieldkey terms d-flex flex-column" style={{ marginTop: '5px' }}>
                        <div className="cboxcontainer d-flex flex-column">
                            <input type="checkbox" name="accept_gdpr_cbox" value="in" id="accept_gdpr_cbox" className="filter show_only css-checkbox accept_terms_cbox" />
                            <label htmlFor="accept_gdpr_cbox" className="css-label">
                                I agree with
                                <a className="ml-1" href="https://www.fos-lighting.eu/gdpr.php" target="_blank" style={{ textDecoration: 'underline' }}> personal data terms</a>
                            </label>
                        </div>
                        <div className="accept_gdpr_error">You must agree to the terms of personal data protection to continue.</div>
                    </div>
                </div>
                {/* Address */}
                <div className="separator"></div>
            </div>
            <div className="col-lg-5 ">
                <div className="create-account-title">Address</div>
                <div className="separator"></div>
                <div className="field">
                    <div className="fieldlabel">Address:</div>
                    <div className="fieldkey">
                        <input type="text" name="street_address" id="street_address" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Postcode:</div>
                    <div className="fieldkey">
                        <input type="text" name="postcode" id="postcode" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">City:</div>
                    <div className="fieldkey">
                        <input type="text" name="city" id="city" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Country:</div>
                    <div className="fieldkey">
                        <select name="country">
                            <option value="">Select</option>
                            {/* Options for countries */}
                        </select>
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="separator"></div>
                <div className="create-account-title pass">Password</div>
                <div className="separator"></div>
                <div className="field">
                    <div className="fieldlabel">Password</div>
                    <div className="fieldkey">
                        <input type="password" name="password_create_account" id="password_create_account" maxLength="40" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Confirm new Password:</div>
                    <div className="fieldkey">
                        <input type="password" name="confirmation" id="confirmation" maxLength="40" />
                        <span className="inputRequirement">*</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="separator"></div>
            </div>
        </div>                </form>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CreateAccountForm;