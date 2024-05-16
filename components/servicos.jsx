import Marcas from "./marcas";
import ServicoItem from "./servico-item";

const Servicos = () => {
    return ( 
        <>
            <div className="py-4 border-t-2">
                <h3 className="flex justify-center font-bold mb-5">Serviços</h3>
                <div className="mb-5">
                    <ServicoItem />
                </div>
                <div className="flex gap-4">
                    <Marcas />
                </div>
            </div>
        </>
    );
}

export default Servicos;