import React from 'react';

const ProductBox = ({ link, imgSrc, title, code, description }) => (
    <div className="col-lg-4 mb-4 list-box">
      <a href={link}>
        <div className="product-box">
          <div className="product-box__img">
            <img className="lazy-scroll loaded" src={imgSrc} alt={title} />
          </div>
          <div className="product-box__title">
            <span>{title}</span>
          </div>
          <div className="product-box__code">
            <div className="product-box__code">{code}</div>
          </div>
          <p className="product-box__desc">{description}</p>
        </div>
      </a>
    </div>
  );
  
  const ProductContainer = () => (
    <div id="productboxwrap" className="productboxwrap container-fluid">
      <div className="row align-items-center">
        <ProductBox
          link="https://www.fos-lighting.eu/fos-co2-led-dmx-p-113.html"
          imgSrc="/images/pro.jpg"
          title="FOS Co2 Led DMX"
          code="L004694"
          description="LED CO2 Jet is a professional high quality DMX CO2 Jet. Spray angle is 0°-90° adjustable, 27pcs 5W RGB LEDs, CO2 can reach 7m high when gas's pressure is enough, DMX-512, On-Board Control Panel, Wireless remote"
        />
         <ProductBox
          link="https://www.fos-lighting.eu/fos-co2-led-dmx-p-113.html"
          imgSrc="/images/pro.jpg"
          title="FOS Co2 Led DMX"
          code="L004694"
          description="LED CO2 Jet is a professional high quality DMX CO2 Jet. Spray angle is 0°-90° adjustable, 27pcs 5W RGB LEDs, CO2 can reach 7m high when gas's pressure is enough, DMX-512, On-Board Control Panel, Wireless remote"
        />
         <ProductBox
          link="https://www.fos-lighting.eu/fos-co2-led-dmx-p-113.html"
          imgSrc="/images/pro.jpg"
          title="FOS Co2 Led DMX"
          code="L004694"
          description="LED CO2 Jet is a professional high quality DMX CO2 Jet. Spray angle is 0°-90° adjustable, 27pcs 5W RGB LEDs, CO2 can reach 7m high when gas's pressure is enough, DMX-512, On-Board Control Panel, Wireless remote"
        />
        {/* Repeat ProductBox component for other products */}
      </div>
    </div>
  );
