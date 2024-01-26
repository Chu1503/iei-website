import React from "react";
import { motion } from "framer-motion";

type EventCardProps = {
  imageUrl: string;
  heading: string;
  listItems: string[];
};

function EventCard({ imageUrl, heading, listItems }: EventCardProps) {
  return (
    <article
      className="flex flex-col items-center space-y-7 flex-shrink-0 w-[250px] xl:w-[500px] snap-center 
    p-10 bg-[rgba(52,52,52,0.5)] hover:cursor-pointer overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-40 h-40 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={imageUrl}
        alt={heading}
      />

      <div className="px-0 md:px-10">
        <h3 className="text-2xl text-center font-bold pb-5">{heading}</h3>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default EventCard;
