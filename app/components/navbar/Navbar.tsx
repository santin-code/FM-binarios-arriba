'use client'
import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import Papeleria from '@/app/images/papeleria.png'
import RobotLearning from '@/app/images/robotlearning.jpeg'
import Link from 'next/link'
export default function Navbar() {
	return(
	<>
		<nav className="w-11/12 mx-auto my-auto mt-4 h-16 bg-black  text-white flex items-center  justify-center   ">
		<Image onContextMenu={(e) => e.preventDefault()}  src={Papeleria} alt="price shoes logo" width={70} height={60} className="mr-5 w-12  h-14 rounded pointer-events-none md:mr-14" />
			<Link href='/' onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-4xl md:text-6xl lg:text-7xl text-slate-200 justify-center ${rubik.className} antialiased`}> Ciber Arkal</Link>
			<div className="flex w-auto h-full items-center justify-center">
				<Image onContextMenu={(e) => e.preventDefault()} src={RobotLearning} alt="price shoes logo" width={70} height={60} className="ml-5 w-11 rounded pointer-events-none md:ml-14" />
			</div>
		</nav>
		<div className='w-11/12 border-b-2 border-lime-300  mx-auto my-auto mt-1 bg-lime-300 md:w-8/12 '></div>
	</>)
}
