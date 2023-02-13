import { useState } from "preact/hooks";
import { HeaderCategory } from "../../../types/Category.ts";
import { CategoryMenu } from "../CategoryMenu/index.tsx";
import { categories } from "./categories.ts";

interface CategoriesProps {
  categories: HeaderCategory[];
  selectedCategory?: HeaderCategory;
  handleSelectCategory?: (category: HeaderCategory) => void;
}

export function Categories({
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
          onClick={() =>
            handleSelectCategory
              ? handleSelectCategory(item)
              : handleDesktopSelectCategory(item)}
        >
          <img className="w-[30px] h-[40px]" src={item.imageUrl} />
          <span
            className={`flex flex-nowrap group-hover:text-white text-xs lg:text-sm mt-1`}
          >
            {item.label}
          </span>

          <div className="absolute left-0 top-[84px] hidden group-hover:hidden lg:group-hover:flex p-[30px] bg-white z-20 rounded-[10px] shadow-md">
            <CategoryMenu category={selectedCategory ?? categories[0]} />
          </div>
        </div>
      ))}
    </div>
  );
}
