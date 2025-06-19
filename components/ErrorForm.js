
'use client'
import Link from 'next/link'


const ErrorForm = () => {

  

  return (
    <div className='w-full h-[100vh] flex flex-row '>

      <div className='w-[50%] h-full bg-pic-2 flex justify-center items-center'>
        
        <div className=' z-10'>
            <div className="flex flex-row justify-center items-end relative h-72">
              <img src="/images/logo.png" className="w-64 object-cover overflow-hidden mb-12 -mr-14" />
              <h1 className="title-text text-white font-bold">ERIFY</h1>
            </div>
            <p className="text-lg text-white text-center font-light tracking-[10px] -mt-6 ml-2 mb-16">
              SECURING THE BRIGHTER FUTURE
            </p>
          </div>
      </div>



      <div className='w-[50%] h-[100vh] black-gradient flex justify-center items-center overflow-y-auto'>
        <div className='flex flex-col w-full h-full justify-center items-center px-16 mt-16'>
          <h2 className='text-5xl text-center font-bold mb-2 mt-16'>Error</h2>
          <p className='text-sm text-center font-light text-neutral-300 mb-16'>Oops! Something went wrong</p>

            <div className='w-full flex flex-row justify-center items-center gap-2 mb-16'>
                <p className='text-xs font-medium text-white '>Please try again</p>
                <Link href={'/auth/login'} className='text-xs font-medium text-[#2dc1d6]'>Log In</Link>
            </div>



          



        </div>
      </div>



    </div>
  )
}

export default ErrorForm