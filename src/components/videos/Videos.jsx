import React from 'react';
import Slider from 'react-slick';

const Videos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="section-video-slider mb-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <div className="video-slider__slide-video jsVideoSliderVideo">
                    <video muted loop autoPlay>
                      <source src="https://videos.pexels.com/video-files/1526909/1526909-sd_640_360_24fps.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <img src="images/Svg/play.svg" alt="" />
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                    <a href="https://www.fos-lighting.eu/fos-spark-jet-pro-v2-p-621.html" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</a>
                  </div>
                </div>
              </div>
              {/* Add more video slides below */}
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <div className="video-slider__slide-video jsVideoSliderVideo">
                    <video muted loop autoPlay>
                      <source src="https://videos.pexels.com/video-files/1526909/1526909-sd_640_360_24fps.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <img src="images/Svg/play.svg" alt="" />
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                    <a href="https://www.fos-lighting.eu/fos-spark-jet-pro-v2-p-621.html" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</a>
                  </div>
                </div>
              </div>
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <div className="video-slider__slide-video jsVideoSliderVideo">
                    <video muted loop autoPlay>
                      <source src="https://videos.pexels.com/video-files/1526909/1526909-sd_640_360_24fps.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <img src="images/Svg/play.svg" alt="" />
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                    <a href="https://www.fos-lighting.eu/fos-spark-jet-pro-v2-p-621.html" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
