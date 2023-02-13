export function CategoryMenu() {
  return (
    <div className="flex flex-col w-auto h-auto">
      <div className="bg-white w-3.5 h-3.5 absolute -top-2 left-12 rotate-45" />

      <div className="flex items-center justify-between">
        <p className="font-bold text-[20px]">Colchão</p>
        <p className="text-sm">Ver tudo {">"}</p>
      </div>

      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-4">
          <p className="text-red-600 flex whitespace-nowrap mt-2">Escolha por tipo</p>

          <a href="/" className="text-sm text-gray-500">
            Mola
          </a>
          <a href="/" className="text-sm text-gray-500">
            Espuma
          </a>
          <a href="/" className="text-sm text-gray-500">
            Ortopédico
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-red-600 flex whitespace-nowrap mt-2">Escolha por tamanho</p>

          <a href="/" className="text-sm text-gray-500">
            Casal
          </a>
          <a href="/" className="text-sm text-gray-500">
            Queen
          </a>
          <a href="/" className="text-sm text-gray-500">
            Solteiro
          </a>
          <a href="/" className="text-sm text-gray-500">
            King
          </a>
          <a href="/" className="text-sm text-gray-500">
            Viúva
          </a>
          <a href="/" className="text-sm text-gray-500">
            Infantil
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-red-600 flex whitespace-nowrap mt-2">Linhas especiais</p>

          <a href="/" className="text-sm text-gray-500">
            Moush - Colchão na caixa
          </a>
          <a href="/" className="text-sm text-gray-500">
            Prime
          </a>
        </div>
      </div>
    </div>
  );
}
