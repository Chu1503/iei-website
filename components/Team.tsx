import React from "react";
import { motion } from "framer-motion";
import Member from "./Member";
import vedika from "../images/Vedika_Nigam.png";
import suryansh from "../images/Suryansh_Kumar.png";
import arka from "../images/Arka_De.png";
import omm from "../images/Omm_Malhotra.png";
import daksh from "../images/Daksh_Pratap.png";
import shiv from "../images/Shiv_Akash.png";
import manish from "../images/Manish_Maheswari.png";
import sanskriti from "../images/Sanskriti_Singh.png";
import arisha from "../images/Arisha_Tanveer.png";
import shreya from "../images/Shreya_Sonawane.png";
import joel from "../images/joel.png";
import mahalakshmi from "../images/mahalakshmi.png";

type Props = {};

export default function Team({}: Props) {
  const teamMembers = [
    {
      name: "Dr. Joel J",
      position: "Faculty Coordinator",
      imageUrl: vedika.src,
    },
    {
      name: "Vedika Nigam",
      position: "Chairperson",
      imageUrl: vedika.src,
    },
    {
      name: "Dr. Mahalakshmi P",
      position: "Faculty Coordinator",
      imageUrl: vedika.src,
    },
    {
      name: "Suryansh",
      position: "Vice Chairperson",
      imageUrl: suryansh.src,
    },
    {
      name: "Arke De",
      position: "Secretary",
      imageUrl: arka.src,
    },
    {
      name: "Omm Malhotra",
      position: "Co-Secretary",
      imageUrl: omm.src,
    },
    {
      name: "Daksh Pratap Singh",
      position: "Finance Head",
      imageUrl: daksh.src,
    },
    {
      name: "Shiv Akash",
      position: "Design Head",
      imageUrl: shiv.src,
    },
    {
      name: "Manish Maheshwari",
      position: "Human Resources",
      imageUrl: manish.src,
    },
    {
      name: "Sanskriti Singh",
      position: "Editorial Head",
      imageUrl: sanskriti.src,
    },
    {
      name: "Arisha Tanveer",
      position: "Publicity Head",
      imageUrl: arisha.src,
    },
    {
      name: "Shreya Sonawane",
      position: "Technical Head",
      imageUrl: shreya.src,
    },
  ];

  return (
    <div className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center xl:px-10 min-h-auto xl:space-y-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center xl:px-10 min-h-auto xl:space-y-10"
      >
        <h2 className="pt-20 p-10 uppercase tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
          Our Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-20">
        {teamMembers.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
