import Contato from "@/components/contato";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Local from "@/components/localizacao";
import Servicos from "@/components/servicos";
import Sobre from "@/components/sobre";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>
        <Hero />
        <section id="sobre"> 
          <Sobre />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="contato">
          <Local />
          <Contato />
        </section>
      </main>
      <Footer />
    </>
  );
} 
