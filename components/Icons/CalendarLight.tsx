import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCalendarLight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.167.833c.46 0 .833.373.833.834V2.5h5v-.833a.833.833 0 1 1 1.667 0V2.5h.833a3.333 3.333 0 0 1 3.333 3.333V15a3.333 3.333 0 0 1-3.333 3.333h-10A3.333 3.333 0 0 1 2.167 15V5.833A3.333 3.333 0 0 1 5.5 2.5h.833v-.833c0-.46.374-.834.834-.834M13 4.167a.833.833 0 0 0 1.667 0h.833c.92 0 1.667.746 1.667 1.666v.417H3.833v-.417c0-.92.747-1.666 1.667-1.666h.833a.833.833 0 0 0 1.667 0zm4.167 3.75H3.833V15c0 .92.747 1.667 1.667 1.667h10c.92 0 1.667-.747 1.667-1.667z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgCalendarLight);
export default Memo;
