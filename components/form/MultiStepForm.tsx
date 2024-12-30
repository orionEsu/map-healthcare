"use client";

import { useMultiStepForm } from "@/app/hooks/useMultiStepForm";
import React from "react";
import {
	FieldErrors,
	FormProvider,
	useForm,
	UseFormRegister,
} from "react-hook-form";
import { QuoteSubmissionDialog } from "../QuoteSubmissionDialog";
import { Review } from "../Review";
import Steps from "../Steps";
import { RequestForm } from "./RequestForm";
import { TermsForm } from "./TermsForm";

interface Item {
	name: string;
	variant: string;
	quantity: number;
	price: number;
	duedate: Date;
	amount: number;
}

export interface FormData {
	rfq: string;
	title: string;
	department: string;
	deliveryDate: Date;
	items: Item[];
	paymentTerms: string;
	deliverySchedule: string;
	shippingMethod: string;
	leadTime: {
		timeframe: number;
		unit: string;
	};
	firstName: string;
	lastName: string;
	email: string;
	street: string;
	city: string;
	zipCode: string;
	username: string;
	password: string;
}

export interface StepProps {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
}

export function MultiStepForm() {
	const methods = useForm<FormData>({
		defaultValues: {
			items: [
				{
					name: "Oxygen Concentrator",
					variant: "Blue",
					quantity: 100,
					price: 12,
					duedate: new Date("2023-12-02"),
				},
				{
					name: "Mechanical Ventilator",
					variant: "Blue",
					quantity: 100,
					price: 12,
					duedate: new Date("2023-12-02"),
				},
				{
					name: "Patient Monitor",
					variant: "Blue",
					quantity: 100,
					price: 12,
					duedate: new Date("2023-12-02"),
				},
				{
					name: "Mechanical Ventilator",
					variant: "Blue",
					quantity: 100,
					price: 12,
					duedate: new Date("2023-12-02"),
				},
			],
			paymentTerms: "Net 30",
			deliverySchedule: "immediate",
			shippingMethod: "courier",
			leadTime: {
				timeframe: 3,
				unit: "days",
			},
			deliveryDate: new Date("2024-12-02"),
		},
	});
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = methods;

	const { step, currentStepIndex, next, cancel, isLastStep } =
		useMultiStepForm(
			[
				<RequestForm
					key="step1"
					register={register}
					errors={errors}
					control={control}
				/>,
				<TermsForm
					key={"step2"}
					register={register}
					errors={errors}
					control={control}
				/>,
				<Review key={"step3"} />,
			],
			trigger
		);
	const [open, setOpen] = React.useState(false);

	const onSubmit = (data: FormData) => {
		next();
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-8">
					<div className="px-6 py-5 rounded-[10px] border border-gray-200 flex items-center gap-6 justify-between">
						<Steps currentStep={currentStepIndex + 1} />
					</div>

					<div className="rounded-[10px] px-6 py-8 border border-gray-200">
						{step}

						<div className="flex items-center gap-6 mt-10 justify-end">
							<button
								className="border border-gray-200 bg-white px-4 py-2.5 rounded-lg h-10 text-gray-600 text-sm font-bold flex items-center w-[68px] justify-center"
								type="button"
								onClick={cancel}
							>
								Cancel
							</button>
							<button
								className="bg-white border-[1.5px] border-primary-blue rounded-lg px-4 py-2.5 h-10 text-primary-blue font-bold text-sm flex items-center w-[188px] justify-center"
								type="button"
							>
								Save as draft
							</button>
							{!isLastStep && (
								<button
									className="bg-primary-blue rounded-lg px-4 py-2.5 h-10 text-white font-bold text-sm flex items-center w-[168px] justify-center"
									type="submit"
								>
									Continue
								</button>
							)}
							{isLastStep && (
								<button
									className="bg-primary-blue rounded-lg px-4 py-2.5 h-10 text-white font-bold text-sm flex items-center w-[168px] justify-center"
									type="button"
									onClick={() => setOpen(true)}
								>
									Submit
								</button>
							)}
						</div>
					</div>
				</div>
			</form>

			<QuoteSubmissionDialog
				open={open}
				setOpen={setOpen}
			/>
		</FormProvider>
	);
}
