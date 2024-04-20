import React, { useState, useEffect } from 'react';

function ProductDetail() {
    const [xDisplayStyle, setXDisplayStyle] = useState('none');
  const [bDisplayStyle, setBDisplayStyle] = useState('block');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1114) {
        setXDisplayStyle('none');
        setBDisplayStyle('block');
      } else {
        setXDisplayStyle('block');
        setBDisplayStyle('none');
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div id="mainbody" className="mainbody pinfo">
      {/* Breadcrumb */}
      <div className="breadcrumb" id="breadcrumb_static">
        <div className="mainwrap container-fluid">
          <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="headerNavigation">FOS Technologies</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/stage-lighting-c-172_17.html" className="headerNavigation">Stage Lighting</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/retro-lighting-c-172_17_164.html" className="headerNavigation">Retro Lighting</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/fos-halo-led-p-432.html" className="headerNavigation">FOS Halo Led</a>
        </div>
      </div>
      
      {/* Main Content */}
      <div id="maincontent" className="maincontent">
        {/* Product Main Content */}
        <div className="container-fluid mb-40px">
          <form name="cart_quantity_form" id="cart_quantity_form" action="https://www.fos-lighting.eu/fos-halo-led-p-432.html?action=add_product" method="post" className="cart_quantity_form">
            {/* Product Details */}
            <div className="product-main-section-wrapper">
              <div className="row product-main-row">
                {/* PRODUCT COLUMN 1 */}
                <div className="col product-c-1">
                  <div className="headingtitle" style={{ display: bDisplayStyle }}>
                    <h1>Fos Wash Q7 PEARL</h1>
                    <div className="product__category-img">
                      <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">
                        <img className="cat-logo" src="/images/logo1.svg" alt="Category Logo" />
                      </a>
                    </div>
                    <div className="product_model">
                      <div className="model-wrap">
                        <div className="model"><span>Product code:</span>L005580</div>
                      </div>
                    </div>
                  </div>
                  <div className="product-title-info row no-gutters"></div>
                  <div className="product-c-1__wrapper">
                    <div className="product-gallery">
                      <div className="image">
                        <a href="uploads/products_0_image_645.jpg"  id="main_product_image_link">
                          <img src="/images/product.jpg" className="crisp" draggable="false" border="0" />
                          <div className="product-box__extra-info">
                            <div className="product-box__hot"><i className="las la-fire"></i><span>Hot product</span></div>
                          </div>
                        </a>
                      </div>
                      <input type="hidden" name="product_original_image" value="uploads/thumbnails/products_0_image_645.jpg.thumb_650x457.jpg" />
                      <div className="extra-images vertical">
                        <div className="box additional_image">
                          <a href="uploads/products_1_image_645.jpg" data-fancybox="product-image" data-caption="Fos Wash Q7 PEARL" className="gallerySmallImage" data-change="uploads/products_1_image_645.jpg">
                            <img src="/images/product.jpg" border="0" title="Fos Wash Q7 PEARL" alt=" Fos Wash Q7 PEARL " />
                          </a>
                        </div>
                        <div className="box additional_image">
                          <a href="uploads/products_2_image_645.jpg" data-fancybox="product-image" data-caption="Fos Wash Q7 PEARL" className="gallerySmallImage" data-change="uploads/products_2_image_645.jpg">
                            <img src="/images/product.jpg" border="0" title="Fos Wash Q7 PEARL" alt=" Fos Wash Q7 PEARL " />
                          </a>
                        </div>
                        <div className="box additional_image">
                          <a href="uploads/products_3_image_645.jpg" data-fancybox="product-image" data-caption="Fos Wash Q7 PEARL" className="gallerySmallImage" data-change="uploads/products_3_image_645.jpg">
                            <img src="/images/product.jpg" border="0" title="Fos Wash Q7 PEARL" alt=" Fos Wash Q7 PEARL " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PRODUCT COLUMN 2 */}
                <div className="col product-c-2">
                  <div className="headingtitle"style={{ display: xDisplayStyle }}>
                    <h1>Fos Wash Q7 PEARL</h1>
                    <div className="product__category-img">
                      <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">
                        <img className="cat-logo" src="/images/logo1.svg" alt="Category Logo" />
                      </a>
                    </div>
                    <div className="product_model">
                      <div className="model-wrap">
                        <div className="model"><span>Product code:</span>L005580</div>
                      </div>
                    </div>
                  </div>
                  <div className="product-c-2__wrapper">
                    <div className="product_description">
                      White Housing Wash / Beam  moving head , Zoom 6-60° , .7x15w 4-IN-1 RGBW leds ,Pixel Control ,  CTO,CTB, linear colour temperature 2,700-8,000K  preset , 14/20/44/50 DMX channels USITT DMX-512.
                    </div>
                    <div className="product-checkpoints">
                      <a href="https://www.fos-lighting.eu/why-choose-fos-pr-6.html" target="_blank" className="product-checkpoint-item">
                        <img src="images/icons/Checkmark.svg" alt="" />
                        <span>Why choose FOS</span>
                      </a>
                      <a href="https://www.fos-lighting.eu/terms-of-cooperation-pr-3.html" target="_blank" className="product-checkpoint-item">
                        <img src="images/icons/Checkmark.svg" alt="" />
                        <span>2 years warranty</span>
                      </a>
                    </div>
                    <div className="login-for-price login-popup-link mt-4">Please <b>login</b> to see the price 
                      <svg viewBox="0 0 17 18">
                        <g fill="#F58220" fillRule={"nonzero"}>
                          <path d="M8.5 9A4.5 4.5 0 104 4.5 4.507 4.507 0 008.5 9zm0-7.66A3.159 3.159 0 115.341 4.5 3.163 3.163 0 018.5 1.342V1.34zM1.345 18c0-3.713 3.21-6.734 7.155-6.734 3.945 0 7.154 3.021 7.154 6.734H17c0-2.122-.896-4.157-2.49-5.657C12.916 10.843 10.754 10 8.5 10s-4.416.843-6.01 2.343a7.938 7.938 0 00-1.847 2.594A7.542 7.542 0 000 18h1.345z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="productprice wholesale"></div>
                    <div className="productattributes options">
                      <script type="application/json" id="attributes_combinations_quantities">[]</script>
                      <input type="hidden" id="attr_count" className="attr_count" value="0" />
                    </div>
                    <div className="clear-selections-actions">
                      <div className="btn btn-default clear-selections" style={{ display: "none" }}>
                        <span>IMAGE_BUTTON_CLEAR_SELECTIONS</span>
                      </div>
                    </div>
                    <div className="product_description big d-none">
                      <div className="title">TEXT_PRODUCT_DESCRIPTION</div>
                      <div className="product-description"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Product Page Sections */}
        <div className="container-fluid mb-40px">
          <div className="row">
            <div className="col-12">
              <div className="product-page-section position-relative">
                {/* Product Tabs */}
                <div className={"product-page-section-bottom"}>
                  <nav className="position-relative mb-lg-5 mb-3">
                    <div className="nav nav-tabs d-flex justify-content-start justify-content-lg-center border-btm-unset jsProductTabs" id="product-tabs" role="tablist">
                      <button className="nav-link active" id="features-tab" data-toggle="tab" data-target="#features" type="button" role="tab" aria-controls="features" aria-selected="true">Features</button>
                      <button className="nav-link" id="techical-details-tab" data-toggle="tab" data-target="#techical-details" type="button" role="tab" aria-controls="techical-details" aria-selected="true">Technical Details</button>
                      <button className="nav-link" id="accesorries-tab" data-toggle="tab" data-target="#accesorries" type="button" role="tab" aria-controls="accesorries" aria-selected="true">Accessories</button>
                      <button className="nav-link" id="documents-tab" data-toggle="tab" data-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="true">Documents</button>
                      <button className="nav-link" id="videos-tab" data-toggle="tab" data-target="#videos" type="button" role="tab" aria-controls="videos" aria-selected="true">Videos</button>
                    </div>
                  </nav>
                  <div className="tab-content jsProductTabsContent" id="myTabContent">
                    <div className="tab-pane fade show active" id="features" role="tabpanel" aria-labelledby="features-tab">
                      <div className="product-info-video-wrapper">
                        {/* Embedded video */}
                        <iframe width="100%" height="100%" id="video" src="//www.youtube.com/embed/WChF4QOYoQA?enablejsapi=1&amp;html5=1" frameBorder="0" allowFullScreen title="FOS Hallo LED"></iframe>
                      </div>
                    </div>
                    {/* Add more tabs content here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;