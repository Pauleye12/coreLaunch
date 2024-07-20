import React from "react";

interface TextProps {
  text: string;
}
const Loader: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full pt-[80px] grid place-items-center bg-[#191A1AF2] ">
      <div className="flex flex-col gap-2 items-center ">
        <img src="../images/loading.png" alt="" />
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Loader;
