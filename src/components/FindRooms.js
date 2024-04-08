import React from 'react'
import PeopleList from './PeopleList'

function FindRooms() {


    return (
        <div className='items-center py-8 sm:py-18'>
            <div class="flex w-11/12 md:w-8/12 xl:w-6/12 mx-auto">
                <div class="flex rounded-md w-full">
                    <input type="text" name="q"
                        class="w-full p-3 rounded-md rounded-r-none border border-gray-300 placeholder-current placeholder:text-gray-400"
                        placeholder="keyword" />
                    <button
                        class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                        <span>Find</span>
                        <svg className="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                            xmlSpace="preserve">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="w-full max-w-2xl mx-auto mt-8 mb-4">
                <div class="flex flex-auto justify-evenly border rounded-md w-full">

                    <button class="border-none px-2 py-1 rounded-md w-full" >
                        <input type="radio" class="hidden" id="searchMCQs" />
                        <label class="cursor-pointer" for="searchMCQs">Price</label>
                    </button>

                    <button class="border-none px-2 py-1 rounded-md w-full" >
                        <input type="radio" class="hidden" id="searchTopics" />
                        <label class="cursor-pointer" for="searchTopics">Location</label>
                    </button>

                    <button class="bg-blue-600 text-white px-2 py-1 rounded-md w-full" >
                        <input type="radio" class="hidden" id="searchChapters" />
                        <label class="cursor-pointer" for="searchChapters">Number of Roommates</label>
                    </button>

                </div>
            </div>

            <div className='max-w-7xl mx-auto mt-6 mb-8'>
                <hr />
            </div>

            <div>
                <PeopleList />
            </div>
        </div>
    )
}

export default FindRooms