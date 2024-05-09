import Link from 'next/link'

export default function ContactUs() {
	return (
		<>
			<p className="mt-16 mx-auto px-4 text-3xl font-semibold text-center">Contact Us</p>
			<p className="mt-16 mx-auto px-4 max-w-[600px]">We value your feedback and are here to assist you with any questions or concerns you may have. Please don't hesitate to reach out to us via email at <Link className="hover:underline" href="mailto:neio.ca@hotmail.com">neio.ca@hotmail.com</Link>. Your inquiries are important to us, and we are committed to providing prompt and helpful responses to ensure your satisfaction.</p>
		</>
	)
}