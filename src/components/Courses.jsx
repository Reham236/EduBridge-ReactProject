import React from 'react'
import SectionHeader from './SectionHeader'
import Course from './Course'
import { courseData } from '../../data'

export default function () {
  return (
    <section id="courses">
        <div className="container">
            <SectionHeader title="Make Online education accessible" 
            description="Education is the most powerful tool to unlock potential,ignite your passion and achieve your dreams 
            lorem ipsum dolor sit amet ."  />
            <div className="courseSec">
                {courseData.map((course) => {
                    const { id, img,department, title,rating, desc,sales,price, discount,duraion,lessons } = course;
                    return (
                        <Course key={id} img={img} department={department} title={title} rating={rating} desc={desc} sales={sales} price={price} discount={discount} duraion={duraion} lessons={lessons} />
                    )
                })}
            </div>
        </div>
    </section>
  )
}
