import { NEIOFooter } from '@/components/footer/NEIOFooter';
import { getDictionary } from './dictionaries';

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
  console.log(lang);
  const dict = await getDictionary(lang)
  return (
    <main className="">
      <p>{dict.products['neio-academy']}</p>
      <NEIOFooter />
    </main>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}
