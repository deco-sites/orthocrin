import type { Image } from "$live/std/ui/types/Image.ts";

import HeaderMobile from "../islands/HeaderMobile.tsx";
import { HeaderCategory } from "../types/Category.ts";
import HeaderDesktop from "../islands/HeaderDesktop.tsx";
export interface Props {
  logo: Image;
  whatsappLink: string;
  categories: HeaderCategory[];
}

export default function Header({ logo, whatsappLink, categories }: Props) {
  return (
    <header className="flex flex-col pt-5 px-0 fixed top-0 bg-white w-full z-10">
      <HeaderMobile logo={logo} whatsappLink={whatsappLink} categories={categories} />

      <HeaderDesktop logo={logo} whatsappLink={whatsappLink} categories={categories} />
    </header>
  );
}
