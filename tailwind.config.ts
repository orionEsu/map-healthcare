import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)"],
				satoshi: ["var(--font-satoshi)"],
			},
			colors: {
				primary: {
					// DEFAULT: "#175CFF",
					50: "#FFECE5",
					75: "#FCD2C2",
					100: "#FCB59A",
					200: "#FA9874",
					300: "#F77A4A",
					400: "#F56630",
					500: "#EB5017",
					600: "#CC400C",
					700: "#AD3307",
					800: "#8F2802",
					900: "#711E00",
					blue: "#175CFF",
				},
				secondary: {
					50: "#E3EFFC",
					75: "#C6DDF7",
					100: "#B6D8FF",
					200: "#80BBFF",
					300: "#3D89DF",
					400: "#1671D9",
					500: "#0D5EBA",
					600: "#034592",
					700: "#04326B",
					800: "#012657",
					900: "#001633",
				},
				accent: {
					DEFAULT: "#101828",
				},
				gray: {
					50: "#F9FAFB",
					75: "#F7F9FC",
					100: "#F0F2F5",
					200: "#E4E7EC",
					300: "#D0D5DD",
					400: "#98A2B3",
					500: "#667185",
					600: "#475367",
					700: "#344054",
					800: "#1D2739",
					900: "#101928",
				},

				error: {
					400: "#D42620",
				},
			},
			// colors: {
			//   background: "var(--background)",
			//   foreground: "var(--foreground)",
			// },
		},
	},
	plugins: [],
} satisfies Config;
