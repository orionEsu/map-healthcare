import React from "react";

export default function Sidebar() {
	return (
		<aside
			id="sidebar"
			className="px-2 bg-[#f7f9fc] hidden lg:block"
		>
			<div className="relative overflow-hidden w-full h-full">
				<div
					className="absolute inset-0 overflow-scroll mr-0 mb-0"
					id="ScrollBar"
				>
					<div className="w-full">
						{/* <p className="text-white text-neu">hi guys</p> */}
					</div>
				</div>
			</div>
		</aside>
	);
}
