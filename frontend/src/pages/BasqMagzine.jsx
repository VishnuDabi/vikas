import React from 'react';
import './BasqMagzine.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import magData from '../json/magazine.json'
const BasqMagzine = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1559, min: 992 },
      items: 3
    },
    tablet2: {
      breakpoint: { max: 991, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='magzine-sec'>
      <div className='sec-lay-head'>
        <div className='sec-lay-head-text'>
          <h1>basq magazine</h1>
          <span>Take a peek at our online magazine where we cover everything from water to travel and wellness.</span>
        </div>
        <div className='learnbut'>
          <button >
            <span>Explore basq</span>
            <IoIosArrowRoundForward size="35px" fill='grey' />
          </button>
        </div>
      </div>
      <section className='card-sec'>
        <div className='card-sec-swip'>
          <Carousel style={{ overflow: "none !important" }} swipeable={true}
            draggable={false} renderButtonGroupOutside={true}
            responsive={responsive} >
            {magData.map((item) => (
              <div className='card-sec-swip-wrap'>
                <div className='card-cont-mag'>
                  <article>
                    <a href="">
                      <img src={require(`../assets/images/${item.img}`)} alt="ddfdf" />
                      <h4>{item.title}</h4>
                      <span>Read more</span>
                    </a>
                  </article>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}
export default BasqMagzine
