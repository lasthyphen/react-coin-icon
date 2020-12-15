import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAaave = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#aaave_svg__paint0_linear)"
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
      fill="url(#aaave_svg__paint1_linear)"
    />
    <Path
      d="M27.131 25.722L21.63 12.424c-.311-.687-.77-1.024-1.38-1.024h-.486c-.608 0-1.067.337-1.379 1.024l-2.393 5.793H14.18a.99.99 0 00-.987.984v.013a.991.991 0 00.987.984h.973l-2.285 5.524a1.166 1.166 0 00-.067.377c-.01.273.086.539.27.74a.95.95 0 00.73.284.988.988 0 00.568-.189 1.2 1.2 0 00.392-.498l2.515-6.238h1.744a.991.991 0 00.987-.984v-.027a.991.991 0 00-.987-.983h-.933l1.92-4.783 5.232 13.014c.084.199.219.37.392.499.165.12.364.185.568.188a.948.948 0 00.73-.283 1.04 1.04 0 00.27-.74.892.892 0 00-.068-.377z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="aaave_svg__paint0_linear"
        x1={36.28}
        y1={9.08}
        x2={6.52}
        y2={34.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
      <LinearGradient
        id="aaave_svg__paint1_linear"
        x1={33.024}
        y1={11.264}
        x2={9.216}
        y2={31.296}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAaave;
