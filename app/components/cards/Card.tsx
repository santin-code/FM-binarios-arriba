import Image from "next/image";
import Link from "next/link";
import Home1 from "./home1.jpg";
import Papeleria from '@/public/imaCards/papeleria.png'
import Perifericos from '@/public/imaCards/perifericos.png'

export default function Card() {
  const cardImages = [
    {
      id: 1,
      href: "/priceshoes",
      src: Home1,
      alt: "imagen d",
      title:'Compra aquí'
    },
    {
      id: 2,
      href: '/perifericos',
      src: Papeleria,
      alt: "imagen de price shoes",
      title:'Perifericos'
    },
    {
      id: 3,
      href: "https://www.google.com",
      src: Perifericos,
      alt: "imagen de price shoes",
      title:'Papeleria'
    },
    {
      id: 4,
      href: "https://www.google.com",
      src: Perifericos,
      alt: "imagen de price shoes",
      title:'Para el hogar'
    },
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8  items-center justify-center mx-auto my-auto   md:mt-14 md:w-11/12">
      {cardImages.map((image) => {
        return (
          <Link
            key={image.id}
            href={image.href}
            className="w-40 h-64 m-2 overflow-hidden flex items-center justify-center w-5/12 md:w-1/6   border-2 border-solid border-sky-700 rounded   md:w-1/4 md:m-4 hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <Image  src={image.src} alt={image.alt} className="h-56 absolute bottom-0 pointer-events-none " />
            <p className=" w-full absolute top-0  text-white flex items-center justify-center text-xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{image.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
