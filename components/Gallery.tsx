import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <h2 className="p-10 uppercase tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
        Gallery
      </h2>
    </motion.div>
  );
}
