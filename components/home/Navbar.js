
import Link from "next/link"
import { auth } from "@/auth";
import { signOut } from "@/auth";


const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex flex-row justify-between items-center px-16 h-[10vh]">
        <Link className="h-20 w-auto flex justify-center items-center" href={'/'}>
          <img src="/assets/logo.png" className="object-cover h-8 w-auto hover:scale-110 transition-all duration-300 ease-out"></img>
          
        </Link>

        <div className="flex flex-row gap-16 justify-center ">
          <Link className="hover:scale-110 hover:text-[#2dc1d6] transition-all duration-300 ease-out text-sm" href={'/'}>
            Home
          </Link>

          <Link className="hover:scale-110 hover:text-[#2dc1d6] transition-all duration-300 ease-out text-sm" href={'/'}>
            Client
          </Link>

          <Link className="hover:scale-110 hover:text-[#2dc1d6] transition-all duration-300 ease-out text-sm" href={'/'}>
            Admin
          </Link>



          
          <form
            action={async (formData) => {
              "use server"
              await signOut();
            }}
            >
            <button type='submit' className="hover:scale-110 hover:text-[#2dc1d6] transition-all duration-300 ease-out text-sm">
                Sign Out
            </button>
          </form>

          





          
        </div>





    </div>
  )
}

export default Navbar