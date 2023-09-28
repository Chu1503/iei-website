import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="sticky bottom-0 p-5 flex items-end justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex items-center text-gray-300">
        <img
          className="relative h-12 w-30 mx-auto object-cover cursor-pointer"
          src="https://cdn.discordapp.com/attachments/894801439992475768/1156965388630904843/vitlogohd.png?ex=6516e37c&is=651591fc&hm=69b691d0ceffa3541a96995266ee38ac02c4f0af9a0155e1f80f4785c6a8e504&"
          alt=""
        />
      </div>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.linkedin.com/company/ie-i-vellore/mycompany/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/ieichap.vit/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/iei_vit/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://www.threads.net/"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </div>
    </footer>
  );
}
