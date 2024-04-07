import React from 'react';
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

const ImageMapperContainer = () => {
  return (
    <section className="image-mapper-container slick-initialized slick-slider slick-dotted">
      <div className="slick-list">
        <div className="slick-track" style={{ opacity: 1, width: '2282px' }}>
          <div
            className="mapper-slick slick-slide slick-current slick-active"
            data-slick-index="0"
            aria-hidden="false"
            style={{ width: '1141px', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1 }}
            tabIndex="0"
            role="tabpanel"
            id="slick-slide80"
            aria-describedby="slick-slide-control80"
          >
            <div className="container-fluid main ">
              <div className="row no-gutters">
                <div className="col-lg-5 col-xl-5 col-md-12 text">
                  <div className="wrap inner pt-10 pb-10 pr-5 pl-5">
                    <div className="projects-title-cont">
                      <h2>Our Projects</h2>
                      <a href="projects.php" className="more" tabIndex="0">
                        View all projects
                      </a>
                    </div>
                    <h1>FOS &amp; ProLight &amp; Sound 2023</h1>
                    <p>We had a great time attending for once more the Prolight and Sound exhibition in Frankfurt! We would like to thank you for your visit, and we are looking forward to seeing you again next year! This year FOS introduce many new products, NOX is our new innovative BSW with CMY, Scorpio Wash revolutionary led wash/beam. Smart BSW multipurpose BSW moving head.</p>
                    <div className="btn-container">
                      <a href="https://www.fos-lighting.eu/fos-technologies-prolight-sound-2023-pj-58.html" className="btn btn-primary-gray btn-big mt-4" tabIndex="0">
                        ProLight &amp; Sound 2023
                      </a>
                    </div>
                    <div className="arrows-notification">
                      <div className="notification">Click the <span className="icon">+</span> button to view more about the products used in this project</div>
                    
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageMapperContainer;
