import Image from "next/image";
import ford from '../public/ford.jpg'
import iveco from '../public/iveco.jpg'
import mercedes from '../public/mercedes.jpg'
import scania from '../public/scania.jpg'
import volks from '../public/volks.jpg'
import volvo from '../public/volvo.jpg'

const Marcas = () => {
    return ( 
        <div>
            <ul className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
                <li className="rounded-full">
                    <Image src={ford}/>
                </li>
                <li>
                    <Image src={iveco}/>
                </li>
                <li>
                    <Image src={mercedes}/>
                </li>
                <li>
                    <Image src={scania}/>
                </li>
                <li>
                    <Image src={volks}/>
                </li>
                <li>
                    <Image src={volvo}/>
                </li>
            </ul>
        </div>
    );
}
 
export default Marcas;