import type { Metadata } from "next";
import { headers } from 'next/headers';
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/styles/globals.min.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Raniery | Portfólio",
    description: "Portfolio website",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');
    const defaultLocale = acceptLanguage?.includes('pt') ? 'pt-BR' : 'en';

    return (
        <html lang={defaultLocale}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body className={poppins.className}>
                <LanguageProvider>{children}</LanguageProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
