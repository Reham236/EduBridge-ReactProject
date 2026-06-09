import React from 'react'
import SectionHeader from './SectionHeader'
import { reviewData } from '../../data'
import Review from './Review'

export default function Reviews() {
  return (
    <section id="reviews">
    <div className="container">
        <SectionHeader title="Each and every client is important!" 
        description="We value all our clients and strive to provide them with the best possible experience." />
        <div className="reviewSec">
            {reviewData.map((review) => {
                const {id ,stars,img, name , feedback,job}=review;
                return(
                    <Review key={id} stars={stars} img={img} name={name}
                     feedback={feedback} job={job}/>
                )
            })}
               

        </div>
    </div> 
    </section>
    
  )
}
