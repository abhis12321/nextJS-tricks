"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const { push } = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);


    useEffect(() => {
        (async () => {
            const { username, error } = await getUser();
            console.log(username, error);

            if (error) {
                push('/manualLoginPage')
            } else {
                setIsAuthorized(true);
            }
        })();
    }, []);
    return (
        <div className="h-[100vh] w-full flex items-center justify-center bg-gray-200">
            {
                isAuthorized ?
                    <div className='w-full max-w-[500px] mx-auto p-4 flex flex-col gap-[1px] shadow-[0_0_3px_gray] rounded-lg bg-white font-bold text-3xl' >
                        very secured and secret user
                    </div>
                    :
                    <h1 className="">loading...</h1>
            }
        </div>
    )
}


async function getUser() {
    const data = await axios.get("/api/auth/manualLogin")
        .then(res => res.data)
        .then(data => data.user)
        .catch(error => ({ username: null, error: error.message }))
    return data;
}