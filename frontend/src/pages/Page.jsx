import React, { useState } from 'react'
import '../pages/Page.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import cardImg1 from '../assets/images/cardImg1.png';
import cardImg2 from '../assets/images/cardImg2.png';
import cardImg3 from '../assets/images/cardImg3.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Page = () => {
    const [learnMoreClicked, setLearnMoreClicked] = useState(false);

    const handleLearnMoreClick = () => {
        setLearnMoreClicked(true);
    };
    const handleBack = () => {
        setLearnMoreClicked(false)
    }

    const data = [
        {
            id: '1',
            backGroundImg: cardImg1,
            heading: `Award winning design`,
            description: `When it comes to form and function, we’ve got it down`,
            buttText: `Shop now`
        },
        {
            id: '2',
            backGroundImg: cardImg2,
            heading: `The future of hydration`,
            description: `PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.`,
            buttText: `How it works`
        },
        {
            id: '3',
            backGroundImg: cardImg3,
            heading: `Better for you and the planet`,
            description: `A portion of every purchase helps restore our oceans and brings clean water to communities in need.`,
            buttText: `Measure my impact`
        }
    ]
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
    return (
        <>
            <div className={`container-fluid ${learnMoreClicked ? 'learn-more-clicked' : ''}`}>
                <div className={`container-page ${learnMoreClicked ? 'learn-more-clicked' : ''}`}>
                    <div className='wrapper '>
                        <div className='article-contain'>
                            <article className='article' >
                                <div className='article-inner'>
                                    <div className='title'> Our mission
                                    </div>
                                    <h2 className='heading'>
                                        Drink brilliantly
                                    </h2>
                                    <div className='description'>
                                        "We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere."
                                    </div>
                                    <div className='learnbut-wrap'>
                                        <div className='learnbut'>
                                            <button onClick={handleLearnMoreClick} >
                                                <span>Learn More</span>
                                                <IoIosArrowRoundForward size="35px" fill='grey' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='back'>
                                    <div className='learnbut'>
                                        <button onClick={handleBack}>
                                            <IoArrowBackSharp size="25px" fill='#fff' />
                                            <span>Back</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='sliderDiv'>
                            <div className='slide'>
                            <Carousel swipeable={true}
                draggable={false}
                renderButtonGroupOutside={true}
                responsive={responsive}>
                                {
                                    data.map((data) => (
                                        <div className='card-page'>
                                            <div className='page-wraper-car'>
                                                <div className='container-card' style={{ backgroundImage: `url(${data.backGroundImg})` }}>
                                                    <article>
                                                        <div className='card-article'>
                                                            <h3>{data.heading}</h3>
                                                            <div className='card-des'>
                                                                {data.description}
                                                            </div>
                                                            <div className='cardbut'>
                                                                <button >
                                                                    <span>Learn More</span>
                                                                    <IoIosArrowRoundForward size="35px" fill='grey' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                  </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Page
