import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="sticky top-0 flex items-end justify-between max-w-screen mx-auto z-30 xl:items-center bg-[rgb(0,0,0)]">
      <div className="flex flex-row items-center p-5">
        <img
          className="relative h-12 w-30 mx-auto object-cover"
          src="https://cdn.discordapp.com/attachments/894801439992475768/1156824465385197639/IEI_NEW_LOGO.png?ex=6516603d&is=65150ebd&hm=ba7a17410df4b09c71b3820de0c7aa7b273271aeb903eeb6207828fd11e300ba&"
          alt=""
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 p-5">
        <Link href="#hero">
          <button className="herobutton cursor-pointer">Home</button>
        </Link>

        <Link href="#about">
          <button className="herobutton cursor-pointer">About Us</button>
        </Link>

        <Link href="#events">
          <button className="herobutton cursor-pointer">Events</button>
        </Link>

        <Link href="#team">
          <button className="herobutton cursor-pointer">Team</button>
        </Link>

        <Link href="#gallery">
          <button className="herobutton cursor-pointer">Gallery</button>
        </Link>

      </div>
    </header>
  );
}
