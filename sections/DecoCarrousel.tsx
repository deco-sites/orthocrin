import { useId } from "preact/hooks";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import { tw } from "twind";

import Icon from "../components/ui/Icon.tsx";
import Slider from "../islands/DecoSlider.tsx";

import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface CarouselProps {
  products: LoaderReturnType<Product[]>;
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
}

function Carousel({ products = [] }: CarouselProps) {
  const id = useId();

  return (
    <div id={id} class="mb-8 pb-6 relative w-full overflow-hidden">
      <ul
        data-slider-content
        class="flex flex-nowrap transition gap-5"
        style={{ width: `calc(${products.length}*calc(190px+20px))` }}
      >
        {products?.map((product, index) => {
          return (
            <li class="w-full max-w-[190px]">
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
            class="absolute bg-red-500 top-1/2 left-0 ml-2 text-black outline-none p-2"
            data-slider-prev
          >
            PREV
          </button>
          <button
            class="absolute top-1/2 bg-red-500 right-0 mr-2 text-black outline-none p-2"
            data-slider-next
          >
            NEXT
          </button>

          {/* Dots buttons, usually bellow main image */}
          <div class="absolute w-full bottom-0 flex justify-center gap-2 flex-nowrap">
            {products?.map(() => (
              <button
                class={`w-2 h-2 bg-gray-200 rounded-full text-white disabled:text-gray-600 outline-none opacity-20 ${tw(
                  () => ({
                    "&:[disabled]": { opacity: 1 },
                  })
                )}`}
                data-dot
              ></button>
            ))}
          </div>

          {/* Effects for transitioning between images */}
          <Slider items={products.length} id={id} delay={5_000} />
        </>
      )}
    </div>
  );
}

export default Carousel;
