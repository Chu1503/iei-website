import React from "react";
import Footer from "./Footer";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center max-w-7xl p-10 justify-evenly mx-auto items-center">
      <h2 className="p-10 uppercase tracking-[20px] text-gray-500 text-3xl">
        Gallery
      </h2>
    </div>
  );
}
