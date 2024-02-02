import { FeaturedProducts } from "@/ui/organisms";
import Link from "next/link";

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
        <FeaturedProducts />
        {/* Subscription Section */}
        <section className="bg-gray-200 text-gray-800 py-12 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              Subscribe for New Stories Every Week
            </h2>
            <p className="text-lg mb-6">
              Dot miss out on the latest adventures. Subscribe now!
            </p>
            <Link
              href="/dashboard"
              className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300"
            >
              Subscribe Now
            </Link>
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
