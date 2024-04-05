import React, { useEffect } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick'; // Import Slick Carousel library
import MainHeader from './components/search';
import Boxes from "./components/boxes/Boxes";
import Videos from "./components/videos/Videos"
import Footer from './components/footer/Footer';
import Privacy from './components/privacy/Privacy';
import NewsRoom from './components/newsroom/NewsRoom';
import New from './components/new/New';
import NewIn from './components/newIn/NewIn';
import HeaderComponent from './components/header/Header';
import InfoBar from './components/endHeader/endHeader';
import ProductDetail from './components/ProductDetails/ProductDetails';


const Header = () => {



    return (
        <>
<HeaderComponent />
<MainHeader />
<InfoBar />
<ProductDetail/>

<Boxes />


<Videos />
<NewsRoom /> 
<NewIn />
<New />
<Footer />  
        </>
    );
};

export default Header;
