"use client"
import React from "react"
import Link from "next/link"
import { useRouter} from "next/navigation";
export default function Hondacivic(){
  const router = useRouter();
  return(
      <div className="flex w-auto justify-between items-center h-[100dvh]">
      <Link href="/Honda civic"></Link>
        <div className="h-auto w-48 border border-gray-300">
            <img src="https://m.media-amazon.com/images/I/61i6suovxpL._AC_UL320_.jpg" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Honda civic</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5
            </p>
             <p className="text-blue-600 font-extrabold">
              621 Reviews</p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>

        <div className="flex w-auto justify-between items-center h-[100dvh]">
        <Link href="/Honda civic"></Link>
          <div className="h-auto w-48 border border-gray-300">
              <img src="https://m.media-amazon.com/images/I/71kclveNi0L._AC_UL320_.jpg" alt="" />
              <h4 className="text-blue-950 font-bold pt-5">Honda civic</h4>
              <p className="text-green-600">
                PKR 59.7 - 75.5 lacs
              </p>
              <p className="text-blue-600 font-extrabold">
                628 Reviews
              </p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
        <div>
            
        </div>

            </div>
            </div>
             <div className="flex w-auto justify-between items-center-[100dvh]">
        <Link href="/Honda civic"></Link>
          <div className="h-auto w-48 border border-gray-300">
              <img src="https://m.media-amazon.com/images/I/61GMy59enqL._AC_UL320_.jpg" alt="" />
              <h4 className="text-blue-950 font-bold pt-5">Honda civic</h4>
              <p className="text-green-600">
                PKR 59.7 - 64.5 lacs
              </p>
              <p className="text-blue-600 font-extrabold">
                670 Reviews
              </p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>
            
            </div>
            </div>
            )
            }
