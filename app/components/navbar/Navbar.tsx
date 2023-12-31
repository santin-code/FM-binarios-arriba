'use client'
import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import GifLeagueOfLegends from '@/public/gif_navbar/lol3.gif'
import Link from 'next/link'
export default function Navbar() {
	return(
	<>
		<nav className="w-11/12 mx-auto my-auto mt-2 h-16 bg-black  text-white flex items-center  justify-center md:w-9/12 justify-evenly   ">
		<Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={70} height={60} className="rounded w-24 mt-2 rounded-lg  h-20  pointer-events-none md:w-30  md:h-30 " />
			<Link href='/' onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-5xl md:text-6xl lg:text-7xl text-cyan-200 justify-center ${rubik.className} antialiased`}>Arkal</Link>
			<Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={70} height={60} className="rounded w-24 mt-2 rounded-lg  h-20  pointer-events-none md:w-30  md:h-30" />
		</nav>
		<div className='w-11/12 border-b-2 border-sky-700 absolute right-0 left-0  mx-auto my-auto mt-3  md:w-8/12 '></div>
	</>)
}
