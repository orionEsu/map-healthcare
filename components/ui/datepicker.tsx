"use client";

import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { CalendarLight } from "../Icons";

interface DatePickerProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	className?: string;
	disabled?: boolean;
}

export function DatePicker<T extends FieldValues>({
	name,
	control,
	className,
	disabled,
}: DatePickerProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Popover>
					<PopoverTrigger asChild>
						<button
							className={cn(
								"justify-start text-left border border-gray-300 rounded-md px-3 py-2 w-full text-gray-400 font-normal text-sm disabled:bg-gray-100 flex items-center gap-2",
								className,
								!field.value && "text-muted-foreground"
							)}
							disabled={disabled}
						>
							<CalendarLight className="size-5" />
							{field.value ? (
								format(new Date(field.value), "yyyy-MM-dd")
							) : (
								<span className="text-gray-400 font-normal text-sm">
									Pick a date
								</span>
							)}
						</button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={
								field.value ? new Date(field.value) : undefined
							}
							onSelect={(date) => {
								if (date) {
									field.onChange(format(date, "yyyy-MM-dd"));
								}
							}}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			)}
		/>
	);
}
