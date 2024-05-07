import Link from 'next/link'

export function NEIOLogoWithText() {
	return (
		<Link href="/" className="flex items-center">
			<img src="/neio.svg" className="h-6 me-2" alt="NEIO Inc. Logo" />
			<span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">NEIO</span>
		</Link>
	)
}