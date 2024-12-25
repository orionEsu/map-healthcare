import React from "react";
import { Control, useFormContext } from "react-hook-form";
import { FormData, StepProps } from "./form/MultiStepForm";
import { RequestInfo } from "./RequestInfo";
import { DataTable } from "@/lib/data-table";
import { columns } from "@/lib/columns";
import { formatCurrency } from "@/app/utils/format-currenncy";
import { Terms } from "./Terms";

export interface ReviewFormProps extends StepProps {
	control: Control<FormData>;
}

export function Review() {
	const { getValues } = useFormContext<FormData>();
	const { title, rfq, department, deliveryDate, items } = getValues();

	const transformedData = items.map((item) => {
		return {
			// ...item,
			id: "728ed52f",
			item: {
				name: item?.name,
				id: 28373,
			},
			quantity: item?.quantity + " pieces",
			amount: item?.price * item?.quantity,
			deliveryDate: item?.duedate.toISOString().split("T")[0],
			variants: item?.variant,
			price: item?.price,
		};
	});

	return (
		<div className="grid gap-6">
			<RequestInfo
				title={title}
				rfqNo={rfq}
				requestor={{
					department: department,
					designation: "Head Nurse, Paediatrics",
					name: "Jane Doe",
				}}
				expectedDeliveryDate={deliveryDate.toISOString().split("T")[0]}
			/>

			<div className="border border-gray-200 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.04)] pb-6 space-y-4 rounded-[10px]">
				<h3 className="px-6 py-4 text-gray-800 font-bold text-xl">
					Item(s)
				</h3>

				<div className="px-4 space-y-6">
					<DataTable
						columns={columns}
						data={transformedData}
					/>

					<div className="space-y-4 w-[379px] ml-auto">
						<div className="flex items-center justify-between">
							<p className="text-gray-600 font-normal text-base">
								Sub Total
							</p>
							<p className="text-gray-600 font-normal text-base">
								{formatCurrency(
									transformedData.reduce(
										(acc, item) => acc + item.amount,
										0
									)
								)}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-gray-600 font-normal text-base">
								Total
							</p>
							<p className="text-gray-600 font-bold text-base">
								{formatCurrency(
									transformedData.reduce(
										(acc, item) => acc + item.amount,
										0
									)
								)}
							</p>
						</div>
					</div>
				</div>
			</div>

			<Terms />
		</div>
	);
}
