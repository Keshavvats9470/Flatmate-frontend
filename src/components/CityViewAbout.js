import React from 'react';
import delhi from "../assets/images/Delhi.jpg";
import bangalore from "../assets/images/Bangalore.jpg";
import mumbai from "../assets/images/Mumbai.jpg";
import ahemdabad from "../assets/images/Ahmedabad.jpg";
import hyderabad from "../assets/images/Hyderabad.jpg";
import kolkata from "../assets/images/Kolkata.jpg";
import chennai from "../assets/images/Chennai.jpg";
import jaipur from "../assets/images/Jaipur.jpg";

function CityViewAbout() {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Find roommates in any of the Citites
                    </h2>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={delhi}
                                alt="delhi"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Delhi
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={bangalore}
                                alt="bangalore"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Bangalore
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={mumbai}
                                alt="mumbai"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Mumbai
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={ahemdabad}
                                alt="ahemdabad"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Ahemdabad
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={hyderabad}
                                alt="hyderabad"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Hyderabad
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={chennai}
                                alt="chennai"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Chennai
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={kolkata}
                                alt="kolkata"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Kolkata
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-72"
                                src={jaipur}
                                alt="jaipur"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Jaipur
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8 mt-10">
                    <button className="text-base text-gray-200 md:text-lg bg-blue-600 px-12 py-2 rounded-lg">
                        View all the available citites
                    </button>
                </div>


            </div>
        </div>
    )
}

export default CityViewAbout