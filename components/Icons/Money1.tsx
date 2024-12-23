import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMoney1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#667185"
      d="M10.833 10a.833.833 0 1 0-1.666 0 .833.833 0 0 0 1.666 0"
    />
    <path
      fill="#667185"
      fillRule="evenodd"
      d="M4.167 4.167h11.666a2.5 2.5 0 0 1 2.5 2.5v6.666a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V6.667a2.5 2.5 0 0 1 2.5-2.5m0 1.25a.833.833 0 0 0 0 1.666h1.666a.833.833 0 0 0 0-1.666zm9.166.833c0-.46.373-.833.834-.833h1.666a.833.833 0 1 1 0 1.666h-1.666a.833.833 0 0 1-.834-.833m-9.166 6.667a.833.833 0 1 0 0 1.666h1.666a.833.833 0 1 0 0-1.666zm9.166.833c0-.46.373-.833.834-.833h1.666a.833.833 0 1 1 0 1.666h-1.666a.833.833 0 0 1-.834-.833M10 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgMoney1);
export default Memo;
