import type { Image } from "$live/std/ui/types/Image.ts";

export interface Items {
  icon: Image;
  title: string;
  description: string;
}

export interface Props {
  benefits: Items[];
  linkSpecialist: string;
}

function TalkToSpecialist({ benefits, linkSpecialist }: Props) {
  const style = {
    boxShadow: "0 0 14px 0 #00000024",
  };
  const maxWidth = {
    "max-width": "313px",
    margin: "-26px auto auto",
  };
  return (
    <div class="pt-[75px] px-6 pb-6 lg:px-[150px] lg:pb-[100px]">
      <div style={style} class="rounded-[10px] ">
        <div class="bg-[#0054b1] h-[54px] lg:h-[74px] w-full rounded-t-[10px] flex justify-center items-center">
          <p class="text-xl lg:text-4xl text-white m-0 p-0">
            Na Orthocrin, <strong>você ganha:</strong>
          </p>
        </div>

        <div class="flex flex-col gap-5 xl:flex-row px-5 pb-12 pt-5">
          {benefits?.map((benefit, idx) => (
            <div class="flex items-start gap-[10px]">
              <img src={benefit.icon} alt={benefit.title} />
              <div class="flex flex-col w-auto">
                <p class="text-[#0054b1] mb-2 font-bold flex w-auto">
                  {benefit.title}
                </p>
                <p class="text-sm flex w-auto">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        style={maxWidth}
        class="h-[54px] flex justify-center rounded-t-[10px] rounded-b-[10px] items-center bg-[#0054b1] text-[#fff]"
        href={linkSpecialist}
      >
        <strong>Fale com um especialista</strong>
      </a>
    </div>
  );
}
export default TalkToSpecialist;
