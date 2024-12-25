import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 57 56"
    {...props}
  >
    <circle cx={28.5} cy={28} r={28} fill="#F0F2F5" />
    <path
      fill="#475367"
      d="M21.5 25.083a6.417 6.417 0 0 1 12.725-1.182c.078.418.376.76.78.894a5.833 5.833 0 0 1-1.838 11.372 1.167 1.167 0 0 0 0 2.333 8.167 8.167 0 0 0 3.204-15.68 8.75 8.75 0 0 0-17.197 2.613A7 7 0 0 0 22.667 38.5a1.167 1.167 0 1 0 0-2.333 4.667 4.667 0 0 1-1.81-8.97c.486-.205.774-.71.703-1.233q-.06-.432-.06-.88"
    />
    <path
      fill="#475367"
      d="M27.725 30.628a1.167 1.167 0 0 1 1.55 0l1.75 1.556a1.167 1.167 0 0 1-1.358 1.882v5.6a1.167 1.167 0 1 1-2.334 0v-5.6a1.167 1.167 0 0 1-1.358-1.882z"
    />
  </svg>
);
const Memo = memo(SvgFileUpload);
export default Memo;
