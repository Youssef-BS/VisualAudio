import React from 'react';

const Privacy = () => {
  return (
    <div className="privacy-wrapper">
      <hr className="privacy-divider" />
      <div className="row align-items-center text-white">
        <div className="col-6 col-lg text-left order-1 order-lg-1">
          <a href="https://www.fos-lighting.eu/cookies.php">Cookies Policy</a>
        </div>
        <div className="col-12 col-lg-auto text-center footer-copyright__center-column mt-3 mt-lg-0 copy order-10 order-lg-1">
          <span className="copyright-text">Copyright © 2024 - All Rights Reserved.</span>
          <span className="web-develop-text">Designed and developed by <a href="https://www.web-experts.gr" title="web-experts.gr" target="_blank" rel="nofollow">Web-Experts</a>
          <img className="ml-2" src="https://www.fos-lighting.eu/images/web-experts-copyright.png" alt="Web Experts Logo" /></span>
        </div>
        <div className="col-6 col-lg text-right order-1 order-lg-1">
          <a href="https://www.fos-lighting.eu/gdpr.php">Privacy Policy</a>
        </div>
        <div className="col menu text-center d-none">
          <a href="https://www.fos-lighting.eu/gdpr.php">Privacy Policy</a>
        </div>
        <div className="col icons text-center d-none">
          <img src="images/footer-card-icons.png" alt="Footer Card Icons" />
        </div>
        <div className="col we text-right d-none">
          <span className="web-develop-text">Designed and developed by <a href="https://www.web-experts.gr" title="web-experts.gr" target="_blank" rel="nofollow">Web-Experts</a>
          <img className="ml-2" src="https://www.fos-lighting.eu/images/web-experts-copyright.png" alt="Web Experts Logo" /></span>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
