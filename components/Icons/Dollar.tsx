import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <path
      fill="#667185"
      fillRule="evenodd"
      d="M11.433 1.667a.833.833 0 1 0-1.666 0V2.5a4.167 4.167 0 0 0 0 8.333v5a2.5 2.5 0 0 1-2.5-2.5.833.833 0 0 0-1.667 0A4.167 4.167 0 0 0 9.767 17.5v.833a.833.833 0 0 0 1.666 0V17.5a4.167 4.167 0 0 0 0-8.333v-5a2.5 2.5 0 0 1 2.5 2.5.833.833 0 0 0 1.667 0A4.167 4.167 0 0 0 11.433 2.5zm-1.666 2.5a2.5 2.5 0 1 0 0 5zm1.666 6.666v5a2.5 2.5 0 0 0 0-5"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgDollar);
export default Memo;
