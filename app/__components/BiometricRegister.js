// 'use client';

// import { useState, useEffect } from "react";
// import LoginID from '@loginid/web-sdk'; // Adjust based on actual export

// export default function BiometricRegister() {  
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginIDData, setLoginIDData] = useState(null);
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const [isLoginIDLoaded, setIsLoginIDLoaded] = useState(false);
//     const [loginIDInstance, setLoginIDInstance] = useState(null);

//     useEffect(() => {
//         // Initialize LoginID SDK
//         try {
//             const instance = new LoginID({
//                 clientId: process.env.NEXT_PUBLIC_LOGINID_CLIENT_ID,
//                 redirectUri: 'https://yourapp.com/auth/callback',
//                 domain: process.env.NEXT_PUBLIC_LOGINID_DOMAIN,
//                 // Additional configurations as per documentation
//             });

//             // Initialize SDK (method depends on SDK)
//             instance.initialize()
//                 .then(() => {
//                     console.log('LoginID SDK initialized successfully.');
//                     setIsLoginIDLoaded(true);
//                     setLoginIDInstance(instance);
//                 })
//                 .catch((initError) => {
//                     console.error('LoginID Initialization Error:', initError);
//                     setError('Failed to initialize authentication service.');
//                 });

//         } catch (initError) {
//             console.error('LoginID Initialization Error:', initError);
//             setError('Authentication service initialization failed.');
//         }
//     }, []);

//     // Handler for successful registration
//     const onRegister = (data) => {
//         setLoginIDData(data);
//         // Perform additional actions like API calls or state updates
//     }

//     // Handler for form submission
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             // Example API call to register the user
//             await register({ email, password, loginIDData });
//             setSuccess(true);
//             setError(null);
//         } catch (err) {
//             console.error('Registration error:', err);
//             setError('Registration failed. Please try again.');
//             setSuccess(false);
//         }
//     }

//     // Registration handler using LoginID SDK
//     const handleLoginIDRegister = async () => {
//         if (!loginIDInstance) {
//             setError('Authentication service is not initialized.');
//             return;
//         }

//         try {
//             const data = await loginIDInstance.register({
//                 email: email,
//                 password: password,
//                 // Additional registration data if required
//             });
//             onRegister(data);
//         } catch (registerError) {
//             console.error('LoginID Registration Error:', registerError);
//             setError('LoginID registration failed.');
//         }
//     };

//     return (
//         <>
//             {isLoginIDLoaded ? (
//                 <form onSubmit={onSubmit} className="w-full max-w-[540px] p-4 md:p-8 shadow-[0_0_2px_gray_inset] focus-within:shadow-cyan-600 rounded-lg flex flex-col gap-4">
//                     <div>
//                         <label htmlFor="email" className="sr-only">Email</label>
//                         <input 
//                             id="email"
//                             type="email" 
//                             name="email" 
//                             placeholder="Enter your email" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="w-full p-2 rounded text-center outline-none ring-1 ring-gray-300 focus:ring-cyan-600"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="sr-only">Password</label>
//                         <input 
//                             id="password"
//                             type="password" 
//                             name="password" 
//                             placeholder="Enter your password" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full p-2 rounded text-center outline-none ring-1 ring-gray-300 focus:ring-cyan-600"
//                         />
//                     </div>
//                     <div>
//                         <input 
//                             type="submit" 
//                             value="Register" 
//                             className="w-full p-2 rounded text-center outline-none ring-1 ring-red-600 bg-red-700 hover:bg-red-600 active:bg-violet-700 text-white cursor-pointer"
//                         />
//                     </div>
                    
//                     {/* LoginID Registration Button */}
//                     <button
//                         type="button"
//                         onClick={handleLoginIDRegister}
//                         className="w-full p-2 mt-4 rounded text-center outline-none ring-1 ring-blue-600 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white cursor-pointer"
//                     >
//                         Register with LoginID
//                     </button>
//                 </form>
//             ) : (
//                 <p>Loading registration form...</p>
//             )}

//             {/* User Feedback */}
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             {success && <p className="text-green-500 mt-2">Registration successful!</p>}
//         </>
//     );
// }

// // Mock register function for demonstration purposes
// async function register(userData) {
//     // Replace this with your actual registration logic/API call
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userData.email && userData.password) {
//                 resolve(true);
//             } else {
//                 reject(new Error('Invalid data'));
//             }
//         }, 1000);
//     });
// }



'use client';

import { useEffect } from "react";
import LoginID from '@loginid/web-sdk';

export default function TestLoginID() {
    useEffect(() => {
        try {
            const instance = new LoginID({
                clientId: process.env.NEXT_PUBLIC_LOGINID_CLIENT_ID,
                redirectUri: 'https://yourapp.com/auth/callback',
                domain: process.env.NEXT_PUBLIC_LOGINID_DOMAIN,
            });

            instance.initialize()
                .then(() => {
                    console.log('LoginID SDK initialized successfully.');
                })
                .catch((error) => {
                    console.error('Initialization Error:', error);
                });
        } catch (error) {
            console.error('Initialization Error:', error);
        }
    }, []);

    return <div>Testing LoginID SDK Initialization</div>;
}

