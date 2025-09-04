import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogHero from "../../assets/hero-dog.webp";
import catImage from "../../assets/cat-hero.png";
import Image from "next/image";
import Botao from "./Botao";

export default function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">
      {/* 🔹 Imagem no fundo (só no mobile) */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={dogHero}
          alt="Cachorro fofo"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover opacity-40"
        />
      </div>

      {/* 🔹 Conteúdo */}
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative z-10">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-12">
                Seu pet merece cuidado, carinho e atenção especial.
              </h1>
              <p className="lg:text-lg pt-4">
                Na PetCare, oferecemos serviços de alta qualidade para garantir
                o bem-estar do seu melhor amigo.
              </p>
              {/*    <div>
                <a
                  href="#"
                  className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                >
                  <WhatsappLogo size={25} /> Contato via WhatsApp
                </a>
              </div> */}
              <Botao texto="Contato via Whatsapp" />
            </div>
            <div className="mt-8">
              <p className="text-sm mb-4">
                Ganhe{" "}
                <b className="bg-black text-white text-center px-2 py-1 rounded-md">
                  10%
                </b>{" "}
                de desconto na primeira compra!
              </p>
              <div className="flex mt-4 ">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImage}
                    alt="Gatinho fofo"
                    className="object-fill"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-full relative">
            <Image
              src={dogHero}
              alt="Cachorro fofo"
              className="w-full object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
