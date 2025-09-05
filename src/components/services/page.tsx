"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WhatsappLogo, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 ">SERVIÇOS</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] p-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col ">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-4">
                        <span className="text-3xl">{item.icon}</span>

                        <div>
                          <h3 className="font-bold text-xl mb-1 select-none">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-1 border-gray-700 flex items-center justify-between pt-4">
                      <div className="flex items-center  gap-2 tex-sm">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        className="flex items-center gap-2 hover:bg-red-500 py-2 px-3 rounded-md text-sm transition-all duration-300  "
                        href="#"
                      >
                        <WhatsappLogoIcon size={19} /> Entre em contato
                      </a>
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
