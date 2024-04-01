import React from 'react'
import image1 from "../assets/images/home.svg"

function About() {
    return (
        <div>
            <section class="pt-16 md:pt-0 sm:pt-24 2xl:pt-24 mt-8">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2">

                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-3xl lg:text-4xl">Making rental agreements hassle-free, fast, and budget-friendly. We're here to simplify the process for you. 🏠
                                <br class="block sm:hidden" />
                            </h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">

                            </p>

                            <p class="mt-4 text-2xl text-gray-600 md:mt-8">
                                <span class="relative inline-block">
                                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span class="relative"> Have a question? </span>
                                </span>
                                <br class="block sm:hidden" /> Ask us on the <a href="/" title=""
                                    class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Contact Page</a>
                            </p>
                        </div>

                        <div class="relative">
                            <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 -z-20 opacity-80" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={image1} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About