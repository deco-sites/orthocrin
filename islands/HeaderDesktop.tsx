import { Buttons } from "$components/header/Buttons/index.tsx";
import { Logo } from "$components/header/Logo/index.tsx";
import Categories from "./Categories.tsx";
import type { Image } from "$live/std/ui/types/Image.ts";
import { HeaderCategory } from "../types/Category.ts";

import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";

export interface HeaderDesktopProps {
  logo: Image;
  whatsappLink: string;
  categories: HeaderCategory[];
}

export default function HeaderDesktop({ logo, whatsappLink, categories }: HeaderDesktopProps) {
  return (
    <div id="header-desktop" className="hidden lg:flex flex-wrap w-full items-center gap-8">
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
        <Categories categories={categories ?? []} />
      </div>
    </div>
  );
}
