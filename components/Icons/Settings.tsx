import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			d="M11.505 2.29a2.165 2.165 0 0 0-3.01 0 2.17 2.17 0 0 1-1.81.587 2.165 2.165 0 0 0-2.435 1.77 2.17 2.17 0 0 1-1.118 1.539 2.165 2.165 0 0 0-.93 2.863c.293.6.293 1.302 0 1.902a2.165 2.165 0 0 0 .93 2.863c.59.313 1.003.881 1.118 1.539a2.165 2.165 0 0 0 2.436 1.77 2.17 2.17 0 0 1 1.809.587c.839.812 2.171.812 3.01 0a2.17 2.17 0 0 1 1.81-.587 2.165 2.165 0 0 0 2.435-1.77 2.17 2.17 0 0 1 1.118-1.539 2.165 2.165 0 0 0 .93-2.863 2.17 2.17 0 0 1 0-1.902 2.165 2.165 0 0 0-.93-2.863 2.17 2.17 0 0 1-1.118-1.539 2.165 2.165 0 0 0-2.436-1.77 2.17 2.17 0 0 1-1.809-.587M10 14.167a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334"
			clipRule="evenodd"
		/>
	</svg>
);
const Memo = memo(SvgSettings);
export default Memo;
