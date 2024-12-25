import React from "react";
import { IconSearch } from "./Icons";

export default function SearchInput() {
	return (
		<div className="relative shadow-input">
			<IconSearch className="absolute size-5 left-3 top-[10px]" />
			<input
				type="search"
				name=""
				id=""
				className="w-[450px] h-10 rounded-md border border-gray-200 px-3 py-[10px]  text-sm font-normal text-gray-500 pl-10"
				placeholder="Search here..."
			/>
		</div>
	);
}
