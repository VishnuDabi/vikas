import React from 'react'
import '../component/Quates.css';
import refill from '../assets/images/do.jpg';
import drop from '../assets/images/drop.jpg'
import leaf from '../assets/images/leaf.jpg'


const Quates = () => {

  const data = [
    {
      id: 1,
      img: refill,
      title: 'Say yes to refills',
      description: 'Save money and make single-use water bottles a thing of the past.',
    },
    {
      id: 2,
      img: drop,
      title: 'A smart way to sip',
      description: 'PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go',
    },
    {
      id: 3,
      img: leaf,
      title: 'Hydrate with purpose',
      description: 'A portion of proceeds supports environmental and clean water projects worldwide.',
    }
  ]
  return (
    <div className='qutes-sec'>
      {
        <article className='quates-article'>
          {data.map((item) => {
            return (<div className='article-inner'>
              <div className='art-inn-img'><span><img src={item.img} alt="" /></span></div>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </div>)
          })}
        </article>
      }

    </div>
  )
}

export default Quates
