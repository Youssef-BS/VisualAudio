import React from 'react';
import Slider from 'react-slick';

const products = [
  {
    id: 1,
    image: "/images/product.jpg",
    title: "FOS Ares Profile",
    description: "Professional low noise Led profile moving head for stages and theater applications, high power 600W LED engine module, 4- 55? linear zoom, intelligent fan, noise 45dB, Framing system: 4 Blades with +/-45? rotation, Color system: CMY + independent CTO, Animation wheel, Iris, 7 interchangeable rotating and 7 static gobos, 6 dichroic color filters,  4-facet prism, 0-100% linear frost, Linear Dimmer 0-100%, 4 dimming curves, 32kg.",
    link: "https://www.fos-lighting.eu/fos-ares-profile-p-2748.html"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true
};

const ProductBox = () => {
  return (
    <section className="new-in-featured mb-4">
    <div className="new-in-featured__wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-xl-6">
            <div className="new-in new-in-featured__box">
              <h2 className="new-in-featured__title">New In</h2>
              <div className="ajax-carousel-container">
                <div className="actions">
                  <div className="action-button active" data-action="new" data-category-id="172">FOS Technologies</div>
                  <div className="action-button" data-action="new" data-category-id="173">Intelligent Audio</div>
                  <div className="action-button" data-action="new" data-category-id="174">Visualization Tools</div>
                  <div className="action-button" data-action="new" data-category-id="175">Truss & Suspension</div>
                </div>
                 <div className="ajax-carousel">
        <div className="container-fluid carousel-container new">
          <div className="row productboxwrap pb-0 ml- mr-0">
            <div className="col-12">
              <div className="container pl-2 pr-2">
                <div className="row products-carousel jsHomeAjaxCarousel slick-initialized slick-slider slick-dotted">
                  <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: '11847px', transform: 'translate3d(-1077px, 0px, 0px)' }}>
                      {/* Your original product */}
                      <div className="boxes-section slick-slide slick-cloned"  style={{ width: '1077px' }} data-slick-index="2" id="" >
                        <a href="https://www.fos-lighting.eu/fos-atlas-tube-p-1285.html" tabIndex="-1">
                          <div className="product-box">
                            <div className="product-box__img">
                              <img className="lazy-scroll loaded" src="uploads/thumbnails/products_0_image_1285.jpg.thumb_450x300.jpg" />
                            </div>
                            <div className="product-box__title">
                              <span><span id="">FOS Atlas Tube</span></span>
                            </div>
                            <div className="product-box__code">
                              <div className="product-box__code">L006104</div>
                            </div>
                            <p className="product-box__desc">Wireless IP65 battery tube, run time 20 hours, 32 Pixels, LED Type: 288pcs ?0.3Watts RGBW 4in1 full-color LED, DMX 512, Mobile APP WIFI control, Wireless Protocol: W-DMX, Dimensions:119cm diameter 5.2cm , Weight: 1.75kg</p>
                          </div>
                        </a>
                      </div>
                      {/* Your additional product */}
                      <div className="boxes-section slick-slide slick-cloned" style={{ width: '1077px' }} data-slick-index="0">
                        <a href="URL_TO_YOUR_PRODUCT_PAGE" tabIndex="-1">
                          <div className="product-box" data-id="YOUR_PRODUCT_ID" data-quantity="YOUR_PRODUCT_QUANTITY" data-price="YOUR_PRODUCT_PRICE">
                            <div className="product-box__img">
                              <img className="lazy-scroll loaded" src="/images/product.jpg" />
                            </div>
                            <div className="product-box__title">
                              <span><span id="">YOUR_PRODUCT_TITLE</span></span>
                            </div>
                            <div className="product-box__code">
                              <div className="product-box__code">YOUR_PRODUCT_CODE</div>
                            </div>
                            <p className="product-box__desc">YOUR_PRODUCT_DESCRIPTION</p>
                          </div>
                        </a>
                        <a href="URL_TO_YOUR_PRODUCT_PAGE" tabIndex="-1">
                          <div className="product-box" data-id="YOUR_PRODUCT_ID" data-quantity="YOUR_PRODUCT_QUANTITY" data-price="YOUR_PRODUCT_PRICE">
                            <div className="product-box__img">
                              <img className="lazy-scroll loaded" src="/images/product.jpg" />
                            </div>
                            <div className="product-box__title">
                              <span><span id="">YOUR_PRODUCT_TITLE</span></span>
                            </div>
                            <div className="product-box__code">
                              <div className="product-box__code">YOUR_PRODUCT_CODE</div>
                            </div>
                            <p className="product-box__desc">YOUR_PRODUCT_DESCRIPTION</p>
                          </div>
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
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductBox;
