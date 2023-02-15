import { Buttons } from "$components/header/Buttons/index.tsx";
import { Logo } from "$components/header/Logo/index.tsx";
import Categories from "./Categories.tsx";
import type { Image } from "$live/std/ui/types/Image.ts";
import { HeaderCategory } from "../types/Category.ts";

import { Nav } from "$components/header/Nav/index.tsx";
import { Search } from "$components/header/Search/index.tsx";
import { useEffect } from "preact/hooks";

export interface HeaderDesktopProps {
  logo: Image;
  whatsappLink: string;
  categories: HeaderCategory[];
}

export default function HeaderDesktop(
  { logo, whatsappLink, categories }: HeaderDesktopProps,
) {
  // Adiciona position sticky na section gerada pela Deco
  useEffect(() => {
    const interval = setInterval(() => {
      const headerWrapper = document.querySelector(
        '[data-manifest-key="./sections/Header.tsx"]',
      );

      // deno-lint-ignore no-extra-boolean-cast
      if (!!headerWrapper) {
        clearInterval(interval);
        headerWrapper.setAttribute(
          "style",
          "position: sticky; top: 0; z-index: 100",
        );
      }
    }, 500);
  }, []);

  // Adiciona efeito de esconder parte das categorias no desktop
  useEffect(() => {
    const interval = setInterval(() => {
      const headerDesktopCategories = document.querySelector(
        "#header-desktop--categories",
      );

      // deno-lint-ignore no-extra-boolean-cast
      if (!!headerDesktopCategories) {
        clearInterval(interval);
        self.addEventListener("scroll", (e) => {
          if (window.scrollY > 600) {
            headerDesktopCategories.setAttribute("style", "margin-top: -55px;");
          } else {
            headerDesktopCategories.setAttribute("style", "margin-top: -55px;");
          }
        });
      }
    }, 500);
  }, []);

  return (
    <>
      <div
        id="header-desktop"
        className="hidden lg:flex flex-col w-full h-auto relative py-5 bg-white z-[100]"
      >
        <div
          id="header-desktop--content"
          class="lg:flex flex-wrap w-full items-center gap-8 bg-white z-[100]"
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
        </div>
      </div>
      <div
        id="header-desktop--categories"
        className="hidden lg:flex w-full order-5 z-[99] ease duration-300"
      >
        <Categories categories={categories ?? []} />
      </div>
    </>
  );
}
