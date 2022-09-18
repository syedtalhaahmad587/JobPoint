import React , {useState} from 'react'
// import "./Modal.scss"
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Item from "./ModalApi.js/Item"
import { AiOutlineLineChart ,  } from "react-icons/ai";
import Carousel from "react-elastic-carousel";

import { AiOutlineArrowDown , AiFillSignal , AiOutlineBranches } from 'react-icons/ai'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const JobCategories = () => { 
//    const [items , setitem] = useState(Item); 
    return (
        <>
          <div className="carousalList" >
          
          <Carousel breakPoints={breakPoints}>
        {/* {items.map((elem) => {
          const {id  ,dateUpdate, image , btn , btn2 , pera , pera1 ,  pera2  , icon } = elem;
          return (
            <>
           <div></div>
            </>
          )
        } )} */}
        <div className='MainDemand'>
            <p className='iconLine' ><AiOutlineArrowDown /></p>
           
          <h4>Design</h4>
          <p>New 185 Jobs Posted</p>

        </div>
        <div className='MainDemand'>
            <p className='iconLine' ><AiOutlineBranches /></p>
           
          <h4>Technology</h4>
          <p>New 185 Jobs Posted</p>

        </div>
        <div className='MainDemand'>
            <p className='iconLine' ><AiOutlineLineChart /></p>
           
          <h4>Marketing</h4>
          <p>New 185 Jobs Posted</p>

        </div>
        <div className='MainDemand'>
            <p className='iconLine' ><AiFillSignal /></p>
           
          <h4>Finance</h4>
          <p>New 185 Jobs Posted</p>

        </div>
       
      
         {/* <div><p><AiOutlineArrowDown /></p></div> */}

      </Carousel>
    </div>
        </>
    )
}

export default JobCategories;

