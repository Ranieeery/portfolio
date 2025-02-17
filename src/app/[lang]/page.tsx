import { Metadata } from "next";
import HomePage from "@/components/HomePage";

type Props = {
    params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title:
            params.lang === "pt-BR"
                ? "Raniery | Portfólio"
                : "Raniery | Portfolio",
    };
}

export default function Page({ params: { lang } }: Props) {
    return <HomePage lang={lang} />;
}
