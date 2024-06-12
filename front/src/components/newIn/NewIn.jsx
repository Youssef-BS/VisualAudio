import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import { data } from './data'; // Importing the data array
import { GoX } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { GetFeaturedProduct } from '../../Features/Newsroom/newsSlices';
import { GetAllProducts, GetMarkets } from '../../Features/Product/ProductSlice';


const ProductBox = () => {
  const dispatch = useDispatch()
  const FeaturedP = useSelector((state)=> state?.news?.FeaturedP)
  useEffect(()=>{
    dispatch(GetFeaturedProduct())
  },[])
  const MarketState = useSelector((state)=> state?.product?.Markets);
  const ProductState = useSelector((state)=> state?.product?.Products);
  const [activeMarket, setActiveMarket] = useState(null);
  const [activeMarketProducts, setActiveMarketProducts] = useState([]);


  useEffect (()=>{
    dispatch(GetMarkets())
    dispatch(GetAllProducts())

  },[dispatch]);
  const handleMarketClick = (market) => {
    setActiveMarket(market.id);
    setActiveMarketProducts(market.id); // assuming market object has a products property
  };

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
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(data.length - 4, prevIndex + 1));
  };
  const settin = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true
  };
  const carouselSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  };
  const settings ={
    dots: true,
    arrows: false,
    prevArrow:
        <GoX size={32}color='black'/>,
    nextArrow:
    <GoX size={32}color='black'></GoX>,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll:3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
    ],
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
                {MarketState?.map((market) => (
                      <div
                        key={market.id}
                        className={`action-button ${activeMarket === market.id ? 'active' : ''}`}
                        onClick={() => handleMarketClick(market)}
                      >
                        {market.name}
                      </div>
                    ))}
                </div>
                 <div className="ajax-carousel">
        <div className="container-fluid carousel-container new">
          <div className="row productboxwrap pb-0 ml- mr-0">
            <div className="col-12">
              <div className="container pl-2 pr-2">
                
      <div className="slides" style={{ display: 'flex', overflowX: 'hidden', transition: 'transform 0.5s ease' }}>
        <Slider {...settings}>
        {ProductState?.map((product)=>(
                     product.marketId === activeMarket  ? (                         <Link to={'/ProductDetail'}  tabIndex="-1">

          <div key={product.id} >
              <div className="product-box" data-id={product.id} data-quantity="YOUR_PRODUCT_QUANTITY" data-price="YOUR_PRODUCT_PRICE">
                <div className="product-box__img">
                  <img src={product.image} alt={product.title} className="lazy-scroll loaded" />
                </div>
                <div className="product-box__title">
                  <span><span id="">{product.title}</span></span>
                </div>
                <div className="product-box__code">
                  <div className="product-box__code">{product.id}</div>
                </div>
                <p className="product-box__desc">{product.description}</p>
              </div>
          </div>
          </Link>

):null
))}        </Slider>
      </div>
      
    </div>
    </div>
                    
          </div>
        </div>
      </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
              <div className="featured-products__slider jsFeaturedProductsHome featured-products__slider h-100 slick-initialized slick-slider slick-dotted">
                <Slider {...carouselSettings}>
                  {/* You can map over your data array to render featured products */}
                  {FeaturedP?.map(product => (
                    <div key={product.Product.id} className="featured-products new-in-featured__box" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                      <h2 className="new-in-featured__title">{product.title}</h2>
                      <div className="featured-products__tag">{product.title}</div>
                      <div className="product-box">
                        <a href={product.Product.link} className="product-box__img" tabIndex="-1">
                          <img src={product.Product.image} alt={product.title} />
                        </a>
                        <a href={product.link} className="product-box__title" tabIndex="-1">
                          <span>{product.Product.title}</span>
                        </a>
                        <div className="product-box__availability product-box__availability--in-stock">
                          <span>{product.Product.availability}</span>
                        </div>
                        <p className="product-box__desc">{product.Product.description}</p>
                        <Link to={`/ProductDetail/${product.Product.id}`}className="btn btn-secondary btn-primary-white">
                          <span>View details</span>
                        </Link>
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

export default ProductBox;
