export interface Props {
  link: string;
}

function BeFranchisor({ link }: Props) {
  return (
    <div class="flex flex-col w-full h-auto">
      <a href={link} class="flex justify-center mt-[3pc]">
        <img src="/destaque-franquia-mobile.png" alt="Seja um franqueador" />
      </a>

      <div class="w-full lg:min-h-[680px] relative">
        <img
          class="w-full h-[245px] object-cover lg:h-[684px]"
          src="https://orthocrin.vteximg.com.br/arquivos/background-about.jpg"
          loading="lazy"
        />

        <div class="flex flex-col w-[calc(100%-50px)] -mt-[45px] mx-auto rounded-b-[10px] shadow relative lg:absolute lg:max-w-[370px] lg:left-auto lg:right-[100px] lg:top-[calc(684px/5)]">
          <div
            class="lg:hidden absolute right-0 bottom-[calc(100%-20px)] w-[96px] h-[96px]"
            style={{
              backgroundImage: "url(https://orthocrin.vteximg.com.br/arquivos/about-badge.svg)",
              backgroundSize: "contain",
            }}
          >
            <div class="flex flex-col items-center justify-center w-full h-full rotate-[-15deg]">
              <span class="text-[#ed1c24] font-bold text-[46px] m-0 p-0 leading-10">58</span>
              <span class="font-bold text-lg uppercase">anos</span>
            </div>
          </div>

          <div class="hidden lg:flex absolute right-0 bottom-[calc(100%-20px)] w-[96px] h-[96px] lg:top-[calc(50%-48px)] lg:right-auto lg:-left-[70px]">
            <img
              src="https://orthocrin.vteximg.com.br/arquivos/about-badge.svg"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(21%) sepia(83%) saturate(3997%) hue-rotate(346deg) brightness(92%) contrast(102%)",
              }}
            />
            <div class="flex flex-col items-center justify-center w-full h-full rotate-[-15deg] z-10 absolute inset-0">
              <span class="text-white font-bold text-[46px] m-0 p-0 leading-10">58</span>
              <span class="font-bold text-lg uppercase text-yellow-500">anos</span>
            </div>
          </div>

          <div class="bg-red-600 p-5 rounded-t-[10px]">
            <img src="https://orthocrin.vteximg.com.br/arquivos/about-logo.svg" loading="lazy" />
          </div>

          <div class="flex flex-col items-center justify-center bg-white rounded-b-[10px] pt-[35px] px-6 pb-6">
            <p class="text-center m-0 p-0 text-black">
              Com mais de <strong>57 anos de tradição</strong> e inovação, estamos entre as{" "}
              <strong>maiores indústrias de colchões e acessórios do Brasil</strong> com foco em
              promover um sono de saúde aos nossos clientes.
            </p>

            <p class="my-5 mx-0 p-0 font-bold text-sm text-center">
              Veja o porquê a Orthocrin é a melhor opção:
            </p>

            <iframe
              class="w-full h-[170px] rounded-[10px]"
              src="https://www.youtube.com/embed/y31bwqh0YsE"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeFranchisor;
