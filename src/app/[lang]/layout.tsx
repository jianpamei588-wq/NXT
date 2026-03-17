import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Header lang={lang as Locale} dict={dict} />
      <main className="flex-1 w-full">{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
