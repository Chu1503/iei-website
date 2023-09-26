import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["IE(I) - VIT", "The Institution Of Engineers - (India)"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://cdn.discordapp.com/attachments/894801439992475768/1156323370191831080/IEI_LOGO_BLACK.png?ex=65148d8e&is=65133c0e&hm=331707fcce56648d7103819906e429d1bcfd863982d43f046017a8dcd932e641&"
        alt=""
      />
      <div>
        <h1 className="text-5xl lg:text-6xl font-semibold px-18">
          <span>{text}</span>
          <Cursor cursorColor="red" />{" "}
        </h1>
      </div>
    </div>
  );
}
