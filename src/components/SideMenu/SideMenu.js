import React, { useState } from 'react';

const SideMenu= ({ isOpen }) => {

    return (
        <section className={`side-menu main-menu-container ${isOpen ? '' : 'hide'}`}>
        <div className="inner">
          <div className="first-level">
            <ul>
              <li className="has-children menu-item jsFirstLevelMenuItem  second-level-container">
                <a className="d-flex flex-column main-parent-cat" href="https://www.fos-lighting.eu/fos-technologies-c-172.html" title="FOS Technologies">
                  <img className="img-fluid" src="uploads/thumbnails/categories_0_cat_image_172.png.thumb_40x37.png" alt="" />
                  FOS Technologies
                </a>
                <i className="las la-angle-right"></i>
                <ul className="second-level">
                  <ul className="inner-second">
                    <li className="menu-item has-children  first-option third-level-container">
                      <a href="https://www.fos-lighting.eu/moving-lights-c-172_5.html" title="Moving Lights">Moving Lights</a>
                      <i className="las la-angle-right"></i>
                      <ul className="third-level">
                        <ul className="inner-third">
                          <li className="menu-item has-children  first-option fourth-level-container">
                            <a href="https://www.fos-lighting.eu/hybrid-c-172_5_6.html" title="Stage Lighting">Hybrid</a>
                            <i className="las la-angle-right"></i>
                            <ul className="fourth-level menu-products-container">
                              <ul className="inner-fourth">
                                <li>
                                  <a href="https://www.fos-lighting.eu/fos-ares-profile-p-2748.html" className="menu-product-link d-inline-flex align-items-center">
                                    <div className="menu-product-link__img mr-3">
                                      <img data-src="uploads/thumbnails/products_0_image_2748.jpg.thumb_130x86.jpg" alt="FOS Ares Profile" src="" />
                                    </div>
                                    <div className="menu-product-link__title">
                                      <span>FOS Ares Profile</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.fos-lighting.eu/fos-nox-p-1769.html" className="menu-product-link d-inline-flex align-items-center">
                                    <div className="menu-product-link__img mr-3">
                                      <img data-src="uploads/thumbnails/products_0_image_1769.jpg.thumb_130x86.jpg" alt="FOS Nox" src="" />
                                    </div>
                                    <div className="menu-product-link__title">
                                      <span>FOS Nox</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.fos-lighting.eu/fos-triton-p-662.html" className="menu-product-link d-inline-flex align-items-center">
                                    <div className="menu-product-link__img mr-3">
                                      <img data-src="uploads/thumbnails/products_0_image_662.jpg.thumb_130x86.jpg" alt="FOS Triton" src="" />
                                    </div>
                                    <div className="menu-product-link__title">
                                      <span>FOS Triton</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.fos-lighting.eu/fos-nitro-bsw-p-1365.html" className="menu-product-link d-inline-flex align-items-center">
                                    <div className="menu-product-link__img mr-3">
                                      <img data-src="uploads/thumbnails/products_0_image_1365.jpg.thumb_130x86.jpg" alt="FOS Nitro BSW" src="" />
                                    </div>
                                    <div className="menu-product-link__title">
                                      <span>FOS Nitro BSW</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.fos-lighting.eu/fos-12r-hybrid-pro-p-647.html" className="menu-product-link d-inline-flex align-items-center">
                                    <div className="menu-product-link__img mr-3">
                                      <img data-src="uploads/thumbnails/products_0_image_647.jpg.thumb_130x86.jpg" alt="FOS 12R Hybrid PRO" src="" />
                                    </div>
                                    <div className="menu-product-link__title">
                                      <span>FOS 12R Hybrid PRO</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </li>
                        </ul>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

export default SideMenu;
