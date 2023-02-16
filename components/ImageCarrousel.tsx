import { useId } from "preact/hooks";
import { tw } from "twind";

import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

import Slider from "../islands/DecoSlider.tsx";

export interface Image {
  desktop: LiveImage;
  mobile: LiveImage;
  href: string;
  alt: string;
  preload?: boolean;
}

export interface ImageCarrouselProps {
  images?: Image[];
}

export function ImageCarrousel({ images = [] }: ImageCarrouselProps) {
  const id = useId();
  const carrouselId = `carrousel-image-${Math.floor(Math.random() * 100)}`;

  return (
    <div id={id} class="mb-8 pb-6 relative w-full overflow-hidden relative">
      <ul
        data-slider-content={carrouselId}
        class="flex flex-nowrap transition overflow-hidden"
        style={{ width: `calc(${images.length}*100vw)` }}
      >
        {images?.map(({ desktop, mobile, href, alt, preload }, index) => {
          const lcp = index === 0 && preload;

          return (
            <li class="w-full">
              <a href={href} class="w-full">
                <Picture class="w-screen block" preload={lcp}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={mobile}
                    width={360}
                    height={331}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={desktop}
                    width={1920}
                    height={400}
                  />
                  <img
                    class="object-cover w-full"
                    loading={lcp ? "eager" : "lazy"}
                    src={desktop}
                    alt={alt}
                  />
                </Picture>
              </a>
            </li>
          );
        })}
      </ul>

      {images?.length > 0 && (
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
            {images?.map(() => (
              <button
                class={`w-2 h-2 bg-gray-200 disabled:bg-black disabled:opacity-50 rounded-full outline-none`}
                data-dot={carrouselId}
              >
              </button>
            ))}
          </div>

          {/* Effects for transitioning between images */}
          <Slider
            items={images.length}
            id={id}
            delay={5_000}
            carouselId={carrouselId}
          />
        </>
      )}
    </div>
  );
}
