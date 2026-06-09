import React from 'react'

export default function Card({id , img, title, desc,color,bgColor}) {
  return (
    <div className="card" key={id}>
        <span className="icon" style={{color:color, backgroundColor: bgColor}}>{img}</span>
        <h2>{title}</h2>
        <span className="line"></span>
        <p>{desc}</p>
    </div>
  )
}
