function TypesMattresses() {
  const style = {
    boxShadow: '0 0 14px 0 #00000024',
  };
  const text = {
    'text-align': 'center',
  };
  return (
    <div class="mx-[25px] mt-[-157px]">
      <div style={style} class="rounded-b-[10px] rounded-t-[10px] bg-[#fff]">
        <div class="bg-[#ed1c24] h-[125px] flex justify-center items-center rounded-t-[10px]">
          <h3 class="text-[1.25rem] text-[#fff] pb-[30px]">
            Escolha seu colchão <strong>por tipo</strong>
          </h3>
        </div>

        <div class="flex w-full mt-[-65px] h-[240px]">
          <a href="#" class="w-[33%] flex flex-col items-center">
            <img
              class="w-[125px] h-[125px] object-contain"
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
          <a href="#" class="w-[33%] flex flex-col items-center">
            <img
              class="w-[125px] h-[125px] object-contain"
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
          <a href="#" class="w-[33%] flex flex-col items-center">
            <img
              class="w-[125px] h-[125px] object-contain"
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
