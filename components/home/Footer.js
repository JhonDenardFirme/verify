import { BackgroundBeams } from "./Background"

const Footer = () => {
  return (
    
    
    <section className="grid grid-cols-5 p-16 justify-center items-start relative">
      

      <div className="flex flex-col justify-center items-start w-full col-span-2 ">
          <img src="/assets/title.png" className="h-24 ml-4"></img>
          <p className="text-[10px] text-white font-normal tracking-[4px] -mt-2 mb-12 ml-4">SECURING THE BRIGHTER FUTURE</p>

          <div className=" p-2 pb-8 ml-1">
            <p className="text-xs text-white font:thin text-center">Copyright 2024 Verify. All Rights Reserved.</p>
          </div>
      

        <div className="flex flex-row justify-start items-center gap-8 mt-8">
          <div className="h-4 w-auto">
            <img ></img>
          </div>
          <div className="h-4 w-auto">
            <img ></img>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col justify-center items-start pl-8 pt-4 col-span-1">
        <p className="text-2xl text-gradient mb-8 font-bold">Links</p>
        
        <div className="flex flex-col justify-center items-start gap-4 " >
            <p className="text-sm text-white link">APIs</p>
            <p className="text-sm text-white link">FAQ</p>
            <p className="text-sm text-white link">Tutorials</p>
            <p className="text-sm text-white link">Release Notes</p>
          </div>
        
      </div>


      <div className="flex flex-col justify-center items-start pl-8 pt-4 col-span-1  ">
        <p className="text-2xl text-gradient mb-8 font-bold">Documentation</p>
        
          <div className="flex flex-col justify-center items-start gap-4 " >
            <p className="text-sm text-white link">APIs</p>
            <p className="text-sm text-white link">FAQ</p>
            <p className="text-sm text-white link">Tutorials</p>
            <p className="text-sm text-white link">Release Notes</p>
          </div>
        
      </div>


      <div className="flex flex-col justify-center items-start pl-8 pt-4 col-span-1 ">
        <p className="text-2xl text-gradient mb-8 font-bold">Partnerships</p>
        
          <div className="flex flex-col justify-center items-start gap-4 " >
            <p className="text-sm text-white link">Our Partners</p>
            <p className="text-sm text-white link">Be Our Partner</p>

          </div>
        
      </div>


      <div className="absolute blue-gradient-2 w-[300px] h-[300px] -z-10 -bottom-8 -left-52"></div>
      <div className="absolute lightblue-gradient-2 w-[250px] h-[250px] -z-10 -bottom-8 -left-52"></div>



    </section>

    
  )
}

export default Footer