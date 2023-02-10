interface NavProps {
  whatsappLink: string;
}

export function Nav({ whatsappLink }: NavProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-[17px] h-[17px] lg:hidden">
        <a href={whatsappLink ?? "/"}>
          <img
            className="w-full h-full"
            src="https://orthocrin.vteximg.com.br/arquivos/whatsapp.svg"
          />
        </a>
      </div>

      <div className="relative cursor-pointer w-[18px] h-[18px] lg:w-[27px] lg:h-[27px]">
        <div className="absolute right-0 top-0 bg-white p-[2px] rounded-full">
          <span className="flex text-[10px] w-auto h-auto text-red-500 font-bold leading-[10px]">
            0
          </span>
        </div>
        <img
          className="w-full h-full"
          src="https://orthocrin.vteximg.com.br/arquivos/cart.svg"
        />
      </div>
    </div>
  );
}
