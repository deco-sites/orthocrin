import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function Offers({ title, products }: Props) {
  return (
    <section class="w-full mx-auto">
      <div class="flex gap-2 w-full bg-[#ed1c24] pt-12 pb-40">
        <div class="flex flex-col max-w-[1400px] mx-auto items-center justify-center">
          <h2 class="text-[28px] md:text-[36px] font-bold text-white">Ofertas</h2>
          <p class="text-white text-center">
            Aproveite a melhor oportunidade de <br />
            adquirir seu produto Orthocrin
          </p>
        </div>
      </div>

      <div
        style={{
          gridAutoColumns: "minmax(160px, 190px)",
        }}
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-1 gap-5 max-w-[1400px] mx-auto -mt-28 px-3 pb-3 overflow-x-auto overflow-y-visible"
      >
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
