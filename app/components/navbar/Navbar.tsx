import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import PriceShoes from '@/app/images/priceshoes.png'
import Papeleria from '@/app/images/papeleria.png'
export default function Navbar() {
	return(
	<>
		<nav className="w-full h-16 bg-black  text-white flex items-center  justify-center  ">
		<Image src={Papeleria} alt="price shoes logo" width={150} height={60} className="mr-5 w-12 h-14 rounded" />
			<div className={`flex w-auto h-full items-center text-4xl text-slate-200 justify-center ${rubik.className} antialiased`}> Ciber Arkal</div>
			<div className="flex w-auto h-full items-center justify-center">
				<Image src={PriceShoes} alt="price shoes logo" width={150} height={60} className="ml-5 w-20 rounded-full" />
			</div>
		</nav>
	</>)
}
