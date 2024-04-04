import React from 'react';

const InfoBar = () => {
  return (
    <div className="info-bar d-none d-md-block show">
      <div className="container-fluid">
        <div className="info-bar-slider jsInfoBarSlider slick-initialized slick-slider">
          <div className="prev-arrow slick-arrow" style={{}}>
            <i className="las la-angle-left"></i>
          </div>
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: '4910px', transform: 'translate3d(-1964px, 0px, 0px)' }}>
              <div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style={{ width: '982px' }} tabIndex="-1">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html" tabIndex="-1">
                    <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
              <div className="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: '982px' }} tabIndex="-1">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://www.fos-lighting.eu/kos-system-c-173_103_198.html" tabIndex="-1">
                    <span>Patented Line Array System KOS with&nbsp;&nbsp;waveguide technology.</span>
                    <span>Shipping NOW</span>
                  </a>
                </div>
              </div>
              <div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{ width: '982px' }} tabIndex="0">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html" tabIndex="0">
                    <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
              <div className="slick-slide slick-cloned" data-slick-index="2" id="" aria-hidden="true" style={{ width: '982px' }} tabIndex="-1">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://www.fos-lighting.eu/kos-system-c-173_103_198.html" tabIndex="-1">
                    <span>Patented Line Array System KOS with&nbsp;&nbsp;waveguide technology.</span>
                    <span>Shipping NOW</span>
                  </a>
                </div>
              </div>
              <div className="slick-slide slick-cloned" data-slick-index="3" id="" aria-hidden="true" style={{ width: '982px' }} tabIndex="-1">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html" tabIndex="-1">
                    <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="next-arrow slick-arrow" style={{}}>
            <i className="las la-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
