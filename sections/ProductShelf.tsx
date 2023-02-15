import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";
import Carousel from "$sections/DecoCarrousel.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function ProductShelf({ title, products }: Props) {
  return (
    <section class="w-full pt-8 px-6 mx-auto lg:px-[150px]">
      {title && <h2 class="mb-6 text-xl md:text-2xl font-bold">{title}</h2>}

      <Carousel products={products} />

      {/* <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div> */}
    </section>
  );
}
