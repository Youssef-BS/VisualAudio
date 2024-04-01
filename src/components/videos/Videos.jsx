import React from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
  return (
    <section className="section-video-slider mb-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="video-slider jsHomeVideoSliderNew slick-initialized slick-slider slick-dotted">
              <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
              <div className="slick-list draggable">
              <div className="slick-track" style={{opacity: 1, width: '3210px', transform: 'translate3d(-642px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" style={{width: "642px"}} tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control61" data-slick-index="-1" aria-hidden="true">
                    <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                      <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                        <div className="video-slider__slide-video jsVideoSliderVideo">
                          <video muted="true" loop="" autoPlay="">
                            <source src="https://videos.pexels.com/video-files/5155396/5155396-sd_640_360_30fps.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                          <img src="images/Svg/play.svg" alt=""/>
                        </div>
                        <div className="video-slider__slide-play jsLoadingVideoSlider">
                          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt=""/>
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
                  </div>
                  <div className="slick-slide slick-current slick-active" style={{width : "642px"}} tabIndex="0" role="tabpanel" id="slick-slide60" aria-describedby="slick-slide-control60" data-slick-index="0" aria-hidden="false">
                    <div className="product-info-video-wrapper product-info-video-wrapper--fullRadius">
                      <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                        <div className="video-slider__slide-video jsVideoSliderVideo">
                        <video muted="true" loop="" autoPlay="">
                            <source src="https://videos.pexels.com/video-files/5155396/5155396-sd_640_360_30fps.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                          <img src="images/Svg/play.svg" alt=""/>
                        </div>
                        <div className="video-slider__slide-play jsLoadingVideoSlider">
                          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt=""/>
                        </div>
                      </div>
                      <div className="video-slider__video-info">
                        <div className="video-slider__video-info-text">
                          <h2>HYDOR BEAM</h2>
                          <p>Innovative outdoor IP66 Beam moving head , MSD Platinum Flex 380 watt, Total Output 120.000, 7200K, CRI 80Ra, beam angle 2°, variable focus with range from 5m to infinity, 2 prims,8-facet,16-facet controllable independently can produce 24 facet prism effect, frost filter, Fixed gobo wheel: 12 gobos + open, Color wheel: 14 colors + open, durable die casting aluminum, 24 kg.</p>
                        </div>
                        <div className="video-slider__video-info-btn">
                          <a href="https://www.fos-lighting.eu/fos-hydor-beam-p-667.html" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="0">Explore more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Remaining slides */}
                </div>
              </div>
              <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>
              <ul className="slick-dots" style={{display: "block"}} role="tablist">
                <li className="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control60" aria-controls="slick-slide60" aria-label="1 of 2" tabIndex="0" aria-selected="true">1</button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control61" aria-controls="slick-slide61" aria-label="2 of 2" tabIndex="-1">2</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
