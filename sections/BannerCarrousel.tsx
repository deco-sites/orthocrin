import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { ImageCarrousel } from "../components/ImageCarrousel.tsx";

export interface Image {
  desktop: LiveImage;
  mobile: LiveImage;
  href: string;
  alt: string;
}

export interface Props {
  images?: Image[];
}

const mockedImages = [
  {
    desktop: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    mobile: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    alt: "Banner 1",
    href: "/",
  },
  {
    desktop: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    mobile: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    alt: "Banner 1",
    href: "/",
  },
  {
    desktop: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    mobile: "https://orthocrin.vteximg.com.br/arquivos/ids/166383/banner-desktop-vega.jpg",
    alt: "Banner 1",
    href: "/",
  },
];

export default function BannerCarousel({ images }: Props) {
  return (
    <div class="w-full hidden lg:block">
      <ImageCarrousel images={images ?? mockedImages} />
    </div>
  );
}
