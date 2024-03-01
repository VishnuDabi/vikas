import React from 'react'
import '../pages/ShopAll.css';
import shopImg1 from '../assets/images/shopImg1.png';
import shopImg2 from '../assets/images/shopImg2.png';
import shopImg3 from '../assets/images/shopImg3.png';
const ShopAll = () => {
  const data = [
    {
      id: "1",
      img: shopImg1,
      title: 'Purification',
    },
    {
      id: "2",
      img: shopImg2,
      title: 'Home',
    },
    {
      id: "3",
      img: shopImg3,
      title: 'Drinkware',
    },
  ]
  return (
    <div className='shop-sec'>
      <div className='shop-lay-sec-head'>
        <h1>Shop</h1>
      </div>
      <div className='shop-car-cont'>
        {
          data.map((item) => (

            <div className='shop-card'>
              <a href="edfd">
                <div className='shop-img'>
                  <img src={item.img} alt="" />
                </div>
                <h3>{item.title}</h3>
                <span>Shop Now</span>
              </a>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default ShopAll
