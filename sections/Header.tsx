import { Logo } from "$components/header/Logo/index.tsx";
import { MenuBurguerIcon } from "$components/header/MenuBurguer/index.tsx";
import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";

import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  logo: Image;
  whatsappLink: string;
}

export default function Header({ logo, whatsappLink }: Props) {
  return (
    <header className="flex flex-col py-5 px-6">
      <div className="flex items-center justify-between">
        <MenuBurguerIcon />
        <Logo logo={logo} />
        <Nav whatsappLink={whatsappLink} />
      </div>

      <div className="flex w-full mt-3.5">
        <Search />
      </div>
    </header>
  );
}
