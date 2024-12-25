import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#98A2B3"
      d="M9.5 1.75a1 1 0 0 0-.935.646l-.23.606a109 109 0 0 1-1.97-.215l-.18-.022-.061-.007a1 1 0 0 0-.247 1.984l.067.009.186.022a106 106 0 0 0 2.78.293c1.071.098 2.246.184 3.09.184s2.02-.086 3.091-.184a104 104 0 0 0 2.78-.293l.185-.022.067-.009a1 1 0 0 0-.246-1.984l-.062.007-.18.022a103 103 0 0 1-1.97.215l-.23-.606a1 1 0 0 0-.935-.646zM11 11.75a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zM14 10.75a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
    />
    <path
      fill="#98A2B3"
      fillRule="evenodd"
      d="M18.91 8.05a2.018 2.018 0 0 0-2.247-2.142c-1.272.147-3.235.342-4.663.342s-3.391-.195-4.663-.342A2.018 2.018 0 0 0 5.09 8.051l.857 11.994c.065.909.742 1.678 1.672 1.818.996.15 2.825.389 4.382.387 1.538-.002 3.375-.24 4.376-.389a1.975 1.975 0 0 0 1.676-1.819zm-2.017-.155h.009a.03.03 0 0 1 .013.011v.002l-.856 11.979c-.99.146-2.688.361-4.06.363-1.387.002-3.074-.214-4.058-.361l-.856-11.98v-.003l.004-.005.01-.005.002-.001h.006c1.274.147 3.339.355 4.893.355 1.555 0 3.619-.208 4.893-.355"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgBin);
export default Memo;
