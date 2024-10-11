"use client"
import React, { useEffect, useState } from 'react'
import ManualLoginPageForm from './ManualLoginPageForm'
import axios from 'axios';

export default function ManualLoginPageContainer({ tocken }) {
    const [user, setUser] = useState();

    useEffect(() => {
        if (tocken) {
            axios.get("/api/auth/manualLogin")
                .then(res => res.data)
                .then(data => data.user)
                .then(USER => setUser(USER.username))
                .catch(error => console.log(error.message))
        }
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            {
                user ?
                    <div className="" onClick={() => console.log(user)}>Hello user</div>
                    :
                    <ManualLoginPageForm setUser={setUser}/>
            }
        </div>
    )
}
