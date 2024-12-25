"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, SVGProps } from "react";
import {
	Box,
	CalendarAlt,
	Cart,
	Chats,
	ChevronDown,
	ChevronUp,
	Grid2,
	Money1,
	QuestionCircle,
	Settings,
	SignDoc,
	SignOut,
} from "./Icons";

type CustomIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type AppPath =
	| "/"
	| "/inventory"
	| "/finance"
	| "/communication"
	| "/calendar"
	| "/contracts"
	| "/support"
	| "/settings";

type NavigationItem = {
	href: AppPath;
	Icon: CustomIconComponent;
	label: string;
};

interface NavLinkProps extends NavigationItem {
	isActive: boolean;
}

const navigationLinks: NavigationItem[] = [
	{
		href: "/",
		Icon: Grid2,
		label: "Dashboard",
	},
	{
		href: "/inventory",
		Icon: Box,
		label: "Inventory",
	},
	{
		href: "/finance",
		Icon: Money1,
		label: "Finance",
	},
	{
		href: "/communication",
		Icon: Chats,
		label: "Communication",
	},
	{
		href: "/calendar",
		Icon: CalendarAlt,
		label: "Calendar",
	},
	{
		href: "/contracts",
		Icon: SignDoc,
		label: "Contracts",
	},
] as const;

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
						<div className="mt-6">
							<div className="px-6 py-2 flex items-center gap-[7.33px]">
								<Image
									src="/static/img/logo.svg"
									alt="MAP logomark"
									width={82}
									height={24}
								/>
								<Image
									src="/static/img/logo-text.svg"
									alt="MAP logomark"
									width={103.43}
									height={24}
								/>
							</div>
						</div>

						<nav className="mt-3">
							<Navigation />
						</nav>

						<div className="mt-[22px] py-2">
							<div className="px-4 py-3">
								<div className="flex gap-5 items-center">
									<div className="flex gap-3">
										<Image
											src="/static/img/Avatar--2.svg"
											alt="Image of a Man"
											height={40}
											width={40}
										/>

										<hgroup className="text-sm">
											<h4 className="text-gray-900 font-bold text-sm">
												Mark Benson
											</h4>
											<p className="text-gray-600 font-normal">
												markbenson@core...
											</p>
										</hgroup>
									</div>
									<button className="border-none bg-transparent p-0 h-fit cursor">
										<SignOut
											className="size-5"
											fill=""
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

function Nav({ href, Icon, label }: NavLinkProps) {
	return (
		<>
			<div className="w-full flex items-center justify-between px-4 py-3 rounded hover:bg-[#E3EAFB] mb-2 cursor-pointer">
				<div className="flex items-center gap-3">
					<Icon
						className="size-5"
						fill="#667185"
					/>
					<span className="text-sm text-gray-700">{label}</span>
				</div>

				{href === "/finance" && <ChevronDown />}
				{(href === "/communication" || href === "/calendar") && (
					<span className="px-2 rounded-[10px] bg-primary-blue text-white font-inter font-medium text-xs">
						10
					</span>
				)}
			</div>
		</>
	);
}

const ProcurementDropdown = () => {
	const procurementLinks = [
		{ href: "/quotes", label: "Quotes" },
		{ href: "/orders", label: "Orders", disabled: true },
	];

	return (
		<div>
			<button className="w-full flex items-center justify-between px-4 py-3 rounded bg-[#E3EAFB] hover:bg-[#E3EAFB] mb-2">
				<div className="flex items-center gap-3">
					<Cart
						className="size-5"
						fill="#175CFF"
					/>
					<span className="text-sm text-gray-700 font-medium">
						Procurement
					</span>
				</div>

				<ChevronUp />
			</button>

			<div className="space-y-1">
				{procurementLinks.map(({ href, label, disabled }) =>
					disabled ? (
						<div
							key={href}
							className="flex items-center gap-3 px-4 py-3 pl-12 rounded hover:bg-[#E3EAFB]"
						>
							<span className="text-sm text-gray-700">
								{label}
							</span>
						</div>
					) : (
						<Link
							key={href}
							href={href}
							className="flex items-center gap-3 px-4 py-3 pl-12 rounded bg-[#E3EAFB] hover:bg-[#E3EAFB]"
						>
							<span className="text-sm text-gray-700 font-medium">
								{label}
							</span>
						</Link>
					)
				)}
			</div>
		</div>
	);
};

const Navigation = () => {
	const pathname = usePathname();
	const isActive = (href: AppPath) => href === pathname;

	const topLinks = navigationLinks.slice(0, 2);
	const bottomLinks = navigationLinks.slice(2, navigationLinks.length + 1);

	return (
		<>
			<ul className="space-y-1">
				{topLinks.map((link) => (
					<li
						key={link.href}
						className="list-none"
					>
						<Nav
							{...link}
							isActive={isActive(link.href)}
						/>
					</li>
				))}

				<li className="list-none">
					<ProcurementDropdown />
				</li>

				{bottomLinks.map((link) => (
					<li
						key={link.href}
						className="list-none"
					>
						<Nav
							{...link}
							isActive={isActive(link.href)}
						/>
					</li>
				))}
			</ul>
			<ul className="mt-32">
				<li className="list-none">
					<Nav
						href={"/support"}
						Icon={QuestionCircle}
						label={"Support"}
						isActive={isActive("/support")}
					/>
				</li>

				<li className="list-none">
					<Nav
						href={"/settings"}
						Icon={Settings}
						label={"Settings"}
						isActive={isActive("/settings")}
					/>
				</li>
			</ul>
		</>
	);
};
