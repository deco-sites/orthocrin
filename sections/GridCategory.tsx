import type { Image } from "$live/std/ui/types/Image.ts";

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
  const text = { "text-align": "center" };
  const grid = {
    "display": "grid",
    "grid-template-columns": "repeat(2, 1fr)",
    "grid-column-gap": "15px",
    "grid-row-gap": "15px",
    "max-height": "870px",
  };
  const gridItemStyle = [
    {
      "grid-area": "1 / 1 / 2 / 3",
      "height": "150px",
    },
    {
      "grid-area": "2 / 1 / 4 / 2",
      "height": "150px",
    },
    {
      "grid-area": "2 / 1 / 6 / 2",
      "height": "210px",
      "margin": "auto",
      "width": "100%",
    },
    {
      "grid-area": "2 / 2 / 3 / 3",
      "height": "210px",
    },
    {
      "grid-area": "3 / 2 / 5 / 3",
      "height": "150px",
    },
    {
      "grid-area": "5 / 1 / 6 / 3",
      "height": "150px",
    },
  ];

  return (
    <div class="mx-[25px]">
      <h6 class="text-[1.25rem] pt-[50px] pb-[15px] px-[1rem]" style={text}>
        Produtos exclusivos, com{" "}
        <span class="font-[700] text-[#ed1c24]">
          qualidade e alta durabilidade
        </span>
      </h6>
      <p class="text-[1rem] mb-[20px]" style={text}>
        <strong>Compre por categoria</strong>
      </p>
      <div style={grid}>
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
