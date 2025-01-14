import { CircleDollarSignIcon, CrownIcon, TimerIcon } from 'lucide-react';

import Stars from './stars';

const Hero = () => {
    return ( 
        <>
            <div className=''>
                <div className="h-[60vh] lg:h-[70vh]">
                    <img src="https://docs.manauaradiesel.com.br/hero.jpg" className='block lg:hidden w-full h-full'/>
                    <img src="https://docs.manauaradiesel.com.br/fundo.jpg"  className='hidden lg:block w-full h-full' />
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