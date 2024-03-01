// import React from 'react';

// import { IoIosArrowRoundForward } from "react-icons/io";
// import '../component/Child.css';
// import "slick-carousel/slick/slick-theme.css";
// // import bottle1 from '../assets/images/bottle1.png';
// // import bottle2 from '../assets/images/bottle2.png';
// // import bottle3 from '../assets/images/bottle3.png';
// // import bottle4 from '../assets/images/bottle4.png';
// // import bottle5 from '../assets/images/bottle5.png';
// import '../component/Header.css'
// const Child = () => {
    
//       const product = [
//         {
//           img: bottle1,
//           backGroundColor: `#f7f7f7`,
//           prodName:`Black / Onyx`,
//           price:`89`
//         },
//         {
//           img: bottle4,
//           backGroundColor: `#f8faf5`,
//           prodName:`Black / Pine`,
//           price:`79`
//         },
//         {
//           img: bottle5,
//           backGroundColor: `#fef1f0`,
//           prodName:`White / Coral`,
//           price:`99`
//         }
//       ];

//     return (
//         <section className='child-sec'>
//             <div className='child-row'>
//                 <div className='child-cont'>
//                     <div className='buttons'>
//                         <div className='learnbut'>
//                             <button >
//                                 <span>Learn More</span>
//                                 <IoIosArrowRoundForward size="35px" fill='grey' />
//                             </button>
//                         </div>
//                         <div className='learnbut'>
//                             <button >
//                                 <span>Learn More</span>
//                                 <IoIosArrowRoundForward size="35px" fill='grey' />
//                             </button>
//                         </div>
//                     </div>
//                     <div className='child-con-Upp'>
//                         <a href="xyz">Filters & Accessories</a>
//                         <br />
//                         <a href="xyz">Corporate gifting</a>
//                     </div>
//                     <div className='child-con-low'>
//                         <span>Learn More</span>
//                         <br/>
//                         <br/>
//                         <a href="xyz">PureVis™ technology</a>
//                         <br />
//                         <a href="xyz">Nano Zero technology</a>
//                     </div>
//                 </div>
//                 <div className='child-prod'>
                
//         <div className='container'>
//         {product.map((data)=>(
//             <div className='card' style={{backgroundColor:data.backGroundColor}}
//             //  onClick={proDes}
//              >
//             <div className='proMedia'>
//               <img src={data.img} alt='bottle1'/>
//             </div>
//             <div className='shopCard-content'>
//               <div className='productTitle d-flex center'>
//                <h3 >{data.prodName}</h3>
//                <span>From ${data.price}</span>
//               </div>
//               </div>
//           </div>
//           ))}
//         </div>
      
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Child;