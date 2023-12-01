import React from "react";
import { TiStar } from "react-icons/ti";

export default function Star() {
  return (
    <div className="flex  -mt-4 items-center ">
      <TiStar size={32} className="text-[#34A0A4]" />
      <TiStar size={32} className=" text-[#34A0A4]" />
      <TiStar size={32} className="text-[#34A0A4]" />
      <TiStar size={32} className="text-[#34A0A4] " />
      <TiStar size={32} className="text-[#34A0A4] " />
    </div>
  );
}
