import Link from "next/link";
import Home1 from "./home1.jpg";
import Papeleria from '@/public/imaCards/papeleria.png'
import Perifericos from '@/public/imaCards/perifericos.png'
import { londrina } from '@/app/ui/fonts'
import { GiNotebook } from "react-icons/gi";


export default function Card() {
  const cardIcon = [
    {
      id: 1,
      href: "/priceshoes",
      src: Home1,
      nameIcon: `${<GiNotebook />}`,
      title: 'Compra aquí'
    },
    {
      id: 2,
      href: '/perifericos',
      src: Papeleria,
      nameIcon: "imagen de price shoes",
      title: 'Perifericos'
    },
    {
      id: 3,
      href: "https://www.google.com",
      src: Perifericos,
      nameIcon: "imagen de price shoes",
      title: 'Papeleria'
    },
    {
      id: 4,
      href: "https://www.google.com",
      src: Perifericos,
      nameIcon: "imagen de price shoes",
      title: 'Para el hogar'
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className=" flex flex-wrap w-full mt-1  items-center justify-center mx-auto my-auto   md:mt-14 md:w-11/12">
        {cardIcon.map((icon) => {
          return (
            <Link
              key={icon.id}
              href={icon.href}
              className=" transform hover:scale-105 transition duration-100 ease-in-out "
            >
              <div className="border border-white  w-[8rem] h-[8rem] mx-[4px] rounded ">
              <div className="text-white">{icon.nameIcon}</div>
                <div className={`text-white ${londrina.className}`}>{icon.title}</div>
              </div>

            </Link>
          );
        })}
      </div>

    </div>
  );
}
