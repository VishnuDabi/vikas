import React from 'react'
import shopImg1 from '../assets/images/shopImg1.png';
import shopImg2 from '../assets/images/shopImg2.png';
import shopImg3 from '../assets/images/shopImg3.png';
const ShopAllCom = () => {
    const data = [
        {
          id: "1",
          img: shopImg1,
          title: 'Purification',
          desc:'Filter or purify water on the go.'

        },
        {
          id: "2",
          img: shopImg2,
          title: 'Home',
          desc:'Equip your home with Nano Zero filtration.'
        },
        {
          id: "3",
          img: shopImg3,
          title:'Drinkware',
          desc: 'Hydrate effortlessly on the go.',
        },
      ]
  return (

      <div className='row'>
      <div className='shopAll-com'>
      <div className='shopAll-com-inn'>
        {                                       
          data.map((item)=>(
            <div className='shopAll-com-card' key={item.id}>
                <div className='shopAll-com-card-inn' style={{ backgroundImage: `url(${item.img})` }}>
                    <div className='shopAll-com-card-cont'>
                        <h4>{item.title}</h4>
                        <span>{item.desc}</span>
                    </div>
                </div>
            </div>       
          ))
        }
      </div>
      </div>
      </div>
    
  )
}

export default ShopAllCom
