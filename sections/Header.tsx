import { Logo } from "$components/header/Logo/index.tsx";
import { MenuBurguerIcon } from "$components/header/MenuBurguer/index.tsx";
import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";

import type { Image } from "$live/std/ui/types/Image.ts";
import { Buttons } from "../components/header/Buttons/index.tsx";

export interface Props {
  logo: Image;
  whatsappLink: string;
}

export default function Header({ logo, whatsappLink }: Props) {
  return (
    <header className="flex flex-col py-5 px-6">
      <div id="header-mobile" className="flex flex-col lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <MenuBurguerIcon />
          <div className="w-[165px] h-[30px]">
            <Logo logo={logo} />
          </div>
          <Nav whatsappLink={whatsappLink} />
        </div>

        <div className="flex w-full mt-3.5">
          <Search />
        </div>

        <div className="hidden lg:flex">
          <Buttons />
        </div>
      </div>

      <div id="header-desktop" className="hidden lg:flex flex-col w-full">
        <div className="flex items-center gap-8 pb-6 border-b-1 border-gray-100">
          <div className="w-[292px] h-[53px] ml-6">
            <Logo logo={logo} />
          </div>

          <div className="w-[259px]">
            <Search />
          </div>

          <div className="ml-auto mr-8">
            <Nav whatsappLink={whatsappLink} />
          </div>
        </div>

        <div className="flex">
          <Buttons />
        </div>
      </div>
    </header>
  );
}
