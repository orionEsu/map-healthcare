import React from "react";
import { Bell, Chats, ChevronDown, ChevronLeft } from "./Icons";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Header() {
	return (
		<header
			id="header"
			className="flex items-center px-6 justify-between bg-white border-b border-b-gray-100 h-16"
		>
			<span className="flex gap-2 items-center font-medium text-sm text-gray-500">
				<ChevronLeft className="size-5" />
				Back
			</span>
			<div className="flex items-center gap-10">
				<SearchInput />

				<div className="flex gap-4 items-center">
					<button>
						<Bell className="size-8 hover:fill-black cursor-pointer" />
					</button>
					<button>
						<Chats className="size-8" />
					</button>

					<div className="flex gap-2 items-center">
						<Image
							src="/static/img/Avatar.svg"
							alt="Avatar"
							width={32}
							height={32}
						/>
						<ChevronDown className="size-[18px]" />
					</div>
				</div>
			</div>
		</header>
	);
}
