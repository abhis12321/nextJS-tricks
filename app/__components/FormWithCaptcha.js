"use client"
import { useState } from "react"
import Captcha from "./Captcha";

export default function FormWithCaptcha() {
    const [captcha , setCaptcha] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form className="w-full max-w-[500px] p-4 flex flex-col items-center justify-center gap-1 bg-white shadow-[1px_1px_2px_black] rounded-sm" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" className="w-full text-center py-2 px-3 outline-none ring-1 rounded-sm shadow-[0_1px_1px_gray] focus:shadow-[0_1px_1px_black] focus:ring-violet-700 bg-gray-100 focus:bg-blue-100"/>
            <input type="password" name="password" placeholder="password" className="w-full text-center py-2 px-3 outline-none ring-1 rounded-sm shadow-[0_1px_1px_gray] focus:shadow-[0_1px_1px_black] focus:ring-violet-700 bg-gray-100 focus:bg-blue-100"/>
            <input type="submit" value="login" className="w-full text-center py-2 px-3 outline-none ring-1 rounded-sm shadow-[0_1px_1px_gray] hover:shadow-[0_1px_1px_black] hover:ring-violet-700 bg-red-700 hover:bg-red-600 active:bg-orange-600 text-white cursor-pointer" />
            <Captcha onChange={setCaptcha} />
        </form>
    )
}
