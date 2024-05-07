import { NextResponse, NextRequest } from 'next/server';
import { defaultLocale, locales } from './constants';
import { parseAcceptLanguage } from './utils/parseAcceptLanguage';

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)
	if (pathnameHasLocale) return

	// Rewrite if there is no locale
	const acceptLanguage = request.headers.get('accept-language')
	const acceptLanguages = parseAcceptLanguage(acceptLanguage)
	const preferredLocale = acceptLanguages[0]?.lang

	const locale = locales.some(l => l === preferredLocale) ? preferredLocale : defaultLocale
	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.rewrite(request.nextUrl)
}

export const config = {
	matcher: [
		'/',
	],
}
