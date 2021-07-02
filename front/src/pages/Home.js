import React, { useState } from 'react'
import './Feed.css'
import './Home.css'
import { SliderImg } from './SliderImg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; 
import Cards from './Cards'
import './Cards.css';
import Footer from './Footer';

import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {

    return (
      <div>
      <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>,
       
      
        <Cards/>
        <Footer />
        </div> 
    )
}

export default Home
