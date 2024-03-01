import React, { useState } from 'react';
import data from '../json/data.json';
import '../component/CardCss.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


const Card = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1
    }
  };
  const [selected, setSelected] = useState(data.map((item) => ({
    prodName: item.subImg[0].prodName,
    prodCol: item.subImg[0].prodCol,
    price: item.subImg[0].price,
    img: item.subImg[0].img,
    bgColor: item.subImg[0].bgColor,
  })));

  const setBottle = (item, index) => {
    const updatedProducts = [...selected];
    updatedProducts[index] = {
      prodName: item.prodName,
      prodCol: item.prodCol,
      price: item.price,
      img: item.img,
      bgColor: item.bgColor,
    };
    setSelected(updatedProducts);
  };

  return (
    <section id="Magazine">
      <div className='container-fuild'>
        <div className='row'>
          <div className='car'>
            <div className='shop-lay-sec-head'>
              <h1>Now trending</h1>
            </div>
            <div className='carousel'>
              <Carousel swipeable={true}
                draggable={false}
                renderButtonGroupOutside={true}
                responsive={responsive}>
                {data.map((product, index) => (
                  <div className='card' key={product.id} style={{ backgroundColor: selected[index].bgColor }}>
                    <Link to={`/${product.id}`}><div className='proMedia'>
                      <img src={require(`../assets/images/${selected[index].img}`)} />
                    </div></Link >
                    <div className='shopCard-content' style={{ backgroundColor: selected[index].bgColor }}>
                      <div className='productTitle'>
                        <div className=' center'>
                          <h3>{product.prodName}</h3>
                          <span>{selected[index].prodCol}</span>
                        </div>
                      </div>
                      <div className='prodSwiper'   >
                        {product.subImg.map((item) => (
                          <div className='productList' key={item.id}>
                            <button onClick={() => setBottle(item, index)}>
                              <img src={require(`../assets/images/${item.img}`)} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className='prodPrice'>
                        <span>From ${selected[index].price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


export default Card;