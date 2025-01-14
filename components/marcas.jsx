import Image from "next/image";

const Marcas = () => {
    return ( 
        <div>
            <ul className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
                <li className="rounded-full">
                    <Image src="https://docs.manauaradiesel.com.br/ford.jpg" width={200} height={200}/>
                </li>
                <li>
                    <Image src="https://docs.manauaradiesel.com.br/iveco.jpg" width={200} height={200}/>
                </li>
                <li>
                    <Image src="https://docs.manauaradiesel.com.br/mercedes.jpg" width={200} height={200}/>
                </li>
                <li>
                    <Image src="https://docs.manauaradiesel.com.br/scania.jpg" width={200} height={200}/>
                </li>
                <li>
                    <Image src="https://docs.manauaradiesel.com.br/volks.jpg" width={200} height={200}/>
                </li>
                <li>
                    <Image src="https://docs.manauaradiesel.com.br/volvo.jpg" width={200} height={200}/>
                </li>
            </ul>
        </div>
    );
}
 
export default Marcas;