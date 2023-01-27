import type { Image } from '$live/std/ui/types/Image.ts';

export interface Items {
  icon: Image
  title: string
  description: string
}

export interface Props {
  benefits: Items[]
  linkSpecialist: string
}

function TalkToSpecialist({benefits, linkSpecialist}: Props) {
  const style = {
    boxShadow: '0 0 14px 0 #00000024',
  };
  const maxWidth = {
    'max-width': '313px',
    'margin': '-26px auto auto'
  }
  return (
    <div class="mx-[25px] mt-[60px]">
      <div style={style} class="rounded-[10px] ">
        <div class="bg-[#0054b1] h-[54px] w-full rounded-t-[10px] flex justify-center items-center">
          <h6 class="text-[1.25rem] text-[#fff]">Na Orthocrin, <strong>você ganha:</strong></h6>
        </div>
        <div class="px-[20px] pb-[50px] pt-[20px]">
          {benefits?.map((benefit, idx) => (
            <div class="flex items-start gap-[10px] mb-[20px]">
              <img src={benefit.icon} alt={benefit.title} />
              <div>
                <h6 class="text-[#0054b1] mb-[7px]"><strong>{benefit.title}</strong></h6>
                <p class="text-[.875rem]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a style={maxWidth} class="h-[54px] flex justify-center rounded-t-[10px] rounded-b-[10px] items-center bg-[#0054b1] text-[#fff]" href={linkSpecialist}><strong>Fale com um especialista</strong></a>
    </div>
  )
}
export default TalkToSpecialist