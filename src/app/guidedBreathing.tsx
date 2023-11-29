import React from 'react';

const guidedBreathing: React.FC = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white text-lg font-bold">
                        Missionary App</div>
                    <ul className="flex space-x-4">
                        <a href="/" className="text-white">Home</a>
                        <a href="/guided-breathing" className="text-white">Guided Breathing</a>
                    </ul>
                </div>
            </nav>

            {/* Main content */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Guided Breathing</h1>
                </div>
            </main>
        </div>
    );
}

export default guidedBreathing;