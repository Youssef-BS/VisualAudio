import React from 'react'
import ProductBox from '../components/newIn/NewIn'
import Boxes from '../components/boxes/Boxes'
import Videos from '../components/videos/Videos'
import New from '../components/new/New'
import Projects from './Projects'
import CreateAccount from './CreateAcount'


const Home = () => {
  return (
    <>
    <Boxes />   
    <Videos />
    <ProductBox />
    <New />
    </>
  )
}

export default Home