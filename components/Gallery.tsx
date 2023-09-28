import React from "react";
import { motion } from "framer-motion";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div>
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
    {/* <Carousel>
    <Carousel.Item>
      <img
        className="relative w-screen mx-auto object-cover sm:h-[500px] sm:w-auto"
        src="https://cdn.discordapp.com/attachments/894801439992475768/1157061991047905281/1.png?ex=65173d73&is=6515ebf3&hm=027c33e6b3fa31c806e71f80cac269210661f2140f375954da7337198b6a4daa&"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="relative w-screen mx-auto object-cover sm:h-[500px] sm:w-auto"
        src="https://cdn.discordapp.com/attachments/894801439992475768/1157061991576391730/2.png?ex=65173d73&is=6515ebf3&hm=f48410d55ae8e84f451b938b41fe1060e9a1b167bc496a71e6b305666caf1e8a&"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="relative w-screen mx-auto object-cover sm:h-[500px] sm:w-auto"
        src="https://cdn.discordapp.com/attachments/894801439992475768/1157061992117436568/3.png?ex=65173d74&is=6515ebf4&hm=e5bb0c8488d06d6402d1b02e4ff54c616b7eab96e20a6934732a7fa118d44f8b&"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> */}
  </div>
  );
}
