import Image from "next/image";
import { Navbar } from "./Navbar";
import { ModeToggle } from "./ToggleMode";
import { motion } from "framer-motion";

export default function HeaderComponent() {
  return (
    <>
      <div className="flex max-lg:flex-col max-lg:items-center items-end justify-center my-12 relative px-6 max-lg:overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <h1
            className="xl:text-7xl md:text-3xl text-2xl tracking-wide font-medium max-w-6xl text-focus-in"
            id="title"
          >
            I{"'"}am a self-taught Full Stack Web Developer. High level
            experience in product and web development knowledge.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Image
            src={"/images/profile.png"}
            width={300}
            height={300}
            alt="logo"
            className=" relative -bottom-20 max-lg:bottom-0"
          />
        </motion.div>
      </div>
      <header className="sticky w-full top-0 z-[9999] md:py-4 py-3 bg-white dark:bg-[#030712] border-y-2">
        <div className=" flex justify-between md:px-12 items-center px-6">
          <h1 className=" text-lg lg:text-xl font-bold">Rzkynovan</h1>
          <div className="flex">
            <Navbar isHidden={false} />
          </div>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
