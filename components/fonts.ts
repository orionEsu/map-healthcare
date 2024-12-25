import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const satoshi = localFont({
	src: [
		{
			path: "../public/static/font/Satoshi-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/static/font/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/static/font/Satoshi-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/static/font/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/static/font/Satoshi-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/static/font/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/static/font/Satoshi-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../public/static/font/Satoshi-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "../public/static/font/Satoshi-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
	],
	display: "swap",
	variable: "--font-satoshi",
});

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});