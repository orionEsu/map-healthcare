import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.376 4.697a.833.833 0 1 0-1.179 1.178L9.322 10l-4.125 4.125a.833.833 0 0 0 1.179 1.178L10.5 11.18l4.124 4.124a.833.833 0 0 0 1.179-1.178L11.679 10l4.125-4.125a.833.833 0 0 0-1.179-1.178l-4.124 4.125z"
    />
  </svg>
);
const Memo = memo(SvgX);
export default Memo;
