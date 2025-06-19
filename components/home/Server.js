'use client'

import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';



const Server = () => {

  useEffect (() => {
    AOS.init({duration:1000});
  }, []);




  return (
    <div className="h-[70vh] px-16 flex flex-col mt-16">

      
    
      <div className="grid grid-cols-2 justify-center items-center ">

          <div className="flex flex-col justify-center items-center relative">
              <img src="/assets/server.png" className="w-[100%] object-cover"></img>


          </div>

          <div className="flex flex-col justify-center items-start">
              <h1 className="text-4xl font-bold"> ADVANCED <span className="text-gradient-blue" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"> ENCRYPTION</span></h1>
              <h1 className="text-4xl font-bold mb-8">FOR YOUR <span >PROTECTION</span></h1>
              <p className="text-lg font-light text-left w-[60%] mb-4">At Verify, we understand that the security of your website begins with robust server protection. </p>
              <p className="text-lg font-light text-left w-[60%]">Our secure servers are equipped with the latest security technologies to safeguard your data against unauthorized access and cyber threats.</p>
          </div>




      </div>

      
    </div>
  )
}

export default Server