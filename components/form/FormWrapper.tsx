import React from "react";

type FormWrapperProps = {
	title: string;
	description: string;
	children: React.ReactNode;
};

export function FormWrapper({
	title,
	description,
	children,
}: FormWrapperProps) {
	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<h2 className="text-[#1A1A21] font-bold text-2xl">{title}</h2>
				<p className="text-gray-400 font-normal text-base">
					{description}
				</p>
			</div>

			{children}
		</div>
	);
}
