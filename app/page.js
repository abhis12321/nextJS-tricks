"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();
  
  return (
    <div className="w-full min-h-[100vh] p-4 gap-4 flex items-center justify-center font-medium text-gray-600">
      {
        session ?
          <div className="min-w-[500px] flex flex-col items-start justify-center p-6 gap-4 rounded-lg shadow-[0_0_15px_gray_inset] hover:shadow-[0_0_15px_black_inset]">
            <div className="font-extrabold">You are Signed-in</div>
            <img src={session?.user?.image} alt="" className="rounded-full h-20 w-20 shadow-[0_0_15px_black_inset]" />
            <div className="">Your user-name : <span className="text-red-950 font-bold text-lg"> {session?.user?.name}</span></div>
            <div className="">Your email : <span className="text-red-950 font-bold text-lg"> {session?.user?.email}</span></div>
            <button onClick={() => signOut()} className="rounded-xl px-6 py-[6px] text-sm font-bold bg-green-800/20 ring-2 ring-green-800 text-green-800 hover:bg-green-800 hover:text-white">Sign out</button>
          </div>
          :
          <div className="min-w-[500px] flex flex-col items-center justify-center p-6 gap-4 rounded-lg shadow-[0_0_15px_gray_inset] hover:shadow-[0_0_15px_black_inset]">
            <div className="">Not signed in</div>
            <button onClick={() => signIn()} className="rounded-xl px-6 py-[6px] text-sm font-bold bg-green-800/20 ring-2 ring-green-800 text-green-800 hover:bg-green-800 hover:text-white">Sign in</button>

          </div>
      }
    </div>
  )
}