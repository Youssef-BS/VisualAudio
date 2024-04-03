import React from 'react';

const NewIn = () => {
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
                              <button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
                              <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: 1, width: "7194px", transform: "translate3d(-654px, 0px, 0px)" }}>
                                  <div className="boxes-section slick-slide slick-cloned" style={{ width: "654px" }} data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1">
                                    {/* Add your product box content here */}
                                  </div>
                                  {/* Add more product boxes here */}
                                </div>
                              </div>
                              <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
                              <ul className="slick-dots" style={{ display: "block" }}>
                                <li className="" role="presentation">
                                  <button type="button" role="tab" id="slick-slide-control70" aria-controls="slick-slide70" aria-label="1 of 3" tabIndex="-1">1</button>
                                </li>
                                <li role="presentation" className="">
                                  <button type="button" role="tab" id="slick-slide-control71" aria-controls="slick-slide71" aria-label="2 of 3" tabIndex="-1">2</button>
                                </li>
                                <li role="presentation" className="slick-active">
                                  <button type="button" role="tab" id="slick-slide-control72" aria-controls="slick-slide72" aria-label="3 of 3" tabIndex="0" aria-selected="true">3</button>
                                </li>
                              </ul>
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
}

export default NewIn;
