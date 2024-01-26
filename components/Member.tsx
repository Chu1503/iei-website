import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type MemberProps = {
  name: string;
  position: string;
  imageUrl: string;
  showSocialLink: boolean;
};

const getSocialLink = (name: string): string => {
  switch (name) {
    case "Vedika Nigam":
      return "https://www.linkedin.com/in/vedika-nigam-809669211/";
    case "Suryansh":
      return "https://www.linkedin.com/in/suryansh-kumar-9b4472235/";
    case "Arke De":
      return "https://www.linkedin.com/in/arkade13/";
    case "Omm Malhotra":
      return "https://www.linkedin.com/in/omm-malhotra-889925250/";
    case "Daksh Pratap Singh":
      return "https://www.linkedin.com";
    case "Shiv Akash":
      return "https://www.linkedin.com/in/shiv-akash/";
    case "Manish Maheshwari":
      return "https://www.linkedin.com/in/manish-maheshwari-b14929220/";
    case "Sanskriti Singh":
      return "https://www.linkedin.com/in/sanskriti-singh-923902221/";
    case "Arisha Tanveer":
      return "https://www.linkedin.com/in/arisha-tanveer-6808a1246/";
    case "Shreya Sonawane":
      return "https://www.linkedin.com/in/shreya-sonawane/";
    default:
      return "#";
  }
};

const Member: React.FC<MemberProps> = ({
  name,
  position,
  imageUrl,
  showSocialLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
    <div className="rounded-3xl">
      <div className="member-container rounded-3xl overflow-hidden bg-[rgba(74,74,74,0.7)] backdrop-blur-xl relative shadow-lg shadow-black">
        <img
          loading="lazy"
          src={imageUrl}
          alt={name}
          className="w-full h-[11rem] object-contain opacity-100 sm:h-[16rem] sm:w-full"
        />
        {showSocialLink && (
          <div className="hidden sm:block social-icon-container absolute top-2 right-2">
            <SocialIcon
              url={getSocialLink(name)}
              target="_blank"
              fgColor={isHovered ? "transparent" : "white"}
              bgColor={isHovered ? "#0a67c3" : "transparent"}
              style={{ width: "3rem", height: "3rem" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        )}
      </div>
    </div>
    </motion.div>
  );
};

export default Member;

{
  /* <div className="member-info bg-gray-700 text-white p-2 min-h-full justify-center">
          <strong className="name text-xl sm:text-2xl md:text-2xl text-[#F7AB0A]">
            {name}
          </strong>
          <div className="position text-md sm:text-xl md:text-xl">
            {position}
          </div>
          <div className="social-icon-container absolute top-10 right-0 transform -translate-x-1/2 -translate-y-1/2">
            <SocialIcon
            url={getSocialLink(name)}
            target="_blank"
            fgColor="white"
            bgColor="blue"
          />
          </div>
        </div> */
}

// import React from "react";
// import { motion } from "framer-motion";
// import { SocialIcon } from "react-social-icons";

// type Props = {
//   directionLeft?: boolean;
// };

// export default function Member({ directionLeft }: Props) {
//   return (
//     <div className="group relative flex cursor-pointer">
//       <motion.img
//         // initial={{
//         //   x: directionLeft ? -200 : 200,
//         // }}
//         // transition={{ duration: 1 }}
//         // whileInView={{ opacity: 1, x: 0 }}
//         src="https://cdn.discordapp.com/attachments/894801439992475768/1175171510042898544/5_chuglitch.png?ex=656a42c1&is=6557cdc1&hm=4e0b76269df2ae155250b4921a2decf706c9d7b26bc610b4177f94bffcbd055c&"
//         className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
//       />
//       <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
//         <div className="flex items-center justify-center h-full">
//           <p className="text-3xl font-bold text-black opacity-100">
//             {" "}
//             <SocialIcon
//               url="https://www.linkedin.com"
//               target="_blank"
//               fgColor="white"
//               bgColor="blue"
//             />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
