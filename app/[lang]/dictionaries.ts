import 'server-only'

const dictionaries = {
	en: () => import('./dictionaries/en.json').then((module) => module.default),
	zh: () => import('./dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (lang: string) => {
	const locale = (Object.keys(dictionaries).some((locale) => locale === lang) ? lang : 'en') as keyof typeof dictionaries
	return dictionaries[locale]()
}
