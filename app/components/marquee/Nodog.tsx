'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Imagen3 from '../../images/imagen3.png' 
export default function Nodog() {
  return (
    <>
      <Marquee >
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
      </Marquee>
    </>
  );
}
