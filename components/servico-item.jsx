const ServicoItem = () => {
    return ( 
        <div>
            <ul className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
                <li className="bg-slate-300 rounded-full text-nowrap flex items-center p-5 font-semibold">Diagnóstico computadorizado</li>
                <li className="bg-slate-300 rounded-full text-nowrap flex items-center p-5 font-semibold">Reparo em bombas injetoras</li>
                <li className="bg-slate-300 rounded-full text-nowrap flex items-center p-5 font-semibold">Reparo em bicos injetores</li>
                <li className="bg-slate-300 rounded-full text-nowrap flex items-center p-5 font-semibold">Reparo em turbinas</li>
                <li className="bg-slate-300 rounded-full text-nowrap flex items-center p-5 font-semibold">Reparo em unidades UIS-UPS</li>
            </ul>
        </div>
     );
}
 
export default ServicoItem;