"use client"

import React from "react";
import Image from "next/image";
import onboard from "@/assets/onboarding/illstr.svg";
import { UsersIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Onboard = () => {


    let router = useRouter();

    const pushUser = () => {
        router.push('/user-signup')
    }

    const pushManager = () => {
        router.push('/manager-signup')
    }

  return (
    <main className="px-[80px] flex lg:flex-row flex-col justify-between items-center h-screen w-full">
      <div className="lg:w-[45%] w-full">
        <Image className="w-full" src={onboard} alt="onboarding illustration" />
      </div>
      <div className="lg:w-[45%] w-full text-center flex flex-col gap-5">
        <h1 className="font-bold text-2xl">
          Welcome to <span className="text-[#F5840E]">Eventify.</span>
        </h1>
        <p className="text-[#2D2B2E]">
          your go-to platform for seamless event management! Get ready to
          elevate your event planning experience, Select a role below to
          help you get started.
        </p>
        <div className="flex lg:flex-row flex-col justify-center gap-7 mt-5 w-full">
          <div onClick={pushUser} className="w-[40%] flex flex-col gap-3 items-center border-[1px] bg-[#ebb98721] border-[#F5840E] py-7 px-4 rounded-md cursor-pointer hover:-translate-y-1 hover:scale-110 hover:shadow-lg transition ease-in-out delay-150 duration-300">
            <UsersIcon className="h-10 w-10 text-[#F5840E]" />
            <p className="font-normal text-[#F5840E]">Eventify for users and guests</p>
          </div>
          <div onClick={pushManager} className="w-[40%] flex flex-col gap-3 items-center border-[1px] bg-[#ebb98721] border-[#F5840E] py-7 px-4 rounded-md cursor-pointer hover:-translate-y-1 hover:scale-110 hover:shadow-lg transition ease-in-out delay-150 duration-300">
            <HomeModernIcon className="h-10 w-10 text-[#F5840E]" />
            <p className="font-normal text-[#F5840E]">Eventify for Event managers and planners</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboard;
