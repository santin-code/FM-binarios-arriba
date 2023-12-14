import Imagen1 from './images/imagen1.png'
import Imagen2 from '@/app/images/imagen2.png'
import Imagen3 from '@/app/images/imagen3.png'
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function Home() {
  return (
    <>
  <Marquee>
    <Image src={Imagen1}
    width={150}
    height={45}
    alt="image1"/>
    <Image src={Imagen2}
    width={330}
    height={45}
    alt="image2"/>
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
        <Image src={Imagen1}
    width={150}
    height={45}
    alt="image1"/>
    <Image src={Imagen2}
    width={330}
    height={45}
    alt="image2"/>
     <Image src={Imagen3}
    width={320}
    height={45}
    alt="image3"/>
  </Marquee>
  
    </>
  )
}
