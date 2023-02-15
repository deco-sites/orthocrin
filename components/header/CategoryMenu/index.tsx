import { HeaderCategory } from "../../../types/Category.ts";

interface CategoryMenuProps {
  category?: HeaderCategory;
}

export function CategoryMenu({ category }: CategoryMenuProps) {
  return (
    <div className="flex flex-col w-full h-auto lg:w-auto">
      <div className="bg-white w-3.5 h-3.5 absolute -top-[6px] left-12 rotate-45" />

      <div className="flex items-center justify-between">
        <p className="font-bold text-[20px]">{category?.label ?? ""}</p>
        <p className="text-sm">Ver tudo {">"}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[35px]">
        {category?.columns?.map((column) => (
          <div className="flex flex-col gap-4 w-auto">
            <p className="text-red-600 flex whitespace-nowrap mt-2">{column?.columnTitle ?? ""}</p>

            {column?.columnItems?.map((columnItem) => (
              <a
                href="/"
                className="text-sm text-gray-500 flex items-center justify-between gap-5 w-auto border-b border-gray-100 whitespace-nowrap"
              >
                {columnItem?.label ?? ""}
                {columnItem?.popular && (
                  <p class="m-0 p-0 text-orthocrin-green flex items-center gap-1 whitespace-nowrap">
                    <img class="w-2 h-2" src="https://www.orthocrin.com.br/arquivos/tag-star.svg" />
                    Mais procurado!
                  </p>
                )}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
