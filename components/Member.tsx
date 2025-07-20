import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

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
    <div className="rounded-3xl">
      <div className="member-container rounded-3xl overflow-hidden bg-[rgba(74,74,74,0.7)] backdrop-blur-xl relative shadow-lg shadow-black">
        <img
          loading="lazy"
          src={imageUrl}
          alt={name}
          className="w-full h-[11rem] sm:h-[] md:h-[] lg:h-[] xl:h-[16rem] object-contain opacity-100  sm:w-full"
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
  );
};

export default Member;