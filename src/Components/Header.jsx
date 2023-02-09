import { useState } from "react";

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    
    return (
        <>
   
            <div className="flex items-stretch relative">
                <div className="ml-4 pl-4">Trendy theme for companies,agencies and startups</div>
                
                    <div className="flex items-stretch absolute right-0">
                        <div className="w-6 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        </div>
                        <span >+44 141 552 3000</span>
                    </div>

            </div>
            <nav className="w-full bg-white shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                {/* <h2 className="text-2xl font-bold text-black">LOGO</h2> */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5298 26.3641C28.9555 30.9061 23.367 32.9297 22.5135 29.6617C20.8426 33.9387 22.9782 37.2431 27.1382 37.4421C21.5955 37.7664 19.1853 33.4084 21.1487 28.7551C24.8647 19.9471 45.6247 19.2561 36.2609 7.57973C41.2809 15.3644 27.6786 18.5857 21.6731 19.1451C13.1053 19.9424 9.06365 25.7214 9.2223 30.9404C9.43111 37.7991 17.8101 40.6851 24.4026 39.3861C29.942 38.2951 34.803 34.9561 37.6898 30.1844C42.7579 21.8067 37.8101 15.2844 31.5298 26.3641" fill="url(#paint0_linear_0_4776)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.31327 13.3166C3.71462 9.77523 7.82378 7.97623 12.7417 7.36356C18.7224 1.21456 27.3177 3.6759 27.9872 6.67523C30.2414 5.51923 29.9387 3.33423 26.4424 2.08156C34.5773 4.42923 29.5085 9.74456 21.2577 9.05223C2.06581 7.44156 -7.10165 21.5722 6.45022 34.2866C2.15869 24.8572 11.897 16.7022 22.7031 16.3862C29.1292 16.1986 40.7831 11.9142 34.658 5.8079C24.3489 -4.46844 6.24717 -0.58077 1.31327 13.3166" fill="url(#paint1_linear_0_4776)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_4776" x1="44.5413" y1="32.3105" x2="37.2089" y2="13.8534" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6852ED" />
                                            <stop offset="1" stop-color="#BA43FC" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_0_4776" x1="36.3839" y1="2.28882e-05" x2="-9.15527e-05" y2="2.28882e-05" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6852ED" />
                                            <stop offset="1" stop-color="#BA43FC" />
                                        </linearGradient>
                                    </defs>
                                </svg>


                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Pages</a>
                                </li>
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Services</a>
                                </li>
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Portfolio</a>
                                </li>
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Blog</a>
                                </li>
                                <li className="text-black hover:text-indigo-200">
                                    <a href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-black bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-black bg-white rounded-full rounded-md  border-blue-800 shadow hover:bg-gray-800"
                        >
                            Sign in
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Create Account
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}