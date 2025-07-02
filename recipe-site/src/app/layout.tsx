import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import './globals.css';

const notoSans = Noto_Sans_JP({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-noto",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-playfair",
});

export const metadata: Metadata = {
	title: "Nagisa's Recipes",
	description: "Wellness-inspired natural recipe site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${notoSans.variable} ${playfair.variable} font-sans`}
			>
				{children}
			</body>
		</html>
	);
}

