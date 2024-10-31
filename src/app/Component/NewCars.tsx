import React from "react"
import Link from "next/link"
const NewCars = () => {
  return (
        <div className="flex w-full justify-around items-center h-[100dvh]">
      <Link href="/toyota-corolla"></Link>
        <div className="h-auto w-48 border">
            <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Toyota Corolla</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5 lacs
            </p>
            <p className="text-slate-400">
              621 Reviews
            </p>
            </div>
            
            </div>

  )
}
export default NewCars