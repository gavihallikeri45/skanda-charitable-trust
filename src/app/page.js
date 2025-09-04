export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Skanda Charitable Trust
        </h1>
        <p className="text-lg text-gray-700">
          Empowering communities, transforming lives.
        </p>
      </header>
      <main className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 mb-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-800">
            Skanda Charitable Trust is dedicated to supporting education,
            healthcare, and social welfare initiatives for underprivileged
            communities. We believe in creating sustainable change through
            compassion and action.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-800">
            Email:{" "}
            <a
              href="mailto:info@skandacharitabletrust.org"
              className="text-blue-500 underline"
            >
              info@skandacharitabletrust.org
            </a>
          </p>
          <p className="text-gray-800">
            Phone:{" "}
            <a href="tel:+911234567890" className="text-blue-500 underline">
              +91 12345 67890
            </a>
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Get Involved
          </h2>
          <p className="text-gray-800 mb-4">
            Join us in making a difference! Volunteer, donate, or partner with
            us to help build a better future.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Donate Now
          </a>
        </section>
      </main>
      <footer className="text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} Skanda Charitable Trust. All rights
        reserved.
      </footer>
    </div>
  );
}
