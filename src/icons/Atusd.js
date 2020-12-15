import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAtusd = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#atusd_svg__paint0_linear)"
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
      fill="#002868"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.982 9.44h-1.964c-2.561 0-4.022.371-5.325 1.069a7.27 7.27 0 00-3.024 3.024C9.97 14.836 9.6 16.297 9.6 18.858v1.964c0 2.561.371 4.022 1.069 5.325a7.27 7.27 0 003.024 3.025c1.303.697 2.764 1.068 5.325 1.068h1.964c2.561 0 4.022-.371 5.325-1.068a7.27 7.27 0 003.024-3.025c.698-1.303 1.069-2.764 1.069-5.325v-1.964c0-2.561-.371-4.022-1.069-5.325a7.27 7.27 0 00-3.024-3.024c-1.303-.698-2.764-1.069-5.325-1.069zm-6.723 2.127c1.21-.647 2.528-.927 4.76-.927h1.963c2.231 0 3.55.28 4.76.927a6.07 6.07 0 012.531 2.531c.647 1.21.927 2.529.927 4.76v1.964c0 2.231-.28 3.55-.927 4.76a6.07 6.07 0 01-2.532 2.531c-1.21.647-2.528.927-4.76.927h-1.963c-2.231 0-3.55-.28-4.76-.927a6.07 6.07 0 01-2.531-2.532c-.647-1.21-.927-2.528-.927-4.76v-1.963c0-2.231.28-3.55.927-4.76a6.07 6.07 0 012.531-2.531z"
      fill="#fff"
    />
    <Path
      d="M24.568 15.348c.127 0 .232.104.232.232v2.013a.233.233 0 01-.232.232h-3.195v6.271a.233.233 0 01-.233.233h-2.012a.233.233 0 01-.233-.233v-6.27h-3.463a.233.233 0 01-.232-.233V15.58c0-.127.105-.232.232-.232h9.136z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="atusd_svg__paint0_linear"
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

export default SvgAtusd;
