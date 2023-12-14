import Imagen3 from '@/app/images/imagen3.png'
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function Home() {
  return (
    <>
  <Marquee>
  
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
         <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
         <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
  </Marquee>
  
  
    </>
  )
}
