export default function Academy() {
	return (
		<>
			<div>
				<h3 className="mt-16 mx-auto px-4 text-3xl font-semibold text-center">NEIO Academy</h3>
				<p className="mt-4 mx-auto px-8 font-semibold text-center">From Classroom to Career.</p>
				<div className="mx-auto max-w-[700px]">
					<h4 className="mt-16 mx-auto px-4 font-semibold text-left">Featured Programs</h4>
					<div className="mt-4 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
						<div>
							<img src="/images/cs201.jpg" alt="Background image of CS 201: Enterprise Software Development" />
							<div>CS 201: Enterprise Software Development</div>
						</div>
					</div>
					<h4 className="mt-8 mx-auto px-4 font-semibold text-left">Upcoming Programs</h4>
					<div className="mt-4 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
						<div>
							<img src="/images/cs201.jpg" alt="Background image of CS 201: Enterprise Software Development" />
							<div>CS 201: Enterprise Software Development - Spring 2024</div>
						</div>
						<div>
							<img src="/images/cs201.jpg" alt="Background image of CS 201: Enterprise Software Development" />
							<div>CS 201: Enterprise Software Development - Fall 2024</div>
						</div>
						<div>
							<img src="/images/cs201.jpg" alt="Background image of CS 201: Enterprise Software Development" />
							<div>CS 201: Enterprise Software Development - Winter 2024</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}