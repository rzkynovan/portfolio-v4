import HeaderComponent from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { workprops } from "@/types/work";
import WorkSection from "@/components/WorkSection";
import { WORK } from "./data/work";
import FlareCursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <section className=" max-w-7xl mx-auto mt-24 max-lg:mt-12">
        <div className="grid lg:grid-cols-2 items-center max-lg:px-4 max-lg:gap-y-8">
          <div className="flex flex-col gap-4 order-1">
            <div className="flex items-center w-full gap-3">
              <h4 className=" text-2xl lg:text-3xl text-nowrap">
                <span className=" text-sky-700 dark:text-sky-400">01. </span>
                About Me
              </h4>
              <div className=" w-full h-[1px] bg-sky-800 dark:bg-sky-300" />
            </div>
            <p className=" text-gray-800 dark:text-gray-400 text-base lg:text-xl">
              Hello! My name is{" "}
              <span className="text-sky-700 dark:text-sky-400">
                Rizky Novan
              </span>{" "}
              I am a full-stack{" "}
              <span className="text-sky-700 dark:text-sky-400">
                web developer
              </span>{" "}
              and{" "}
              <span className="text-sky-700 dark:text-sky-400">
                data scientist
              </span>{" "}
              with experience in building and deploying web applications, as
              well as wrangling and analyzing data. I am passionate about using
              technology to solve real-world problems. currently pursuing a
              Bachelor{"'"}s degree in{" "}
              <span className="text-sky-700 dark:text-sky-400">
                Data Science
              </span>{" "}
              at the Institut Teknologi Sepuluh Nopember (ITS).
            </p>
          </div>
          <div className="flex h-full">
            <div className="flex flex-col justify-end h-full items-center gap-4">
              <Link
                href={"/"}
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <FiGithub />
              </Link>
              <Link
                href={"/"}
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"/"}
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <div className=" w-[1px] h-1/3 bg-sky-800 dark:bg-sky-300" />
            </div>
            <div>
              <Image
                className=" "
                src={"/images/hero.png"}
                width={500}
                height={500}
                alt="me"
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee autoFill className=" border-y py-6 mt-24 max-lg:mt-12">
        <h5 className="text-2xl ml-24 font-semibold">Some Things I’ve Built</h5>
      </Marquee>

      {WORK.map((e, index) => (
        <WorkSection
          key={index}
          hero={{
            src: e.hero.src,
            height: e.hero.height,
            width: e.hero.width,
            alt: e.hero.alt,
          }}
          site={e.site}
          siteurl={e.siteurl}
          place={e.place}
          country={e.country}
          timestart={e.timestart}
          timeend={e.timeend}
          logo={{
            src: e.logo.src,
            height: e.logo.height,
            width: e.logo.width,
            alt: e.logo.alt,
          }}
          tagline={e.tagline}
          techstack={e.techstack}
          description={e.description}
          isReverse={e.isReverse}
        />
      ))}
    </>
  );
}
