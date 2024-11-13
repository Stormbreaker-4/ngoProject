import { useState } from 'react'
import React from 'react'
import axios from 'axios';

const SignupPage = () => {
    const [name, setName] = useState();
    const [pwd, setPwd] = useState();

    const handleChange = (val) => {
        setName(val)        
    }

    const handlePwd = (val) => {
        setPwd(val)        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://localhost:3500/auth/login", { name, pwd })
        console.log(result.data.accessToken);
        localStorage.setItem("accessToken", JSON.stringify(result.data.accessToken));
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In / Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => handleChange(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input type="password" className="w-full p-2 border rounded" value={pwd} onChange={(e) => handlePwd(e.target.value)} />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={(e) => handleSubmit(e)}>
                        Sign In
                    </button>
                    <p className="text-center text-gray-600">
                        Sign Up
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignupPage

