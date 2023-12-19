import Image from "next/image"
import Nodog from "../components/marquee/Nodog"
import Navbar from "../components/navbar/Navbar"
import Ulk from '@/app/images/robotlearning.jpeg'
export default function Page(){
    const delay = ()=>{
        setTimeout(()=>{console.log('delay')}, 11000)
    }
    delay();
    return(
        
        <div>
            {
                delay()
            }
            <Nodog />
            <Navbar />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
            <Image  src={Ulk} width={500} height={500} alt="jdnsn"  />
        </div>
    )
}