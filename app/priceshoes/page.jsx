import Link from "next/link";
import Image from "next/image";
import Winter from "@/public/catalogos/winter.jpg";
import Urbano from "@/public/catalogos/urbano.jpg";
import Vestir_Casual from "@/public/catalogos/vestir_casual.jpg";
import Botas from "@/public/catalogos/botas.jpg";
import Sandalias from "@/public/catalogos/sandalias.jpg";
import Confort from "@/public/catalogos/confort.jpg";
import Abrigador from "@/public/catalogos/abrigador.jpg";
import Ella from "@/public/catalogos/ella.jpg";
import Man from "@/public/catalogos/man.jpg";
import Kids from "@/public/catalogos/kids.jpg";
import Jeans from "@/public/catalogos/jeans.jpg";
import Accesorios from "@/public/catalogos/accesorios.jpg";
import Navidad from "@/public/catalogos/navidad.jpg";
import Navidad2 from "@/public/catalogos/navidad2.jpg";
import Lenceria from "@/public/catalogos/lenceria.jpg";
import Escolar from "@/public/catalogos/escolar.jpg";
import Todo_en_uno from "@/public/catalogos/todo_en_uno.jpg";
import Kids2 from "@/public/catalogos/kids2.jpg";
import Todo_hasta_299 from "@/public/catalogos/todo_hasta-299.jpg";
import Todo_hasta_499 from "@/public/catalogos/todo_hasta_499.jpg";
import Caballeros from "@/public/catalogos/caballeros.jpg";

export default function PriceShoes() {
  const catalogos = [
    {
      id: 1,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1130392?section=Carrito&pageNumber=0&productId=&catalogUUID=5c5d0b02-1116-4744-a44c-03130e41493b",
      image: Winter,
      alt: "winter",
    },
    {
      id: 2,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1122700?section=Carrito&pageNumber=0&productId=&catalogUUID=dda05083-3f8c-4960-be44-e2d6b09f88ec",
      image: Urbano,
      alt: "urbano",
    },
    {
      id: 3,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1118022?section=Carrito&pageNumber=0&productId=&catalogUUID=3d03e4f3-362d-48ba-8005-70cd302bf84a",
      image: Vestir_Casual,
      alt: "vestir casual",
    },
    {
      id: 4,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1137896?section=Carrito&pageNumber=0&productId=&catalogUUID=bbfefbd0-c974-41f0-868c-824edd420a1d",
      image: Botas,
      alt: "botas",
    },
    {
      id: 5,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1112384?section=Carrito&pageNumber=0&productId=&catalogUUID=d186dfaf-21f6-48df-8480-ed2b85bf78e6",
      image: Sandalias,
      alt: "sandalias",
    },
    {
      id: 6,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1113185?section=Carrito&pageNumber=0&productId=&catalogUUID=91a5e6e2-937d-484b-be3d-0c6df233d815",
      image: Confort,
      alt: "confort",
    },
    {
      id: 7,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1132682?section=Carrito&pageNumber=0&productId=&catalogUUID=8762f1df-51b9-4aa1-975d-3f2b6b230774",
      image: Abrigador,
      alt: "abrigador",
    },
    {
      id: 8,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1112114?section=Carrito&pageNumber=0&productId=&catalogUUID=d1d0b4f0-3cd1-431e-ba98-3f10bb6d4dcd",
      image: Ella,
      alt: "ella",
    },
    {
      id: 9,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1122958?section=Carrito&pageNumber=0&productId=&catalogUUID=9567699b-b0c2-42dc-9be9-c58786cdc1b5",
      image: Man,
      alt: "man",
    },
    {
      id: 10,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1122951?section=Carrito&pageNumber=0&productId=&catalogUUID=8be7614c-698b-461b-ac7c-cb36c93026ad",
      image: Kids,
      alt: "kids",
    },{
      id: 12,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1111104?section=Carrito&pageNumber=0&productId=&catalogUUID=56271a31-d910-4919-a30f-50c3d101b453",
      image: Jeans,
      alt: "jeans",
    },
    {
      id: 13,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1126064?section=Carrito&pageNumber=0&productId=&catalogUUID=2f0a241e-793f-47c5-8dba-44be8ab53558",
      image: Accesorios,
      alt: "accesorios",
    },
    {
      id: 14,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1112388?section=Carrito&pageNumber=0&productId=&catalogUUID=5ee3130d-5a4d-4ad2-bfd1-3255ede2eea2",
      image: Lenceria,
      alt: "lenceria",
    },
    {
      id: 15,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1117177?section=Carrito&pageNumber=0&productId=&catalogUUID=c6295801-2ada-4af4-b686-05d83a3897a3",
      image: Escolar,
      alt: "escolar",
    },
    {
      id: 16,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1136779?section=Carrito&pageNumber=0&productId=&catalogUUID=4835a87a-a42b-4dc5-b876-052cf357b942",
      image: Todo_en_uno,
      alt: "todo en uno",
    },
    {
      id: 17,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1131864?section=Carrito&pageNumber=0&productId=&catalogUUID=f926a3b0-203d-4585-973d-e39118d82d8b",
      image: Kids2,
      alt: "kids 2",
    },
    {
      id: 18,
      href: "https://www.priceshoes.com/catalogos/1135310?section=B%C3%A1sicos",
      image: Todo_hasta_299,
      alt: "todo en uno hasta 299",
    },
    {
      id: 19,
      href: "https://www.priceshoes.com/catalogos/1135314?section=B%C3%A1sicos",
      image: Todo_hasta_499,
      alt: "todo en uno hasta 499",
    },{
      id: 20,
      href: "https://www.priceshoes.com/tienda/gregoriosantin/catalogos/1132678?section=Carrito&pageNumber=0&productId=&catalogUUID=0b166d68-bf96-413a-93b0-af5f8e9be804",
      image: Caballeros,
      alt: "caballeros",
    },
  ];
  return (
   <div className="mb-16 md:mb-20">
     <div className="w-11/12 md:w-8/12  flex items-center justify-evenly text-white flex-wrap mx-auto my-auto">
      {" "}
      {catalogos.map((catalogo) => {
        return (
          <Link key={catalogo.id} href={catalogo.href} className="w-40    mt-4 rounded-1 flex items-center justify-center md:w-1/3 " >
            <Image
              src={catalogo.image}
              alt={catalogo.alt}
              className="w-11/12 h-52 md:h-96"
            />
          </Link>
        );
      })}
    </div>
   </div>
  );
}
