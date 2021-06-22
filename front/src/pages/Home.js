import React, { useState } from 'react'
import './Feed.css'
import './Home.css'
import { SliderImg } from './SliderImg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; 
import Cards from './Cards'
import './Cards.css';
import Footer from './Footer';


const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
 

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
    return (
      <div>
        
       
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> 
          {SliderImg.map((slide,index)=>{
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                  )}
                </div>
                
              );
                        
          })}
       
            
                    

        </section>
        <Cards/>
        <Footer />
        </div> 
    )
}

export default Home
