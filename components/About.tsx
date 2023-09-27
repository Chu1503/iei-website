import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      {/* About IE(I) Section */}
      <div>
        <h2 className="p-10 uppercase tracking-[20px] text-gray-500 text-3xl">
          About IE(I)
        </h2>

        <motion.div
          initial={{
            x: -200,
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
          <p className="text-lg text-center">
            The Institution of Engineers (India) is a prestigious non-profit
            organization established in 1920. Our mission is to advance
            engineering, technology, and their practical applications. As the
            world's largest professional association of engineers, we employ
            innovative strategies to promote sustainable development. At VIT,
            our IE(I) student chapter serves as a platform for comprehensive
            technical and non-technical growth, organizing diverse events and
            activities.
          </p>
        </motion.div>
      </div>

      {/* About VIT Section */}
      <div>
        <h2 className="uppercase tracking-[20px] p-10 text-gray-500 text-3xl">
          About VIT
        </h2>

        <motion.div
          initial={{
            x: -200,
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
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, justo at facilisis varius, velit nulla tristique metus, ut
            vulputate ipsum purus id mi. Nullam vel tortor vitae sapien suscipit
            blandit. Fusce venenatis efficitur ex vel facilisis. Vivamus a
            congue urna. Proin a odio vestibulum, tempus odio vel, fermentum
            neque. Pellentesque eu libero id quam tempus vestibulum. Vivamus in
            mi a sapien cursus dictum. Nullam non ex id ante bibendum
            ullamcorper. Duis bibendum, metus sit amet fermentum rhoncus.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
