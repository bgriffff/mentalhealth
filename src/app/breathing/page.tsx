import "../globals.css";
import Link from "next/link";

export default function breathing() {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white text-lg font-bold">Missionary App</div>
                    <ul className="flex space-x-4">
                        <Link href="/" className="text-white">
                            Home
                        </Link>
                        <Link href="/breathing" className="text-white">
                            Guided Breathing
                        </Link>
                        <Link href="/companion" className="text-white">
                            Help Companion
                        </Link>
                    </ul>
                </div>
            </nav>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Box Breathing</h1>
                </div>
                <div className="wrapper">
                    <div className="directions">
                        <div className="message">Inhale</div>
                        <div className="message">Hold</div>
                        <div className="message">Exhale</div>
                        <div className="message">Hold</div>
                    </div>
                    <div className="timer inhale">
                        <div className="progress"></div>
                            <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                    </div>
                    <div className="timer inhale-hold">
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                    </div>
                    <div className="timer exhale">
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                    </div>
                    <div className="timer exhale-hold">
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                    </div>
              </div>
            </main>

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
