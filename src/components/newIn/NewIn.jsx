import React from 'react';
import Slider from 'react-slick';
import { data } from './data'; // Importing the data array
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductBox = ({ product }) => {
  return (
    <a href={product.link} className="product-box" tabIndex="-1">
      <div className="product-box__img">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-box__title">
        <span>{product.title}</span>
      </div>
      <p className="product-box__desc">{product.description}</p>
    </a>
  );
}

const NewIn = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
                    {/* You can map over your data array to render action buttons */}
                    {data.map(product => (
                      <div key={product.id} className="action-button" data-action="new" data-category-id={product.id}>{product.title}</div>
                    ))}
                  </div>
                  <div className="ajax-carousel">
                    <Slider {...carouselSettings}>
                      {/* You can map over your data array to render product boxes */}
                      {data.map(product => (
                        <ProductBox key={product.id} product={product} />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="featured-products__slider jsFeaturedProductsHome featured-products__slider h-100 slick-initialized slick-slider slick-dotted">
                <Slider {...carouselSettings}>
                  {/* You can map over your data array to render featured products */}
                  {data.map(product => (
                    <div key={product.id} className="featured-products new-in-featured__box" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                      <h2 className="new-in-featured__title">{product.title}</h2>
                      <div className="featured-products__tag">{product.title}</div>
                      <div className="product-box">
                        <a href={product.link} className="product-box__img" tabIndex="-1">
                          <img src={product.imageUrl} alt={product.title} />
                        </a>
                        <a href={product.link} className="product-box__title" tabIndex="-1">
                          <span>{product.title}</span>
                        </a>
                        <div className="product-box__availability product-box__availability--in-stock">
                          <span>In stock</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                        <a href={product.link} className="btn btn-secondary btn-primary-white" tabIndex="-1">
                          <span>View details</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewIn;
