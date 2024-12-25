"use client";

import { columns, Quote } from "@/lib/columns";
import React from "react";
import { Multiply } from "./Icons";
import { NameBadge, StatusBadge } from "./Badge";
import { ClientCard } from "./Card";
import { Terms } from "./Terms";
import { DataTable } from "@/lib/data-table";
import { MultiStepForm } from "./form/MultiStepForm";

const quoteInformation = {
	date: "2024-12-02",
	title: "Request for Equipments",
	id: "RQ #01234",
	status: "Awaiting",
	requestor: {
		name: "Jane Doe",
		designation: "Head Nurse, Paediatrics",
		department: "Maternity",
	},
	client: {
		name: "Westend Hospital",
		address: "Clear street",
	},
} as const;

export function QuoteDetails({ data }: { data: Quote[] }) {
	const { date, title, id, status, requestor, client } = quoteInformation;
	const [respond, setRespond] = React.useState(false);

	return (
		<>
			{!respond && (
				<div className="grid gap-8">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="font-bold text-2xl text-black">
								Quote details
							</h1>
							<p className="text-gray-500 text-sm font-normal">
								Created on Wed. 12th June, 08:00am
							</p>
						</div>
						<div className="flex gap-3 items-center">
							<button
								className="px-4 py-2 bg-primary-blue rounded-lg text-white text-sm font-bold h-9 w-[90px]"
								type="button"
								onClick={() => {
									setRespond(true);
								}}
							>
								Respond
							</button>
							<button
								className="px-4 py-2 bg-error-400 rounded-lg text-white text-sm font-bold flex gap-2 items-center h-9 w-[93px]"
								type="button"
							>
								<Multiply className="fill-white size-5" />
								Reject
							</button>
						</div>
					</div>
					<div className="space-y-6">
						<div className="px-9 py-6 rounded-lg border border-gray-200 space-y-8">
							<hgroup className="flex items-center justify-between">
								<h2 className="text-gray-800 font-bold text-xl">
									Quote Information
								</h2>
								<p className="text-gray-500 font-normal text-sm">
									Expected delivery date : {date}
								</p>
							</hgroup>
							{/* 555E68--tetiary */}
							<div className="flex justify-between items-start">
								<div className="w-[559px] flex items-center justify-between">
									<div className="space-y-4">
										<p className="font-medium text-base text-[#555E68]">
											Title
										</p>
										<p className="font-medium text-base text-[#555E68]">
											RFQ No
										</p>
										<p className="font-medium text-base text-[#555E68]">
											Requestor
										</p>
										<p className="font-medium text-base text-[#555E68]">
											Status
										</p>
										<p className="font-medium text-base text-[#555E68]">
											Department
										</p>
									</div>

									<div className="space-y-4">
										<p className="font-medium text-base text-gray-700">
											{title}
										</p>
										<p className="font-medium text-base text-gray-700">
											{id}
										</p>
										<div className="flex gap-2 items-center">
											<NameBadge name={requestor?.name} />
											<svg
												width="6"
												height="6"
												viewBox="0 0 6 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="3"
													cy="3"
													r="3"
													fill="#D9D9D9"
												/>
											</svg>
											<p className="text-base font-medium text-gray-400">
												{requestor?.designation}
											</p>
										</div>
										<StatusBadge name={status} />
										<p className="font-medium text-base text-gray-700">
											{requestor?.department}
										</p>
									</div>
								</div>
								<ClientCard client={client} />
							</div>
						</div>

						<Terms />

						<div className="border border-gray-200 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.04)] pb-6 space-y-4 rounded-[10px]">
							<h3 className="px-6 py-4 text-gray-800 font-bold text-xl">
								Item(s)
							</h3>

							<div className="px-4 space-y-6">
								<DataTable
									columns={columns}
									data={data}
								/>

								<div className="space-y-4 w-[379px] ml-auto">
									<div className="flex items-center justify-between">
										<p className="text-gray-600 font-normal text-base">
											Sub Total
										</p>
										<p className="text-gray-600 font-normal text-base">
											$8,000.00
										</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-gray-600 font-normal text-base">
											Total
										</p>
										<p className="text-gray-600 font-bold text-base">
											$8,750.00
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{respond && (
				<div>
					<div className="flex items-center gap-3 h-[38px] pb-8">
						<p className="text-primary-blue font-medium text-sm">
							Quotes
						</p>

						<svg
							width="6"
							height="11"
							viewBox="0 0 6 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.67016 11H0.368164L4.31616 0.891999H5.63216L1.67016 11Z"
								fill="#98A2B3"
							/>
						</svg>

						<p className="text-gray-500 font-medium text-sm">
							Quote Response
						</p>
					</div>

					<MultiStepForm />
				</div>
			)}
		</>
	);
}
