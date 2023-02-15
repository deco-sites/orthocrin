import { useState } from "preact/hooks";
import { HeaderCategory } from "../types/Category.ts";
import { CategoryMenu } from "../components/header/CategoryMenu/index.tsx";

interface CategoriesProps {
  categories: HeaderCategory[];
  selectedCategory?: HeaderCategory;
  handleSelectCategory?: (category: HeaderCategory) => void;
}

export default function Categories({
  categories,
  handleSelectCategory,
  selectedCategory,
}: CategoriesProps) {
  const [desktopSelectedCategory, setDesktopSelectedCategory] = useState(
    categories[0],
  );

  const handleDesktopSelectCategory = (category: HeaderCategory) => {
    setDesktopSelectedCategory(category);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-yellow-50 items-center justify-center w-full">
      {categories.map((item) => (
        <div
          key={item.label}
          className={`relative flex group hover:bg-red-600 flex-col items-center justify-center w-[109px] h-[93px] cursor-pointer ease duration-200`}
          onMouseEnter={() => handleDesktopSelectCategory(item)}
        >
          <img
            className="w-[39px] h-[41px] object-contain group-hover:hidden"
            src={item.imageUrl}
          />
          <img
            style={{
              filter: "brightness(0) invert(1)",
            }}
            className="w-[39px] h-[41px] object-contain hidden group-hover:flex"
            src={item.imageUrl}
          />
          <span
            className={`flex flex-nowrap group-hover:text-white text-xs lg:text-sm mt-1`}
          >
            {item.label}
          </span>

          <div className="absolute left-0 top-[84px] hidden group-hover:hidden lg:group-hover:flex p-[30px] lg:p-[20px] 2xl:p-[30px] bg-white z-20 rounded-[10px] shadow-md">
            <CategoryMenu category={desktopSelectedCategory ?? categories[0]} />
          </div>
        </div>
      ))}
      <a href="/">
        <div
          className={`relative flex group hover:bg-red-600 flex-col items-center justify-center w-[109px] h-[93px] cursor-pointer ease duration-200`}
        >
          <img
            className="w-[39px] h-[41px] object-contain group-hover:hidden"
            src={"https://www.orthocrin.com.br/arquivos/pronta-entrega.svg"}
          />
          <img
            style={{
              filter: "brightness(0) invert(1)",
            }}
            className="w-[39px] h-[41px] object-contain hidden group-hover:flex"
            src={"https://www.orthocrin.com.br/arquivos/pronta-entrega.svg"}
          />
          <span
            className={`flex flex-nowrap text-red-500 group-hover:text-white text-xs lg:text-sm mt-1`}
          >
            Pronta-entrega
          </span>
        </div>
      </a>
      <a href="/">
        <div
          className={`relative flex group flex-col items-center justify-center w-[109px] h-[93px] cursor-pointer ease duration-200`}
        >
          <img
            className="w-[39px] h-[41px] object-contain"
            src="https://www.orthocrin.com.br/arquivos/header-offer.svg"
          />
          <span className={`flex flex-nowrap text-xs lg:text-sm mt-1`}>
            Ofertas
          </span>
        </div>
      </a>
    </div>
  );
}
