import React from 'react';
import Slider from 'react-slick';
import { cheriket } from './testData';

const ForContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1, // Slide one slide at a time
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="section-categories-boxes">
      <div className="container">
        <div className="row">
          {cheriket.map((category, index) => (
            <div className="col-xl-6 mb-4" key={index}>
              <div className="category-box">
                <div className="category-box__left">
                  <a href={category.photo} className="category-box__image-wrapper">
                    <img className="category-box__image" src={category.photo} alt={category.title} />
                  </a>
                  <h2 className="category-box__title">{category.title}</h2>
                  <div className="category-box__text">{category.text}</div>
                  <a href={category.photo} className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
                </div>
                <Slider {...settings}>
                {category.product.map((product, idx) => (
                <div className="category-box__right jsProductsBoxSlider">                  
                      <div className="product-box" key={idx}>
                        <a href={product.photo}>
                          <div className="product-box__img">
                            <img src={product.photo} className="lazy-scroll" alt={product.title} />
                          </div>
                          <div className="product-box__details">
                            <div className="product-box__title">{product.title}</div>
                            <div className="product-box__desc">{product.text}</div>
                          </div>
                        </a>
                      </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForContainer;
