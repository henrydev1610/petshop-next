import Image from "next/image";
import golden from "../../assets/golden.png";
import premier from "../../assets/primier.png";
import royal from "../../assets/royal.png";
import wiskas from "../../assets/whiskas.png";
import natural from "../../assets/imagens/natural.png";
import Botao from "../hero/Botao";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const currentYaer = new Date().getFullYear();

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Whiskas", logo: wiskas },
  { name: "Premier", logo: premier },
  { name: "Natural", logo: natural },
  { name: "Whiskas", logo: wiskas },
];

export default function Footer() {
  return (
    <section className="bg-[#e84c2d]  py-16 text-white">
      <div className="container mx-auto px-4">
        <div className=" mt-6 ">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>
        </div>
        <div className="grid border-b border-white/20 pb-8 grid-cols-2 lg:grid-cols-6 gap-8  ">
          {brands.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex items-center justify-center h-24"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={100}
                height={50}
                quality={100}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                className="object-contain rounded-md select-none"
              />
            </div>
          ))}
        </div>
        <div className="">
          <footer className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
            <div className=" space-y-6 ">
              <h3 className="text-2xl font-semibold mt-4 mb-2  ">
                Petshop Dev{" "}
              </h3>
              <p>Cuidando do seu melhor amigo de estimação</p>
              <Botao texto="Entre em contato pelo WhatsApp" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-4 mb-2  ">Contatos </h3>
              <p>Email: teste@teste.com</p>
              <p>Telefone: (xx) 123456-4987</p>
              <p>Rua Amaldino Guiano, 73 Campina Grande-PB</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-4 mb-2  ">
                Redes Sociais
                <div className="flex mt-2 gap-4">
                  <a href="#">
                    <FacebookLogoIcon className="h-8 w-8" />
                  </a>
                  <a href="#">
                    <InstagramLogoIcon className="h-8 w-8" />
                  </a>
                  <a href="#">
                    <TiktokLogoIcon className="h-8 w-8" />
                  </a>
                </div>
              </h3>
            </div>
          </footer>
          <div className="text-center border-t border-white/20 pt-12">
            <p className="select-none">
              Desenvolvido por <span className="font-bold ">henry_dev</span> ©{" "}
              {currentYaer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
