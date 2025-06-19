import React from 'react'
import {auth} from "@/auth"
import { signOut } from '@/auth';

const page = async () => {

    const session = await auth();
  return (
    <div>
        {JSON.stringify(session)}

        <form
        action={async (formData) => {
          "use server"
          await signOut()
        }}
      >
        <button type='submit' className="py-2 w-full rounded-xl bg-[#2dc1d6] text-base font-medium mt-8">
            Sign Out
        </button>
        </form>

    </div>
  )
}

export default page