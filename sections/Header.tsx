import { Logo } from "$components/header/Logo/index.tsx";
import { MenuBurguerIcon } from "$components/header/MenuBurguer/index.tsx";
import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";

import type { Image } from "$live/std/ui/types/Image.ts";
import { Buttons } from "$components/header/Buttons/index.tsx";
import { Categories } from "$components/header/Categories/index.tsx";
import { MobileSidebarMenu } from "../components/header/MobileSidebarMenu/index.tsx";

import { useEffect, useState } from "preact/hooks";
import HeaderMobile from "../islands/HeaderMobile.tsx";

export interface Props {
  logo: Image;
  whatsappLink: string;
}

export default function Header({ logo, whatsappLink }: Props) {
  return (
    <header className="flex flex-col pt-5 px-0 fixed top-0 bg-white w-full z-10">
      <HeaderMobile logo={logo} whatsappLink={whatsappLink} />

      <div
        id="header-desktop"
        className="hidden lg:flex flex-wrap w-full items-center gap-8"
      >
        <div className="w-[292px] h-[53px] ml-6 order-1">
          <Logo logo={logo} />
        </div>

        <div className="w-[259px] order-2">
          <Search />
        </div>

        <div className="flex px-6 order-4 2xl:order-3 2xl:ml-auto">
          <Buttons />
        </div>

        <div className="ml-auto mr-8 order-4 order-3 2xl:order-4 2xl:ml-0">
          <Nav whatsappLink={whatsappLink} />
        </div>

        <div className="flex w-full order-5">
          <Categories />
        </div>
      </div>
    </header>
  );
}
