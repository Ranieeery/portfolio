import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Raniery | Portfólio",
    description: "Portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />
            </head>
            <body className={poppins.className}>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
