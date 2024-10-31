  "use client"
import React from "react";
import Link from "next/link";
import { useRouter} from "next/navigation";
export default function Home(){
  const router = useRouter();
  return(

<div>
<div className="flex justify-center row-span-3 text-blue-700 text-4xl font-extrabold w-full h-60 mt-3 items-center">Sell your car on pakwheels and Get the Best Price</div>
<div className="flex w-full justify-between mt-1 ">

<ul>
<li><div className="grid-cols-3 text-2xl mx-2 text-blue-700 font-semibold">Post your Ad on PakWheels</div></li>
<li><p className="font-medium text-xl mx-3 my-3">Post Your Ad for Free in 3 Easy steps</p></li>
<li><p className="font-medium text-xl mx-3 my-3">Get Genuine offers from Verified Buyers</p></li>
<li><p className="font-medium text-xl mx-3 my-3">Sell Your car Fast at the Best Price</p></li>
<li><button className="hover:bg-blue-600 bg-rose-600 text-white cursor-pointer border rounded-md mx-3 h-10 w-auto">Post Your Ad</button></li>
</ul>

<ul>
   <li><div className="grid-cols-3 text-2xl mx-2 text-blue-700 font-semibold">Try Pakwheels Sell It for Me</div></li>
   <li><p className="font-medium text-xl my-3">Dedicated Sales Export to Sell Your Car</p></li>
   <li><p className="font-medium text-xl my-3">We Bargain for you and sell at the best price</p></li>
   <li><p className="font-medium text-xl my-3">We ensure Safe & Secure Transaction</p></li>
   <li><button className="hover:bg-rose-600 bg-blue-800 text-white cursor-pointer border rounded-md my-3 h-10 w-auto">Register Your Car</button></li>
</ul>
    </div>
    <div><h1 className="text-blue-900 font-extrabold text-2xl mt-20">Featured New Cars</h1></div>
    <div className="flex justify-around mt-2">
<div><h1 className="flex text-blue-800 font-medium text-2xl">Popular</h1></div>
<div><h1 className="flex text-blue-800 font-medium text-2xl">Up Coming</h1></div>
<div><h1 className="flex text-blue-800 font-medium text-2xl"> Newly Launched Cars</h1></div>
</div>

<div className="flex w-auto justify-evenly bg-blue-200 items-center h-[100dvh] mb-15">
      <Link href="/ToyotoCarolla"></Link>
        <div className="h-auto w-48 border">
            <img src="https://m.media-amazon.com/images/I/61WkzwXVCzL._AC_UL320_.jpg" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">ToyotoCarolla</h4>
            <p className="text-green-600">
              PKR 69.7 - 72.3
            </p>
             <p className="text-blue-600 font-extrabold">
              628 Reviews</p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>

        <div className="flex w-auto justify-evenly items-center h-[100dvh] mx-8 mb-15">
        <Link href="/Hondacivic"></Link>
          <div className="h-auto w-48 border">
              <img src="https://m.media-amazon.com/images/I/61Hq+w9zWeL._AC_UL320_.jpg" alt="" />
              <h4 className="text-blue-950 font-bold pt-5">Honda civic</h4>
              <p className="text-green-600">
                PKR 69.7 - 75.8 lacs
              </p>
              <p className="text-blue-600 font-extrabold">
                653 Reviews</p>
                <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")}>Payment</button>
            </div>

        <div className="flex w-auto justify-evenly items-center h-[100dvh] mx-12 my-3 mb-15">
        <Link href="/Prado"></Link>
          <div className="h-auto w-48 border">
               <img src="https://m.media-amazon.com/images/I/71sQKzfrdeL._AC_SX569_.jpg" alt="" />
          <h4 className="text-blue-950 font-bold pt-5">Prado</h4>
              <p className="text-green-600">
                PKR 59.7 - 65.5 lacs
              </p>
              <p className="text-blue-600 font-extrabold">

                421 Reviews
              </p>
              <button className="bg-orange-600 font-extrabold text-white rounded-md px-2"onClick={()=>router.push("/Payment")} >Payment</button>
            </div>
</div>

            </div>
</div>
</div>
)
}