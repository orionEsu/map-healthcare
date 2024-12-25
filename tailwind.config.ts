import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
			boxShadow: {
				input: "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.08)] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.04)]",
			},
			colors: {
				primary: {
					"50": "#FFECE5",
					"75": "#FCD2C2",
					"100": "#FCB59A",
					"200": "#FA9874",
					"300": "#F77A4A",
					"400": "#F56630",
					"500": "#EB5017",
					"600": "#CC400C",
					"700": "#AD3307",
					"800": "#8F2802",
					"900": "#711E00",
					blue: "#175CFF",
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					"50": "#E3EFFC",
					"75": "#C6DDF7",
					"100": "#B6D8FF",
					"200": "#80BBFF",
					"300": "#3D89DF",
					"400": "#1671D9",
					"500": "#0D5EBA",
					"600": "#034592",
					"700": "#04326B",
					"800": "#012657",
					"900": "#001633",
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				gray: {
					"50": "#F9FAFB",
					"75": "#F7F9FC",
					"100": "#F0F2F5",
					"200": "#E4E7EC",
					"300": "#D0D5DD",
					"400": "#98A2B3",
					"500": "#667185",
					"600": "#475367",
					"700": "#344054",
					"800": "#1D2739",
					"900": "#101928",
				},
				error: {
					"400": "#D42620",
				},
				success: {
					50: "#E7F6EC",
					400: "#0F973D",
					600: "#04802E",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
