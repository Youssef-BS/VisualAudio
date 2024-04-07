import React , {useState  } from 'react'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
 
   const [fetched , setFetched] = useState(false);

   const inverseFunction = () => {
      setFetched(!fetched);
   }

  return (
    <>
    <div className="top-bar">
  <div className="container-fluid">
    <div className="row">
      <div className="col-6 col-lg-3 left">
        <div className="row d-flex align-items-center h-100">
          <div className="col header-social">
            <span>Follow us:</span>
            <a href="https://www.facebook.com/FOSTechnologies/" target="_blank">
              <span>
                <svg viewBox="0 0 9 17">
                  <path fill="#070707" fillRule="evenodd" d="M7.156 3.056H8.5V.002L6.475 0C3.607 0 2.246 1.782 2.246 4.318v2.403H0v2.9h2.246V17h3.37V9.622H7.86l.638-2.9H5.615v-1.98c0-.812.425-1.686 1.54-1.686"></path>
                </svg>
              </span>
            </a>
            <a href="https://www.youtube.com/channel/UCksb-KjlN197GQL7gJhizww/videos?view=0&amp;shelf_id=0" target="_blank">
              <span>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 16">
                  <defs>
                    <path id="a" d="M0 .357h19.216v13.02H0z"></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M13.483 7.943a.18.18 0 01.019.114c.023-.038.023-.077-.02-.114"></path>
                    <g transform="translate(0 1)">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a"></use>
                      </mask>
                      <path fill="#070707" d="M12.67 7.293L8.334 9.137c-.348.149-.753-.075-.753-.416V5.117c0-.337.397-.56.745-.42l4.335 1.76a.463.463 0 01.292.334.171.171 0 01.008.118.454.454 0 01-.291.384M9.608.357C.165.357 0 1.097 0 6.867c0 5.772.165 6.51 9.608 6.51 9.443 0 9.608-.738 9.608-6.51 0-5.77-.165-6.51-9.608-6.51"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col d-none d-lg-flex center header-links">
        <Link to="/create-account">Become a dealer</Link>
        <span>⋅</span>
        <Link to="/projects" className="more">Projects</Link>
        <span>⋅</span>
        <div className="header-links__submenu dropdown">
          <Link href="#" className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" onClick={inverseFunction}>About us</Link>
          { fetched && (<>
          <div>
            test
          </div>
          </>
        )}
        </div>
      </div>
      <div className="col-6 col-lg-3 right">
        <div className="row justify-content-end">
          <div className="col-auto icon h-100">
            <div id="not-logged" className="login h-100 d-flex align-items-center">
              <a href="#" id="login-popup-link" className="login-popup-link h-100 ">
                <span className="user-name">Login / Register</span>
                <svg viewBox="0 0 17 18">
                  <g fill="#F58220" fillRule="nonzero">
                    <path d="M8.5 9A4.5 4.5 0 104 4.5 4.507 4.507 0 008.5 9zm0-7.66A3.159 3.159 0 115.341 4.5 3.163 3.163 0 018.5 1.342V1.34zM1.345 18c0-3.713 3.21-6.734 7.155-6.734 3.945 0 7.154 3.021 7.154 6.734H17c0-2.122-.896-4.157-2.49-5.657C12.916 10.843 10.754 10 8.5 10s-4.416.843-6.01 2.343a7.938 7.938 0 00-1.847 2.594A7.542 7.542 0 000 18h1.345z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default HeaderComponent