import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Botao(props: any) {
  return (
    <div>
      <a
        href="#"
        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
      >
        <WhatsappLogo size={25} />
        {props.texto}
      </a>
    </div>
  );
}
