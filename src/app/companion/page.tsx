import "../globals.css";
import Link from "next/link";

export default function Companion() {
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

            <main className="flex-grow min-h-screen flex-col items-center justify-between p-24 text-white">
                <div className="text-2xl font-bold mb-4 text-center">
                    <h1>
                        "God does notice us, and he watches over us. But it is usually through another person that he meets our needs."
                    </h1>
                    <h1>
                        - President Spencer W. Kimball
                    </h1>
                </div>
                <br />
                <div className="text-xl font-bold">
                    <h3>
                        <a
                            href="https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/general-principles-for-managing-stress?lang=eng"
                            className="hover:text-blue-500"
                        >
                            Tips From Adjusting To Missionary Life:
                        </a>
                    </h3>
                </div>
                <br />
                <div className="text-white">
                    <h3>
                        <ul className="list-disc pl-4">
                            <li>
                                Ask a few questions, but don't force the missionary to talk. Try, "You seem upset. What happened?" or "Would you be willing to tell me about it?"
                            </li>
                        </ul>
                        <br />
                        <ul className="list-disc pl-4">
                            <li>
                                Listen to understand and offer support and encouragement. Until a person feels understood, offering advice and suggesting solutions is often not helpful. Ask questions and help the person find his or her own answers.
                            </li>
                        </ul>
                        <br />
                        <ul className="list-disc pl-4">
                            <li>
                                Focus on what needs to be decided right now. Sidestep big issues and focus on the immediate decisions to be made.
                            </li>
                        </ul>
                        <br />
                        <ul className="list-disc pl-4">
                            <li>
                                Remind the missionary of what he or she does well.
                            </li>
                        </ul>
                        <br />
                        <ul className="list-disc pl-4">
                            <li>
                                Bear your testimony. Share your conviction of God's love and willingness to help.
                            </li>
                        </ul>
                        <br />
                        <ul className="list-disc pl-4">
                            <li>
                                <strong>Tell your Mission President if the situation does not improve.</strong>
                            </li>
                        </ul>
                    </h3>
                </div>
                <br /><br />
                <p>
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                </p>
                <br /><br />
                <div className="container mx-auto flex justify-between text-white">
                    <div className="w-1/2">
                        <p>
                            <u>
                                <strong>Do's:</strong>
                            </u>
                        </p>
                        <ul className="list-disc pl-4">
                            <li>
                                Listen With An Open Mind
                                <ul className="list-disc pl-4">
                                    <li>
                                        Let them know they're not alone
                                    </li>
                                    <li>
                                        Be ready and available to listen without judgement
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Ask Questions
                                <ul className="list-disc pl-4">
                                    <li>
                                        Respectfully ask how they're feeling
                                    </li>
                                    <li>
                                        Remember they may not give you all the answers
                                   </li>
                                </ul>
                            </li>
                            <li>
                                Encourage Them To Seek Help
                                <ul className="list-disc pl-4">
                                    <li>
                                        Find out if they're already receiving care
                                    </li>
                                   <li>
                                        They may get mad, but be patient; it won't be forever
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Help With Daily Tasks
                                <ul className="list-disc pl-4">
                                    <li>
                                        Sometimes simple, everyday tasks can be difficult
                                    </li>
                                    <li>
                                        Perform small acts of kindness
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Be Patient
                                <ul className="list-disc pl-4">
                                    <li>
                                        Don't pressure them to spend time with you or talk about their problems
                                    </li>
                                    <li>
                                        Make sure to not give up on them
                                    </li>
                              </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <p>
                            <u>
                                <strong>Dont's:</strong>
                            </u>
                        </p>
                        <ul className="list-disc pl-4">
                            <li>
                                Don't Say "Cheer Up" Or "You're Fine"
                                <ul className="list-disc pl-4">
                                    <li>
                                        They could feel criticized or judged for their feelings
                                    </li>
                                    <li>
                                        Make them comfortable and secure in sharing their emotions
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Don't Say You Know If You Don't
                                <ul className="list-disc pl-4">
                                    <li>
                                        Don't compare your sadness to the current situation
                                    </li>
                                    <li>
                                        They may feel their situation is being minimized
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Don't Question Their Medical Decisions
                                <ul className="list-disc pl-4">
                                    <li>
                                        Taking medicine can be a big and scary step in treatment
                                    </li>
                                    <li>
                                        Be supportive and non-judgemental, as they may trial and error
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Don't Pressure Them To "Stay Busy"
                                <ul className="list-disc pl-4">
                                    <li>
                                        Still extend invitations, but they may decline
                                    </li>
                                    <li>
                                        Trust that they know what the right decision is
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Don't Take It Personally
                                <ul className="list-disc pl-4">
                                    <li>
                                        Their situation is not about you, nor is it your fault
                                    </li>
                                    <li>
                                        Show you love them, because they need support more now than ever
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 p-4 mt-8">
                <div className="container mx-auto flex justify-between text-white text-center">
                    <div className="w-1/2">
                        <p>
                            <strong>Crisis Hotlines</strong>
                        </p>
                        <p>
                            <strong>Utah Crisis Number:</strong> 801-587-3000
                        </p>
                        <p>
                            <strong>Suicide Prevention Hotline:</strong> 800-273-8255
                        </p>
                        <p>
                            <strong>Sexual Assault Hotline:</strong> 800-656-4673
                        </p>
                        <p>
                            <strong>Domestic Violence Hotline:</strong> 800-799-7233
                        </p>
                    </div>
                    <div className="w-1/2">
                        <p>
                            <strong>Other Resources</strong>
                        </p>
                        <a
                            href="https://bocarecoverycenter.com/addiction/depression/"
                            className="hover:text-blue-500"
                        >
                            Depression and Addiction
                        </a>
                        <br />
                        <a
                            href="https://bocarecoverycenter.com/addiction/suicide/"
                            className="hover:text-blue-500"
                        >
                            Suicide and Addiction
                        </a>
                        <br />
                        <a
                            href="https://www.narcotics.com/na-meetings/utah/"
                            className="hover:text-blue-500"
                        >
                            Addiction Recovery
                        </a>
                        <br />
                        <a
                            href="https://rehabs.org/centers/utah/"
                            className="hover:text-blue-500"
                        >
                            Rehabilitation Centers
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
