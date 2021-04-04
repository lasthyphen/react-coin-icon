import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFei = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#22996E"
    />
    <Path
      d="M9.97 28.49c-1.358 0-2.179-1.503-1.445-2.646l5.706-8.9a2.29 2.29 0 011.928-1.054h7.682c.78 0 1.507.398 1.928 1.055l5.706 8.899c.734 1.143-.088 2.645-1.446 2.645H9.971zM21.025 8.018l2.396 3.662a1.145 1.145 0 01-.958 1.773H17.58a1.145 1.145 0 01-.947-1.79l2.486-3.661a1.145 1.145 0 011.906.016z"
      fill="#fff"
    />
  </Svg>
);

export default SvgFei;
