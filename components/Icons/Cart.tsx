import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#175CFF"
      d="M3.075 1.667a.833.833 0 0 0 0 1.666c.607 0 1.137.441 1.246 1.062l.572 3.25a1 1 0 0 0 .018.082l.17.943c.47 2.634.706 3.95 1.521 4.855.303.336.657.624 1.052.854 1.062.621 2.448.621 5.22.621h.338c1.252 0 1.878 0 2.393-.22a2.65 2.65 0 0 0 1.058-.812c.338-.435.478-1.023.759-2.2.424-1.778.636-2.667.39-3.362a2.6 2.6 0 0 0-1.116-1.351c-.647-.388-1.593-.388-3.484-.388H6.413l-.45-2.56a2.94 2.94 0 0 0-2.888-2.44M8.75 17.292a1.042 1.042 0 1 1-2.084 0 1.042 1.042 0 0 1 2.084 0M15.208 18.333a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083"
    />
  </svg>
);
const Memo = memo(SvgCart);
export default Memo;
