import Imagen3 from './images/imagen3.png'
import Image from 'next/image'
import Marquee from "react-fast-marquee"

export default function Home() {
  return (
    <>
      <Marquee>
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
        <Image src={Imagen3} alt='nodog' width={300} height={30} />
      </Marquee>

    </>
  )
}
