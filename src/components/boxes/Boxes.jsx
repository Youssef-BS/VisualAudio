import React from 'react';
import { cheriket } from './testData';
import "./boxes.css";

const ForContainer = () => {
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
                <div className="category-box__right jsProductsBoxSlider">
                  {category.product.map((product, idx) => (
                    <div className="product-box" key={idx}>
                      <a href={product.photo}>
                        <div className="product-box__img">
                          <img src={product.photo} className="lazy-scroll" alt={product.title} />
                        </div>
                        <div className="product-box__details">
                          <div className="product-box__title">{product.title}</div>
                          <div className="product-box__desc">{product.text}</div>
                        </div>
                        <div className="product-box__price">Price: ${product.price}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForContainer;
