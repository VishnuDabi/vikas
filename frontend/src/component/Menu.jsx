import React from 'react';
import '../component/Menu.css';
import '../component/ShopAllCom.css'
import ShopAllCom from './ShopAllCom'
import { IoIosArrowRoundForward } from "react-icons/io";
const Menu = () => {
  return (
    <div className='menu'>
      <ShopAllCom />
      <div className='learnbut'>
        <button >
          <span>Explore basq</span>
          <IoIosArrowRoundForward size="35px" fill='grey' />
        </button>
      </div>
      <div>
     <div className='sec-btn'>
     <div className='learnbut'>
          <button >
            <span>Gift sets</span>
            <IoIosArrowRoundForward size="35px" fill='grey' />
          </button>
        </div> 
      </div>
      <ul>
        <li>
       <a href="fs"> Filters & Accessories</a>
        </li>
        <li>
          <a href="df">Corporate gifting</a>
        </li>
        <li>
          <a href="df">Technology</a>
        </li>
        <li>
          <a href="f">FAQ</a>
        </li>
        <li>
          <a href="sf">Login</a>
        </li>
      </ul>
     </div>
    </div>
  )
}
export default Menu;
