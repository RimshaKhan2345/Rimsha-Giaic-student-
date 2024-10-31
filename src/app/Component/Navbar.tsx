"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar =() =>{
    return(
<div>
<nav className="bg-blue-900 text-white h-12 py-2 px-3 flex justify-between items-center">
<div> 
<Link href="/">
                <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="" className="h-7 w-40" />
            </Link>
</div>
    <div  className="w-8/12">
    <ul className="flex items-end justify-end gap-5">
        <li> <Link href="/" className='hover:text-orange-600 font-semibold'>Home</Link></li>
<li> <Link href="/ToyotaCorolla" className='hover:text-orange-600 font-semibold'>Toyoto Corolla</Link></li>
<li> <Link href="/Hondacivic" className='hover:text-orange-600 font-semibold'>Honda civic</Link></li>
<li> <Link href="/Prado" className='hover:text-orange-600 font-semibold'>Prado</Link></li>
    </ul>
    </div>
</nav>
</div>
    ) 
}
export default Navbar