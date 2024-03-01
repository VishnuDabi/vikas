import React from 'react'
import '../component/Footer.css';
import { FaArrowRight } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import us from '../assets/images/us.svg';
import bicycleAnim from '../assets/images/bicycleAnimation.gif'

const Footer = () => {
    return (
        <section className='foot-sec'>
            <div className='content-wrap'>
                <div className='sign-nav'>
                    <div className='news-social'>
                        <div className='new-so-det'>
                            <h3>Become an insider</h3>
                            <p>Receive exclusive offers, hydration news, and more when you subscribe.</p>
                            <form action="" >
                                <div className='input-cont'>
                                    <div className='input-inn'>
                                        <div className='input-wrap'>
                                            <input type="text" placeholder='Email address' />
                                            <button type='onSubmit' >
                                                <FaArrowRight size='20px' fill='grey' />
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <ul className='foot-ul'>
                            <li><a href="dg"><SlSocialInstagram /></a></li>
                            <li><a href="fd"><FaFacebookF /> </a></li>
                            <li><a href="dfd"><FaYoutube /></a></li>
                            <li><a href="fddf"><FaTwitter /></a></li>
                        </ul>
                    </div>
                    <nav>
                        <ul>
                            <li ><a href="dg"> FAQ</a></li>
                            <li><a href="fd">Reviews</a></li>
                            <li><a href="dfd"> Contact</a></li>
                            <li><a href="fddf">Find a retailer</a></li>
                            <li ><a href="dg"> Corporate gifting</a></li>
                        </ul>
                        <ul>
                            <li ><a href="dg">basq magazine</a></li>
                            <li><a href="fd">Press </a></li>
                            <li><a href="dfd">Our story</a></li>
                            <li><a href="fddf">Affiliate program</a></li>
                            <li><a href="fddf">Ambassador program</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='loca-foot'>
                    <section className='loc-foo-sec'>
                        <button>
                            <span><img src={us} alt="" />United State</span>
                        </button>
                    </section>
                    <nav>
                        <ul>
                            <li><a href="fd">Terms & Privacy</a></li>
                            <li><a href="fd">Accessibility</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='foot-ani'>
                <img src={bicycleAnim} alt="bicycleAni" />
            </div>
        </section>
    )
}

export default Footer
