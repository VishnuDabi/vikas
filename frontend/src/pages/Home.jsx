import React from 'react'
import '../pages/Home.css';
import '../pages/Page.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import homeBot from '../assets/images/homeCart.png'
const Home = () => {
  return (
    <section className='home-sec'>
      <div className='home-cont'>
        <div className='home-art'>
          <article >
            <div className='home-tit'> Drink briliantly
            </div>
            <h2 className='heading'>
              Poppin’ bottles in 2024
            </h2>
            <div className='description'>
              Forget the bubbly, smart water purification is here to help crush those hydration goals.
            </div>
            <div className='learnbut'>
              <button >
                <span>Shop Now</span>
                <IoIosArrowRoundForward size="35px" fill='grey' />
              </button>
            </div>
          </article>
        </div>
        <div className='home-left-cart'>
          <article className='home-left-art'>
            <a href="sd">
              <div className='home-left-cont'>
                <img src={homeBot} alt="" />
                <div className='hom-lef-cont-head'> <h6 className='home-prodName'>LARQ Bottle PureVis™</h6></div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Home;
