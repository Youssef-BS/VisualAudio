import React from 'react';

function Footer() {
  return (
    <div className="footer py-3 py-lg-5">
      <div className="container-fluid">
        <div className="row">
          {/* Support Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column support">
            <div className="menu-left">
              <svg viewBox="0 0 40 43">
                {/* SVG Path */}
              </svg>
              <h2>Need help?</h2>
              <h4>Our team is here for you</h4>
            </div>
            <div className="menu-right">
              <p className="text-center">
                <a className="mb-0 mail-link" href="mailto:support@fos-lighting.eu">
                  support@fos-lighting.eu
                </a>
              </p>
              <p className="home-boxes__divider">Or</p>
              <a href="https://fos.supportsystem.com/open.php" target="_blank" className="btn btn-outline btn-outline--orange btn-big-fn18 w-100">
                Support
              </a>
            </div>
          </div>

          {/* Dealer Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column dealer">
            <div className="menu-left">
              <svg viewBox="0 0 48 31">
                {/* SVG Path */}
              </svg>
              <h2>Become a Dealer</h2>
            </div>
            <div className="menu-right">
              <p><b>Work with us</b><br />Be a partner in growth</p>
              <a href="create_account.php" className="btn btn-primary-black-text btn-big-fn18 w-100">
                Create Account
              </a>
            </div>
          </div>

          {/* Contact Sales Team Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column dealer">
  <div className="menu-left">
    <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1">
      {/* SVG Path */}
    </svg>
    <h2>Contact our Sales Team</h2>
  </div>
  <div className="menu-right">
    <p><b>We are all ears</b><br />We would like to hear from you</p>
    <a href="contact_us.php" className="btn btn-outline btn-outline--orange btn-big-fn18 w-100">
      Get In Touch
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
