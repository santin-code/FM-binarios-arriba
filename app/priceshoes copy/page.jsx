import Link from "next/link";
import {MdMenuBook} from 'react-icons/md'
import {  lobster } from "../ui/fonts";



export default function PriceShoes() {
	 const descriptionCatalogo=[
	 	{
			id: 1,
			href:'/priceshoes/catalogos/empty',
			primer_parrafo: 'Catalogos en linea',
			segundo_parrafo: 'Sin precios',
 		},{
			id: 2,
			href:'/priceshoes/catalogos/full',
			primer_parrafo: 'Catalogos con precios',
			segundo_parrafo: 'descarga gratis',
 		}
	 ]
  return (
    <div className="w-11/12 md:w-8/12 flex flex-col mt-4 mb-4  text-white items-center justify-center mx-auto my-auto">
     {
			descriptionCatalogo.map((e)=>{
				return(
					<Link key={e.id} href={e.href} className="w-9/12 ' bg-gradient-to-r from-violet-500 to-fuchsia-500 ' mt-4 border border-lime-300 rounded flex  flex-col items-center justify-center">
					<MdMenuBook className=' text-6xl mt-4' />
						<p className={`w-full flex items-center justify-center text-3xl text-black font-black ${lobster.className} `} > {e.primer_parrafo} </p>
						<p className={`w-full flex items-center justify-center mb-4 text-3xl text-black font-black ${lobster.className} `} > {e.segundo_parrafo} </p>
					</Link>
				)
			})
		 }

    </div>
  );
}
