import Link from 'next/link';

export default function Academy() {
	return (
		<>
			<div>
				<h3 className="mt-16 mx-auto px-4 text-3xl font-semibold text-center">NEIO Academy</h3>
				<p className="mt-4 mx-auto px-8 font-semibold text-center">From Classroom to Career.</p>
				<div className="mx-auto px-4 max-w-[700px]">
					<h4 className="mt-16 mx-auto font-semibold text-left">Featured Programs</h4>
					<div className="mt-4 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
						<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<Link href="/academy/cs201">
								<img className="rounded-t-lg" src="/images/cs201.jpg" alt="" />
							</Link>
							<div className="p-5">
								<Link href="/academy/cs201">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Enterprise Software Development</h5>
								</Link>
								<div className="mb-3 flex flex-wrap gap-2">
									<span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">CS 201</span>
									<span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Bootcamp</span>
									<span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">12 Weeks</span>
									<span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Spring 2024</span>
								</div>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Limited to 10 participants, guarantees personalized learning with dedicated support from an experienced instructor who's a senior software engineer.</p>
								<Link href="/academy/cs201" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}