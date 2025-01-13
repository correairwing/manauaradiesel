import Link from "next/link";

const Contato = () => {
    return ( 
        <div className="mt-5 container">
            <h3 className="flex justify-center font-bold my-5">Contato</h3>
            <div class="whatsapp-button-container">
                <Link href="https://wa.me/559281757896?text=Olá%20gostaria%20de%20mais%20informações" class="whatsapp-button" target="_blank">
                    Conversar no WhatsApp
                </Link>
            </div>
            <div className="p-5">
                <div id="email" class="contact-form-container">
                    <form action="mailto:adm.contato@manauaradiesel.com" method="post" enctype="text/plain">
                        <h2 className="font-semibold">Ou se preferir:</h2>
                        <label for="email">Seu E-mail:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="5" required placeholder="Digite sua mensagem."></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contato;