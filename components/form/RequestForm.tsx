"use client";

import { formatCurrency } from "@/app/utils/format-currenncy";
import React from "react";
import {
	Control,
	useFieldArray,
	useFormContext,
	useWatch,
} from "react-hook-form";
import { Bin, ChevronDown, Dollar, X } from "../Icons";
import { DatePicker } from "../ui/datepicker";
import { FormWrapper } from "./FormWrapper";
import { FormData, StepProps } from "./MultiStepForm";

export interface RequestFormProps extends StepProps {
	control: Control<FormData>;
}

export function RequestForm({ register, control }: RequestFormProps) {
	const { fields, remove } = useFieldArray({
		control,
		name: "items",
	});

	const { watch } = useFormContext();

	const watchedFields = watch("items") as FormData["items"];

	const total = React.useMemo(() => {
		return watchedFields?.reduce((acc, curr) => {
			const price = curr?.price || 0;
			const quantity = curr?.quantity || 0;
			return acc + price * quantity;
		}, 0);
	}, [watchedFields]);

	return (
		<FormWrapper
			title="Request for Quotation"
			description="Fill out these details to send the RFQ"
		>
			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-x-[18px] gap-y-6">
					<div className="space-y-1">
						<label
							htmlFor="No"
							className="text-gray-600 font-bold text-sm"
						>
							RFQ No
						</label>
						<input
							{...register("rfq", {
								required: "RFQ No is required",
							})}
							type="text"
							name="No"
							value={"RFQ-10234"}
							className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-400 font-normal text-sm disabled:bg-gray-100"
							disabled
						/>
					</div>
					<div className="space-y-1">
						<label
							htmlFor="Title"
							className="text-gray-600 font-bold text-sm"
						>
							Title
						</label>
						<input
							{...register("title", {
								required: "Title is required",
							})}
							type="text"
							name="Title"
							value={
								"Request for Equipment Request for Equipments"
							}
							className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-400 font-normal text-sm disabled:bg-gray-100"
							disabled
						/>
					</div>

					<div className="space-y-1">
						<label
							htmlFor="Department"
							className="text-gray-600 font-bold text-sm"
						>
							Department
						</label>
						<div className="relative">
							<input
								{...register("department", {
									required: "Department is required",
								})}
								type="text"
								name="Department"
								value={"Maternity"}
								className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-400 font-normal text-sm disabled:bg-gray-100"
								disabled
							/>

							<X className="size-5 absolute top-[9px] right-3" />
						</div>
					</div>

					<div className="space-y-1">
						<label
							htmlFor="Date"
							className="text-gray-600 font-bold text-sm"
						>
							Expected delivery date
						</label>
						<DatePicker
							disabled
							control={control}
							name="deliveryDate"
						/>
						<span className="block text-gray-500 font-medium text-xs !mt-2">
							Calculated based on lead time and issue date
						</span>
					</div>
				</div>

				<div>
					<hr className="bg-[#E9E9E9]" />

					<div className="mt-4 pb-8">
						<h3 className="text-gray-800 text-base font-bold">
							Add items
						</h3>

						<div className="mt-2 space-y-4">
							<div className="px-2 py-1 flex gap-4 bg-gray-75">
								<p className="text-sm font-medium text-gray-500 w-[224px]">
									Items
								</p>
								<p className="text-sm font-medium text-gray-500 w-[140px]">
									Variant
								</p>
								<p className="text-sm font-medium text-gray-500 w-[140px]">
									Quantity
								</p>
								<p className="text-sm font-medium text-gray-500 w-[140px]">
									Price
								</p>
								<p className="text-sm font-medium text-gray-500 w-[140px]">
									Expected delivery d...
								</p>
								<p className="text-sm font-medium text-gray-500">
									Amount
								</p>
							</div>

							<div className="grid gap-4">
								{fields.map((field, index) => (
									<div
										key={field.id}
										className="flex items-center gap-4"
									>
										<div className="relative w-[232px]">
											<input
												{...register(
													`items.${index}.name`,
													{
														required:
															"Variant is required",
													}
												)}
												required
												disabled
												className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 text-sm font-normal text-gray-900 disabled:bg-gray-100 disabled:text-gray-400"
											/>
											<ChevronDown className="size-5 absolute top-4 right-3" />
										</div>
										<div className="relative w-[140px]">
											<input
												{...register(
													`items.${index}.variant`,
													{
														required:
															"Variant is required",
													}
												)}
												required
												disabled
												className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-900"
											/>
											<ChevronDown className="size-5 absolute top-4 right-3" />
										</div>

										<div className="relative w-[140px]">
											<input
												type="number"
												{...register(
													`items.${index}.quantity`,
													{
														required:
															"Quantity is required",
														min: {
															value: 1,
															message:
																"Minimum quantity is 1",
														},
													}
												)}
												required
												className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-1 text-sm font-medium text-gray-900"
											/>

											<span className="absolute px-2 py-1 bg-gray-75 rounded top-2 right-1 font-normal text-xs text-gray-500">
												Pack
											</span>
										</div>

										<div className="relative w-[140px]">
											<input
												type="number"
												{...register(
													`items.${index}.price`,
													{
														required:
															"Price is required",
														min: {
															value: 0,
															message:
																"Price must be positive",
														},
													}
												)}
												required
												className="mt-1 w-full rounded-md border border-gray-300 py-2 pl-10 text-sm font-medium text-gray-900"
											/>
											<Dollar className="absolute top-3 left-3 size-5" />
										</div>

										<div>
											<DatePicker
												className="text-gray-900 font-normal text-sm w-[140px]"
												name={`items.${index}.duedate`}
												control={control}
											/>
										</div>

										<AmountField
											control={control}
											index={index}
										/>

										<button
											type="button"
											onClick={() => remove(index)}
											className="ml-auto"
										>
											<Bin className="size-6" />
										</button>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="grid gap-4">
						<hr className="bg-[#E9E9E9]" />

						<div className="flex gap-4 text-gray-600 text-base font-normal justify-end">
							<p className="w-[118px]">Sub Total</p>
							<p>{formatCurrency(total)}</p>
						</div>

						<TextArea />
					</div>

					<hr className="bg-[#E9E9E9]" />
				</div>
			</div>
		</FormWrapper>
	);
}

function AmountField({
	control,
	index,
}: {
	control: Control<FormData>;
	index: number;
}) {
	const price = useWatch({
		control,
		name: `items.${index}.price`,
	});

	const quantity = useWatch({
		control,
		name: `items.${index}.quantity`,
	});

	const amount = price * quantity;

	return (
		<div>
			<p className="text-gray-700 font-bold text-sm">
				{formatCurrency(amount)}
			</p>
		</div>
	);
}

function TextArea() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="space-y-1 w-[472px] mb-8">
			<label
				htmlFor="Note"
				className="text-gray-600 font-bold text-sm"
			>
				Note
			</label>
			<textarea
				className="border border-gray-300 rounded-md p-4 w-full text-gray-400 font-normal text-sm h-[106px] resize-none"
				name="Note"
				id="Note"
				placeholder="Enter note here"
				onInput={(e) => setCount(e.currentTarget.value.length)}
				rows={4}
				maxLength={200}
			/>
			<p className="mt-2 text-gray-500 font-medium text-xs text-right">
				{count}/200
			</p>
		</div>
	);
}
