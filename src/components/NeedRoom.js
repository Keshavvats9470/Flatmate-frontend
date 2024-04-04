import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NeedRoom() {
    const [formData, setFormData] = useState({
        location: '',
        lookingFor: 'Any',
        rent: '',
        occupancy: 'Any',
        highlights: [],
        companyOrCollege: '',
        interestedInPgh: false,
        makingTeamInterest: false,
        visible: 'public',
        description: '',
    });
    const [roomListings, setRoomListings] = useState([]);
    const isFormFilled = Object.values(formData).some(value => value !== '' && value.length !== 0);

    useEffect(() => {
        fetchRoomListings();
    }, []);

    const fetchRoomListings = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:4000/room/find-room', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Room Listings data:', data.findRooms);
                if (data.findRooms && data.findRooms.length > 0) {
                    const firstRoom = data.findRooms[0];
                    setFormData({
                        location: firstRoom.location,
                        lookingFor: firstRoom.lookingFor,
                        rent: firstRoom.rent,
                        occupancy: firstRoom.occupancy,
                        highlights: firstRoom.highlights || [],
                        companyOrCollege: firstRoom.companyOrCollege || '',
                        makingTeamInterest: firstRoom.makingTeamInterest || false,
                        interestedInPgh:firstRoom.interestedInPgh || false,
                        visible: firstRoom.visible || 'public',
                        description: firstRoom.description || '',
                    });
                }
                setRoomListings(data.findRooms || []);
            } else {
                console.error('Error fetching room listings:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching room listings:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setFormData({ ...formData, [name]: [...formData[name], e.target.value] });
        } else {
            setFormData({ ...formData, [name]: formData[name].filter(item => item !== e.target.value) });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormFilled) {
            if (roomListings.length > 0) {
                updateRoomDetails();
            } else {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('http://localhost:4000/room/find-room', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify(formData),
                    });
                    if (response.ok) {
                        toast.success('Room search successful!');
                        setFormData({
                            location: '',
                            lookingFor: 'Any',
                            rent: '',
                            occupancy: 'Any',
                            highlights: [],
                            companyOrCollege: '',
                            interestedInPgh: false,
                            makingTeamInterest: false,
                            visible: 'public',
                            description: '',
                        });
                        fetchRoomListings();
                    } else {
                        console.error('Error finding rooms:', response.statusText);
                        toast.error('Error finding rooms');
                    }
                } catch (error) {
                    console.error('Error finding rooms:', error);
                    toast.error('Error finding rooms');
                }
            }
        } else {
            console.log("No fields filled, cannot search for rooms.");
        }
    };

    const updateRoomDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            const id = roomListings[0]._id; // Assuming you always want to update the first listing
            const response = await fetch(`http://localhost:4000/room/find-room/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast.success('Room details updated successfully!');
                fetchRoomListings();
            } else {
                console.error('Error updating room details:', response.statusText);
                toast.error('Error updating room details');
            }
        } catch (error) {
            console.error('Error updating room details:', error);
            toast.error('Error updating room details');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Need a Room?</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700">Looking For</label>
                                <select id="lookingFor" name="lookingFor" value={formData.lookingFor} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                                    <option value="Any">Any</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent</label>
                                <input id="rent" name="rent" type="text" value={formData.rent} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="occupancy" className="block text-sm font-medium text-gray-700">Occupancy</label>
                                <select id="occupancy" name="occupancy" value={formData.occupancy} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                                    <option value="Any">Any</option>
                                    <option value="Single">Single</option>
                                    <option value="Shared">Shared</option>
                                </select>
                            </div>
                            <div>
  <label className="block text-sm font-medium text-gray-700">Highlights</label>
  <div className="mt-2 grid grid-cols-2 gap-4">
    {[
      
      'Working full time',
      'College student',
      '25+ age',
      'Working night shifts',
      'Have 2 wheeler',
      'Have 4 wheeler',
      'Have pets',
      'Need no furnishing',
      'Pure veg',
      'Shift immediately'
    ].map((highlight, index) => (
      <label key={index} className="flex items-center">
        <input
          type="checkbox"
          name="highlights"
          value={highlight}
          checked={formData.highlights.includes(highlight)}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        {highlight}
      </label>
    ))}
  </div>
</div>
                            <div>
                                <label htmlFor="companyOrCollege" className="block text-sm font-medium text-gray-700">Company or College</label>
                                <input id="companyOrCollege" name="companyOrCollege" type="text" value={formData.companyOrCollege} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                            <div>
    <label className="block text-sm font-medium text-gray-700">Intrested in Pg</label>
    <div className="mt-2">
        <label className="inline-flex items-center">
            <input 
                type="checkbox" 
                name="interestedInPgh" 
                checked={formData.interestedInPgh} 
                onChange={() => setFormData({ ...formData, interestedInPgh: !formData.interestedInPgh })} // Toggle the boolean value
                className="mr-2" 
            />
            Yes
        </label>
    </div>
</div>
<div>
    <label className="block text-sm font-medium text-gray-700">Interested in making a team</label>
    <div className="mt-2">
        <label className="inline-flex items-center">
            <input 
                type="checkbox" 
                name="makingTeamInterest" 
                checked={formData.makingTeamInterest} 
                onChange={() => setFormData({ ...formData, makingTeamInterest: !formData.makingTeamInterest })} // Toggle the boolean value
                className="mr-2" 
            />
            Yes
        </label>
    </div>
</div>

                            <div>
                                <label htmlFor="visible" className="block text-sm font-medium text-gray-700">Visibility</label>
                                <select id="visible" name="visible" value={formData.visible} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add/Update Room
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NeedRoom;
