import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";
import ProductCarrousel from "$components/ProductCarrousel.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function ProductShelf({ title, products }: Props) {
  return (
    <section class="w-full pt-8 px-6 mx-auto lg:px-[150px]">
      <ProductCarrousel products={products} title={title} />
    </section>
  );
}
