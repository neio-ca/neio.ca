export default function Home() {
  return (
    <>
      <div className="mt-16 text-center">
        <div className="mt-8 inline-flex items-center mx-auto">
          <img src="/neio.svg" className="h-8 me-3" alt="NEIO Inc. Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NEIO</span>
        </div>
        <p className="mt-8 mx-auto px-4 text-l font-semibold"> Build software that people enjoy :) </p>
        <p className="mt-8 mx-auto px-8 max-w-[600px]">
          We provide free software, software as a service (SaaS) products, web apps, mobile apps, and more, using the most advanced technologies including cloud and AI.
        </p>
        <img src="images/home.jpg" alt="Tech 1" className="mt-8 w-full mx-auto max-w-[600px]" />
        {/* <h2 className="text-l font-semibold mt-4">Technologies We Use</h2>
        <div className="inline-flex items-center gap-2">
          <div>
            <img src="images/ai-s.jpg" alt="AI Tech" className="mx-auto w-64 mt-2" />
            <p className="text-lg">AI</p>
          </div>
          <div>
            <img src="images/cloud-s.jpg" alt="Cloud Tech" className="mx-auto w-64 mt-2" />
            <p className="text-lg">Cloud</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
