import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#667185"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="m17 17-4.667-4.667m1.556-3.889a5.445 5.445 0 1 1-10.89 0 5.445 5.445 0 0 1 10.89 0"
    />
  </svg>
);
const Memo = memo(SvgIconSearch);
export default Memo;
