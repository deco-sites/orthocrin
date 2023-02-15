import type { Image } from "$live/std/ui/types/Image.ts";
import { tw } from "twind";
export interface GridCategoryProps {
  title: string;
  link: string;
  imageMobile: Image;
  imageDesktop?: Image;
}

export interface Props {
  gridItem: GridCategoryProps[];
  allCategories: string;
}

function GridCategory({ gridItem, allCategories }: Props) {
  const title = { "text-align": "center" };
  const grid = {
    "grid-template-columns": "repeat(2, 1fr)",
    "grid-column-gap": "15px",
    "grid-row-gap": "15px",
    "max-height": "870px",
  };
  const gridItemStyle = [
    {
      "grid-area": "1 / 1 / 2 / 3",
      height: "150px",
    },
    {
      "grid-area": "2 / 1 / 4 / 2",
      height: "150px",
    },
    {
      "grid-area": "2 / 1 / 6 / 2",
      height: "210px",
      margin: "auto",
      width: "100%",
    },
    {
      "grid-area": "2 / 2 / 3 / 3",
      height: "210px",
    },
    {
      "grid-area": "3 / 2 / 5 / 3",
      height: "150px",
    },
    {
      "grid-area": "5 / 1 / 6 / 3",
      height: "150px",
    },
  ];
  const gridItemStyleDesktop = [
    {
      "grid-area": "um",
    },
    {
      "grid-area": "dois",
      minHeight: "150px",
    },
    {
      "grid-area": "tres",
      minHeight: "210px",
    },
    {
      "grid-area": "quatro",
      minHeight: "210px",
    },
    {
      "grid-area": "cinco",
      minHeight: "150px",
    },
    {
      "grid-area": "seis",
    },
  ];

  return (
    <div class="mx-[25px] lg:py-[60px] lg:px-[100px] xl:py-[100px] xl:px-[150px]">
      <h6 class="text-[1.25rem] font-bold lg:text-[36px] lg:gap-2 lg:flex lg:flex-col xl:flex-row xl:items-center xl:justify-start ">
        Produtos exclusivos, com{" "}
        <span class="font-[700] text-[#ed1c24]">
          qualidade e alta durabilidade
        </span>
      </h6>
      <p class="text-[1rem] mb-[20px] lg:text-[20px] lg:text-left">
        <strong>Compre por categoria</strong>
      </p>
      <div id="mobile" style={grid} class="grid lg:hidden">
        {gridItem.map((item, idx) => (
          <div style={gridItemStyle[idx]} class="relative">
            <img
              class="w-full h-full object-cover rounded-b-[10px] rounded-t-[10px]"
              src={item.imageMobile}
              alt={item.title}
            />
            <div class="absolute flex w-full justify-center bottom-[10px]">
              <a
                class="w-[165px] items-center flex justify-center h-[30px] rounded-b-[75pt] rounded-t-[75pt] bg-[#ed1c24d9] text-[#fff]"
                href={item.link}
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        id="desktop"
        class={`hidden lg:grid ${
          tw(() => ({
            "grid-template-columns": "repeat(8, 1fr)",
            "grid-template-rows": "repeat(2, 1fr)",
            "grid-template-areas": `
              "um um um dois quatro seis seis seis"
              "um um um tres cinco seis seis seis"
          `,
            "grid-column-gap": "15px",
            "grid-row-gap": "15px",
            height: "min-content",
            marginBottom: "40px",
          }))
        }`}
      >
        {gridItem.map((item, idx) => (
          <div
            style={gridItemStyleDesktop[idx]}
            class="relative cursor-pointer"
          >
            <img
              class="w-full h-full object-cover rounded-b-[10px] rounded-t-[10px]"
              src={item.imageMobile}
              alt={item.title}
            />
            <div class="absolute flex w-[calc(100%-12px)] justify-center bottom-[10px] left-[6px]">
              <a
                class="w-[165px] items-center flex justify-center h-[30px] rounded-b-[75pt] rounded-t-[75pt] bg-[#ed1c24d9] text-[#fff]"
                href={item.link}
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href={allCategories}
        class="bg-[#000] w-full text-[#fff] flex justify-center rounded-b-[10px] rounded-t-[10px] text-[1.25rem] py-[12px] mt-[40px]"
      >
        Ver todos os produtos
      </a>
    </div>
  );
}

export default GridCategory;
