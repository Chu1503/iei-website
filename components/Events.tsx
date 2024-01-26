import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import creatoverse from "../images/creatoverse.png";
import illumina from "../images/illumina.png";
import coding_odyssey from "../images/coding_odyssey.png";
import subway_cyphers from "../images/subway_cyphers.png";

type Props = {};

const eventImages = [
  { src: creatoverse, name: "CREATOVERSE" },
  { src: illumina, name: "ILLUMINA" },
  { src: coding_odyssey, name: "CODING ODYSSEY" },
  { src: subway_cyphers, name: "SUBWAY CYPHERS" },
];

export default function Events({}: Props) {
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
      className="flex flex-col relative h-auto text-left max-w-7xl p-10 justify-evenly mx-auto items-center overflow-hidden md:text-row "
    >
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
        Events
      </h2>

      <div className="w-full flex space-x-5 overflow-x-auto p-0 snap-x snap-mandatory sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {eventImages.map((image, index) => (
          <EventCard
            key={index}
            imageUrl={image.src.src} // Accessing the src property of the image
            heading={image.name.toUpperCase()}
            listItems={["Information", "About the event"]}
          />
        ))}
      </div>
    </motion.div>
  );
}
