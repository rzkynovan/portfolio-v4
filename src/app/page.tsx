"use client";
import HeaderComponent from "@/components/Header";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import WorkSection from "@/components/WorkSection";
import { WORK } from "./data/work";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiRightArrow } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <section className=" max-w-7xl mx-auto mt-24 max-lg:mt-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center max-xl:px-4 max-lg:gap-y-8 ">
          <div className="flex flex-col gap-4 order-1 max-lg:max-w-2xl max-lg:mx-auto ">
            <div className="flex items-center w-full gap-3">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="hidden lg:block"
                transition={{ duration: 0.2, ease: "easeIn" }}
              >
                <h4 className=" text-2xl lg:text-3xl text-nowrap">
                  <span className=" text-sky-700 dark:text-sky-400 title">
                    01.{" "}
                  </span>
                  About Me
                </h4>
              </motion.div>
              <h4 className=" text-2xl lg:text-3xl text-nowrap lg:hidden">
                <span className=" text-sky-700 dark:text-sky-400 title">
                  01.{" "}
                </span>
                About Me
              </h4>

              <div className=" h-[1px] w-full bg-sky-800 dark:bg-sky-300" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            >
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
                well as wrangling and analyzing data. I am passionate about
                using technology to solve real-world problems. currently
                pursuing a Bachelor{"'"}s degree in{" "}
                <span className="text-sky-700 dark:text-sky-400">
                  Data Science
                </span>{" "}
                at the Institut Teknologi Sepuluh Nopember (ITS).
              </p>
            </motion.div>
          </div>
          <div className="flex h-full md:justify-center">
            <div className="flex flex-col justify-end h-full items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }}
              >
                <Link
                  href={"/"}
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <FiGithub />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
              >
                <Link
                  href={"/"}
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <FaInstagram />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              >
                <Link
                  href={"/"}
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin />
                </Link>
              </motion.div>

              <div className=" w-[1px] h-1/3 bg-sky-800 dark:bg-sky-300" />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  className=" "
                  src={"/images/hero.png"}
                  width={500}
                  height={500}
                  alt="me"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Marquee autoFill className=" border-y py-6 mt-24 max-lg:mt-12">
        <h5 className="text-2xl ml-24 font-semibold">Some Things I’ve Built</h5>
      </Marquee>
      <>
        <div id="work" />
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

      <section
        id="experience"
        className="bg-white lg:shadow-2xl lg:shadow-white dark:bg-[#030712] flex items-center flex-col max-lg:justify-center lg:pt-[200px] gap-12 lg:sticky top-0 max-xl:px-6 max-lg:py-4 max-lg:border-y min-h-screen lg:h-screen "
      >
        <div className="hidden lg:flex items-center w-full gap-3 justify-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=""
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <h4 className=" text-2xl lg:text-3xl text-nowrap text-center">
              <span className=" text-sky-700 dark:text-sky-400 title">
                03.{" "}
              </span>
              Where I’ve Worked
            </h4>
          </motion.div>
          <div className=" h-[1px] w-full bg-sky-800 dark:bg-sky-300" />
        </div>
        <div className="flex items-center gap-3 lg:hidden w-full">
          <h4 className=" text-2xl lg:text-3xl text-nowrap ">
            <span className=" text-sky-700 dark:text-sky-400 title">03. </span>
            Where I’ve Worked
          </h4>
          <div className=" h-[1px] w-full  bg-sky-800 dark:bg-sky-300" />
        </div>
        <Tabs
          defaultValue="kano"
          className=" mx-auto max-w-7xl lg:flex flex-row justify-center gap-2 items-start"
        >
          <div>
            <TabsList className="flex max-lg:mb-6 max-lg:pb-2 lg:flex-col max-lg:justify-start gap-3 h-full max-w-[280px] min-[375px]:max-w-sm md:max-w-xl lg:w-auto items-start overflow-x-scroll">
              <TabsTrigger value="kano">PT Kano</TabsTrigger>
              <TabsTrigger value="raihasa">Raihasa.co</TabsTrigger>
              <TabsTrigger value="rencanain">Rencana.in</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="kano">
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Jul 2022 - Nov 2022</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>Build an application using Vue, Nuxt JS, and Vuetify</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>
                      Deploy application using AWS Elastic Kubernetes Service
                      (EKS)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>
                      collaborating with UIUX, Front-end, Back-end, QA, and
                      Product Manager
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="raihasa">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Engineer</CardTitle>
                <CardDescription>Nov 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>
                      Responsible for slicing UI to code and making it into an
                      interactive website. Build several pages using NextJs,
                      Typescript, and Tailwindcss.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>Build interactive UI and motion animation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rencanain">
            <Card>
              <CardHeader>
                <CardTitle>Chief Technology Officer</CardTitle>
                <CardDescription>Dec 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>
                      Responsible for creating software architecture and
                      deccisioning techstack that will use on project
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>Lead project and scrum</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <BiRightArrow className="text-sky-700 dark:text-sky-400" />
                    </div>
                    <p>Build front-end section using NextJs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      <section className=""></section>
    </>
  );
}
function jQuery(window: Window & typeof globalThis) {
  throw new Error("Function not implemented.");
}
