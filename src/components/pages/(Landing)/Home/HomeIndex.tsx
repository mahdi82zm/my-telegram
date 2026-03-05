import Image from "next/image";
import imageHero from "@/public/hakhamanesh.png";

export default function HomeIndex() {
  return (
    <div className="">
      <Image alt="Herosection" className="object-cover" src={imageHero} />
    </div>
  );
}
