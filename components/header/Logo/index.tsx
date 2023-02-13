import type { Image } from "$live/std/ui/types/Image.ts";

interface LogoProps {
  logo: Image;
}

export function Logo({ logo }: LogoProps) {
  return (
    <div className="w-full h-full">
      <a href="/">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </a>
    </div>
  );
}
