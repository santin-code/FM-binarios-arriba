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
      href: "https://www.priceshoes.com/catalogos/1130392?section=B%C3%A1sicos",
      image: Winter,
      alt: "winter",
    },
    {
      id: 2,
      href: "https://www.priceshoes.com/catalogos/1122700?section=B%C3%A1sicos",
      image: Urbano,
      alt: "urbano",
    },
    {
      id: 3,
      href: "https://www.priceshoes.com/catalogos/1118022?section=B%C3%A1sicos",
      image: Vestir_Casual,
      alt: "vestir casual",
    },
    {
      id: 4,
      href: "https://www.priceshoes.com/catalogos/1137896?section=B%C3%A1sicos",
      image: Botas,
      alt: "botas",
    },
    {
      id: 5,
      href: "https://www.priceshoes.com/catalogos/1112384?section=B%C3%A1sicos",
      image: Sandalias,
      alt: "sandalias",
    },
    {
      id: 6,
      href: "https://www.priceshoes.com/catalogos/1113185?section=B%C3%A1sicos",
      image: Confort,
      alt: "confort",
    },
    {
      id: 7,
      href: "https://www.priceshoes.com/catalogos/1132682?section=B%C3%A1sicos",
      image: Abrigador,
      alt: "abrigador",
    },
    {
      id: 8,
      href: "https://www.priceshoes.com/catalogos/1112114?section=B%C3%A1sicos",
      image: Ella,
      alt: "ella",
    },
    {
      id: 9,
      href: "https://www.priceshoes.com/catalogos/1122958?section=B%C3%A1sicos",
      image: Man,
      alt: "man",
    },
    {
      id: 10,
      href: "https://www.priceshoes.com/catalogos/1122951?section=B%C3%A1sicos",
      image: Kids,
      alt: "kids",
    },
    {
      id: 11,
      href: "https://www.priceshoes.com/catalogos/1111104?section=B%C3%A1sicos",
      image: Jeans,
      alt: "jeans",
    },
    {
      id: 12,
      href: "https://www.priceshoes.com/catalogos/1126064?section=B%C3%A1sicos",
      image: Accesorios,
      alt: "accesorios",
    },
    {
      id: 13,
      href: "https://www.priceshoes.com/catalogos/1112388?section=B%C3%A1sicos",
      image: Lenceria,
      alt: "lenceria",
    },
    {
      id: 14,
      href: "https://www.priceshoes.com/catalogos/1117177?section=B%C3%A1sicos",
      image: Escolar,
      alt: "escolar",
    },
    {
      id: 15,
      href: "https://www.priceshoes.com/catalogos/1136779?section=B%C3%A1sicos",
      image: Todo_en_uno,
      alt: "todo en uno",
    },
    {
      id: 16,
      href: "https://www.priceshoes.com/catalogos/1131864?section=B%C3%A1sicos",
      image: Kids2,
      alt: "kids 2",
    },
    {
      id: 17,
      href: "https://www.priceshoes.com/catalogos/1135310?section=B%C3%A1sicos",
      image: Todo_hasta_299,
      alt: "todo en uno hasta 299",
    },
    {
      id: 18,
      href: "https://www.priceshoes.com/catalogos/1135314?section=B%C3%A1sicos",
      image: Todo_hasta_499 ,
      alt: "todo en uno hasta 499",
    },
    {
      id: 19,
      href: "https://www.priceshoes.com/catalogos/1132678?section=B%C3%A1sicos",
      image: Caballeros,
      alt: "caballeros",
    }
  ];
  return (
    <div className="w-11/12 md:w-8/12 flex text-white flex-wrap mx-auto my-auto">
      {" "}
      {catalogos.map((catalogo) => {
        return (
          <Link key={catalogo.id} href={catalogo.href} className="w-44 mt-4 rounded-1 flex items-center justify-center" >
            <Image
              src={catalogo.image}
              alt={catalogo.alt}
              className="w-11/12"
            />
          </Link>
        );
      })}
    </div>
  );
}
