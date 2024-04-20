import React, { useEffect, useState } from 'react';

const SideMenu = ({ isOpen,isopen2 }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showThirdLevel, setShowThirdLevel] = useState(false);
    const [showFourthLevel, setShowFourthLevel] = useState(false);
    const [responsiveweb,setResponsiveWeb]=useState("");
    const [responsiveMob,setResponsiveMob]=useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const toggleThirdLevel = () => {
        setShowThirdLevel(!showThirdLevel);
    };

    const toggleFourthLevel = () => {
        setShowFourthLevel(!showFourthLevel);
    };
    const toggleMenu = () => {
        setIsMenuOpen(true);
        setResponsiveMob(false)
      };

    useEffect(() => {
        if (window.innerWidth > 1000) {
        document.body.className = isOpen ? 'guest no-scroll' : 'guest';}
        else if (window.innerWidth < 1000){
            setResponsiveMob(isopen2)
            document.body.className = responsiveMob ? 'guest menu-open' : 'guest';}
            if(isMenuOpen){
                document.body.className = 'guest';


            }


    }, [isOpen,isMenuOpen,isopen2]);

    return (
        <>
        <nav id="ddfullscreenmenu" className={responsiveMob ? 'openmenu':''}>
        <div className="mobile-title-menu">Main Menu</div>
        <div id="closex"onClick={toggleMenu}></div>
        <div id="ulwrapper">
          {/* Define your UL (nested) menu below */}
          <ul className="submenu " style={{ zIndex: 183 }}>
            <li className="breadcrumb">FOS Technologies</li>
            <li className="menu-view-all">
              <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">View Category</a>
            </li>
            <li className="header">
              <a href="#">Stage Lighting</a>
            </li>
            <li className="header">
              <a href="#">Static Led</a>
            </li>
          </ul>
          <ul id="fullscreenmenu-ul" className="firstLevel " style={{ zIndex: 182 }}>
            <li className="header">
              <a href="#">
                FOS Technologies
                <div className="root-image">
                  <img src="uploads/thumbnails/categories_0_cat_image_172.png.thumb_100x90.png" border="0" title="FOS Technologies" alt="FOS Technologies" />
                </div>
              </a>
            </li>
            {/* 
            <li className="mobile-menu-item first">
              <a href="https://www.new.fos-lighting.eu/specials.php">Offers</a>
            </li>
            */}
            <li className="mobile-menu-item">
              <a href="https://www.fos-lighting.eu/news.php">Newsroom</a>
            </li>
            <li className="mobile-menu-item">
              <a href="projects.php">Projects</a>
            </li>
            <li className="mobile-menu-item">
              <a href="who-we-are-pr-1.html">About us</a>
            </li>
            <li className="mobile-menu-item">
              <a href="https://www.fos-lighting.eu/contact_us.php">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
        <section className={`side-menu main-menu-container ${isOpen ? '' : 'hide'}`}>
            <div className="inner">
                <div className="first-level">
                    <ul>
                        <li className={`has-children menu-item jsFirstLevelMenuItem ${showSubMenu ? 'second-level-container' : ''}`} >
                            <a className="d-flex flex-column main-parent-cat op-50" title="Intelligent Audio" data-href="https://www.fos-lighting.eu/intelligent-audio-c-173.html"onClick={toggleSubMenu}>
                                <img className="img-fluid" src="/images/categ.png" alt="Intelligent Audio" />
                                Intelligent Audio
                            </a>
                            <i className="las la-angle-right op-50" data-href="https://www.fos-lighting.eu/intelligent-audio-c-173.html" onClick={toggleSubMenu}></i>
                            {showSubMenu && (
                            <ul className="second-level" style={{ display: showSubMenu ? 'block' : 'none' }}>
                            <ul className="inner-second" style={{ maxHeight: '571px' }}>
                                        <li className="menu-item has-children third-level-container " >
                                            <a title="Active Speakers" data-href="https://www.fos-lighting.eu/active-speakers-c-173_97.html"onClick={toggleThirdLevel}>Active Speakers</a>
                                            <i className="las la-angle-right" data-href="https://www.fos-lighting.eu/active-speakers-c-173_97.html"onClick={toggleThirdLevel}></i>
                                            {showThirdLevel && (
                                                <ul className="third-level"  style={{ display: showThirdLevel ? 'block' : 'none' }}>
                                                  <ul className="inner-third"  style={{ maxHeight: '571px' }}>

                                                    <li className="menu-item has-children fourth-level-container" >
                                                        <a title="Stage Lighting" data-href="https://www.fos-lighting.eu/abs-active-speakers-c-173_97_99.html"onClick={toggleFourthLevel}>ABS Active Speakers</a>
                                                        <i className="las la-angle-right" data-href="https://www.fos-lighting.eu/abs-active-speakers-c-173_97_99.html"></i>
                                                        {showFourthLevel && (
                                                            <ul className="fourth-level menu-products-container"style={{ display: showFourthLevel ? 'block' : 'none' }}>
                                                                <li>
                                                                    <a href="https://www.fos-lighting.eu/ihos-wheels-kit-p-1264.html" className="menu-product-link d-inline-flex align-items-center">
                                                                        <div className="menu-product-link__img mr-3">
                                                                            <img src="/images/product.jpg" alt="IHOS Wheels Kit"  />
                                                                        </div>
                                                                        <div className="menu-product-link__title">
                                                                            <span>IHOS Wheels Kit</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    </ul>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="tags-menu">
                        <span className="news">
                            <a href="https://www.fos-lighting.eu/news.php">Newsroom</a>
                        </span>
                        <span className="account">
                            <a href="https://www.fos-lighting.eu/create_account.php">Become a Dealer</a>
                        </span>
                        <span className="projects">
                            <a href="projects.php">Projects</a>
                        </span>
                        <span className="about">
                            <a href="who-we-are-pr-1.html">About us</a>
                        </span>
                        <span className="contact">
                            <a href="https://www.fos-lighting.eu/contact_us.php">Contact us</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default SideMenu;
