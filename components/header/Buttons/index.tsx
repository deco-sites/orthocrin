import { useEffect, useState } from "preact/hooks";

const buttons = [
  {
    id: "whatsapp",
    label: "(31)9838-6838",
    href: "/",
    iconUrl: "https://orthocrin.vteximg.com.br/arquivos/whatsapp-icon.png",
    iconUrlHover:
      "https://orthocrin.vteximg.com.br/arquivos/whatsapp-white-icon.png",
  },
  {
    id: "nossas-lojas",
    label: "Nossas Lojas",
    href: "/",
    iconUrl: "https://orthocrin.vteximg.com.br/arquivos/stores-icon.png",
    iconUrlHover:
      "https://orthocrin.vteximg.com.br/arquivos/stores-white-icon.png",
  },
  {
    id: "seja-franqueado",
    label: "Seja um franqueado",
    href: "/",
    iconUrl: "https://orthocrin.vteximg.com.br/arquivos/franchisee-icon.png",
    iconUrlHover:
      "https://orthocrin.vteximg.com.br/arquivos/franchisee-white-icon.png",
  },
];

export function Buttons() {
  const [showMyAccountDropdownMenu, setShowMyAccountDropdownMenu] = useState(
    false,
  );

  const handleShowMyAccountDropdownMenu = () => {
    setShowMyAccountDropdownMenu(true);
  };

  const handleHideMyAccountDropdownMenu = () => {
    setShowMyAccountDropdownMenu(false);
  };

  useEffect(() => {
    console.log({ showMyAccountDropdownMenu });
  }, [showMyAccountDropdownMenu]);

  return (
    <div className="flex gap-3 pt-4">
      {buttons.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="group px-2 py-1 border-1 border-red-600 rounded-md hover:bg-red-600 text-red-600 hover:text-white ease duration-200"
        >
          <a
            href={item.href}
            className="no-underline font-bold flex items-center justify-center gap-2 w-full"
          >
            <img
              className="w-[18px] h-[18px] flex group-hover:hidden"
              src={item.iconUrl}
            />
            <img
              className="w-[18px] h-[18px] hidden group-hover:flex"
              src={item.iconUrlHover}
            />
            {item.label}
          </a>
        </div>
      ))}

      <div
        id="minha-conta"
        className="relative group px-2 py-1 border-1 border-red-600 rounded-md flex items-center gap-2 cursor-pointer hover:bg-red-600 ease duration-200"
        onClick={handleShowMyAccountDropdownMenu}
      >
        <img
          className="w-[18px] h-[18px] flex group-hover:hidden"
          src="https://orthocrin.vteximg.com.br/arquivos/account-icon.png"
        />
        <img
          className="w-[18px] h-[18px] hidden group-hover:flex"
          src="https://orthocrin.vteximg.com.br/arquivos/account-white-icon.png"
        />
        <span className="font-bold text-red-600 group-hover:text-white">
          Minha Conta
        </span>
        <div className="w-[18px] h-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-red-600 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div
          id="my-account-dropdown-menu"
          className="hidden group-hover:flex hover:flex flex-col gap-5 py-5 px-10 absolute top-8 left-0 bg-white rounded-md shadow-md"
          onMouseLeave={handleHideMyAccountDropdownMenu}
        >
          <a
            href="/"
            className="text-red-600 font-bold text-sm whitespace-nowrap underline"
          >
            Entrar
          </a>
          <a href="/" className="text-sm whitespace-nowrap underline">
            Meus pedidos
          </a>
          <a href="/" className="text-sm whitespace-nowrap underline">
            Meu cadastro
          </a>
        </div>
      </div>
    </div>
  );
}
