import React from 'react'
import './Campus.css'
import galler_1 from '../../assets/gallery-1.jpg'
import galler_2 from '../../assets/gallery-2.jpg'
import galler_3 from '../../assets/gallery-3-3.jpg'
import galler_4 from '../../assets/gallery-4.jpg'

import dark_arrow from "../../assets/arrow.svg";
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={galler_1} alt="" />
        <img src={galler_2} alt="" />
        <img src={galler_3} alt="" />
        <img src={galler_4} alt="" />
      </div>
      <button className='btn dark-btn hover-btn-white  center-btn '>See more here <img className='new-btn' src={dark_arrow}  /></button>
    </div>
  )
}

export default Campus
