import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCalendarAlt = (props: SVGProps<SVGSVGElement>) => (
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
			d="M6.667 1.667c.46 0 .833.373.833.833v1.25H5.833V2.5c0-.46.373-.833.834-.833M12.5 4.167h-5V5a.833.833 0 0 1-1.667 0v-.833H5a2.5 2.5 0 0 0-2.5 2.5v.416h15v-.416a2.5 2.5 0 0 0-2.5-2.5h-.833V5A.833.833 0 0 1 12.5 5z"
		/>
		<path
			fill={props?.fill ?? "#667185"}
			fillRule="evenodd"
			d="M2.5 8.75v7.083a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V8.75zM4.167 15c0-.46.373-.833.833-.833h5.833a.833.833 0 1 1 0 1.666H5A.833.833 0 0 1 4.167 15m9.166-.833a.833.833 0 0 0 0 1.666H15a.833.833 0 0 0 0-1.666z"
			clipRule="evenodd"
		/>
		<path
			fill="#667185"
			d="M14.167 2.5a.833.833 0 0 0-1.667 0v1.25h1.667z"
		/>
	</svg>
);
const Memo = memo(SvgCalendarAlt);
export default Memo;
