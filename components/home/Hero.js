import Button from "./Button"


const Hero = () => {
  return (
    <div className="grid grid-cols-5 w-full h-[90vh] px-16">

        <div className="flex flex-col justify-center items-center w-full col-span-3 pr-8">
          <img src="/assets/title.png" className="h-44 -mt-16"></img>
          <p className="text-sm text-white font-normal tracking-[10px] mb-16 -mt-4">SECURING THE BRIGHTER FUTURE</p>

          <div className="white-fade h-[2px] w-[90%] mb-8 relative"></div>

          <p>
            SIMPLIFIED <span className="text-gradient-blue font-semibold">AUTHENTICATION</span> WITH OUR CUTTING-EDGE SECURITY SOLUTIONS
          </p>

          <div className="white-fade h-[2px] w-[90%] mt-8 mb-16"></div>

          
          <Button title="EXPLORE"></Button>

        </div>

        <div className="flex flex-col justify-center items-center col-span-2">
          <img src="/assets/banner.png" className="h-[90%] mr-8"></img>
        </div>

        <div className="absolute blue-gradient w-[500px] h-[500px] -z-10 -top-44 -right-16"></div>
        
        <div className="absolute lightblue-gradient w-[300px] h-[300px] -z-10 -top-44 -right-16"></div>
      
        <div className="absolute blue-gradient-2 w-[300px] h-[300px] -z-10 -bottom-96 -left-52"></div>
        
        <div className="absolute lightblue-gradient-2 w-[250px] h-[250px] -z-10 -bottom-96 -left-52"></div>

    </div>
  )
}

export default Hero