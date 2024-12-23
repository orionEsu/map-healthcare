import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#98A2B3"
      d="m2.815 8.728 7.814 7.355a2 2 0 0 0 2.742 0l7.814-7.355a1 1 0 0 0-1.37-1.456L12 14.627 4.185 7.272a1 1 0 0 0-1.37 1.456"
    />
  </svg>
);
const Memo = memo(SvgChevronDown);
export default Memo;
