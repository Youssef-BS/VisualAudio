import React, { useEffect } from 'react';

const ProjectPin = () => {
  useEffect(() => {
    // Function to handle click on the image map
    const handleImageMapClick = (event) => {
      // Handle click logic here
      console.log('Clicked on the image map:', event.target);
    };

    // Attach event listener to handle click on the image map
    document.getElementById('imagemapper1-wrapper').addEventListener('click', handleImageMapClick);

    // Clean up function to remove event listener when component unmounts
    return () => {
      document.getElementById('imagemapper1-wrapper').removeEventListener('click', handleImageMapClick);
    };
  }, []);

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
              <h1 className="text-center w-100">Our Projects</h1>
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
    <div className="project-pin mb-5">
      <section className="image-mapper-container">
        <div className="container-fluid main">
          <div className="row no-gutters">
            <div className="col-lg-5 col-xl-5 col-md-12 text">
              <div className="wrap inner pt-10 pb-10 pr-5 pl-5">
                <h1>FOS & ProLight & Sound 2023</h1>
                <p>
                  We had a great time attending for once more the Prolight and Sound exhibition in Frankfurt! We
                  would like to thank you for your visit, and we are looking forward to seeing you again next
                  year! This year FOS introduce many new products, NOX is our new innovative BSW with CMY,
                  Scorpio Wash revolutionary led wash/beam. Smart BSW multipurpose BSW moving head.
                </p>
                <div className="btn-container">
                  <a
                    href="https://www.fos-lighting.eu/fos-technologies-prolight-sound-2023-pj-58.html"
                    className="btn btn-primary-gray btn-big mt-4"
                    tabIndex="0"
                  >
                    ProLight & Sound 2023
                  </a>
                </div>
                <div className="arrows-notification">
                  <div className="notification">
                    Click the <span className="icon">+</span> button to view more about the products used in
                    this project
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 col-md-12 pl-0 image-wrap">
              <div className="imagemapper-wrapper" id="imagemapper1-wrapper" style={{ width: '729px', visibility: 'visible' }}>
                <img
                  src="/images/proo.jpg"
                  id="imapper1-map-image"
                  className="crisp canvas-img"
                  border="0"
                  title="FOS & ProLight & Sound 2023"
                  alt=" FOS & ProLight & Sound 2023 "
                  style={{ maxWidth: '100%' }}
                />
                {/* Pin elements */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="container-fluid mb-5 project-single">
        <div className="row">
          <div className="col-12">
            <div className="product-page-section product-page-section--slider">
              <h2 className="product-page-section__title">Products Used</h2>
              <div className="products-carouesl-product-info">
                <div className="jsAppendPinSLider">
                  <div className="products-carouesl-product-info">
                    <div className="projects_related_products">
                      <div className="jsProductCarosulFiveProducts slick-initialized slick-slider">
                        <div className="prev-arrow slick-arrow"><i className="las la-angle-left"></i></div>
                        <div className="slick-list draggable">
                          <div className="slick-track" style={{ opacity: 1, width: '1149px', transform: 'translate3d(-766px, 0px, 0px)' }}>
                            <div className="slick-slide slick-active" style={{ width: '403px' }} aria-hidden="false" >
                              <a href="#"  tabIndex="-1">
                              <div className="product-box" data-id="1531" data-quantity="44" data-price="748" data-on_request="0" data-flag_instock="0" data-set="0">
                                  <div className="product-box__img">
                                    <img className="lazy-scroll loaded" src="/images/product.jpg" />
                                  </div>
                                  <div className="product-box__title">
                                    <span>FOS Scorpio Wash</span>
                                  </div>
                                  <div className="product-box__code">
                                    <div className="product-box__code"></div>
                                  </div>
                                  <p className="product-box__desc">Revolutionary led wash/beam moving head, 7 leds 60 watt RGBW + 39 ring pixel leds RGB 0.2watt, linear zoom 6-60 degrees, vortex effect, full pixel control, dynamic macros, adjustable color temperature 3200K to 8000K, 26/38/66 DMX control channels, 0-100% linear dimmer, 16 bit Pan./tilt, powercon in/out, 10kg.</p>
                                </div>
                                {/* Your existing product box JSX */}
                              </a>
                            </div>
                            {/* Other product slides go here */}
                          </div>
                        </div>
                        <div className="next-arrow slick-arrow"><i className="las la-angle-right"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default ProjectPin;
