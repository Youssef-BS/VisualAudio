import React from 'react';
import { Link } from 'react-router-dom';

function NewsRoom() {
  return (
    <section className="home-boxes mb-5 mt-5">
      <div className="container-fluid">
        <div className="product-page-section product-page-section--homepage">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-baseline">
                <h2 className="product-page-section__title">Newsroom</h2>
                <Link to="/AllNews" className="btn news-view-all mb-4 mb-sm-0">View all news</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="home-boxes__box home-boxes__box--white">
                <a href="https://www.fos-lighting.eu/fos-bicolor-200w-fresnel-p-2768.html" className="wrap-link row flex-column flex-xl-row">
                  <div className="home-boxes__box-left col-12 col-lg">
                    <img src="uploads/thumbnails/news_0_image_28.jpg.thumb_190x126.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="home-boxes__box-right col">
                    <h2>FOS Bicolor 200W Fresnel</h2>
                    <p className="home-boxes__date">
                      <i className="las la-calendar mr-2"></i>09/02/2024
                    </p>
                    <p>Professional bicolor Fresnel led light, 200-watt led source tunable white, warm white 3600K up to daylight 5600K, CRI 95, manual linear zoom 15 - 35 degrees, 0-100% linear dimmer, low noise operation, LCD screen and local control knobs, aluminum housing, 2-3-4 Dmx Channels, adjustable barndoor, 4kg.</p>
                    <Link to={'/ProductDetail'}><span className="btn btn-primary btn-big">View details</span></Link>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-boxes__box home-boxes__box--white">
                <a href="https://www.fos-lighting.eu/fos-ares-profile-p-2748.html" className="wrap-link row flex-column flex-xl-row">
                  <div className="home-boxes__box-left col-12 col-lg">
                    <img src="uploads/thumbnails/news_0_image_29.jpg.thumb_190x126.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="home-boxes__box-right col">
                    <h2>FOS Ares Profile</h2>
                    <p className="home-boxes__date">
                      <i className="las la-calendar mr-2"></i>09/02/2024
                    </p>
                    <p>Professional low noise Led profile moving head for stages and theater applications, high power 600W LED engine module, 4- 55° linear zoom, intelligent fan, noise 45dB, Framing system: 4 Blades with +/-45° rotation, Color system: CMY + independent CTO, Animation wheel, Iris, 7 interchangeable rotating and 7 static gobos, 6 dichroic color filters, 4-facet prism, 0-100% linear frost, Linear Dimmer 0-100%, 4 dimming curves, 32kg.</p>
                    <span className="btn btn-primary btn-big">View details</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsRoom;
