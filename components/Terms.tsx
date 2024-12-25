import React from "react";
import { ChevronDown, SignDocLg } from "./Icons";

export function Terms() {
	return (
		<div className="p-6 border border-gray-300 rounded-lg flex items-center justify-between">
			<div className="flex gap-3">
				<SignDocLg className="size-8" />
				<hgroup className="space-y-2">
					<h3 className="text-xl font-bold text-gray-800">
						Terms and Attachments
					</h3>
					<p className="text-sm font-normal text-gray-600">
						Review payment and delivery terms
					</p>
				</hgroup>
			</div>

			<ChevronDown className="size-6" />
		</div>
	);
}
