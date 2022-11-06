import React from "react";
import Image from "next/image";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div {...props}>
      <Image src="/images/logo.png" width={40} height={40} />
    </div>
  );
};

export default Icon;
