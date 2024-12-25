import { FormData } from "@/components/form/MultiStepForm";
import React from "react";
import { ReactElement } from "react";
import { UseFormTrigger } from "react-hook-form";

export function useMultiStepForm(
	steps: ReactElement[],
	trigger: UseFormTrigger<FormData>
) {
	const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

	async function next() {
		const currentStep = currentStepIndex + 1;
		const fields =
			currentStep === 1
				? ["items"]
				: currentStep === 2
				? ["street", "city", "zipCode"]
				: ["username", "password"];

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const isStepValid = await trigger(fields);

		if (!isStepValid) return;
		setCurrentStepIndex((prev) => {
			if (prev >= steps.length - 1) return prev;

			return prev + 1;
		});
	}

	function back() {
		setCurrentStepIndex((prev) => {
			if (prev <= steps.length - 1) return prev;

			return prev - 1;
		});
	}

	function cancel() {
		setCurrentStepIndex(0);
	}

	function goTo(index: number) {
		setCurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		isLastStep: currentStepIndex === steps.length - 1,
		goTo,
		back,
		next,
		cancel,
	};
}
