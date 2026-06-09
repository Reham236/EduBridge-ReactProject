import React from 'react'
import { cardData } from '../../data'
import Card from './Card'

export default function Home() {
  return (
    <section id="home">
        <div className="container">
            <div className="homeSec">
                <span>Join Us</span>
                <h1>Best Learning Opportunities</h1>
                <p>Discover a world of knowledge and opportunities with EduBridge. 
                    Join us today and embark on a journey of learning and growth.</p>
                <a href="#" className='btn btn-red'>Get Quote Now</a>
        
                <a href="#" className='btn btn-transparent'>Learn More</a>
            </div>
            <div className="cardSec">
                {cardData.map((card) => {
                    const { id, img, title, desc ,color,bgColor} = card;
                    console.log(title);
                    return <Card key={id} img={img} title={title} desc={desc} color={color} bgColor={bgColor} />

                })}
            </div>
        </div>
    </section>
  )
}
