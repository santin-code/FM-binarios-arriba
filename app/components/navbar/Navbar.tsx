'use client'
import {rubik, londrina, lobster} from '@/app/ui/fonts'
import Image from "next/image"
import GifLeagueOfLegends from '@/public/gif_navbar/russian-coat-of-arms-1186369_1280.webp'
import Link from 'next/link'
import { TfiRulerPencil } from "react-icons/tfi";
import { TfiPrinter } from "react-icons/tfi";

export default function Navbar() {
	return(
	<>
		<nav className="w-11/12 mx-auto my-auto mt-2 h-16 bg-black  text-white flex items-center  justify-center md:w-9/12 justify-evenly   ">
		<TfiRulerPencil className={`text-5xl text-teal-100`} />

		{/* <Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={80} height={70} className="rounded w-[65px] mt-2 rounded-lg  h-[72]  pointer-events-none md:w-30  md:h-30 " /> */}
			<Link href='/' onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-5xl md:text-6xl lg:text-7xl text-teal-100 justify-center ${londrina.className} antialiased`}><div className='text-center'><div>A R K A L <br></br> <p className={`text-xl leading-[0] mt-1 mb-1 md:mb-3 ${lobster.className} `}>ciber y Papelería</p></div></div></Link>
			{/* <Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={80} height={70} className="rounded w-24 mt-2 rounded-lg w-[65px] h-[72]  pointer-events-none md:w-30  md:h-30" /> */}
			<TfiPrinter className={`text-5xl text-teal-100`} />

		</nav>
		<div className='w-11/12 border-b-2 border-amber-100 absolute right-0 left-0  mx-auto my-auto mt-3  md:w-8/12 '></div>
	</>)
}
