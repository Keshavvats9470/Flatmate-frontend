/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

function PeopleList() {
    return (
        <div className='bg-gray-100 mx-auto max-w-7xl rounded-lg'>
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>

                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                            <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                            <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                            <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                            <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                        <Link to={`/listings/roommates-details-contact-me`}>
                            <div className='mt-2'>
                                <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PeopleList