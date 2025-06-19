
'use client'
import Link from 'next/link'

import { handleGoogleSignin } from '@/actions/server-actions'
import { handleGitHubSignin } from '@/actions/server-actions'

import { handleFormSignUp } from '@/actions/form-actions'
import { useFormState } from 'react-dom'


const SignupForm = () => {

  const [formState, formAction] = useFormState(handleFormSignUp, {});

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
          <h2 className='text-5xl text-center font-bold mb-2 mt-16'>Sign Up</h2>
          <p className='text-sm text-center font-light text-neutral-300'>Welcome aboard! Please provide your credentials.</p>

          <form className='w-full flex flex-col gap-6 justify-center items-center mt-8 p-8' action={formAction}>
            <div className='form-cell flex flex-col gap-2 w-full'>
              <label htmlFor='name' className='text-sm text-neutral-300'>Name</label>
              <input type='text' id='name' name='name'
                      className='w-full text-white bg-transparent rounded-lg border-[1px] border-neutral-500 pl-4 py-2'></input>
            </div>
            
            <div className='form-cell flex flex-col gap-2 w-full'>
              <label htmlFor='email' className='text-sm text-neutral-300'>Email</label>
              <input type='text' id='email' name='email'
                      className='w-full text-white bg-transparent rounded-lg border-[1px] border-neutral-500 pl-4 py-2'></input>
            </div>

            <div className='form-cell flex flex-col gap-2 w-full'>
              <label htmlFor='password' className='text-sm text-neutral-300'>Password</label>
              <input type='password' id='password' name='password' 
                      className='w-full text-white bg-transparent rounded-lg border-[1px] border-neutral-500 pl-4 py-2'></input>
            </div>


            {
              formState.error && 
                <div className='w-full flex flex-col gap-2'>
                  {
                    Object.keys(formState.error).map(error => ( 
                      <div key={error} className='bg-red-950  border-[1px] border-red-600 rounded-lg py-1 text-xs text-center'>
                        {formState.error[error]}
                      </div>))
                  }
                </div>
            }

            
            {
              formState.success && 

              <div className='bg-green-950  border-[1px] border-green-600 rounded-lg py-1 text-xs text-center w-full'>
                  {formState.success.message}
              </div>


            }


            <button type='submit' className="py-2 w-full rounded-xl bg-[#2dc1d6] text-base font-medium mt-8">
              Sign Up
            </button>

            <div className='flex flex-row items-center w-full mt-2'>
            <div className='flex-1 border-[1px] border-neutral-500'></div>
              <p className='px-4 text-xs text-neutral-200 font-normal'>OR</p>
              <div className='flex-1 border-[1px] border-neutral-500'></div>
            </div>

            <div className='grid grid-cols-2 gap-4 w-full -mt-6'>
              <button onClick={handleGoogleSignin} className="py-2 w-full rounded-xl bg-transparent border-[1px] border-neutral-300 text-base font-medium mt-8 flex flex-row gap-4 justify-center items-center">
                <img src='/images/google.png' className='h-4 w-auto object-cover'></img>
                <p>Google</p>
              </button>

              <button onClick={handleGitHubSignin} className="py-2 w-full rounded-xl bg-transparent border-[1px] border-neutral-300 text-base font-medium mt-8 flex flex-row gap-4 justify-center items-center">
                <img src='/images/github.png' className='h-4 w-auto object-cover'></img>
                <p>GitHub</p>
              </button>

            </div>

            <div className='w-full flex flex-row justify-center items-center gap-2 mb-16'>
                <p className='text-xs font-medium text-white '>Already have an account?</p>
                <Link href={'/auth/login'} className='text-xs font-medium text-[#2dc1d6]'>Log In</Link>
            </div>



          </form>



        </div>
      </div>



    </div>
  )
}

export default SignupForm