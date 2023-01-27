export interface Links {
  name: string
  link: string
}
export interface Items {
  title: string
  links: Links[]
} 

export interface Props {
  footerLinks: Items[]
}

function Footer({footerLinks}: Props) {
  const border = {'border-bottom': '2px solid #ececec'}
  const style = {
    boxShadow: '0 0 14px 0 #00000024',
    'padding': 'Min(7%,25px)',
    'max-width': '295px'
  };
  const grid = {
    'border-bottom': '2px solid #ececec',
    'column-gap': '25px',
    'display': 'grid',
    'grid-template-columns':' 50% 50%',
    'grid-template-rows': 'auto',
    'padding': '45px 25px',
    'row-gap': '35px'
  }
  return (
    <div>
      <div class="px-[1rem]">
        <img src="/logo-footer.png" alt="Logo footer" />
      </div>
      <div style={grid}>
        {footerLinks?.map((footerLink, idx) => (
          <div key={idx}>
            <p><strong>{footerLink.title}</strong></p>
            <ul>
              {footerLink.links?.map((link, idx) => (
                <li><a class="text-[#8c8c8c] text-[.875rem]" href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div class="px-[25px] py-[45px]" style={border}>
        <h6 class="mb-[16px]"><strong>Meios de pagamento</strong></h6>
        <div class="relative max-w-max">
          <div style={style} class="flex flex-col flex-wrap rounded-t-[10px] rounded-b-[10px]">
            <p class="flex justify-center mb-[10px] text-[Max(1.65vh,.825rem)]">Pagamento com até <span class="text-[#28b440]">2 cartões</span></p>
            <div class="flex flex-row flex-wrap justify-center gap-x-[40px] gap-y-[17px]">
              <img class="w-auto object-contain" src="/payment-visa.webp" alt="cartão visa" />
              <img class="w-auto object-contain" src="/payment-mastercard.webp" alt="cartão mastercard" />
              <img class="w-auto object-contain" src="/payment-hipercard.webp" alt="cartão hipercard" />
              <img class="w-auto object-contain" src="/payment-americanexpress.webp" alt="cartão marican express" />
              <img class="w-auto object-contain" src="/payment-elo.webp" alt="cartão elo" />
              <img class="w-auto object-contain" src="/payment-diners.webp" alt="club dinner" />
            </div>
          </div>
          <img class="absolute right-[-79px] bottom-[24px]" src="/card-discount-seal.webp" alt="selo" />
        </div>
      </div>
      <div class="px-[25px] py-[45px]" style={border}>
        <h6 class="mb-[16px]"><strong>Conecte-se com a gente</strong></h6>
        <div class="flex justify-between flex-row flex-wrap">
          <a href="#">
            <img src="/facebook.webp" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram.webp" alt="instagram" />
          </a>
          <a href="#">
            <img src="/linkedin.webp" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/blog.webp" alt="blog" />
          </a>
        </div>
      </div>
      
      <div class="px-[25px] py-[45px]">
        <h6 class="mb-[16px]"><strong>Loja 100% segura</strong></h6>
        <div class="flex justify-between flex-row flex-wrap mt-[20px] items-center">
          <a href="#">
            <img width={102} src="/x-certificado-ssl.png" alt="certificado ssl" />
          </a>
          <a href="#">
            <img width={72} src="/clearsale.webp" alt="clear sale" />
          </a>
          <a href="#">
            <img width={72} src="/yourviews.png" alt="yourviews" />
          </a>
        </div>
      </div>
      
      <div class="bg-[#ececec]">
        <div class="px-[25px] py-[40px]">
          <div class="flex justify-between items-center">
            <a href="#"><img width={80} src="/codeby.png" alt="codeby logo" /></a>
            <a href="#"><img src="/supersonic.webp" alt="supersonic logo" /></a>
          </div>
          <div>
            <p class="flex justify-center text-[.75rem] mb-[20px] mt-[40px]">Para conversar sobre proteção e privacidade de dados pessoais (LGPD), entre em contato: <a class="text-[#0000ee]" href="mailto:dpo@orthocrin.com.br">dpo@orthocrin.com.br</a></p>
            <p class="flex justify-center text-[.75rem]">Orthocrin Indústria e Comércio Ltda - CNPJ: 17.245.986/0001-62 CEP: 33.040.262 End: Rua Lubomir Abadjieff, nº150 - Bairro Distrito Industrial Simão da Cunha - Santa Luzia - MG - Brasil</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer