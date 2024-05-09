import { CS201PayButton } from '@/components/stripe-buttons/cs201';

export default function CS201() {
	return (
		<>
			<div className="px-4 mx-auto max-w-[700px]">
				<h3 className="mt-16 text-3xl font-semibold text-left">CS 201: Enterprise Software Development</h3>

				<h3 className="mt-8 font-semibold">What You Can Expect?</h3>
				<p className="mt-4">CS 201 offers an exclusive Enterprise Software Development Bootcamp. Classes run for 2 hours every Monday through Thursday for 12 weeks. Each session includes a lecture and a hands-on lab where you learn by doing.</p>

				<div className="mt-8 flex flex-wrap items-center gap-6">
					<CS201PayButton />
					<a className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="mailto://neio.ca@hotmail.com">Contact Us</a>
				</div>

				<h4 className="mt-8 font-semibold">Small Class Size</h4>
				<p className="mt-4">We intentionally keep the group small, with no more than 10 students, to ensure everyone receives thorough guidance from the instructor.</p>

				<h4 className="mt-8 font-semibold">Experienced Instructor</h4>
				<p className="mt-4">The instructor, a senior software engineer with experience in top tech companies and startups, understands the skills required by companies.</p>

				<h4 className="mt-8 font-semibold">Dual Learning Approach</h4>
				<p className="mt-4">Each class comprises a lecture and a lab session. You'll be able to immediately practice what the instructor teaches during the lecture and ask questions as they arise.</p>

				<h4 className="mt-8 font-semibold">Full-Stack Development</h4>
				<p className="mt-4">The instructor will lead you in building a full-stack project, covering UI design, API design, database management, and production deployment - an essential skill set for Software Engineer roles in any tech company.</p>

				<h4 className="mt-8 font-semibold">Cutting-Edge Technology Stack</h4>
				<p className="mt-4">We help you become proficient with the tech stack commonly found in Software Engineer job postings, including React, Next.js, JavaScript, TypeScript, Java, Spring Boot, PostgreSQL, Docker, Kubernetes, and more.</p>

				<h4 className="mt-8 font-semibold">Resume Review and Mock Interview</h4>
				<p className="mt-4">We offer resume reviews and mock interview services upon program completion without additional fees.</p>
			</div>
		</>
	)
}