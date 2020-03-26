import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgCwbtc = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#cwbtc_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.817 17.15c.398-2.66-1.628-4.091-4.4-5.046l.9-3.605-2.195-.547-.875 3.51c-.577-.143-1.17-.279-1.758-.413l.881-3.533-2.193-.547-.9 3.603-1.398-.34-3.026-.756-.584 2.344s1.628.373 1.594.396c.889.222 1.05.81 1.022 1.277l-1.023 4.106-.004.016-1.435 5.753c-.109.27-.384.675-1.006.521.022.032-1.595-.398-1.595-.398l-1.09 2.512 2.857.712c.53.133 1.051.273 1.564.404l-.908 3.646 2.192.547.899-3.608c.599.163 1.18.313 1.749.454l-.896 3.59 2.194.548.908-3.64c3.742.708 6.556.423 7.74-2.962.954-2.725-.047-4.296-2.016-5.322 1.433-.33 2.514-1.273 2.802-3.221zm-10.563 3.083l-1.205 4.83c.123.031.267.07.428.112 1.79.473 5.704 1.506 6.326-.994.637-2.556-3.158-3.408-5.01-3.823-.207-.047-.39-.088-.539-.125zm.551-2.211c1.24.309 5.058 1.568 5.677-.91.644-2.586-3.345-3.163-4.584-3.471l-1.093 4.38z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="cwbtc_svg__paint0_linear"
        x1={0}
        y1={0}
        x2={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02D396" />
        <Stop offset={1} stopColor="#9669ED" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgCwbtc;
