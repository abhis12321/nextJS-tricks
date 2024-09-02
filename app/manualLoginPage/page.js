"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react'

export default function page() {
    const handleLogin = async(e) => {
        e.preventDefault();
        const payload = {
            username:e.currentTarget.username.value,
            password:e.currentTarget.password.value,
        }
        
        const response = await axios.post("api/auth/manualLogin" , payload)
                                .then(res => res.data)
                                .catch(error => ({ message:`${error.message}` }))
        console.log(response);
        
        
    }
    return (
        <div className="h-[100vh] w-full flex items-center justify-center bg-gray-200">
            <form className='w-full max-w-[500px] mx-auto p-4 flex flex-col gap-[1px] shadow-[0_0_3px_gray] rounded-lg bg-white' onSubmit={handleLogin}>
                <Link href={'/manualLoginPage/accessInfo'} className='text-xl font-serif font-semibold text-blue-700'>access</Link>
                <input type="text" name='username' className='outline-none shadow-[0_0_2px_gray_inset] rounded-md py-2 px-4 focus:bg-green-200 text-center bg-gray-200'  placeholder='username'/>
                <input type="password" name='password' className='outline-none shadow-[0_0_2px_gray_inset] rounded-md py-2 px-4 focus:bg-green-200 text-center bg-gray-200'  placeholder='password'/>
                <input type="submit" value={"login"} className='outline-none shadow-[0_0_2px_gray_inset] rounded-md py-2 px-4 hover:bg-gray-700 bg-gray-500 text-white cursor-pointer' />
            </form>

        </div>
    )
}
