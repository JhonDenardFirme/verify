'use client'

import { testimonials } from "@/lib/testimonials"
import { InfiniteMovingCards } from "./MovingCards"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from "react"


const Testimonials = () => {

  useEffect(() => {
    AOS.init({duration: 1000, delay:100})
  }, []);

  return (
    
      <div className="relative flex flex-col h-[550px] justify-center items-center z-40 ">

        <h1 className="text-4xl font-bold"> EXCEPTIONAL <span className="text-gradient-blue" data-aos="fade-up" data-aos-delay="200"> INSIGHTS</span></h1>
        <h1 className="text-4xl font-bold mb-8">FROM OUR <span >VALUED CLIENTS</span></h1>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="relative z-50"
        ></InfiniteMovingCards>


      </div>

  )
}

export default Testimonials