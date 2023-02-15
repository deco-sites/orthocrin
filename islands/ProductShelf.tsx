import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";
import { useEffect, useState } from "preact/hooks";

import { defaults } from "../static/swiper/swiperjs.js";

interface CarouselProps {
  products: LoaderReturnType<Product[]>;
}

export default function Carousel({ products }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // deno-lint-ignore no-explicit-any
      const swiperEl: any = document.querySelector("swiper-container");
      const nextButtonEl = document.querySelector("#swiper-next-slide");

      if (!!swiperEl && !!nextButtonEl) {
        clearInterval(interval);
        nextButtonEl.addEventListener("click", () => {
          swiperEl.swiper.slideNext();
        });
      }
    }, 500);
  }, []);

  return (
    <div class="block">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
      <div>
        <button id="swiper-next-slide">Next</button>
      </div>
    </div>
  );

  // return (
  //   <div id="indicators-carousel" class="relative" data-carousel="static">
  //     <div class="relative h-[450px] overflow-hidden rounded-lg w-full px-[150px]">
  //       {products?.map((product, index) => (
  //         <div
  //           class="duration-700 ease-in-out max-w-[190px] "
  //           data-carousel-item={activeIndex === index ? "active" : ""}
  //         >
  //           <ProductCard key={index} {...product} />
  //         </div>
  //       ))}
  //     </div>

  //     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
  //       {products?.map((product, index) => (
  //         <button
  //           style={{
  //             backgroundColor: "#8c8c8c",
  //             opacity: activeIndex === index ? 1 : 0.3,
  //           }}
  //           key={index}
  //           type="button"
  //           class={`w-1 h-1 rounded-full`}
  //           aria-current={activeIndex === index}
  //           aria-label={product}
  //           data-carousel-slide-to={index}
  //         ></button>
  //       ))}
  //     </div>

  //     <button
  //       type="button"
  //       class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //       data-carousel-prev
  //       onClick={() =>
  //         setActiveIndex((current) => (current - 1 <= 0 ? products?.length - 1 : current - 1))
  //       }
  //     >
  //       <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //         <svg
  //           aria-hidden="true"
  //           class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M15 19l-7-7 7-7"
  //           ></path>
  //         </svg>
  //         <span class="sr-only">Previous</span>
  //       </span>
  //     </button>

  //     <button
  //       type="button"
  //       class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //       data-carousel-next
  //       onClick={() =>
  //         setActiveIndex((current) => (current + 1 >= products?.length ? 0 : current + 1))
  //       }
  //     >
  //       <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //         <svg
  //           aria-hidden="true"
  //           class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M9 5l7 7-7 7"
  //           ></path>
  //         </svg>
  //         <span class="sr-only">Next</span>
  //       </span>
  //     </button>
  //   </div>
}
