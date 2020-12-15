import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAknc = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#aknc_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z"
      fill="#31CB9E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.281 8.047l-6.815 5.207a1.181 1.181 0 00-.466.947v11.04c0 .368.17.723.466.946l6.815 5.201a1.19 1.19 0 001.438 0l6.815-5.207c.295-.225.468-.576.466-.947v-11.04a1.19 1.19 0 00-.466-.946l-6.815-5.201a1.171 1.171 0 00-1.438 0zm-1.26 12.558l8.758 5.03-6.599 5.037-2.16-10.067zm8.758-6.805l-6.592-5.036L18.02 18.83l8.759-5.03zm-8.509 5.918l8.838-5.083v10.158l-8.838-5.075zm.9-10.461l-6.277 4.793v11.335l6.276 4.793-2.245-10.46L19.17 9.257z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="aknc_svg__paint0_linear"
        x1={36.28}
        y1={9.08}
        x2={6.52}
        y2={34.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAknc;
