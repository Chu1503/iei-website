import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function AboutVIT({}: Props) {
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
      className="flex flex-col relative h-auto text-center max-w-7xl p-4 justify-evenly mx-auto items-center"
    >
      <h2 className="pt-20 p-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-4xl sm:text-5xl">
        About VIT
      </h2>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <p className="text-lg sm:text-xl text-center leading-10 sm:leading-10 sm:pl-20 sm:pr-20">
          Vellore Institute of Technology (VIT), located in Vellore, is a
          prestigious engineering institution known for its exceptional
          education and holistic student development. It's a rare college that
          not only offers world-class academics but also encourages
          co-curricular activities, nurturing personal and ethical growth in
          students. Dr. G. Viswanathan, our dedicated Chancellor, founded VIT
          with a vision of fostering intellectual excellence and producing
          innovative professionals who can benefit society.
        </p>
      </motion.div>
    </motion.div>
  );
}
