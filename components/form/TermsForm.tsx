"use client";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { FormWrapper } from "./FormWrapper";
import { FormData, StepProps } from "./MultiStepForm";
import { Control, Controller } from "react-hook-form";
import { FileUpload } from "../Icons";

export interface TermFormProps extends StepProps {
	control: Control<FormData>;
}

export function TermsForm({ register, control }: TermFormProps) {
	return (
		<FormWrapper
			title="Request for Quotation"
			description="Fill out these details to send the RFQ"
		>
			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-x-[18px] gap-y-6">
					<div className="space-y-1">
						<label
							htmlFor="paymentTerms"
							className="text-gray-600 font-bold text-sm"
						>
							Payment Terms
						</label>

						<Controller
							name="paymentTerms"
							control={control}
							render={({ field }) => (
								<Select
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm font-normal">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Net 30">
											Net 30
										</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>
					<div className="space-y-1">
						<label
							htmlFor="deliverySchedule"
							className="text-gray-600 font-bold text-sm"
						>
							Delivery Schedule
						</label>

						<Controller
							name="deliverySchedule"
							control={control}
							render={({ field }) => (
								<Select
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm font-normal">
										<SelectValue placeholder="Select Delivery Schedule" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="immediate">
											Immediate delivery
										</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>
					<div className="space-y-1">
						<label
							htmlFor="shippingMethod"
							className="text-gray-600 font-bold text-sm"
						>
							Shipping Method
						</label>

						<Controller
							name="shippingMethod"
							control={control}
							render={({ field }) => (
								<Select
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm font-normal">
										<SelectValue placeholder="Select Shipping Method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="courier">
											Courier Services
										</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>

					<div className="space-y-1 relative">
						<label
							htmlFor="No"
							className="text-gray-600 font-bold text-sm"
						>
							Lead time
						</label>
						<input
							{...register("leadTime.timeframe", {
								required: "Lead Time is required",
							})}
							type="text"
							name="No"
							className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-900  font-normal text-sm disabled:bg-gray-100 disabled:text-gray-400 h-10"
						/>

						<Controller
							name="leadTime.unit"
							control={control}
							render={({ field }) => (
								<Select
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger className="w-fit border border-gray-300 rounded-md px-2 py-1 text-gray-500 text-xs font-normal flex gap-1 [&>svg]:size-4 items-center absolute top-[30px] right-3 h-[28px]">
										<SelectValue placeholder="Unit" />
									</SelectTrigger>
									<SelectContent align="end">
										<SelectItem value="days">
											Days
										</SelectItem>
										<SelectItem value="months">
											Months
										</SelectItem>
										<SelectItem value="years">
											Years
										</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>

					<hr className="bg-[#E9E9E9]" />
				</div>

				<div className="space-y-6 pb-8">
					<div className="mt-4 space-y-2">
						<h4 className="text-gray-800 font-bold text-base">
							Attachments
						</h4>
						<p className="text-sm text-gray-400 font-normal">
							Attach all necessary files or documents
						</p>
					</div>

					<div className="py-6 px-[81.5px] border-[1.5px] border-dashed border-gray-300 w-[515px] rounded-2xl grid justify-center gap-4">
						<FileUpload className="size-14 mx-auto" />
						<div className="space-y-0.5 mx-auto">
							<p className="text-gray-600 font-normal text-sm">
								<span className="text-primary-blue font-medium">
									Click to upload
								</span>{" "}
								or drag and drop
							</p>
							<p className="text-gray-400 text-xs font-normal">
								SVG, PNG, JPG or GIF (max. 800x400px)
							</p>
						</div>

						<div className="flex items-center gap-2 justify-center">
							<hr className="h-[1px] bg-gray-100 block w-[104.5px]" />
							<span className="text-gray-400 font-bold text-sm">
								OR
							</span>
							<hr className="h-[1px] bg-gray-100 w-[104.5px]" />
						</div>

						{/* flex items-center justify-center */}
						<button className="rounded-lg border-2 border-primary-blue h-9 px-4 py-2  font-bold text-sm text-primary-blue w-[130px] mx-auto flex items-center justify-center">
							Browse Files
						</button>
					</div>
				</div>

				<hr className="bg-[#E9E9E9]" />
			</div>
		</FormWrapper>
	);
}
