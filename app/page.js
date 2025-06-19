import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-pic flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-end relative h-72">
        <img src="/images/logo.png" className="w-64 object-cover overflow-hidden mb-12 -mr-14" />
        <h1 className="title-text text-white font-bold">ERIFY</h1>
      </div>
      <p className="text-lg text-white text-center font-light tracking-[10px] -mt-6 ml-2 mb-16">
        SECURING THE BRIGHTER FUTURE
      </p>

      <Link href="/auth/login">
        <button className="py-4 px-16 rounded-xl blue-gradient text-lg font-bold">
          Authenticate
        </button>
      </Link>
    </div>
  );
}
