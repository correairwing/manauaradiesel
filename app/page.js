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
      <Topbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Local />
      <Contato />
      <Footer />
    </>
  );
} 
