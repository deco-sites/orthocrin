function TypesMattresses() {
  const style = {
    boxShadow: "0 0 14px 0 #00000024",
  };
  const text = {
    "text-align": "center",
  };
  return (
    <div class="mx-[25px] mt-[-157px] lg:mt-0 lg:pt-[100px] lg:px-[150px] lg:pb-[120px]">
      <div
        style={style}
        class="rounded-b-[10px] rounded-t-[10px] bg-[#fff] lg:bg-[#ed1c24]  lg:flex lg:flex-row lg:h-[94px] lg:justify-between lg:relative lg:max-w-[1600px] lg:my-0 lg:mx-auto"
      >
        <div class="bg-[#ed1c24] h-[125px] flex justify-center items-center rounded-t-[10px] lg:h-[94px] lg:rounded-[10px] lg:pl-[50px]">
          <h3 class="text-[1.25rem] text-[#fff] pb-[30px] lg:mb-0 lg:pb-0 lg:text-[36px]">
            Escolha seu colchão <strong>por tipo</strong>
          </h3>
        </div>

        <div class="flex mt-[-65px] h-[240px] lg:mt-0 lg:w-fit lg:absolute lg:right-[-5%] lg:top-[-24px]">
          <a
            href="#"
            class="w-[33%] flex flex-col items-center lg:w-[140px] w-full"
          >
            <img
              class="w-[125px] h-[125px] object-contain lg:w-[140px] lg:h-[140px]"
              src="/mattress-type1.png"
              alt="colchão - mola"
            />
            <h6 class="text-[.875rem]">
              <strong>Mola</strong>
            </h6>
            <p style={text} class="text-[.875rem] text-[#8c8c8c]">
              Ideal para casais, mais durável
            </p>
          </a>
          <a href="#" class="w-[33%] flex flex-col items-center lg:w-[140px]">
            <img
              class="w-[125px] h-[125px] object-contain lg:w-[140px] lg:h-[140px]"
              src="/mattress-type2.png"
              alt="colchão - espuma"
            />
            <h6 class="text-[.875rem]">
              <strong>Espuma</strong>
            </h6>
            <p style={text} class="text-[.875rem] text-[#8c8c8c]">
              Conforto e firmeza
            </p>
          </a>
          <a href="#" class="w-[33%] flex flex-col items-center lg:w-[140px]">
            <img
              class="w-[125px] h-[125px] object-contain lg:w-[140px] lg:h-[140px]"
              src="/mattress-type3.png"
              alt="colchão - ortopédico"
            />
            <h6 class="text-[.875rem]">
              <strong>Ortopédico</strong>
            </h6>
            <p style={text} class="text-[.875rem] text-[#8c8c8c]">
              Conforto extra firme
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TypesMattresses;
