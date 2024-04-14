import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick'; // Import Slick Carousel library
import MainHeader from './components/search';
import Footer from './components/footer/Footer';
import HeaderComponent from './components/header/Header';
import InfoBar from './components/endHeader/endHeader';
import AllNews from './components/newsroom/AllNews';
import Explore from './components/Explore/Explore';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CreateAccountForm from './pages/CreateAcount';
import ImageMapperContainer from './pages/ProjectSelector';
import ProductDetail from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';
import AllNewsRoom from './pages/AllNews';





    const Layout = ({ children }) => {
        return (
            <>
                <HeaderComponent />
                <MainHeader />
                <InfoBar />
                {children}
                <Footer />
            </>
        );
    };
    const Header = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout><Home /></Layout>}
                />
                <Route
                    path="/projects"
                    element={<Layout><Projects /></Layout>}
                />
                <Route
                    path="/create-account"
                    element={<Layout><CreateAccountForm /></Layout>}
                />
                <Route
                    path="/project-select"
                    element={<Layout><ImageMapperContainer /></Layout>}
                />
                <Route
                    path="/explore"
                    element={<Layout><Explore /></Layout>}
                />
                <Route
                    path="/ProductDetail"
                    element={<Layout><ProductDetail /></Layout>}
                />
                <Route
                    path="/CntactsUs"
                    element={<Layout><ContactUs /></Layout>}
                />
                <Route
                    path="/Support"
                    element={<Support />}
                />
                <Route
                    path="/AllNews"
                    element={<Layout><AllNewsRoom /></Layout>}
                />
            </Routes>
        </Router>
    );
};

export default Header;
