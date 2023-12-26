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
      href: "https://google.com",
      image: Urbano,
      alt: "urbano",
    },
    {
      id: 3,
      href: "https://google.com",
      image: Vestir_Casual,
      alt: "vestir casual",
    },
    {
      id: 4,
      href: "https://google.com",
      image: Botas,
      alt: "botas",
    },
    {
      id: 5,
      href: "https://google.com",
      image: Sandalias,
      alt: "sandalias",
    },
    {
      id: 6,
      href: "https://google.com",
      image: Confort,
      alt: "confort",
    },
    {
      id: 7,
      href: "https://google.com",
      image: Abrigador,
      alt: "abrigador",
    },
    {
      id: 8,
      href: "https://google.com",
      image: Ella,
      alt: "ella",
    },
    {
      id: 9,
      href: "https://google.com",
      image: Man,
      alt: "man",
    },
    {
      id: 10,
      href: "https://google.com",
      image: Kids,
      alt: "kids",
    },
    {
      id: 11,
      href: "https://google.com",
      image: Urbano,
      alt: "urbano",
    },
    {
      id: 12,
      href: "https://google.com",
      image: Jeans,
      alt: "jeans",
    },
    {
      id: 13,
      href: "https://google.com",
      image: Accesorios,
      alt: "accesorios",
    },
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
