import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#344054"
      fillRule="evenodd"
      d="M9.41 6.91a.833.833 0 0 1 1.18 0l5 5a.833.833 0 1 1-1.18 1.18L10 8.677 5.59 13.09a.833.833 0 1 1-1.18-1.178z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgChevronUp);
export default Memo;
