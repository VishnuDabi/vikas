import React, { useEffect, useState } from 'react';
import { IoClose, IoMicOff } from 'react-icons/io5';
import { AiOutlineDelete } from "react-icons/ai";
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import emptyCart from '../assets/images/emtyCart.gif';
import '../component/Cart.css';
import { MdOutlineDiscount } from "react-icons/md";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice'

const Cart = ({ onClose }) => {
    const [products, setProducts] = useState([]);
    const [close, setClose] = useState(true)
    const dispatch = useDispatch();
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('Cart'));
        if (cart) {
            setProducts(cart);
        }
    }, []);
    const removeFromCart = (item) => {
        setClose(false)
        dispatch(remove(item))
    };
    const updateQuantity = (productId, amount) => {
        const updatedCart = products.map((item) => {
            if (item.id === productId) {
                const newQuantity = Math.max(0, item.quantity + amount);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        const filteredCart = updatedCart.filter((item) => item.quantity > 0);
        localStorage.setItem('Cart', JSON.stringify(filteredCart));
        setProducts(filteredCart);
    };
    const getTotalPrice = () => {
        return products.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };
    const checkout = () => {
        const checkoutData = {
            totalAmount: getTotalPrice(),
            subtotalAmount: products.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2),
            products: products.map(({ id, img, quantity }) => ({ id, img, quantity })),
        };
        Cookies.set('checkoutData', JSON.stringify(checkoutData), { expires: 7 });
        Cookies.remove('cart')
        onClose();
    };

    return (
        <div className="cart-cont">
            <div className="cart-des">
                <div className="cart-head">
                    <div className="cart-head-t">Your cart</div>
                    <div className="cart-cross">
                        <IoClose fill="#153a5b" size="25px" onClick={onClose} />
                    </div>
                </div>
                <div className='cart-off'>
                    <div className='cart-off-con'>
                        <div className='cart-off-con-spa'>
                            <span>$10 store credit</span>
                        </div>
                        <Box >
                            <Slider
                                aria-label="Small steps"
                                defaultValue={0.00000005}
                                step={0.00000001}
                                marks
                                min={-0.00000005}
                                max={0.0000001}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <div className='cart-off-con-spa'>
                            <span >Congrats! You're receiving $10 in store credit on this order!</span>
                        </div>
                    </div>
                </div>
                {products.length > 0 ? (
                    <>
                        <div className="container-cart">
                            {products.map((item) => (
                                <div className="cart-obj" key={item.id}>
                                    <div className="cart-obj-img">
                                        <img src={require(`../assets/images/${item.img}`)} alt="product" />
                                    </div>
                                    <div className="cart-obj-des">
                                        <div className="tit">
                                            <div className="tit-con">
                                                <h5>{item.name}</h5>
                                                <div className="tit-spa">
                                                    <span>{item.prodCol}</span>
                                                    <span >34 oz</span>
                                                </div>
                                            </div>
                                            <div className="cart-btn">
                                                <AiOutlineDelete fill="rgb(90, 94, 96)" size="23px" onClick={() => {
                                                    removeFromCart(item.id)
                                                }} />
                                            </div>
                                        </div>
                                        <div className="bott-row">
                                            <div className="inc-dec">
                                                <button className='inc-dec-btn1' onClick={() => updateQuantity(item.id, -1)}><CgMathMinus fill='rgb(21, 58, 91)' /></button>
                                                <span>{item.quantity}</span>
                                                <button className='inc-dec-btn2' onClick={() => updateQuantity(item.id, 1)}><CgMathPlus fill='rgb(21, 58, 91)' /></button>
                                            </div>
                                            <div className="subTotal">
                                                <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="total">
                            <div className="tot-tot">Total</div>
                            <div className="tot-pri">${getTotalPrice()}</div>
                        </div>
                        <div className='coup-icon'>
                            <MdOutlineDiscount fill='rgb(21, 58, 91)' />
                            <span> Apply coupon code</span>
                        </div>
                        <div className="chec-btn">
                            <button onClick={checkout}>Check out now</button>
                        </div>
                        <span className='ship'>Shipping and taxes calculated at checkout</span>

                    </>
                ) : (
                    <div className="empty">
                        <img src={emptyCart} alt="empty cart" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;