// import React from "react";

// type Props = {};

// const Loader: React.FC<Props> = () => {
//   return (
//     <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
//       <div className="fixed inset-0 flex justify-center items-center">
//         <img src="/cool.svg" alt="Loading..." />
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const Loader: React.FC<Props> = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <div className="fixed inset-0 flex justify-center items-center">
        <HashLoader size={50} color={"#ffffff"} loading={true} />
      </div>
    </div>
  );
};

export default Loader;