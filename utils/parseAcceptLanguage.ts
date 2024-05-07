/**
 * Parse the Accept-Language header
 *   See https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.5
 */
export function parseAcceptLanguage(acceptLanguage?: string | null): Language[] {
	// e.g. "fr, fr-CH;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5" => ["fr", "fr-CH;q=0.9", "en;q=0.8", "de;q=0.7", "*;q=0.5"]
	return (acceptLanguage?.split(",") || [])
		.map(langPartition => {
			if (!langPartition) return
			// e.g. "fr-CH;q=0.9" => ["fr-CH", "q=0.9"]
			const langAndQuality = langPartition.split(';')
			if (!langAndQuality[0]) return
			// e.g. "fr-CH" => ["fr", "CH"]
			const langArray = langAndQuality[0]?.split('-')
			return {
				// e.g. "fr-CH"
				originalLang: langAndQuality[0],
				// e.g. "fr"
				lang: langArray[0],
				// e.g. 0.9
				quality: langAndQuality[1] ? parseFloat(langAndQuality[1].split('=')?.[1] || "1") : 1.0
			};
		})
		.filter((language): language is Language => !!language)
		.sort((l1, l2) => l2.quality - l1.quality)
}

export interface Language {
	/** e.g. "zh-CN" */
	originalLang: string
	/** e.g. "zh" */
	lang: string
	/** e.g. 0.5 */
	quality: number
}
