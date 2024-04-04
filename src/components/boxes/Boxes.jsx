import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const CategoryBox = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides to show based on screen width
      if (window.innerWidth >= 1200) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
      if (window.innerWidth < 550) {
        setSlidesToShow(1);
      } 

    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const products = [
    {
      id: 1,
      title: 'FOS Pixel Line 80',
      image: 'https://studio-alterego.com/wp-content/uploads/2022/01/VPR_2482R_BD.jpg',
      description: 'Pixel Bar 100 cm , 11.25 pitch, 80 LEDs (tri-color RGB) SMD 5050. Art-Net, Kling-Net,DMX,RDM, Viewing Angle: 120?, 2500 NITS (clear filter), IP Rating: IP20, Art-Net&amp;DMX Channels: 10/55/480. Required pixel line driver, 1000 x 37 x 95 mm , 2 kg',
      link: 'https://www.fos-lighting.eu/fos-pixel-line-80-p-1319.html'
    },
    {
      id: 2,
      title: 'FOS Product 2',
      image: 'https://studio-alterego.com/wp-content/uploads/2022/01/VPR_2482R_BD.jpg',
      description: 'Description of Product 2',
      link: 'https://www.example.com/product-2'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1, // Show 1 slide when screen width is greater than or equal to 1200px
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2, // Show 2 slides when screen width is less than 1200px
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  
  

  return (
    <section className="section-categories-boxes">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 mb-4">
            <div className="category-box">
              <div className="category-box__left">
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="category-box__image-wrapper">
                  <img className="category-box__image" src="uploads/categories_0_cat_image_172.png" alt="Intelligent Lighting Technology" />
                </a>
                <h2 className="category-box__title">Intelligent Lighting Technology</h2>
                <div className="category-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
              </div>
              <div className="category-box__right">
                
              <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={slidesToShow}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  arrows={true}
                >            
                      {products.map(product => (
                    <div key={product.id}>
                      <div className="product-box">
                        <div className="product-box__img">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-box__title">
                          <span>{product.title}</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="category-box">
              <div className="category-box__left">
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="category-box__image-wrapper">
                  <img className="category-box__image" src="uploads/categories_0_cat_image_172.png" alt="Intelligent Lighting Technology" />
                </a>
                <h2 className="category-box__title">Intelligent Lighting Technology</h2>
                <div className="category-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
              </div>
              <div className="category-box__right">
                <Slider {...settings}>
                  {products.map(product => (
                    <div key={product.id}>
                      <div className="product-box">
                        <div className="product-box__img">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-box__title">
                          <span>{product.title}</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                        <a href={product.link} className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="category-box">
              <div className="category-box__left">
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="category-box__image-wrapper">
                  <img className="category-box__image" src="uploads/categories_0_cat_image_172.png" alt="Intelligent Lighting Technology" />
                </a>
                <h2 className="category-box__title">Intelligent Lighting Technology</h2>
                <div className="category-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
              </div>
              <div className="category-box__right">
                <Slider {...settings}>
                  {products.map(product => (
                    <div key={product.id}>
                      <div className="product-box">
                        <div className="product-box__img">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-box__title">
                          <span>{product.title}</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                        <a href={product.link} className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="category-box">
              <div className="category-box__left">
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="category-box__image-wrapper">
                  <img className="category-box__image" src="uploads/categories_0_cat_image_172.png" alt="Intelligent Lighting Technology" />
                </a>
                <h2 className="category-box__title">Intelligent Lighting Technology</h2>
                <div className="category-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
              </div>
              <div className="category-box__right">
                <Slider {...settings}>
                  {products.map(product => (
                    <div key={product.id}>
                      <div className="product-box">
                        <div className="product-box__img">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-box__title">
                          <span>{product.title}</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                        <a href={product.link} className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
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
};

export default CategoryBox;
