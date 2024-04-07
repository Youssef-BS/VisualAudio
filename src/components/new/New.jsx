import React, { useEffect } from 'react';
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

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
                  <div className="arrows">
      <a href="#" tabIndex="0"><GoArrowLeft  className="las la-arrow-left" size={32}/></a>
      <span className="pagingInfo d-none">2/2</span>
      <a href="#" tabIndex="0"><GoArrowRight  className="las la-arrow-right" size={32}/></a>
    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 col-md-12 pl-0 image-wrap">
                  <div className="imagemapper-wrapper" id="imagemapper1-wrapper" style={{ width: '655.078px', visibility: 'visible' }}>
                    <img src="/images/pro.jpg" id="imapper1-map-image" className="crisp canvas-img" border="0" title="FOS &amp; ProLight &amp; Sound 2023" alt=" FOS &amp; ProLight &amp; Sound 2023 " style={{ maxWidth: '100%' }} />
                    <div id="imapper1-pin1-wrapper" className="imapper1-pin-wrapper imapper-pin-wrapper" data-left="27.2%" data-top="18.9%" data-open-position="bottom" style={{ position: 'absolute', left: '27.2%', top: '18.9%' }}>
                      <div id="imapper1-pin1" className="imapper1-pin pin-style" data-sku="L006125" style={{ top: '-24px', left: '-12px' }}>
                        <i className="las la-plus"></i>
                      </div>
                      <div id="imapper1-pin1-content-wrapper" className="imapper1-pin-content-wrapper imapper-content-wrapper" data-width="180px" data-height="220px" style={{ color: 'rgb(219, 219, 219)', width: '178px', height: '234px', inset: '-54px 89px 54px -89px', zIndex: 9 }}>
                        <div id="imapper1-pin1-content" className="imapper-content ready" style={{ backgroundColor: 'rgb(31, 184, 150)', borderColor: 'rgb(31, 184, 150)', borderRadius: '10px', width: '180px', height: '190px', fontFamily: 'Arial', position: 'absolute', inset: '44px 0px 0px -2px' }}>
                          <div className="imapper-content-product">
                            <a href="https://www.fos-lighting.eu/fos-helix-ultra-p-1328.html" tabIndex="0">
                              <div className="image">
                                <img src="/images/product.jpg" className="crisp" border="0" title="FOS Helix Ultra" alt=" FOS Helix Ultra " />
                              </div>
                            </a>
                            <div className="info">
                              <a href="https://www.fos-lighting.eu/fos-helix-ultra-p-1328.html" tabIndex="0">
                                <h3>FOS Helix Ultra</h3>
                              </a>
                              <a href="https://www.fos-lighting.eu/fos-helix-ultra-p-1328.html" tabIndex="0">
                                <p>The new LED profile luminaire</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </div>
    
    </div>
    </div>
  );
};

export default ProjectPin;
