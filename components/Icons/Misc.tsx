import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMisc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={23} height={23} x={0.5} y={0.5} fill="#E7F6EC" rx={7.5} />
    <rect width={23} height={23} x={0.5} y={0.5} stroke="#B5E3C4" rx={7.5} />
    <path
      fill="#04802E"
      fillRule="evenodd"
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m1.838-5.131a.5.5 0 0 0-.676-.738l-1.846 1.691-.478-.438a.5.5 0 0 0-.676.737l.817.748a.5.5 0 0 0 .675 0z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgMisc);
export default Memo;
