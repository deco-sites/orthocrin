import { Product } from "$live/std/commerce/types.ts";
import AddToCart from "../islands/AddToCart.tsx";
import Image from "$live/std/ui/components/Image.tsx";
import {
  bestInstallment,
  installmentToString,
} from "../sections/ProductDetails.tsx";
import { formatInstallments } from "../utils/formatProductInfo.ts";

interface Image {
  src: string;
  alt?: string;
  label?: string;
}

export default function ProductCard({
  url,
  productID,
  name,
  image,
  brand,
  offers,
  additionalProperty,
  isVariantOf,
}: Product) {
  const img = image?.[0];
  const offer = offers?.offers[0];
  const seller = offer?.seller;
  const listPrice = offer?.priceSpecification.find(
    (spec) => spec.priceType === "https://schema.org/ListPrice",
  );
  const price = offer?.price;
  const discountPercentage = listPrice && price &&
    Math.trunc(Math.max(1 - price / listPrice.price, 0) * 100);
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);

  return (
    <div
      id={`product-card-${productID}`}
      class="flex flex-col justify-around w-full h-[450px] p-2 group relative border border-white bg-white shadow-md rounded-2xl"
    >
      <a href={url}>
        {img && img.url && (
          <Image
            class="w-full max-w-[125px] h-auto mx-auto"
            src={img.url}
            alt={img.alternateName}
            width={326}
            height={489}
            sizes="(max-width: 640px) 40vw, 20vw"
            loading="lazy"
            decoding="async"
          />
        )}
      </a>

      <a href={url}>
        {name && (
          <span class="block text-sm overflow-hidden text-blue-600" href={url}>
            {name.replace(/(.*)(\-).*$/, "$1$2")}
          </span>
        )}
      </a>

      <div className="flex w-full overflow-hidden">
        <select className="flex w-full border border-gray-500 text-gray-500 text-sm rounded-md p-1">
          <option className="text-gray-600 text-xs">Solteiro - 96X20CM</option>
        </select>
      </div>

      <a href={url}>
        <div class="text-xs flex flex-col gap-2 mt-2">
          <div className="flex justify-between">
            {!!listPrice && (
              <span class="line-through text-gray-500">
                R$ {listPrice.price.toFixed(2)}
              </span>
            )}

            {!!discountPercentage && (
              <div
                className="flex items-center justify-center pr-2 pl-1"
                style={{
                  backgroundImage:
                    "url(https://orthocrin.vteximg.com.br/arquivos/off-tag.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                }}
              >
                <span class="text-white text-xs font-bold">
                  {discountPercentage}% OFF
                </span>
              </div>
            )}
          </div>

          {!!price && (
            <span class="text-orthocrin-green text-xl font-bold">
              R$ {typeof price === "number" ? price.toFixed(2) : price}
            </span>
          )}
        </div>
      </a>

      <a href={url}>
        {!!installment && (
          <div class="text-[11px] text-[#737378] mt-1">
            {formatInstallments(installment)}
          </div>
        )}
      </a>
    </div>
  );
}
