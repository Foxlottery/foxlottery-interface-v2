import React from "react";
import Image from "next/image";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
  isSmall?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, isSmall = false, ...props }) => {
  return (
    <div {...props}>
      <Image
        src={isDark ? "/images/logo-with-text-dark.png" : "/images/logo-with-text.png"}
        width={isSmall ? 310 : 620}
        height={isSmall ? 100 : 199}
      />
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
