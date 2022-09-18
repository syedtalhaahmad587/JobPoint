import React , {useState} from 'react'
// import "./Modal.scss"
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Item from "./ModalApi.js/Item"
import Carousel from "react-elastic-carousel";
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Modal = () => { 
  const navigator = useNavigate()
   const [items , setitem] = useState(Item); 
    return (
        <>
          <div className="App" >
          <Carousel breakPoints={breakPoints}>
        {items.map((elem) => {
          const {id  ,dateUpdate, image , btn , btn2 , pera , pera1 ,  pera2  , icon } = elem;
          return (
            <>
            <div className="card" style={{width:"18rem" , cursor:"Pointer" }} onClick={() => navigator("/JobList") } >
        <p className='UpdateDate' >{dateUpdate}</p>
        <div className='imageScreen' >
  <img  src={image} class="card-img-top" alt="..." /> 
  </div>
  <div className="card-body">
    <button className='employeeTime' >{btn}</button>
    <button className='Fiance' >{btn2}</button>
    <div>
        <h6 className='Manager' >{pera}</h6>
        <p className='country' >{pera1}</p>
    </div>
    <div className='responsibleManage' >
        <p>{pera2}</p>
    </div>
  </div>
</div>
            </>
          )
        } )}
       
      
         {/* <div><p><AiOutlineArrowDown /></p></div> */}

      </Carousel>
    </div>
        </>
    )
}

export default Modal;

