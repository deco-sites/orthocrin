export interface Props {
  link: string
}

function BeFranchisor({link}: Props) {
  return (
    <a href={link} class="flex justify-center mt-[3pc]">
      <img src="/destaque-franquia-mobile.png" alt="Seja um franqueador" />
    </a>
  )
}

export default BeFranchisor