import Link from "next/link";

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
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to My Missionary Mental Health App
                    </h1>
                    <p className="text-lg text-gray-600">
                        Providing Support and Wellness for Missionaries
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 p-4 mt-8">
                <div className="container mx-auto flex justify-between text-white text-center">
                    <div className="w-1/2">
                        <p><u><strong>Crisis Hotlines</strong></u></p>
                        <p><strong>Utah Crisis Number:</strong> 801-587-3000</p>
                        <p><strong>Suicide Prevention Hotline:</strong> 800-273-8255</p>
                        <p><strong>Sexual Assault Hotline:</strong> 800-656-4673</p>
                        <p><strong>Domestic Violence Hotline:</strong> 800-799-7233</p>
                    </div>
                    <div className="w-1/2">
                        <p><u><strong>Other Resources</strong></u></p>
                        <a href="https://bocarecoverycenter.com/addiction/depression/" className="hover:text-blue-500">Depression and Addiction</a>
                        <br />
                        <a href="https://bocarecoverycenter.com/addiction/suicide/" className="hover:text-blue-500">Suicide and Addiction</a>
                        <br />
                        <a href="https://www.narcotics.com/na-meetings/utah/" className="hover:text-blue-500">Addiction Recovery</a>
                        <br />
                        <a href="https://rehabs.org/centers/utah/" className="hover:text-blue-500">Rehabilitation Centers</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}