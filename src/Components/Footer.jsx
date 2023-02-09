import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
                <div class="md:flex md:justify-between">

                <p className='text-black opacity-100'>Contact us</p>
                    <div class="mb-6 md:mb-0">
                        <svg width="400" height="400" viewBox="0 0 777 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="34.6296" y="1109.23" width="485" height="1213" rx="242.5" transform="rotate(-136 34.6296 1109.23)" fill="#6852ED" 
                            />
                            <p>Hello</p>
                        </svg>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className='text-left ml-4 pl-6'>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">About Company</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Our Services</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Team Members</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-4 text-left mr-4'>
                            <h2 class="mt-8 text-sm font-semibold text-gray-900 uppercase dark:text-white">  </h2>
                            <ul class="text-gray-600 dark:text-gray-400 mt-2">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Pricing Plans</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Testimonials</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-left mr-4 pr-4'>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subscribe</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    {/* <a href="#" class="hover:underline">Privacy Policy</a> */}
                                    <label class="relative block">
                                        <input
                                            class="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none"
                                            placeholder="Enter your keyword to search" type="text" />

                                        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                                height="30" viewBox="0 0 30 30">
                                                <path
                                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                                </path>
                                            </svg>
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    {/* <a href="#" class="hover:underline">Terms &amp; Conditions</a> */}
                                    <p>Keep up to date with all new themes and updates.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <span>© Elipso 2019. Landing Page Template by merkulove</span>
            </footer>
            
        </div>

    )
}

export default Footer
