'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Imagen3 from '../../images/imagen3.png' 
export default function Nodog() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none hidden md:block" alt="заглавное изображение" width={300} height={30} />
        <Image src={Imagen3} onContextMenu={(e) => e.preventDefault()} className="pointer-events-none hidden md:block" alt="заглавное изображение" width={300} height={30} />
      </div>
    </>
  );
}
