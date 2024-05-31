import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {GetNews} from '../../Features/Newsroom/newsSlices';

function NewsRoom() {
  const dispatch = useDispatch();
  const NewsState = useSelector((state)=> state?.news?.News)
  useEffect(()=>{
    dispatch(GetNews())

  },[])
  console.log(NewsState)
  return (
    <section className="home-boxes mb-5 mt-5">
      <div className="container-fluid">
        <div className="product-page-section product-page-section--homepage">
        <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-baseline">
                <h2 className="product-page-section__title">Newsroom</h2>
                <Link to="/AllNews" className="btn news-view-all mb-4 mb-sm-0">View all news</Link>
              </div>
            </div>
          </div>
                

       
          <div className="row">
          {NewsState?.map((news)=>(
            <div className="col-lg-6">
              <div className="home-boxes__box home-boxes__box--white">
                <a href="https://www.fos-lighting.eu/fos-bicolor-200w-fresnel-p-2768.html" className="wrap-link row flex-column flex-xl-row">
                  <div className="home-boxes__box-left col-12 col-lg">
                    <img src="uploads/thumbnails/news_0_image_28.jpg.thumb_190x126.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="home-boxes__box-right col">
                    <h2>{news?.Product?.title}</h2>
                    <p className="home-boxes__date">
                      <i className="las la-calendar mr-2"></i>09/02/2024
                    </p>
                    <p>{news?.Product?.description}</p>
                    <Link to={`/ProductDetail/${news?.Product.id}`}><span className="btn btn-primary btn-big">View details</span></Link>
                  </div>
                  

                </a>
              </div>
            </div>
                              ))}

          </div>


        </div>
      </div>
    </section>
  );
}

export default NewsRoom;
