import Image from 'next/image';
import Link from 'next/link';




const Topbar = () => {
    

    return ( 
        <div className=' flex justify-between px-3 pt-3  w-full gap-4 bg-preto-default'>
            <div className='h-[50px] w-[150px] relative'>
                <Image src="/logo-menor.png" fill/>
            </div>
            <div className='flex items-center gap-3 text-yellow-50 font-bold'>
                <Link href="#sobre" className=''>Sobre</Link>
                <Link href="#servicos">Serviços</Link>
                <Link href="#contato">Contato</Link>
                
            </div>
            
        </div>
    );
}

export default Topbar;