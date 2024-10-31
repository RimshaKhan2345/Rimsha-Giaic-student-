import React from "react";
import Link from "next/link";

const Herosection=() =>{
    return(
        <div>
<div className="flex justify-center row-span-3 text-blue-700 text-3xl font-extrabold w-full h-60 mt-3 items-center">sell your car on pakwheels and Get the Best Price</div>
<div className="flex w-full justify-between mt-1 ">

<ul>
<li><div className="text-2xl text-blue-700 font-semibold mx-3">Post your Ad on PakWheels</div></li>
<li><p className="font-medium text-xl mx-3 my-3">Post Your Ad for Free in 3 Easy steps</p></li>
<li><p className="font-medium text-xl mx-3 my-3">Get Genuine offers from Verified Buyers</p></li>
<li><p className="font-medium text-xl mx-3 my-3">Sell Your car Fast at the Best Price</p></li>
<li><button className="bg-red-800 text-white cursor-pointer border-2 border-black mx-3">Post Your Ad</button></li>
</ul>

<ul>
   <li><div className="grid-cols-3 text-2xl mx-2 text-blue-700 font-semibold">Try Pakwheels Sell It for Me</div></li>
   <li><p className="font-medium text-xl my-3">Dedicated Sales Export to Sell Your Car</p></li>
   <li><p className="font-medium text-xl my-3">We ensure Safe & Secure Transaction</p></li>
   <li><button className="bg-blue-800 text-white cursor-pointer border-2 border-black my-3">Register Your Car</button></li>
</ul>
    </div>

</div>
    )
}
export default Herosection