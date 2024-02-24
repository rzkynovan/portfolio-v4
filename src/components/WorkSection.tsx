import { ExtractProps } from "@/types/helper";
import { workprops } from "@/types/work";
import Image from "next/image";
import Link from "next/link";
import FlareCursor from "./Cursor";

export default function WorkSection({
  hero,
  site,
  siteurl,
  place,
  country,
  timestart,
  timeend,
  logo,
  tagline,
  techstack,
  description,
  isReverse,
}: workprops) {
  return (
    <section className="bg-white dark:bg-[#030712] grid place-items-center sticky top-0 max-lg:px-6 max-lg:py-4 max-lg:border-y min-h-screen lg:h-screen">
      <div className="grid lg:grid-cols-2 place-items-center max-w-7xl mx-auto ">
        <div className={isReverse ? "lg:order-1" : undefined}>
          <Image
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt={hero.alt}
          />
        </div>
        <div className="flex flex-col w-full items-start justify-between">
          <div className="flex justify-between flex-wrap gap-y-3 w-full">
            <p className="text-xs lg:text-base uppercase">
              visite site <br />
              <Link
                target="_blank"
                href={siteurl}
                className="relative !z-30 cursor-pointer"
              >
                {site}
              </Link>
            </p>

            <p className="text-xs lg:text-base uppercase">
              {place}, <br />
              {country}
            </p>

            <p className="text-xs lg:text-base uppercase">
              {timestart}{" "}
              <span className="w-[15px] inline-block h-[2px] bg-sky-800 dark:bg-sky-300" />{" "}
              <br />
              {timeend}
            </p>
          </div>
          <div className="flex flex-col mt-6 lg:mt-12 gap-4">
            <div className=" dark:bg-transparent">
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="bg-black p-2 dark:bg-transparent grayscale"
              />
            </div>
            <h3 className=" text-3xl font-semibold">{tagline}</h3>
            <div className="flex flex-wrap gap-3">
              {techstack.map((e, index) => (
                <p key={index} className="p-3 border-2 text-xs">
                  {e}
                </p>
              ))}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
