export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-yellow-50">
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-24 w-24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="2.05" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(120 12 12)"
                  />
                </g>
              </svg>
              <div className="mt-2 text-2xl font-semibold">My Lab</div>
            </div>
          </div>
          <div className="min-w-0 p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Fall 2026 Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Learning web design
            </a>
            <p className="mt-2 text-gray-500">
              This semester I will be learning about frontend and the backend of web design.
            </p>
          </div>
        </div>
      </div>
      <div
        id="wd-ai-responsive"
        className="mx-auto mt-6 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}