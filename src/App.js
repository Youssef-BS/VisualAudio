import React, { useEffect } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick'; // Import Slick Carousel library
import MainHeader from './right';
import Boxes from "./components/boxes/Boxes"
window.ddfullscreenmenu = {
  togglemenu: () => {
    // Define the functionality of togglemenu here
    console.log('Toggle menu function');
  }
};
/*const ConsentInitialization = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        if (localStorage.getItem('consentMode') === null) {
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
                'functionality_storage': 'denied',
                'security_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        } else {
            gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
        }
    }, []);

    return null;
};*/

const Header = () => {

  useEffect(() => {
    // Event listener for login popup link
    const handlePopupLinkClick = (e) => {
        e.preventDefault();
        $("body").toggleClass("popup-open");
        $(".login-popup-container").toggleClass("active");
        $(".login-popup").toggleClass("show");
    };

    // Event listener for close icon inside login popup
    const handleCloseIconClick = () => {
        $("body").toggleClass("popup-open");
        $(".login-popup-container").toggleClass("active");
        $(".login-popup").toggleClass("show");
    };

    // Attach event listener to login popup link
    $(".login-popup-link").click(handlePopupLinkClick);

    // Attach event listener to close icon inside login popup
    $(".login-popup > i").click(handleCloseIconClick);

    // Initialize Slick Carousel
    const slider = $('.jsInfoBarSlider');
    slider.slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        cssEase: 'ease-in-out',
        fade: false,
        prevArrow: '<div class="prev-arrow"><i class="las la-angle-left"></i></div>',
        nextArrow: '<div class="next-arrow"><i class="las la-angle-right"></i></div>',
    });

    // Add show class to wrapper on init
    slider.on('init', function (event, slick) {
        const wrapper = $(this).closest('.info-bar');
        if (wrapper) {
            wrapper.addClass('show');
        } else {
            console.error('Wrapper element not found');
        }
    });

    // Google Tag Manager setup
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        const f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NFC5TJ2');

    // Cleanup function
    return () => {
        // Destroy Slick Carousel instance
        slider.slick('unslick');

        // Remove event listeners
        $(".login-popup-link").off("click", handlePopupLinkClick);
        $(".login-popup > i").off("click", handleCloseIconClick);
    };
}, []); // Empty dependency array means this effect runs only once (on mount)


    return (
        <>
            {/* Consent Initialization */}

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFC5TJ2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}

            {/* Begin header */}
            <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-lg-3 left">
            <div className="row d-flex align-items-center h-100">
              <div className="col header-social">
                <span>Follow us:</span>
                <a href="https://www.facebook.com/FOSTechnologies/" target="_blank">
                  <span>
                    <svg viewBox="0 0 9 17">
                      <path fill="#070707" fillRule="evenodd" d="M7.156 3.056H8.5V.002L6.475 0C3.607 0 2.246 1.782 2.246 4.318v2.403H0v2.9h2.246V17h3.37V9.622H7.86l.638-2.9H5.615v-1.98c0-.812.425-1.686 1.54-1.686"/>
                    </svg>
                  </span>
                </a>
                <a href="https://www.youtube.com/channel/UCksb-KjlN197GQL7gJhizww/videos?view=0&shelf_id=0" target="_blank">
                  <span>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 16">
                      <defs>
                        <path id="a" d="M0 .357h19.216v13.02H0z"/>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path fill="#000" d="M13.483 7.943a.18.18 0 01.019.114c.023-.038.023-.077-.02-.114"/>
                        <g transform="translate(0 1)">
                          <mask id="b" fill="#fff">
                            <use xlinkHref="#a"/>
                          </mask>
                          <path fill="#070707" d="M12.67 7.293L8.334 9.137c-.348.149-.753-.075-.753-.416V5.117c0-.337.397-.56.745-.42l4.335 1.76a.463.463 0 01.292.334.171.171 0 01.008.118.454.454 0 01-.291.384M9.608.357C.165.357 0 1.097 0 6.867c0 5.772.165 6.51 9.608 6.51 9.443 0 9.608-.738 9.608-6.51 0-5.77-.165-6.51-9.608-6.51" mask="url(#b)"/>
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-flex center header-links">
            <a href="https://www.fos-lighting.eu/create_account.php">Become a Dealer</a>
            <span>&#8901;</span>
            <a href="https://www.fos-lighting.eu/projects.php">Projects</a>
            <span>&#8901;</span>
            <div className="header-links__submenu dropdown">
              <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">About us</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://www.fos-lighting.eu/who-we-are-pr-1.html">Who we Are</a>
                </li>
                <li>
                  <a href="https://www.fos-lighting.eu/terms-of-cooperation-pr-3.html">Terms of Cooperation</a>
                </li>
                <li>
                  <a href="https://www.fos-lighting.eu/freight-handling-costs-pr-5.html">Freight & Handling Costs</a>
                </li>
                <li>
                  <a href="https://www.fos-lighting.eu/why-choose-fos-pr-6.html">Why Choose FOS</a>
                </li>
                <li>
                  <a href="https://www.fos-lighting.eu/trade-shows-events-pr-7.html">Trade Shows & Events</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3 right">
    <div className="row justify-content-end">
        <div className="col-auto icon h-100">
            <div id="not-logged" className="login h-100 d-flex align-items-center">
                <a href="#" id="login-popup-link" className="login-popup-link h-100 ">
                    <span className="user-name">Login / Register</span>
                    <svg viewBox="0 0 17 18">
                        <g fill="#F58220" fillRule="nonzero">
                            <path d="M8.5 9A4.5 4.5 0 104 4.5 4.507 4.507 0 008.5 9zm0-7.66A3.159 3.159 0 115.341 4.5 3.163 3.163 0 018.5 1.342V1.34zM1.345 18c0-3.713 3.21-6.734 7.155-6.734 3.945 0 7.154 3.021 7.154 6.734H17c0-2.122-.896-4.157-2.49-5.657C12.916 10.843 10.754 10 8.5 10s-4.416.843-6.01 2.343a7.938 7.938 0 00-1.847 2.594A7.542 7.542 0 000 18h1.345z"/>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div id="login-popup-container" className="login-popup-container">
            <div id="login-popup" className="login-popup">
                <i className="las la-times"></i>
                <div className="column signupcolumn">
                    <form name="login_c" id="login_c" action="https://www.fos-lighting.eu/create_account.php" method="post">
                        <div>
                            <span id="title">New Customer</span>
                        </div>
                        <div className="intro">
                            New customer? Welcome!
                        </div>
                        <div className="btncontainer">
                            <button type="submit" className="shop-btn">
                                Register
                            </button>
                        </div>
                        <div className="clear"></div>
                    </form>
                </div>
                <div className="column logincolumn">
                    <form name="login" id="login" action="https://www.fos-lighting.eu/login.php?action=process" method="post">
                        <div>
                            <span id="title">Registered User</span>
                            <input type="hidden" id="come_from" name="come_from" value="https://www.fos-lighting.eu/"/>
                        </div>
                        <div className="intro">
                            Are you registered? Login:
                        </div>
                        <div className="input-wrap">
                            <i className="las la-envelope"></i>
                            <input type="text" name="email_address" id="email_address" className="field" placeholder="Email Address:" />
                        </div>
                        <div className="input-wrap">
                            <i className="las la-lock"></i>
                            <input type="password" name="password" id="password" className="field" placeholder="Password" />
                        </div>
                        <div className="forgot-pass">
                            <a href="https://www.fos-lighting.eu/password_forgotten.php" className="forgotpassword" id="forgotpassword">Forgot your password?</a>
                        </div>
                        <div className="btncontainer">
                            <button type="submit" className="shop-btn">
                                Login
                            </button>
                        </div>
                        <div className="clear"></div>
                    </form>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    </div>
</div>


        </div>
      </div>
    </div>  
            <div className="search-container">
      <i className="las la-times close-search search-toggle"></i>
      <div className="inner-wrap">
        <div className="search-title">
          <h3>Search Products</h3>
          <p>Search with product name or model</p>
        </div>
        <a className="view-all-search" href="https://www.fos-lighting.eu/advanced_search_result.php">
          Advanced search <i className="las la-cog"></i>
        </a>
      </div>
    
</div>
         

                   

<MainHeader/>

    <div className="info-bar d-none d-md-block">
      <div className="container-fluid">
        <div className="info-bar-slider jsInfoBarSlider">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="https://www.fos-lighting.eu/kos-system-c-173_103_198.html">
                <span>Patented Line Array System KOS with&nbsp;&nbsp;waveguide technology.</span>
                <span>Shipping NOW</span>
              </a>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html">
                <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
                <span>Shop Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
 <Boxes />
    </div>       
        </>
    );
};

export default Header;
