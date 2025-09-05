"use client";
import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../assets/tutor1.png";
import tutor2 from "../../assets/tutor2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// atualiza ano

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael da Silva",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor2,
  },
];

export function Testmunials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <section className="bg-amber-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12 ">
          O que nossos clientes dizem
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3 ">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col ">
                    <div className="flex items-center justify-center text-center space-y-4">
                      <div className="relative w-24 h24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="p-2.5 space-y-4">
                      <p className="text-sm text-zinc-300 select-none ">
                        {item.content}
                      </p>
                      <h2 className="text-center font-bold select-none">
                        {item.author}
                      </h2>
                      <p className="text-center  mt-[-20px] text-zinc-500">
                        {item.role}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button className="absolute top-1/2 -translate-y-1/2 left-0  bg-white  border border-gray-300 text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 transition-all">
            <ChevronLeft
              onClick={scrollPrev}
              className=" h-6 w-6 text-gray-600 "
            />
          </button>
          <button className="absolute top-1/2 -translate-y-1/2 right-0  bg-white  border border-gray-300 text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 transition-all">
            <ChevronRight
              onClick={scrollNext}
              className=" h-6 w-6 text-gray-600 "
            />
          </button>
        </div>
      </div>
    </section>
  );
}
