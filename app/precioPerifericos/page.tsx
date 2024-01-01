import Example1 from "@/public/perifericos/203453-500-auto.webp";
import Image from "next/image";
import {lobster} from '@/app/ui/fonts'

const calcularPrecio = (precio: number) => {
  const porcentajeAumento = 16;
  const aumento = precio * porcentajeAumento / 100;
  const precioConAumento = precio + aumento + 10;
  return precioConAumento;
};

export default function Perifericos() {
  const perifericos = [
    {
      id: 1,
      imagen: Example1,
      alt: 'alt',
      descripcion: 'Memo Tips Diferentes Colores Medidas:5X5CM',
      idProduct: '99839849398',
      precio: 56.90,
    }
  ]
  
  return (
    <div className="w-11/12 flex mt-2 mb-16 flex-wrap items-center justify-center mx-auto my-auto leading-none pointer-events-none md:mt-2 md:mb-20 md:w-8/12">
      {
        perifericos.map((p)=>{
          const precioConAumento = calcularPrecio(p.precio);
          return(
            <div key={p.id} className="w-1/2 h-72 border-4  border-black bg-white rounded md:w-1/6  ">
            <Image src={p.imagen} alt={p.alt} className=" overflow-hidden w-full" />
          <div className="w-full bg-white leading-6 ">
              <p className={` pl-3 flex items-center text-md  pointer-events-none ${lobster.className}`}> {p.descripcion} </p>
              <p className={`pl-3  w-full flex items-center text-md  pointer-events-3 ${lobster.className}`} > <span>ID:_</span>{p.idProduct}</p>
              <div className="flex m-1 justify-evenly">
                {/* <p className={`  flex items-center justify-center text-lg  text-neutral-400 line-through  pointer-events-none ${lobster.className}`} >$60.90</p> */}
                <p className={`flex items-center justify-center text-xl text-indigo-800 font-black  pointer-events-none ${lobster.className}`} >${precioConAumento.toFixed(2)}</p>
              </div>
          </div>
      </div>
          )
        })
      }
    </div>
    
  );
}
