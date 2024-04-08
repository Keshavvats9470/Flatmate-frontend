import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PeopleList() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:4000/roommate/find-roommate/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setPeople(data.roommates || []);
                } else {
                    console.error('Failed to fetch people:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };
        
        fetchPeople();
    }, []);

    return (
        <div className='bg-gray-100 mx-auto max-w-7xl rounded-lg'>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {people.map((person, index) => (
                        <div key={index} className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt={`photo of ${person.name}`} />
                            </div>
                            <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold ">
                                 {person.userId.firstName ? person.userId.firstName : 'Anonymous'}</p>
                                <p className="text-base text-gray-400 font-normal">{person.location}</p>
                                <p className="text-base text-gray-400 font-normal">Rent - ₹{person.rent}</p>
                                <p className="text-base text-gray-400 font-normal">Looking for Roommate</p>
                            </div>
                            <Link to={`/listings/roommates-details-contact-me`}>
                                <div className='mt-2'>
                                    <button className='px-4 py-1 bg-violet-500 text-gray-200 tracking-[1px] rounded-md'>Contact Me</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default PeopleList;
