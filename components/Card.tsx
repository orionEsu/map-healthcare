import React from "react";
import { Building5 } from "./Icons";

export function ClientCard({
	client: { name, address },
}: {
	client: {
		name: string;
		address: string;
	};
}) {
	return (
		<div className="p-4 border border-gray-200 grid gap-2 w-[352px] rounded-[10px]">
			<div className="flex items-center gap-2">
				<Building5 className="size-5" />
				<p className="text-gray-600 font-normal text-xs">Client</p>
			</div>

			<div className="flex gap-3 items-center">
				<span className="size-8 rounded-full bg-primary-50 border border-white flex items-center justify-center text-gray-900 text-[10px] font-semibold font-inter capitalize">
					{name?.split("")[0]}
				</span>
				<hgroup>
					<h3 className="text-gray-500 text-sm font-medium">
						{name}
					</h3>
					<p className="text-gray-600 font-normal text-xs">
						{address}
					</p>
				</hgroup>
			</div>
		</div>
	);
}
