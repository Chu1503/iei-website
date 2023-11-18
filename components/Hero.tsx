import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import iei_logo from '../images/iei_logo.png';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["IE(I) - VIT", "The Institution Of Engineers - (India)"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col -space-y-2 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-52 w-52 mx-auto object-contain p-5"
        src={iei_logo.src}
        alt="IEI LOGO"
      />
      <div className="z-20">
        <h1 className="text-4xl sm:text-5xl font-semibold px-18">
          <span>{text}</span>
          <Cursor cursorColor="red" />{" "}
        </h1>
      </div>
    </div>
  );
}
