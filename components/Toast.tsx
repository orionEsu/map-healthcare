import React from "react";
import { Misc, X } from "./Icons";

export function Toast() {
	return (
		<div className="rounded py-3 pr-4 h-12 bg-white flex w-[390px] justify-between">
			<div className="flex">
				<span className="w-[6px] h-full bg-success-600 rounded-l"></span>
				<div className="pl-4 flex items-center gap-3">
					<Misc className="size-6" />
					<p className="text-gray-900 font-bold text-sm">
						RFQ ID sent successfully!
					</p>
				</div>
			</div>

			<X className="size-5" />
		</div>
	);
}