const Store = () => {
    return (
        <div id="mainbody" className="mainbody">
            <div className="container-fluid pl-0 pr-0 products-listing__container">
                <div className="row no-gutters">
                    <div className="col-auto products-listing__col-left">
                        <div className="products-listing__categories-wrapper">
                            <div className="products-listing__categories-logo">
                                <img className="header-logo" src="uploads/thumbnails/categories_0_cat_image_172.png.thumb_49x45.png" alt="Category Logo" />
                            </div>
                            <h2 className="products-listing__categories-title">Categories</h2>
                            <ul className="products-listing__categories-links">
                                <li>
                                    <a href="https://www.fos-lighting.eu/moving-lights-c-172_5.html">Moving Lights</a>
                                </li>
                                {/* Add more list items as needed */}
                            </ul>
                        </div>
                    </div>
                    <div className="col products-listing__col-right">
                        <div className="container-fluid category-description-container">
                        <div className="row">
                <div className="container inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_container">
                                <div className="breadcrumb" id="breadcrumb_static">
                                    <div className="mainwrap">
                                        <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a><i>/</i>
                                        <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="headerNavigation">FOS Technologies</a><i>/</i>
                                        <a href="https://www.fos-lighting.eu/smoke-effects-c-172_22.html" className="headerNavigation">Smoke &amp; Effects</a><i>/</i>
                                        <a href="https://www.fos-lighting.eu/co2-systems-c-172_22_25.html" className="headerNavigation">CO2 Systems</a>
                                    </div>
                                </div>
                               
                                <div className="product-listing__info-header">
                                    Smoke &amp; Effects subcategories:
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="products-listing__subcategories-wrapper jsProductListingSubCatSlider slick-initialized slick-slider">
                            <div className="prev-arrow slick-arrow slick-disabled" aria-disabled="true" style={{}}>
                <i className="las la-angle-left"></i>
            </div>
            <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '1432px', transform: 'translate3d(0px, 0px, 0px)' }}>
                    <a href="https://www.fos-lighting.eu/smoke-machines-c-172_22_24.html" className="products-listing__subcategorie slick-slide slick-current slick-active" style={{ width: '163px' }} tabindex="0" data-slick-index="0" aria-hidden="false">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_24.jpg.thumb_80x65.jpg" alt="Smoke Machines" />
                        </div>
                        <span>Smoke Machines</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/haze-machine-c-172_22_23.html" className="products-listing__subcategorie slick-slide slick-active" style={{ width: '163px' }} tabindex="0" data-slick-index="1" aria-hidden="false">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_23.jpg.thumb_80x60.jpg" alt="Haze Machine" />
                        </div>
                        <span>Haze Machine</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/co2-systems-c-172_22_25.html" className="products-listing__subcategorie active slick-slide slick-active" style={{ width: '163px' }} tabindex="0" data-slick-index="2" aria-hidden="false">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_25.jpg.thumb_80x60.jpg" alt="CO2 Systems" />
                        </div>
                        <span>CO2 Systems</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/water-low-fog-c-172_22_82.html" className="products-listing__subcategorie slick-slide slick-active" style={{ width: '163px' }} tabindex="0" data-slick-index="3" aria-hidden="false">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_82.jpg.thumb_80x63.jpg" alt="Water Low FOG" />
                        </div>
                        <span>Water Low FOG</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/wind-machines-c-172_22_26.html" className="products-listing__subcategorie slick-slide" style={{ width: '163px' }} tabindex="-1" data-slick-index="4" aria-hidden="true">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_26.jpg.thumb_80x60.jpg" alt="Wind Machines" />
                        </div>
                        <span>Wind Machines</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/cold-sparkle-c-172_22_55.html" className="products-listing__subcategorie slick-slide" style={{ width: '163px' }} tabindex="-1" data-slick-index="5" aria-hidden="true">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_55.jpg.thumb_80x53.jpg" alt="Cold Sparkle" />
                        </div>
                        <span>Cold Sparkle</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/moto-spark-battery-c-172_22_200.html" className="products-listing__subcategorie slick-slide" style={{ width: '163px' }} tabindex="-1" data-slick-index="6" aria-hidden="true">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_200.png.thumb_80x53.png" alt="Moto Spark Battery" />
                        </div>
                        <span>Moto Spark Battery</span>
                    </a>
                    <a href="https://www.fos-lighting.eu/liquids-c-172_22_29.html" className="products-listing__subcategorie slick-slide" style={{ width: '163px' }} tabindex="-1" data-slick-index="7" aria-hidden="true">
                        <div className="products-listing__subcategorie-img">
                            <img src="uploads/thumbnails/categories_0_cat_image_29.jpg.thumb_80x60.jpg" alt="Liquids" />
                        </div>
                        <span>Liquids</span>
                    </a>
                </div>
            </div>
                                      </div>
                          
                        
                        </div>
                    </div>
                </div>
            </div>
                                </div>
                                
                                <div className="container-fluid mobile-header">
    <div className="row">
      <div className="col-12">
        <div className="d-flex d-md-none align-items-center mb-4">
          <img className="header-logo mr-4" src="/images/categ.png" alt="Logo" />
          {/* Uncomment the h1 element if you want to include the product listing title */}
          {/* <h1 class="product-listing-title">FOS Technologies</h1> */}
        </div>
      </div>
    </div>
  </div>
  
<div id="productboxwrapContainer" className="productboxwrapContainer products_container">
    <script id="paginationInfo" type="application/json">{`{"p_1": "5"}`}</script>
    <input type="hidden" name="allow_max_page" value="1" />
    <input type="hidden" name="totalProducts" value="5" />
    <ProductContainer />
    <div id="no_products">There are currently no products.</div>
  </div>    
                    </div>
                </div>
           
                <div className="my-3">
                    {/* Other content */}
                </div>
            </div>
        </div>
    );
};

export default Store;
