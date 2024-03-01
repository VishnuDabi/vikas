import React, { useEffect } from 'react'
import Cart from '../component/Cart';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/ProdDes.css';
import data from '../json/data.json'
import Rating from '@mui/material/Rating';
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux';

const ProdDes = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [proDetail, setProDetail] = useState(null);
  const [selectedBottleIndex, setSelectedBottleIndex] = useState(0);

  useEffect(() => {
    const product = data.find((item) => item.id === productId);
    if (product) {
      setProDetail(product);
    } else {
      console.error(`Product with ID ${productId} not found`);
    }
  }, [productId]);

  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };
  const addToCart = () => {
    dispatch(add({
      id: proDetail.subImg[selectedBottleIndex].id,
      name: proDetail.prodName,
      price: proDetail.subImg[selectedBottleIndex].price,
      img: proDetail.subImg[selectedBottleIndex].img,
      prodColor: proDetail.subImg[selectedBottleIndex].prodCol,
      quantity: 1
    }))
  }
  const setBottle = (index) => {
    setSelectedBottleIndex(index);
  };
  return (
    <>
      {showCart && <Cart onClose={closeCart} />}
      <section className='des-sec'>
        {proDetail && (
          <div className='des-row'>
            <div className='des-proImg'>
              <div className='desImg-con'>
                <img src={require(`../assets/images/${proDetail.subImg[selectedBottleIndex].img}`)} alt='des-img' />
              </div>
            </div>
            <div className='des-cart'>
              <div className='carCon-title'>
                <h1>{proDetail.prodName}</h1>
              </div>
              <div className='head-price'>
                <span>${proDetail.subImg[selectedBottleIndex].price}</span>
              </div>
              <div className='cart-rat'>
                <Rating name="half-rating" className='rating' defaultValue={2.5} precision={0.5} />
                <span>30 reviews</span>
              </div>
              <div className='cart-fea'>
                <div className='cart-siz-head'>Insulated</div>
                <div className='car-fea-bt'>
                  <button><div></div><div className='feature'><h7>Insulated</h7><br />
                    <span>24 hours cold or 12 hours hot</span></div></button>
                  <button><div></div><div><h7>Insulated</h7>
                    <br />
                    <span>24 hours cold or 12 hours hot</span></div></button>
                </div>
              </div>
              <div className='cart-siz'>
                <div className='cart-siz-head'>Size</div>
                <div className='car-size-bt'>
                  <button><span>23 oz</span></button>
                  <button><span>34 oz</span></button>
                </div>
              </div>
              <div className='cart-pro-col'>
                <div className='cart-siz-head'>
                  Black /Onyx
                </div>
                <div className='item-btn'>
                  {proDetail.subImg.map((item, index) => (
                    <button
                      key={item.id}
                      className='bt-Item'
                      style={{ backgroundColor: item.color }} onClick={() => setBottle(index)}
                    >
                    </button>
                  ))}
                </div>
              </div>
              <div className='chec-btn' onClick={openCart}>
                <button onClick={addToCart}>Add to cart-${proDetail.subImg[selectedBottleIndex].price}</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default ProdDes

