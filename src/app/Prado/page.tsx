"use client"
import React from "react"
import Link from "next/link"
import { useRouter} from "next/navigation";
export default function Prado(){
  const router = useRouter();
  return(
      <div className="flex w-auto justify-between items-center h-[100dvh]">
      <Link href="/Prado"></Link>
        <div className="h-auto w-48 border">
            <img src="https://m.media-amazon.com/images/I/81iUjJoYl9L._AC_UL320_.png" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Prado</h4>
            <p className="text-green-600">
              PKR 69.7 - 75.3
            </p>
             <p className="text-blue-600 font-extrabold">
              621 Reviews</p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>

        <div className="flex w-auto justify-between items-center h-[100dvh]">
        <Link href="/Prado"></Link>
          <div className="h-auto w-48 border">
              <img src="https://m.media-amazon.com/images/I/71YB465WIqL._AC_UL320_.jpg" alt="" />
              <h4 className="text-blue-950 font-bold pt-5">Prado</h4>
              <p className="text-green-600">
                PKR 69.7 - 75.8 lacs
              </p>
              <p className="text-blue-600 font-extrabold">
                728 Reviews
              </p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>
            </div>
             <div className="flex w-auto justify-between items-center-[100dvh]">
        <Link href="/Prado"></Link>
          <div className="h-auto w-48 border">
              <img src="https://m.media-amazon.com/images/I/51dE2aORcNL._AC_UL320_.jpg" alt="" />
              <h4 className="text-blue-950 font-bold pt-5">Prado</h4>
              <p className="text-green-600">
                PKR 59.7 - 65.5 lacs
              </p>
              <p className="text-blue-600 font-extrabold">
                421 Reviews
              </p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>

            </div>
            </div>
            )
            }