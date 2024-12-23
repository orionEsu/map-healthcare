import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgQuestionCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-7.383-1.546a.554.554 0 1 0-.724-.835l-.47.47a.833.833 0 0 1-1.179-1.178l.47-.47a2.22 2.22 0 1 1 2.903 3.346l-.04.03a.6.6 0 0 0-.244.487v.113a.833.833 0 0 1-1.666 0v-.113c0-.716.337-1.39.91-1.82zm-.95 4.463a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgQuestionCircle);
export default Memo;
