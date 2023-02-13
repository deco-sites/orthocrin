import { Logo } from "$components/header/Logo/index.tsx";
import { MenuBurguerIcon } from "$components/header/MenuBurguer/index.tsx";
import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";

import type { Image } from "$live/std/ui/types/Image.ts";
import { MobileSidebarMenu } from "../components/header/MobileSidebarMenu/index.tsx";

import { useEffect, useState } from "preact/hooks";

export interface HeaderMobileProps {
  logo: Image;
  whatsappLink: string;
}

export default function HeaderMobile(
  { logo, whatsappLink }: HeaderMobileProps,
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div id="header-mobile" className="flex flex-col lg:hidden">
      <div className="flex items-center justify-between gap-3 px-6">
        <button onClick={() => setIsMobileMenuOpen((current) => !current)}>
          <MenuBurguerIcon />
        </button>
        <div className="w-[165px] h-[30px]">
          <Logo logo={logo} />
        </div>
        <Nav whatsappLink={whatsappLink} />
      </div>

      <div className="flex w-full mt-3.5 px-6 pb-5">
        <Search />
      </div>

      {isMobileMenuOpen && (
        <div className="bg-red-900 w-full h-[calc(100vh-124px)]">
          <MobileSidebarMenu />
        </div>
      )}
    </div>
  );
}
