import { useId } from "preact/hooks";

import Slider from "../islands/DecoSlider.tsx";

import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface CarouselProps {
  products: LoaderReturnType<Product[]>;
  title: string;
}

function ProductCarrousel({ products = [], title }: CarouselProps) {
  const id = useId();
  const carrouselId = `carrousel-product-${Math.floor(Math.random() * 100)}`;

  return (
    <div id={id} class="mb-8 pb-6 relative w-full overflow-hidden relative">
      {title && <h2 class="mb-6 text-xl md:text-2xl font-bold">{title}</h2>}

      <ul
        data-slider-content={carrouselId}
        class={`
          flex flex-nowrap transition gap-[12px] lg:gap-[30px] overflow-hidden pb-2
          w-[calc(${products.length}*calc(160px+12px))]
          lg:w-[calc(${products.length}*calc(190px+30px))]
        `}
      >
        {products?.map((product, index) => {
          return (
            <li class="w-full max-w-[160px] lg:max-w-[190px]">
              <a href="/" class="w-full">
                <ProductCard key={index} {...product} />
              </a>
            </li>
          );
        })}
      </ul>

      {products?.length > 0 && (
        <>
          {/* Next/Prev button Controls */}
          <button
            class="outline-none rounded-lg absolute top-0 lg:top-1/2 right-[55px] lg:left-0 lg:right-auto bg-gray-200 bg-opacity-40 ml-2 text-black outline-none p-2"
            data-slider-prev={carrouselId}
          >
            {"<"}
          </button>
          <button
            class="outline-none rounded-lg absolute top-0 lg:top-1/2 right-[15px] lg:right-0 bg-gray-200 bg-opacity-40 mr-2 text-black outline-none p-2"
            data-slider-next={carrouselId}
          >
            {">"}
          </button>

          {/* Dots buttons, usually bellow main image */}
          <div class="absolute w-full bottom-0 flex justify-center gap-2 flex-nowrap">
            {products?.map(() => (
              <button
                class={`w-2 h-2 bg-gray-200 disabled:bg-black disabled:opacity-50 rounded-full outline-none`}
                data-dot={carrouselId}
              ></button>
            ))}
          </div>

          {/* Effects for transitioning between images */}
          <Slider
            items={products?.length}
            id={id}
            delay={5_000}
            itemsPerPageMobile={2}
            itemsPerPageDesktop={6}
            carouselId={carrouselId}
          />
        </>
      )}
    </div>
  );
}

export default ProductCarrousel;
