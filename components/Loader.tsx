import React from "react";
import { BeatLoader } from "react-spinners";

type Props = {};

const Loader: React.FC<Props> = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <div className="fixed inset-0 flex justify-center items-center">
        <BeatLoader size={25} color={"#ffffff"} loading={true} />
      </div>
    </div>
  );
};

export default Loader;
