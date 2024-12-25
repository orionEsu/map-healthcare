import { QuoteDetails } from "@/components/QuoteDetails";
import { Quote } from "@/lib/columns";

async function getQuotes(): Promise<Quote[]> {
	return [
		{
			id: "728ed52f",
			amount: 2000,
			quantity: "100 pieces",
			variants: "blue",
			price: 200,
			deliveryDate: "2024-08-07",
			item: {
				name: "Oxygen concentra...",
				id: 28373,
			},
		},
		{
			id: "728ed52f",
			amount: 2500,
			quantity: "45 kg",
			variants: "NIL",
			price: 350,
			deliveryDate: "2024-08-07",
			item: {
				name: "Mechanical ventila...",
				id: 28373,
			},
		},
		{
			id: "728ed52f",
			amount: 1500,
			quantity: "30 units",
			variants: "blue",
			price: 300,
			deliveryDate: "2024-08-07",
			item: {
				name: "Patient monitor",
				id: 28373,
			},
		},
		{
			id: "728ed52f",
			amount: 1500,
			quantity: "35 units",
			variants: "blue",
			price: 200,
			deliveryDate: "2024-08-07",
			item: {
				name: "Oxygen concentra...",
				id: 28373,
			},
		},
		// ...
	];
}

export default async function page() {
	const data = await getQuotes();

	return <QuoteDetails data={data} />;
}
