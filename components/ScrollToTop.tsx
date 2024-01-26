import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function ScrollToTop({}: Props) {
  return (
    <Link href="#hero">
      <button className="bottom-40 right-10 cursor-pointer bg-[#F7AB0A] hover:bg-[rgba(52,52,52,0.5)] text-white hover:text-[#F7AB0A] font-bold py-2.5 px-4 rounded-full transition-transform duration-300 ease-in-out">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </Link>
  );
}
