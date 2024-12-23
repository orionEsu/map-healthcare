import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSignOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#000"
      d="M6.25 3.333a.833.833 0 1 0 0-1.666H5A3.333 3.333 0 0 0 1.667 5v10A3.333 3.333 0 0 0 5 18.333h1.25a.833.833 0 0 0 0-1.666H5c-.92 0-1.667-.747-1.667-1.667V5c0-.92.747-1.667 1.667-1.667z"
    />
    <path
      fill="#000"
      d="M18.923 10.59a.833.833 0 0 0 0-1.18l-3.334-3.333a.833.833 0 0 0-1.178 1.179l1.91 1.91H6.668a.833.833 0 1 0 0 1.667h9.655l-1.911 1.911a.833.833 0 0 0 1.178 1.179z"
    />
  </svg>
);
const Memo = memo(SvgSignOut);
export default Memo;
