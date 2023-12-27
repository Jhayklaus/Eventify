"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import login from '@/assets/login/illustration.svg'
import Button from '@/components/baseComponents/Button'

const page = () => {

  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    // Your form submission logic here
  };


  return (
    <main className="px-[80px] flex lg:flex-row flex-col justify-between items-center h-screen w-full">
      <div className="lg:w-[40%] w-full">
        <Image className="w-full" src={login} alt="onboarding illustration" />
      </div>
      <div className="lg:w-[40%] w-full text-center flex flex-col gap-5">
        <h1 className="font-semibold text-2xl">
          Welcome, Login to continue
        </h1>


        <div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
            <input onChange={handleChange} className='bg-[#ecebf0] w-full py-4 px-4 focus:outline-none rounded-sm' type='email' placeholder='Enter email' name='email' value={formData.email} autoComplete='off' />
            <input onChange={handleChange} className='bg-[#ecebf0] w-full py-4 px-4 focus:outline-none rounded-sm' type='password' placeholder='Enter password' name='password' value={formData.password} autoComplete='off' />
            <Button text={loading ? "Loading..." : "Login"} customStyle={"bg-[#F5840E] text-white font-semibold mt-4"} />
            <p className='cursor-pointer self-end text-xs'>forgot password?</p>
          </form>
        </div>

      </div>
    </main>
  )
}

export default page
