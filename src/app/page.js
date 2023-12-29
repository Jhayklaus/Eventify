"use client";

import Image from "next/image";
import { useState } from "react";
import login from "@/assets/login/login.svg";
import Button from "@/components/baseComponents/Button";
import Link from "next/link";

const Page = () => {

  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (formData.user_email === "" || formData.user_password === "") {
      setLoading(false);
      setIsError(true);
      setError("Please fill in all fields!");

      // SetInterval to reset error state after 3 seconds
      const intervalId = setInterval(() => {
        setIsError(false);
        setError("");
        setLoading(false);
        clearInterval(intervalId); // Clear the interval after resetting the state
      }, 3000);
    } else {
      console.log(formData);
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="lg:px-[80px] px-[40px] flex lg:flex-row flex-col gap-[40px] lg:gap-0 lg:justify-between justify-center items-center h-screen w-full">
        <div className="lg:w-[40%] w-full">
          <Image className="w-full" src={login} alt="onboarding illustration" />
        </div>
        <div className="lg:w-[40%] w-full text-center flex flex-col gap-5">
          <h1 className="font-semibold text-lg lg:text-2xl w-full">
            Welcome, Login to continue
          </h1>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-5"
            >
              {isError && (
                <p className="text-red-500 text-sm font-semibold mt-2 self-start">
                  *{error}
                </p>
              )}
              <input
                onChange={handleChange}
                className={`${
                  isError ? "border-[2px] border-red-500" : ""
                } bg-[#ecebf0] w-full py-4 px-4 focus:outline-none rounded-sm`}
                type="email"
                placeholder="Enter email"
                name="user_email"
                autoComplete="off"
              />
              <input
                onChange={handleChange}
                className={`${
                  isError ? "border-[2px] border-red-500" : ""
                } bg-[#ecebf0] w-full py-4 px-4 focus:outline-none rounded-sm`}
                type="password"
                placeholder="Enter password"
                name="user_password"
                autoComplete="off"
              />
              <p className="cursor-pointer self-end text-xs">
                forgot password?
              </p>
              <Button
                text={loading ? "Loading..." : "Login"}
                customStyle={"bg-[#F5840E] text-white font-semibold mt-4"}
              />

              <p>Don`t have an account? <span className="text-[#F5840E]"><Link href={"/onboard"}>Create one here.</Link></span></p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
