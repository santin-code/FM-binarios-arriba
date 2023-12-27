'use client'
import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import GifLeagueOfLegends from '@/public/gif_navbar/LeagueOfLegends.gif'
import Link from 'next/link'
export default function Navbar() {
	return(
	<>
		<nav className="w-11/12 mx-auto my-auto mt-4 h-16 bg-black  text-white flex items-center  justify-center   ">
		<Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={70} height={60} className="rounded w-28  h-28  pointer-events-none " />
			<Link href='/' onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-5xl md:text-6xl lg:text-7xl text-slate-400 justify-center ${rubik.className} antialiased`}>ARKAL</Link>
			<Image onContextMenu={(e) => e.preventDefault()}  src={GifLeagueOfLegends} alt="price shoes logo" width={70} height={60} className="rounded w-28  h-28  pointer-events-none " />
		</nav>
		<div className='w-11/12 border-b-2 border-amber-400 absolute right-0 left-0  mx-auto my-auto mt-1  md:w-8/12 '></div>
	</>)
}
