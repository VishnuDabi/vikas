// Header.js

import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineUser } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import '../component/Header.css';
import '../component/Child.css';
import Cart from './Cart';
import Menu from './Menu';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleMenu, setVisibleMenu] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('Cart'));
    if (cart) {
      setProducts(cart.reduce((acc, item) => acc + item.quantity, 0).toFixed(0));
    }
  }, []);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };


  return (
    <>
      <div className={`container-header ${visible ? 'header-show' : 'header-hide'}`} style={{ transform: visible ? 'none' : 'translateY(-100%)' }}>
        <div className='header-row'>
          <div className='left-header'>
            {visibleMenu ? <GrMenu size='23px' fill='rgb(21, 58, 91)' onClick={() => setVisibleMenu(false)} /> : <RxCross2 size='23px' fill='rgb(21, 58, 91)' onClick={() => setVisibleMenu(true)} />
            }
            <Navbar expand="lg" className="bg-body-tertiary">
              <Nav className="me-auto">
                <ul>
                  <li><Link to="#shopAll">SHOP ALL</Link></li>
                  <li><Link to="#purificaton">PURIFICATION</Link></li>
                  <li><Link to="#home">HOME</Link></li>
                  <li><Link to="#drinkware">DRINKWARE</Link></li>
                </ul>
              </Nav>
            </Navbar>
          </div>
          <div className='header-cen'>
            <Link to='/'>
              <h1>LARQ</h1>
            </Link>
          </div>
          <div className='header-right'>
            <nav className='righ-head-nav'>
              <ul>
                <ul>
                  <li>
                    <a href="">
                      <h4>
                        Technology
                      </h4>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <h4>FAQ</h4>
                    </a>
                  </li>
                </ul>
                <li>
                  <Link to='/login'><HiOutlineUser size="25px" /></Link>
                </li>
                <li style={{ marginTop: "-25px" }}>
                  <span className='quntity-cir'>{products}</span>
                  <IoCartOutline size="25px" onClick={openCart} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {visibleMenu ? null : <Menu />}
      {showCart && <Cart onClose={closeCart} />}
    </>
  );
};

export default Header;
