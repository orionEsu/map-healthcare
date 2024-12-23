import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgChats = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M14.167 11.667a5.833 5.833 0 0 1-7.28 5.652l-3.633-.454a.73.73 0 0 1-.63-.843l.223-1.334a.7.7 0 0 0 .004-.21l-.17-1.364a5.833 5.833 0 1 1 11.486-1.447M5 12.5a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667m2.5-.833a.833.833 0 1 0 1.667 0 .833.833 0 0 0-1.667 0m4.167.833a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667"
      clipRule="evenodd"
    />
    <path
      fill="#667185"
      fillRule="evenodd"
      d="M17.5 6.667a4.167 4.167 0 0 0-7.844-1.96 7.09 7.09 0 0 1 5.678 5.876l1.628-.203a.52.52 0 0 0 .449-.603l-.159-.952a.5.5 0 0 1-.003-.15l.122-.975q.128-.497.129-1.033"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgChats);
export default Memo;
