"use client";

import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Misc, X } from "./Icons";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";

export function QuoteSubmissionDialog({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const [loading, setIsLoading] = useState(false);
	const [showToast, setShowToast] = useState(false);

	const handleModalSubmit = () => {
		setIsLoading(true);
		setOpen(false);

		setTimeout(() => {
			setIsLoading(false);
			setShowToast(true);

			setTimeout(() => {
				setShowToast(false);
			}, 3000);
		}, 4000);
	};

	return (
		<>
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<DialogContent className="w-[568px] px-6 py-8 rounded-md">
					<DialogHeader className="space-y-6 mb-8">
						<DialogTitle className="text-gray-900 text-xl font-bold">
							Are you absolutely sure?
						</DialogTitle>
						<DialogDescription className="text-gray-600 font-medium text-sm">
							You are about to submit this quote in response to
							RFQ ID, this will immediately be sent to the client
							“Westend Clear Hospital”. Are you sure you want to
							proceed?
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose className="rounded-md border border-gray-300 px-4 py-2 bg-white text-gray-700 font-bold text-sm h-9 flex items-center justify-center">
							Cancel
						</DialogClose>
						<button
							onClick={handleModalSubmit}
							className="rounded-md px-4 py-2 bg-blue-600 text-white font-bold text-sm h-9 flex items-center justify-center"
						>
							Continue
						</button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog
				open={loading}
				onOpenChange={setIsLoading}
			>
				<DialogContent className="w-[349px] h-[194px] px-6 py-8 rounded-md flex items-center justify-center">
					<DialogHeader className="space-y-2">
						<DialogTitle>
							<Loader2
								color="#175CFF"
								size={48}
								className="animate-spin mx-auto"
							/>
						</DialogTitle>
						<DialogDescription className="text-black font-medium text-sm">
							Sending Quote
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>

			{showToast && (
				<div className="fixed top-4 right-4 flex items-center gap-2 bg-white shadow-lg rounded pr-4 animate-fade-in w-[390px] h-12">
					<span className="block w-[6px] h-full bg-success-600 rounded-l"></span>

					<div className="flex items-center justify-between w-full">
						<div className="flex pl-4">
							<div className="flex items-center gap-2 text-sm font-medium">
								<Misc className="size-8" />
								RFQ ID sent successfully!
							</div>
						</div>

						<div className="flex items-center gap-3">
							<hr className="w-px h-6 bg-gray-100" />

							<button
								onClick={() => setShowToast(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								<X className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
