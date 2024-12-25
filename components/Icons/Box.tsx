import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 20 20"
		{...props}
	>
		<path
			fill={props?.fill ?? "#667185"}
			d="M7.112 2.938c1.014-.32 1.916-.581 2.432-.727.3-.085.61-.082.908.01 1.383.427 5.559 1.746 7.204 2.627l-2.91 1.226zM5.288 3.54c-1.212.423-2.362.878-3.029 1.277l.066.024L10 8.07l3.12-1.313zM1.577 5.784c-.196 1.382-.044 5.708.041 7.733.028.651.436 1.221 1.04 1.463l6.723 2.69.019.007a.6.6 0 0 1-.025-.177V9.165L1.84 5.993a.6.6 0 0 1-.263-.21M10.6 17.677l.019-.008 6.722-2.689a1.65 1.65 0 0 0 1.04-1.463c.086-2.025.237-6.351.041-7.733a.6.6 0 0 1-.263.209l-7.534 3.172V17.5q-.001.091-.026.177"
		/>
	</svg>
);
const Memo = memo(SvgBox);
export default Memo;
