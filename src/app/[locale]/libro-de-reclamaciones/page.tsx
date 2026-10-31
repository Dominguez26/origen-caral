import LegalPage, { legalMetadata } from "@/components/LegalPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return legalMetadata((await params).locale, "complaints");
}

export default async function Page({ params }: Props) {
  return <LegalPage locale={(await params).locale} kind="complaints" />;
}
