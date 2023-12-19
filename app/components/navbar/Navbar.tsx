'use client'
import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import PriceShoes from '@/app/images/priceshoes.png'
import Papeleria from '@/app/images/papeleria.png'
import RobotLearning from '@/app/images/robotlearning.jpeg'
export default function Navbar() {
	return(
	<>
		<nav className="w-full h-16 bg-black  text-white flex items-center  justify-center  ">
		<Image onContextMenu={(e) => e.preventDefault()}  src={Papeleria} alt="price shoes logo" width={70} height={60} className="mr-5 w-12 h-14 rounded pointer-events-none" />
			<div onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-4xl text-slate-200 justify-center ${rubik.className} antialiased pointer-events-none`}> Ciber Arkal</div>
			<div className="flex w-auto h-full items-center justify-center">
				<Image onContextMenu={(e) => e.preventDefault()} src={RobotLearning} alt="price shoes logo" width={70} height={60} className="ml-5 w-11 rounded pointer-events-none" />
			</div>
		</nav>
	</>)
}
