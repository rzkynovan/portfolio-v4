import { ExtractProps } from "@/types/helper";
import { workprops } from "@/types/work";
import Image from "next/image";
import Link from "next/link";
import FlareCursor from "./Cursor";
import { motion } from "framer-motion";

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
    <section className="bg-white lg:shadow-2xl lg:shadow-white dark:bg-[#030712] grid place-items-center lg:sticky top-0 max-xl:px-6 max-lg:py-12 max-lg:border-y min-h-screen lg:h-screen">
      <div className="grid lg:grid-cols-2 place-items-center max-w-7xl mx-auto max-lg:overflow-x-hidden">
        <div className={isReverse ? "lg:order-1" : undefined}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Image
              src={hero.src}
              width={hero.width}
              height={hero.height}
              alt={hero.alt}
            />
          </motion.div>
        </div>
        <div className="flex flex-col w-full items-start justify-between ">
          <div className="flex justify-between flex-wrap gap-y-3 w-full">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
            >
              <p className="text-xs lg:text-base uppercase">
                {place}, <br />
                {country}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }}
            >
              <p className="text-xs lg:text-base uppercase">
                {timestart}{" "}
                <span className="w-[15px] inline-block h-[2px] bg-sky-800 dark:bg-sky-300" />{" "}
                <br />
                {timeend}
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col mt-6 lg:mt-12 gap-4">
            <div className=" dark:bg-transparent">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
              >
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  className="p-2 dark:bg-transparent"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }}
            >
              <h3 className=" text-3xl font-semibold">{tagline}</h3>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {techstack.map((e, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeIn",
                    delay: index * 0.1,
                  }}
                >
                  <p className="p-3 border-2 text-xs">{e}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }}
            >
              <p>{description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
