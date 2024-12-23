import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGrid2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.667 12.083v4.167c0 .69.56 1.25 1.25 1.25h3.333c.69 0 1.25-.56 1.25-1.25v-4.167c0-.69-.56-1.25-1.25-1.25h-3.333c-.69 0-1.25.56-1.25 1.25M2.5 12.083v4.167c0 .69.56 1.25 1.25 1.25h3.333c.69 0 1.25-.56 1.25-1.25v-4.167c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25M2.5 3.75v3.333c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25"
    />
  </svg>
);
const Memo = memo(SvgGrid2);
export default Memo;
