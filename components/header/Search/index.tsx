import { SearchIcon } from "./SearchIcon.tsx";

export function Search() {
  return (
    <div className="relative pl-10 w-full h-10 flex items-center bg-[#ececec]">
      <div class="absolute left-2 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        placeholder="Digite o que procura"
        className="bg-transparent flex-grow h-full outline-none text-sm"
      />
    </div>
  );
}
