
export function CopyrightNotice() {
	const year = new Date().getFullYear();
	return (<div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&#169; {year} NEIO Inc. All rights reserved.</div>)
}