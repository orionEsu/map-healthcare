import React from "react";

export function NameBadge({ name }: { name: string }) {
	return (
		<div className="flex gap-2 items-center">
			<span className="flex items-center justify-center size-8 rounded-full bg-primary-50 border-[1.5px] border-white text-gray-900 font-bold text-sm">
				{name
					?.split(" ")
					.map((el) => el[0])
					.join("")}
			</span>
			<p className="font-medium text-base text-gray-700">{name}</p>
		</div>
	);
}

export function StatusBadge({ name }: { name: string }) {
	return (
		<span className="block w-fit px-2 py-0 bg-primary-50 rounded-full text-primary-400 text-xs font-medium">
			{name}
		</span>
	);
}
