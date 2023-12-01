import Link from "next/link";
import DailyCheckIn from "./components/DailyCheckIn";

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold">Missionary App</div>
          <ul className="flex space-x-4">
            {/* Use Link for internal navigation */}
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/guided-breathing" className="text-white">
              Guided Breathing
            </Link>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DailyCheckIn />
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Missionary Mental Health App
          </h1>
          <p className="text-lg text-gray-600">
            Providing Support and Wellness for Missionaries
          </p>
        </div>
      </main>
    </div>
  );
}
