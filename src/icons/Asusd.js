import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAsusd = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#asusd_svg__paint0_linear)"
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
      fill="#25292E"
    />
    <Path
      d="M13.103 26.107l-1.365-.966 8.585-11.834 1.364.966-8.584 11.834z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <Path
      d="M15.422 20.55c-2.111 0-3.822-1.69-3.822-3.775S13.311 13 15.422 13h5.62c.463 0 .84.371.84.83 0 .457-.377.829-.84.829h-5.62c-1.184 0-2.143.947-2.143 2.116s.96 2.116 2.143 2.116H18.06c2.11 0 3.821 1.69 3.821 3.775s-1.71 3.775-3.821 3.775h-5.62a.834.834 0 01-.84-.829c0-.458.376-.83.84-.83h5.62c1.183 0 2.142-.947 2.142-2.116 0-1.168-.959-2.116-2.142-2.116H15.422z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.365 20.049a.792.792 0 01-.574.288l-.014.997c.308-.004.585-.09.832-.258.248-.167.442-.399.582-.695.14-.296.21-.634.21-1.014 0-.352-.067-.67-.2-.953a1.61 1.61 0 00-.547-.661 1.362 1.362 0 00-.787-.238c-.303 0-.545.067-.726.2a1.211 1.211 0 00-.405.526c-.09.217-.164.484-.224.8-.06.313-.111.543-.155.692a.91.91 0 01-.172.346.376.376 0 01-.299.122.475.475 0 01-.412-.203c-.097-.136-.145-.317-.145-.543 0-.244.063-.44.19-.59a.731.731 0 01.498-.257v-.998a1.36 1.36 0 00-.777.248c-.23.16-.41.38-.54.658-.13.278-.196.591-.196.94 0 .339.063.643.19.912.125.269.298.479.518.63.22.152.47.228.75.228.307 0 .553-.067.74-.2a1.25 1.25 0 00.419-.52 3.67 3.67 0 00.23-.786c.064-.317.118-.55.162-.702a.885.885 0 01.178-.353.392.392 0 01.306-.125c.184 0 .327.076.43.227.103.151.155.347.155.587 0 .29-.072.52-.217.695zm-1.028 4.758h-2.792v1.018h2.737c.688 0 1.213-.165 1.575-.496.362-.33.543-.814.543-1.451 0-.638-.18-1.123-.543-1.455-.362-.332-.887-.499-1.575-.499h-2.737v1.018h2.792c.39 0 .683.076.88.227.198.151.296.388.296.709 0 .32-.098.556-.296.705-.197.15-.49.224-.88.224zm-2.792-7.902v-1.648c0-.475.102-.894.306-1.258.204-.364.489-.645.853-.841.364-.197.78-.296 1.248-.296.468 0 .884.099 1.248.296.365.196.65.477.853.84.204.365.306.784.306 1.259v1.648h-4.814zm3.532-2.649c.281.238.422.571.422 1v.632h-3.094v-.631c0-.43.14-.763.423-1 .282-.238.657-.357 1.124-.357.468 0 .843.119 1.125.356z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="asusd_svg__paint0_linear"
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

export default SvgAsusd;
