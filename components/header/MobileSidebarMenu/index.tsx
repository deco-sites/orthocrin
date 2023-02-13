import { Categories } from "../Categories/index.tsx";
import { CategoryMenu } from "../CategoryMenu/index.tsx";

export function MobileSidebarMenu() {
  return (
    <div className="flex flex-grow-1 bg-white h-full w-screen">
      <div
        id="options"
        className="flex flex-col w-1/4 h-full overflow-y-scroll overflow-x-hidden"
      >
        <Categories />
      </div>

      <div
        id="content"
        className="flex-grow-1 py-5 px-4 w-auto h-full overflow-x-hidden"
      >
        <CategoryMenu />
      </div>
    </div>
  );
}
