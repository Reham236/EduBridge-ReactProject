import React from 'react'

import { FaStar } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";


export default function Course({id,img,department, title,rating, desc,sales,price, discount,duraion,lessons}) {
  return (
    <div className="course" key={id}>
      <span className="sale">Sale</span>
        <img src={img} alt="" />
         <span className='primary-text'>{department}</span>
        <span className='rating'>
          <FaStar />
          {rating}
        </span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className='sales'>{sales} Sales</span>
        <span className='price'><del>{price}</del></span>
        <span className='discount'>{discount}</span>
       <span className='lessons-dur'>
         <span> <MdAlarm /> {duraion}</span>
        <span> <FaBookOpen /> {lessons}</span>
       </span>
       <a href="#" className='btn-blue'>Learn More</a>

    </div>
  )
}
