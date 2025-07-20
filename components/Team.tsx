import React from "react";
import { motion } from "framer-motion";
import Member from "./Member";
import vedika from "../images/Vedika_Nigam.webp";
import suryansh from "../images/Suryansh_Kumar.webp";
import arka from "../images/Arka_De.webp";
import omm from "../images/Omm_Malhotra.webp";
import daksh from "../images/Daksh_Pratap.webp";
import shiv from "../images/Shiv_Akash.webp";
import manish from "../images/Manish_Maheswari.webp";
import sanskriti from "../images/Sanskriti_Singh.webp";
import arisha from "../images/Arisha_Tanveer.webp";
import shreya from "../images/Shreya_Sonawane.webp";
import joel from "../images/joel.webp";
import mahalakshmi from "../images/mahalakshmi.webp";

type Props = {};

export default function Team({}: Props) {
  const teamMembers = [
    {
      name: "Dr. Joel J",
      position: "Faculty Coordinator",
      imageUrl: joel.src,
    },
    {
      name: "Dr. Mahalakshmi P",
      position: "Faculty Coordinator",
      imageUrl: mahalakshmi.src,
    },
    {
      name: "Vedika Nigam",
      position: "Chairperson",
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
      name: "Shiv Akash",
      position: "Design Head",
      imageUrl: shiv.src,
    },
    {
      name: "Daksh Pratap Singh",
      position: "Finance Head",
      imageUrl: daksh.src,
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
    <div className="flex flex-col relative h-auto text-center max-w-7xl p-4 justify-evenly items-center mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center xl:px-10 min-h-auto xl:space-y-10"
      >
        <h2 className="pt-20 p-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-4xl sm:text-5xl">
          Our Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 sm:gap-y-12 sm:gap-x-10 xl:gap-x-20">
        {teamMembers.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            showSocialLink={index >= 2} 
          />
        ))}
      </div>
    </div>
  );
}
