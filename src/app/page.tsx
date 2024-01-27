export default async function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100">
        <section className="bg-gray-200 text-gray-800 p-12 text-center mt-5">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Discover Magical Stories for Kids
            </h1>
            <p className="text-lg">
              Engage your childs imagination with our enchanting collection of
              stories.
            </p>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Story 1 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/storybook1.jpg"
                alt="Storybook 1"
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                Adventure in Wonderland
              </h3>
              <p className="text-gray-600">
                Join Alice in a magical journey through Wonderland.
              </p>
              <button className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300">
                Read More
              </button>
            </div>

            {/* Featured Story 2 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/storybook2.jpg"
                alt="Storybook 2"
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Little Mermaids Tale
              </h3>
              <p className="text-gray-600">
                Dive into an underwater adventure with the Little Mermaid.
              </p>
              <button className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300">
                Read More
              </button>
            </div>

            {/* Featured Story 3 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/storybook3.jpg"
                alt="Storybook 3"
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Adventures of Peter Pan
              </h3>
              <p className="text-gray-600">
                Fly to Neverland with Peter Pan and his friends.
              </p>
              <button className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300">
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="bg-gray-200 text-gray-800 py-12 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              Subscribe for New Stories Every Week
            </h2>
            <p className="text-lg mb-6">
              Dot miss out on the latest adventures. Subscribe now!
            </p>
            <button className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300">
              Subscribe Now
            </button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-200 text-gray-800 p-4 text-center">
          <p>&copy; 2024 Your Storybook Company. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
