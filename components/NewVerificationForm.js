
'use client'
import Link from 'next/link'



import { handleFormLogin } from '@/actions/form-actions'
import { useFormState } from 'react-dom'
import InputOTPForm from './ui/InputOTPForm'


const NewVerificationForm = () => {

  const [formState, formAction] = useFormState(handleFormLogin, {});

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
          <h2 className='text-5xl text-center text-white font-bold mb-2 mt-16'>Log In</h2>
          <p className='text-sm text-center font-light text-neutral-300'>Please complete the verification process.</p>

        
            

          <form className='w-full flex flex-col gap-6 justify-center items-center mt-8 p-8' action={formAction}>
            
            <InputOTPForm></InputOTPForm>

            <button type='submit' className="py-2 w-full rounded-xl bg-[#2dc1d6] text-base font-medium mt-8">
              Submit
            </button>

            <div className='flex flex-row items-center w-full mt-2'>
            <div className='flex-1 border-[1px] border-neutral-500'></div>
              <p className='px-4 text-xs text-neutral-200 font-normal'>OR</p>
              <div className='flex-1 border-[1px] border-neutral-500'></div>
            </div>


            <div className='w-full flex flex-row justify-center items-center gap-2 mb-16'>
                <p className='text-xs font-medium text-white '>Go back to Authentication?</p>
                <Link href={'/auth/login'} className='text-xs font-medium text-[#2dc1d6]'>Log In</Link>
            </div>



          </form>



        </div>
      </div>



    </div>
  )
}

export default NewVerificationForm