import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.597 11.142a1.667 1.667 0 0 1 0-2.284l6.13-6.512a.833.833 0 0 1 1.213 1.142L7.811 10l6.13 6.512a.833.833 0 0 1-1.215 1.142z"
    />
  </svg>
);
const Memo = memo(SvgChevronLeft);
export default Memo;
