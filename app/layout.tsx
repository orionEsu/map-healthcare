import type { Metadata } from "next";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import { satoshi } from "@/components/fonts";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${satoshi.variable} antialiased !h-dvh overflow-hidden`}
		>
			<body>
				<div id="body">
					<Sidebar />

					<Header />
					<main
						id="main"
						className="overflow-y-scroll bg-white px-8"
					>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
