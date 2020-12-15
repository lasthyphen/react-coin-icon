import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAmkr = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#amkr_svg__paint0_linear)"
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
      fill="#1AAB9B"
    />
    <Path
      d="M18.862 19.961l-7.408-5.571a.905.905 0 00-1.454.724v9.353h1.557v-8.053l6.108 4.597v3.456h1.556v-3.781a.886.886 0 00-.359-.725zm9.69-5.577l-7.409 5.577a.908.908 0 00-.365.725v3.78h1.557v-3.455l6.108-4.597v8.053H30v-9.353a.904.904 0 00-1.449-.73z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="amkr_svg__paint0_linear"
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

export default SvgAmkr;
