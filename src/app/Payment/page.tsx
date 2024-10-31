"use client"
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"
export default function Payment(){
    const router = useRouter();
    return(
        <div>
           <h1 className=" UPPERCASE text-blue-800 text-center text-extrabold text-5xl p-2 mt-8">Enter Your Details</h1>
           <form className="flex gap-5 m-3 justify-center items-center flex-col border">
           <input type="Name" className="rounded-2xl w-2/5 border border-yellow-800 p-2" placeholder="Enter Your Name"></input>
           <input type="Email" className=" rounded-2xl w-2/5 border border-yellow-800 p-2"placeholder="Enter Your Email"></input>
           <input type="Password" className=" rounded-2xl w-2/5 border border-yellow-800 p-2"placeholder="Enter Your Password"></input>
           </form>
           <button className="flex justify-centre bg-blue-900 hover:text-orange-600 text-white text-center text-extrabold p-2 mx-10 rounded-xl"onClick={()=>router.push("/ThankYou")}>Place Your Order</button>
        

        </div>
    )
}