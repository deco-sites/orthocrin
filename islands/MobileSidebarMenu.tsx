import { useState } from "preact/hooks";
import { HeaderCategory } from "../types/Category.ts";
import { Categories } from "../components/header/Categories/index.tsx";
import { CategoryMenu } from "../components/header/CategoryMenu/index.tsx";

import { tw } from "twind";

interface MobileSidebarMenuProps {
  categories: HeaderCategory[];
}

export default function MobileSidebarMenu({ categories }: MobileSidebarMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<HeaderCategory>(categories[0]);

  const handleCategoryClick = (category: HeaderCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-grow-1 bg-white h-full w-screen">
      <div
        id="options"
        className={`flex flex-col w-1/4 h-full overflow-y-scroll overflow-x-hidden appearance-none ${tw(
          () => ({
            "&::-webkit-scrollbar": { display: "none" },
          })
        )}`}
      >
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleCategoryClick}
        />
      </div>

      <div id="content" className="flex-grow-1 py-5 px-4 w-auto h-full overflow-x-hidden">
        <CategoryMenu category={selectedCategory} />
      </div>
    </div>
  );
}
