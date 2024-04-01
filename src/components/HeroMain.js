import React from 'react';
import image from "../assets/images/secure.svg"

function HeroMain() {
  return (
    <div className="relative">

      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid gap-5 row-gap-12 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full "
              src={image}
              alt="svgbg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-[1px] text-slate-900 sm:text-4xl sm:leading-none">
                Avoiding payment of the
                <br className="hidden md:block" />
                security deposit?{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">

                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Rest assured, with the inclusion of a rental bond, your tranquility and assurance are safeguarded throughout the rental tenure.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-yellow-500/60 rounded-xl">
                <div className="h-full p-7 rounded-r">
                  <h6 className="mb-2 tracking-[1px] font-bold leading-5 text-gray-100">
                    Liability payment
                  </h6>
                  <p className="text-sm text-white italic">
                    Tenant is responsible for payment of liabilities as stipulated in the agreement.
                  </p>
                </div>
              </div>
              <button className='items-center justify-center h-12 px-6 mr-6 font-medium bg-gradient-to-r from-blue-500 to-pink-400 tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMain