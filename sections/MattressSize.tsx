function MattressSize() {
  const Camas = [
    {
      name: "Casal",
      link: "#",
      size: "138X188cm",
      img: "mattress-double.png",
    },
    {
      name: "Queen",
      link: "#",
      size: "158X198cm",
      img: "mattress-queen.png",
    },
    {
      name: "Solteiro",
      link: "#",
      size: "88X188cm",
      img: "mattress-single.png",
    },
    {
      name: "King",
      link: "#",
      size: "193X203cm",
      img: "mattress-king.png",
    },
    {
      name: "Viúva",
      link: "#",
      size: "110X200cm",
      img: "mattress-widow.png",
    },
    {
      name: "Infantil",
      link: "#",
      size: "70X150cm",
      img: "mattress-kid.png",
    },
  ];
  return (
    <div>
      <div class="flex justify-center">
        <h2 class=" text-[1.25rem] mt-[52px] w-max lg:text-[2.25rem]">
          Escolha seu colchão <span class="text-[#ed1c24]">por tamanho</span>
        </h2>
      </div>
      <div class="flex flex-wrap mx-[11px] lg:justify-center lg:gap-[20px]">
        {Camas.map((item, idx) => (
          <a
            href={item.link}
            key={idx}
            class="flex w-[33%] flex-col items-center mt-[20px] lg:w-[170px]"
          >
            <img
              src={`/${item.img}`}
              alt={item.name}
              class="lg:max-w-none lg:w-[210px]"
            />
            <h6 class="text-base">
              <strong>{item.name}</strong>
            </h6>
            <p class="text-[14px] text-[#8c8c8c]">{item.size}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MattressSize;
