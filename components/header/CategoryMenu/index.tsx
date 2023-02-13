import { HeaderCategory } from "../../../types/Category.ts";

interface CategoryMenuProps {
  category?: HeaderCategory;
}

export function CategoryMenu({ category }: CategoryMenuProps) {
  return (
    <div className="flex flex-col w-full h-auto lg:w-auto">
      <div className="bg-white w-3.5 h-3.5 absolute -top-2 left-12 rotate-45" />

      <div className="flex items-center justify-between">
        <p className="font-bold text-[20px]">{category?.label ?? ""}</p>
        <p className="text-sm">Ver tudo {">"}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[50px]">
        {category?.columns?.map((column) => (
          <div className="flex flex-col gap-4">
            <p className="text-red-600 flex whitespace-nowrap mt-2">{column?.columnTitle ?? ""}</p>

            {column?.columnItems?.map((columnItem) => (
              <a href="/" className="text-sm text-gray-500">
                {columnItem?.label ?? ""}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
