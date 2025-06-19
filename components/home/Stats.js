'use client';


import { useEffect } from "react"

// aos

import AOS from 'aos';
import 'aos/dist/aos.css';

const Stats = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100 });
  }, []);

  return (
    <div className="px-32 grid grid-cols-4 gap-32 h-18 relative">
      <div className="flex flex-col w-full justify-center items-center"         
        data-aos="fade-up" // Using custom AOS trigger name
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="50"
        
        >
        <p className="num-text">100K+</p>
        <p className="desc-text">ACTIVE USERS</p>
      </div>

      <div className="flex flex-col w-full justify-center items-center "
              data-aos="fade-up" // Using custom AOS trigger name
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-offset="50">
        <p className="num-text">300K+</p>
        <p className="desc-text">TRANSACTIONS</p>
      </div>

      <div className="flex flex-col w-full justify-center items-center "
              data-aos="fade-up" // Using custom AOS trigger name
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-offset="50">
        <p className="num-text">100+</p>
        <p className="desc-text">PARTNER CLIENTS</p>
      </div>

      <div className="flex flex-col w-full justify-center items-center"
              data-aos="fade-up" // Using custom AOS trigger name
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-offset="50">
        <p className="num-text">200+</p>
        <p className="desc-text">PLATFORMS</p>
      </div>


    </div>
  )
}

export default Stats