"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 lg:h-full lg:w-1/2 flex-shrink-0">
          <Image
            src="/hero.png"
            alt="Hero Image"
            layout="fill"
            className="object-contain"
            priority
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-8 justify-center items-center p-4 sm:p-8 lg:w-1/2 lg:h-full">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Hi! I&apos;m Abhinav (Abhi) Dholi
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center">
            Welcome to my digital canvas, where technology meets innovation. I am a
            dynamic Software Development Engineer with a strong foundation in Full Stack 
            Development, Machine Learning, and Product Management. My portfolio reflects 
            my commitment to pushing the boundaries of what&apos;s possible.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
