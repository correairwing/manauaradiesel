import Image from "next/image";


const Sobre = () => {
    return ( 
        <>
            <div className="lg:flex container justify-around items-center">
                <div className="">
                    <Image src="/oficina-frente.jpg" width={450} height={380}/>
                </div>
                <div className="flex flex-col gap-5 px-5 my-4 text-justify lg:max-w-[740px]">
                    <h4 className="font-bold">Manauara Diesel - Especialistas em Motores Diesel</h4>

                    <span>Localizada estrategicamente na Av. Atlântica, no bairro Raiz, em Manaus, Amazonas, a Manauara Diesel tem sido a referência confiável em serviços de qualidade para motores diesel desde 2015.</span>

                    <span>Nossa equipe altamente treinada e experiente oferece uma gama completa de serviços especializados para atender às necessidades dos nossos clientes. Do diagnóstico veicular computadorizado à reparação detalhada de bicos e bombas injetoras a diesel, passando pela restauração de turbinas e unidades UIS-UPS, até o meticuloso reparo de sistemas common rail e bombas de alimentação, estamos equipados para lidar com qualquer desafio que seu veículo possa enfrentar.</span>

                    <span>Estamos prontos para atender a todos os modelos e fabricantes. Nossa abordagem centrada no cliente garante que cada veículo receba o cuidado e a atenção especializada de que necessita, mantendo-o funcionando com eficiência máxima.</span>

                    <span>Combinando conhecimento técnico de ponta com um compromisso inabalável com a excelência, somos sua escolha número um para todas as suas necessidades de motor diesel.</span>

                    <span className="font-semibold">Escolha a Manauara Diesel - onde a qualidade e o desempenho se encontram.</span>
                </div>
            </div>
        </>
    );
}
 
export default Sobre;