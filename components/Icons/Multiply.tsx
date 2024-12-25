import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMultiply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 13"
    {...props}
  >
    <path
      fill="#fff"
      d="M1.876 1.197A.833.833 0 0 0 .697 2.375L4.822 6.5.697 10.625a.833.833 0 1 0 1.179 1.178L6 7.68l4.124 4.124a.833.833 0 0 0 1.179-1.178L7.179 6.5l4.125-4.125a.833.833 0 0 0-1.179-1.178L6.001 5.322z"
    />
  </svg>
);
const Memo = memo(SvgMultiply);
export default Memo;
