import React from 'react'
import img from '../../../public/logo.png'

export default function Footer() {
  return (
    <div>
{/* <div class="flex items-end w-full min-h-screen bg-sky-950 -mt-[27rem]"> */}
    <footer className="w-full text-gray-700 bg-sky-950 body-font mt-32">
        <div
            class="container flex pt-8 pb-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div class="flex-shrink-0 w-64 mx-auto text-center mt-10 md:mx-0 md:text-left">
                <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                
    <img src={img} alt="Your Image Alt Text" className="w-48 h-24 -mt-8" />

                </a>
                <p class="mt-2 text-sm text-gray-200">Ready, Set, Battle!</p>
                <div class="mt-4">
                    <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-200">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-200">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div class="flex  flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-lg font-semibold text-red-600 tracking-widest  uppercase title-font">About</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Company</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Careers</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-lg font-semibold text-red-600 tracking-widest uppercase title-font">Support</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Contact Support</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Release Updates</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-lg font-semibold text-red-600 tracking-widest uppercase title-font">Platform
                    </h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Terms &amp; Privacy</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">FAQ</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-lg font-semibold text-red-600 tracking-widest uppercase title-font">Contact</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">Send a Message</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-400">+123-456-7890</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg-sky-500">
            <div class="container px-5 py-4 mx-auto">
                <p class="text-base text-black text-center xl:text-center">battleHost © {new Date().getFullYear()} All Rights Reserved </p>
            </div>
        </div>
    </footer>

{/* </div> */}
     </div>
  )
}
