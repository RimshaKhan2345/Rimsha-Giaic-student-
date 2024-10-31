"use client"
import React from "react";
import Link from "next/link";
import { useRouter} from "next/navigation";
export default function ThankYou(){
    const router= useRouter();
    return(
        <div className="bg-slate-200 mt-10 mb-10 items-center">
            <h1  className="text-center text-orange-500 font-sans text-extrabold text-5xl mt-10 p-2">THANK YOU FOR YOUR SHOPPING</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1  className="text-center text-orange-600 font-mono text-extrabold text-2xl p-2">WE HOPE YOU WILL COME AGAIN FOR SHOPPING</h1>
        </div>
    )
}
