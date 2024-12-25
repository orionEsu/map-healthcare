import { cn } from "@/lib/utils";
import React from "react";

export default function Steps({ currentStep }: { currentStep: number }) {
	const allSteps = [
		{
			title: "Request Information",
			description: "Provide details about the RFQ",
			step: 1,
		},
		{
			title: "Terms and Attachments",
			description: "Payment and delivery terms",
			step: 2,
		},
		{
			title: "Review",
			description: "Confirm all information provided",
			step: 3,
		},
	];

	return (
		<>
			{allSteps.map(({ step, description, title }) => (
				<div
					className="flex gap-4"
					key={step}
				>
					<div
						className={cn(
							"size-8 rounded-full flex items-center justify-center bg-white text-lg font-bold text-gray-400 border border-gray-400",
							{
								"bg-success-50 text-success-400 border-success-50":
									currentStep >= step,
								"bg-primary-blue text-white border-primary-blue":
									currentStep === step,
							}
						)}
					>
						{step}
					</div>
					<hgroup className="space-y-1">
						<h4 className="text-gray-900 text-base font-medium">
							{title}
						</h4>
						<p className="text-gray-500 text-xs font-normal">
							{description}
						</p>
					</hgroup>
				</div>
			))}
		</>
	);
}

/*     ${
						step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
                    } */
{
	/* <div
	key={num}
	className={`size-8 rounded-full flex items-center justify-center bg-primary-blue text-lg font-bold text-white`}
>
	{num}
</div>; */
}

/* <div
					className="flex gap-4"
					key={step}
				>
					<div
						className={`size-8 rounded-full flex items-center justify-center bg-primary-blue text-lg font-bold text-white`}
					>
						{step}
					</div>
					<hgroup className="space-y-1">
						<h4 className="text-gray-900 text-base font-bold">
							{title}
						</h4>
						<p className="text-gray-600 text-xs font-normal">
							{description}
						</p>
					</hgroup>
				</div> */
