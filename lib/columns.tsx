"use client";

import { formatCurrency } from "@/app/utils/format-currenncy";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type Quote = {
	id: string;
	item: {
		name: string;
		id: number;
	};
	variants: string;
	quantity: string;
	price: number;
	amount: number;
	deliveryDate: string;
};

export const columns: ColumnDef<Quote>[] = [
	{
		accessorKey: "item",
		header: ({ table }) => (
			<div className="flex gap-3 items-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) =>
						table.toggleAllPageRowsSelected(!!value)
					}
					aria-label="Select all"
				/>
				<div className="">Item</div>
			</div>
		),
		cell: ({ row }) => {
			const item = row.getValue("item") as Quote["item"];

			return (
				<div className="flex gap-3 items-center">
					<Checkbox
						checked={row.getIsSelected()}
						onCheckedChange={(value) => row.toggleSelected(!!value)}
						aria-label="Select row"
					/>
					<div className="text-right font-medium flex gap-3">
						<Image
							src={"/static/img/leading-media.svg"}
							width={40}
							alt="Image of a BP machine"
							height={40}
						/>

						<hgroup>
							<h4 className="text-gray-900 font-medium text-sm">
								{item?.name}
							</h4>
							<p className="text-sm font-normal text-gray-400 text-left">
								#{item?.id}
							</p>
						</hgroup>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "variants",
		header: () => <div className="">Variant</div>,
		cell: ({ row }) => {
			const variant = row.getValue("variants") as Quote["variants"];

			return (
				<div className="font-normal text-sm text-gray-700 capitalize">
					{variant}
				</div>
			);
		},
	},
	{
		accessorKey: "quantity",
		header: () => <div className="">Quantity</div>,
		cell: ({ row }) => {
			const quantity = row.getValue("quantity") as Quote["quantity"];

			return (
				<div className="font-normal text-sm text-gray-700 capitalize">
					{quantity}
				</div>
			);
		},
	},
	{
		accessorKey: "price",
		header: () => <div className="">Price</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
			const formatted = formatCurrency(amount);

			return (
				<div className="font-normal text-sm text-gray-700">
					{formatted}
				</div>
			);
		},
	},
	{
		accessorKey: "amount",
		header: () => <div className="">Amount</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));
			const formatted = formatCurrency(amount);

			return (
				<div className="font-normal text-sm text-gray-700">
					{formatted}
				</div>
			);
		},
	},

	{
		accessorKey: "deliveryDate",
		header: () => <div className="">Expected Delivery Date</div>,
		cell: ({ row }) => {
			const date = row.getValue("deliveryDate") as string;

			return (
				<div className="font-normal text-sm text-gray-700 capitalize">
					{new Date(date).toISOString().split("T")[0]}
				</div>
			);
		},
	},
];
