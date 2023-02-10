import { categories } from "./categories.ts";

export function Categories() {
  return (
    <div className="flex bg-yellow-50 items-center justify-center w-full">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex group hover:bg-red-600 flex-col px-4 items-center justify-center w-auto h-[93px] cursor-pointer ease duration-200"
        >
          <img className="w-[30px] h-[40px]" src={item.imageUrl} />
          <span className="flex flex-nowrap group-hover:text-white text-sm">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
