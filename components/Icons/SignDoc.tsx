import type { SVGProps } from "react";
import { memo } from "react";

const SvgSignDoc = (props: SVGProps<SVGSVGElement>) => (
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
			d="M10.833 1.667h-5a2.5 2.5 0 0 0-2.5 2.5v11.666a2.5 2.5 0 0 0 2.5 2.5h8.334a2.5 2.5 0 0 0 2.5-2.5v-7.5h-2.5A3.333 3.333 0 0 1 10.833 5zm5.664 5a2.5 2.5 0 0 0-.41-.696L13.25 2.566a2.5 2.5 0 0 0-.75-.608V5c0 .92.746 1.667 1.667 1.667zm-2.532 8.983a.62.62 0 0 1-.417-.158c-.492-.434-.767-.617-.908-.7l-.07.053c-.062.048-.131.101-.197.155-.55.425-.858.65-1.192.65-.458 0-1.158-.158-1.608-1l-.183.275c-.292.433-.65.658-1.05.667-.617-.009-1.059-.434-1.475-.95q-.363.397-.8.833a.63.63 0 0 1-.884 0 .63.63 0 0 1 0-.883c.384-.384.7-.725.967-1.025-.342-.634-.675-1.442-.692-2.15-.008-.634.184-1.184.55-1.559a1.4 1.4 0 0 1 1-.441c.767 0 1.55.233 1.55 1.991 0 .659-.291 1.4-.891 2.25l.075.1c.283.375.45.517.533.575q.01-.014.022-.03.022-.024.045-.061l.925-1.367a.63.63 0 0 1 .666-.258c.25.058.442.275.475.525.134 1.066.467 1.241.667 1.266.133-.083.375-.266.525-.383.458-.358.675-.517.958-.517.359 0 .8.184 1.8 1.067a.63.63 0 0 1 .059.883.62.62 0 0 1-.467.209zm-6.75-5.017s-.117.017-.192.017c-.017 0-.058.017-.108.067-.059.058-.2.25-.192.666 0 .284.117.65.267 1.017.275-.483.333-.808.333-1.008 0-.609-.108-.75-.108-.75zM5.973 6.25h3.334a.63.63 0 0 0 .625-.625A.63.63 0 0 0 9.307 5H5.973a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625"
			clipRule="evenodd"
		/>
	</svg>
);
const Memo = memo(SvgSignDoc);
export default Memo;
