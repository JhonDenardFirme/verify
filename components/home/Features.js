'use client'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

  useEffect(() => {
    AOS.init({duration: 1000, delay:100})
  }, []);

  return (
    <div className="flex flex-col h-[450px] justify-center items-center z-40">

      <h1 className="text-4xl font-bold"> COMPREHENSIVE <span className="text-gradient-blue" data-aos="fade-up"> SECURITY</span></h1>
      <h1 className="text-4xl font-bold mb-8">WITH OUR <span >TRUSTED POLICY</span></h1>

    <div className="px-32 grid grid-cols-3 gap-32 h-56 relative mt-16">



      <div className="flex flex-col w-full justify-center items-center feature-card border-[1px] border-neutral-500"
        data-aos="fade-up" data-aos-delay="200"
      >
        <div className="rounded-full border-[1px] border-neutral-500 p-4 mb-6 absolute -top-9 bg-neutral-950 z-10">
          <img src="/assets/smart.svg" className="w-10 object-cover"></img>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">SMART</h1>
        <p className="text-white text-sm text-center w-[80%] font-light uppercase">
          Adaptive solutions evolve with emerging threats.
        </p>

      </div>


      <div className="flex flex-col w-full justify-center items-center feature-card border-[1px] border-neutral-500"
        data-aos="fade-up" data-aos-delay="400"
      >
        <div className="rounded-full border-[1px] border-neutral-500 p-4 mb-6 absolute -top-9 bg-neutral-950 z-10">
          <img src="/assets/safe.svg" className="w-10 object-cover"></img>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">SAFE</h1>
        <p className="text-white text-sm text-center w-[80%] font-light uppercase">
          Cutting-edge encryption safeguards sensitive data.

        </p>

      </div>


      <div className="flex flex-col w-full justify-center items-center feature-card border-[1px] border-neutral-500"
        data-aos="fade-up" data-aos-delay="600"
      >
        <div className="rounded-full border-[1px] border-neutral-500 p-4 mb-6 absolute -top-9 bg-neutral-900 z-10">
          <img src="/assets/secure.svg" className="w-10 object-cover"></img>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">SECURE</h1>
        <p className="text-white text-sm text-center w-[80%] font-light uppercase">
          Advanced security protocols for protecting access.
        </p>

      </div>

      <div className="absolute blue-gradient w-[400px] h-[400px] -z-10 -top-64 -right-32"></div>
        
      <div className="absolute lightblue-gradient w-[250px] h-[250px] -z-10 -top-64 -right-32"></div>


    </div>
    </div>
    
  )
}

export default Features