import Image from "next/image";
import dog1 from "../../assets/about-1.png";
import dog2 from "../../assets/about-2.png";
import Botao from "../hero/Botao";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#fdf6ec]  py-16">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
          <div className="relative">
            <div className="relative  w-full h-[400px] rounded 3xl overflow-hidden   ">
              <Image
                src={dog1}
                alt="doguinho fofo"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4  -bottom-8 rounded-lg overflow-hidden border-4 border-white ">
              <Image
                src={dog2}
                alt="doguinho fofo"
                fill
                quality={100}
                priority
                className="object-cover "
              />
            </div>
          </div>
          <div className="space-y-6 mt-6">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Na PetCare, nossa missão é proporcionar o melhor cuidado para o
              seu pet. Com anos de experiência no setor, entendemos que cada
              animal é único e merece atenção personalizada. Nossa equipe de
              profissionais é dedicada a oferecer serviços de alta qualidade,
              desde consultas veterinárias até cuidados diários, garantindo que
              seu amigo de quatro patas esteja sempre saudável e feliz.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">Aberto desde 2015</li>
              <li className="flex items-center gap-2">
                Equipe com mais de 10 funcionários
              </li>
              <li className="flex items-center gap-2">
                Qualidade é a nossa prioridade
              </li>
            </ul>
            <div className="flex gap-2">
              <Botao texto="Contate via Whatsapp" />
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPinIcon size={12} weight="fill" className="text-red-500" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
