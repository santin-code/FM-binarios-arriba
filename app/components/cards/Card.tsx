import Image from "next/image";
import Link from "next/link";
import Home1 from "./home1.jpg";

export default function Card() {
  const cardImages = [
    {
      id: 1,
      href: "/priceshoes",
      src: Home1,
      alt: "imagen d",
    },
    {
      id: 2,
      href: "https://drive.google.com/drive/folders/1yNGk4SquhtEIjf6pK-_uzfCnKQZ5lAZ1?usp=sharing",
      src: Home1,
      alt: "imagen de price shoes",
    },
    {
      id: 3,
      href: "https://www.google.com",
      src: Home1,
      alt: "imagen de price shoes",
    },
    {
      id: 4,
      href: "https://www.google.com",
      src: Home1,
      alt: "imagen de price shoes",
    },
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8  items-center justify-center mx-auto my-auto   md:mt-14 md:w-11/12">
      {cardImages.map((image) => {
        return (
          <Link
            key={image.id}
            href={image.href}
            className="w-40 m-2 overflow-hidden flex items-center justify-center w-5/12 md:w-1/6   border-2 border-solid border-lime-300 rounded-3xl   md:w-1/4 md:m-4 hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <Image src={image.src} alt={image.alt} className=" rounded-3xl" />
          </Link>
        );
      })}
    </div>
  );
}
