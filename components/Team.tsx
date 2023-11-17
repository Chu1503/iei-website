import React from "react";
import { motion } from "framer-motion";
import Member from "./Member";
import vedika from "../team/vedika.png";

type Props = {};

export default function Team({}: Props) {
  const teamMembers = [
    {
      name: "Teacher 1",
      position: "Faculty Coordinator",
      imageUrl:
        "",
    },
    {
      name: "Vedika Nigam",
      position: "Chairperson",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206066850648134/vedika.png?ex=656a62f0&is=6557edf0&hm=a3be29ff47a88a9570a51607a9b90bf541c4c9ff089672a816a44a393082da1d&",
    },
    {
      name: "Teacher 2",
      position: "Faculty Coordinator",
      imageUrl:
        "",
    },
    {
      name: "Suryansh",
      position: "Vice Chairperson",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206065583951944/suryansh.png?ex=656a62f0&is=6557edf0&hm=4768005e2e31f0d3e8f920ac2be2bba3940144aee1684a3cee1b35ba0a5b9857&",
    },
    {
      name: "Arke De",
      position: "Secretary",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206056054509588/arka.png?ex=656a62ee&is=6557edee&hm=dc9c52a833f4c2b26b81092d7ebeddb244539f1bfb2878b7b52ed972384e7921&",
    },
    {
      name: "Omm Malhotra",
      position: "Co-Secretary",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206060399808532/omm.png?ex=656a62ef&is=6557edef&hm=f4fb828d64aca33fb7d9e8c5009851800898f0e0e0ee0743925fbd9ccf68f84e&",
    },
    {
      name: "Daksh Pratap Singh",
      position: "Finance Head",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206057723842621/daksh.png?ex=656a62ee&is=6557edee&hm=6904a9e20244df2444a53459b5a5f79706e6f9f3171b6d3cbd93cde3a39a877a&",
    },
    {
      name: "Shiv Akash",
      position: "Design Head",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175171510042898544/5_chuglitch.png?ex=656a42c1&is=6557cdc1&hm=4e0b76269df2ae155250b4921a2decf706c9d7b26bc610b4177f94bffcbd055c&",
    },
    {
      name: "Manish",
      position: "Human Resources",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206058910814260/manish.png?ex=656a62ee&is=6557edee&hm=c0eff6186d733d6de04ae71c772a14eba7cb1c58def61615d9d0c1093a98637b&",
    },
    {
      name: "Sanskriti",
      position: "Editorial Head",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206061830049902/sanskriti.png?ex=656a62ef&is=6557edef&hm=fe8889da776634eec5935edf65a65664b310638dcfc1a42d5d58c38d56e06a0d&",
    },
    {
      name: "Arisha Tanveer",
      position: "Publicity Head",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206054716510268/arisha.png?ex=656a62ed&is=6557eded&hm=93ee74d1bfef2c9bfb19c5c0edb47ad9c4957ab11212c98656a797510fb35478&",
    },
    {
      name: "Shreya Sonawane",
      position: "Technical Head",
      imageUrl:
        "https://cdn.discordapp.com/attachments/894801439992475768/1175206064241790997/shreya.png?ex=656a62ef&is=6557edef&hm=8698d4afd3939542b5bb49586b76a0cd886500210f30573ccc476f451288d47f&",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center xl:px-10 min-h-auto xl:space-y-10"
    >
      <h2 className="p-10 uppercase tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
        Our Team
      </h2>

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
    </motion.div>
  );
}
