import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

type MemberProps = {
  name: string;
  position: string;
  imageUrl: string;
};

const getSocialLink = (name: string): string => {
  switch (name) {
    case "Teacher 1":
      return "https://www.linkedin.com";
    case "Teacher 2":
      return "https://www.linkedin.com";
    case "Vedika Nigam":
      return "https://www.linkedin.com/in/vedika-nigam-809669211/";
    case "Suryansh":
      return "https://www.linkedin.com/in/suryansh-kumar-9b4472235/";
    case "Arke De":
      return "https://www.linkedin.com/in/arkade13/";
    case "Omm Malhotra":
      return "https://www.linkedin.com/in/omm-malhotra-889925250/";
    case "Daksh Pratap Singh":
      return "https://www.linkedin.com/in";
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

const Member: React.FC<MemberProps> = ({ name, position, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="member-container rounded-3xl overflow-hidden shadow-md shadow-white bg-white/30 backdrop-blur-lg border border-gray-200
        hover:opacity-100 hover:bg-white hover:cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-40 object-contain transition-opacity ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`member-info bg-black text-white p-2 min-h-full justify-center transition-opacity ${
          isHovered ? "bg-white" : ""
        }`}
      >
        <strong
          className={`name text-xl sm:text-2xl md:text-2xl text-[#F7AB0A] ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {name}
        </strong>
        <div
          className={`position text-md sm:text-xl md:text-xl ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {position}
        </div>
        {isHovered && (
          <div className="social-icon-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SocialIcon
              url={getSocialLink(name)}
              target="_blank"
              fgColor="white"
              bgColor="blue"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;

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
