import Image from "next/image";
import { Navbar } from "./Navbar";
import { ModeToggle } from "./ToggleMode";

export default function HeaderComponent() {
  return (
    <>
      <div className="flex max-lg:flex-col max-lg:items-center items-end justify-center my-12 relative max-lg:px-4 ">
        <h1 className="text-7xl max-lg:text-2xl tracking-wide font-medium max-w-6xl">
          I{"'"}am a self-taught Full Stack Web Developer. High level experience
          in product and web development knowledge.
        </h1>
        <div>
          <Image
            src={"/images/profile.png"}
            width={300}
            height={300}
            alt="logo"
            className=" relative -bottom-20 max-lg:bottom-0"
          />
        </div>
      </div>
      <header className="sticky w-full top-0 z-[9999] md:py-4  bg-white dark:bg-[#030712] border-y-2">
        <div className=" flex justify-between md:px-12 items-center">
          <h1 className="text-xl font-bold">Rzkynovan</h1>
          <div className="flex">
            <Navbar isHidden={false} />
          </div>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
