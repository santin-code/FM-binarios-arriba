import Image from "next/image";
import Link from "next/link";
import Home1 from './home1.jpg'

export default function Card() {
	const cardImages = [
		{
			id: 1,
			href: 'https://www.google.com',
			src: Home1,
			alt: 'imagen d'
		}, {
			id: 2,
			href: 'https://www.google.com',
			src: Home1,
			alt: 'imagen de price shoes'
		}, {
			id: 3,
			href: 'https://www.google.com',
			src: Home1,
			alt: 'imagen de price shoes'
		}, {
			id: 4,
			href: 'https://www.google.com',
			src: Home1,
			alt: 'imagen de price shoes'
		}
	];

	return (
		<div className=" flex flex-wrap w-full  h-full items-center justify-center mx-auto my-auto mt-5 md:mt-8 md:w-11/12">
			{
				cardImages.map((image) => {
					return (
						<Link key={image.id} href={image.href} className="w-5/12 m-2 border-2 border-solid border-lime-300 rounded-3xl  md:w-1/4 " >
							<Image src={image.src} alt={image.alt} className=" rounded-3xl" />
						</Link>
					)
				})
			}
		</div>
	);
}
