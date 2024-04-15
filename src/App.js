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
import AllNews from './components/newsroom/AllNews';
import Explore from './components/Explore/Explore';
import AllProject from './components/new/AllProject';
import ProjectPin from './components/new/SingleProject';
import CreateAccountForm from './components/registre';
import Store from './components/store/store';
const Header = () => {



    return (
        <>
<HeaderComponent />
<MainHeader />
<InfoBar />
<Store/>
<Boxes />
<Videos />
<NewsRoom /> 
<NewIn />
<New />
<Footer />  

<CreateAccountForm/>
<AllProject/>
<Explore/>
<AllNews/>
<ProductDetail/>




        </>
    );
};

export default Header;
