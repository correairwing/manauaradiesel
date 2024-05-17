import { CircleDollarSignIcon, CrownIcon, TimerIcon } from 'lucide-react';
import Image from 'next/image';
import hero from '../public/hero.jpg'
import fundo from '../public/fundo.jpg'
import Stars from './stars';

const Hero = () => {
    return ( 
        <>
            <div className=''>
                <div className="h-[60vh] lg:h-[70vh]">
                    <Image src={hero} className='block lg:hidden'/>
                    <Image src={fundo} className='hidden lg:block w-full h-full'/>
                </div>
                <div className='flex flex-col py-5 lg:flex-row justify-around'>
                    <div className='flex flex-col items-center bg-branco-default p-5 gap-3'>
                        <CircleDollarSignIcon />
                        <h3>Custo beneficio</h3>
                        <div className='flex'>
                        <Stars />
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-branco-default p-5  gap-3'>
                        <CrownIcon />
                        <h3>Profissionais capacitados</h3>
                        <div className='flex'>
                        <Stars />
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-branco-default p-5 gap-3'>
                        <TimerIcon />
                        <h3>Rapidez na entrega</h3>
                        <div className='flex'>
                        <Stars />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;