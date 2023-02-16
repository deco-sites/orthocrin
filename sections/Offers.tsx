import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";
import ProductCarrousel from "$components/ProductCarrousel.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function Offers({ title, products }: Props) {
  return (
    <section class="w-full mx-auto">
      <div class="flex gap-2 w-full bg-[#ed1c24] pt-12 pb-40">
        <div class="flex flex-col max-w-[1400px] mx-auto items-center justify-center">
          <h2 class="text-[28px] md:text-[36px] font-bold text-white">
            Ofertas
          </h2>
          <p class="text-white text-center">
            Aproveite a melhor oportunidade de <br />
            adquirir seu produto Orthocrin
          </p>
        </div>
      </div>

      <section class="w-full pt-8 px-6 mx-auto mt-[-168px] lg:px-[150px]">
        <ProductCarrousel
          products={products}
          title={"Ofertas"}
          titleColor={"text-[#ed1c24]"}
        />
      </section>
    </section>
  );
}
