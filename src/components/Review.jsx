import React from 'react'

export default function Review({id,stars, img, name, feedback, job}) {
  return (
    <div className="review"key={id}>
        <span className='stars'>{stars}</span>
        <p className='feedback'>{feedback}</p>
        <div className="reviewer">
            
            <div className="reviewer-info">
              <img src={img} alt={name} />
              <div>
                 <h3  className='primary-text'>{name}</h3>
                 <p className='job'>{job}</p>
              </div>
               
            </div>
        </div>
    </div>
  )
}
