import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import creatoverse from "../images/creatoverse.png";
import illumina from "../images/illumina.png";
import coding_odyssey from "../images/coding_odyssey.png";
import subway_cyphers from "../images/subway_cyphers.png";

type Props = {};

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
      <h2 className="pt-20 p-10 uppercase tracking-[20px] text-gray-500 text-4xl sm:text-3xl">
        Events
      </h2>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-none">
        <EventCard
          imageUrl={creatoverse.src}
          heading="CREATOVERSE"
          listItems={["Item 1", "Item 2", "Item 3"]}
        />
        <EventCard
          imageUrl={illumina.src}
          heading="ILLUMMINA"
          listItems={["Item 1", "Item 2", "Item 3"]}
        />
        <EventCard
          imageUrl={coding_odyssey.src}
          heading="CODING ODYSSEY"
          listItems={["Item 1", "Item 2", "Item 3"]}
        />
        <EventCard
          imageUrl={subway_cyphers.src}
          heading="SUBWAY CYPHERS"
          listItems={["Item 1", "Item 2", "Item 3"]}
        />
      </div>
    </motion.div>
  );
}
