import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NeedRoommate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    lookingFor: 'Any',
    rent: '',
    occupancy: 'Any',
    photos: [],
    highlights: [],
    mobileVisibility: 'Public',
    amenities: [],
    description: '',
  });
  const [roommateListings, setRoommateListings] = useState([]);
  const isFormFilled = Object.values(formData).some(value => value !== '' && value.length !== 0);

  useEffect(() => {
    fetchRoommateListings();
  }, []);

  const fetchRoommateListings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/roommate/find-roommate', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Roommate Listings data:', data.roommates);
        setRoommateListings(data.roommates || []);
      } else {
        console.error('Error fetching roommate listings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching roommate listings:', error);
    }
  };

  useEffect(() => {
    if (roommateListings.length > 0) {
      const firstRoommate = roommateListings[0];
      setFormData({
        location: firstRoommate.location,
        lookingFor: firstRoommate.lookingFor,
        rent: firstRoommate.rent,
        occupancy: firstRoommate.occupancy,
        photos: firstRoommate.photos,
        highlights: firstRoommate.highlights,
        mobileVisibility: firstRoommate.mobileVisibility,
        amenities: firstRoommate.amenities,
        description: firstRoommate.description,
      });
    }
  }, [roommateListings]);

  const updateRoommateDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const id = roommateListings[0]._id;
      const response = await fetch(`http://localhost:4000/roommate/find-roommate/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Roommate details updated successfully!');
        fetchRoommateListings();
      } else {
        console.error('Error updating roommate details:', response.statusText);
        toast.error('Error updating roommate details');
      }
    } catch (error) {
      console.error('Error updating roommate details:', error);
      toast.error('Error updating roommate details');
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
      if (roommateListings.length > 0) {
        updateRoommateDetails();
      } else {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:4000/roommate/find-roommate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            toast.success('Roommate listing created successfully!');
            setFormData({
              location: '',
              lookingFor: 'Any',
              rent: '',
              occupancy: 'Any',
              photos: [],
              highlights: [],
              mobileVisibility: 'Public',
              amenities: [],
              description: '',
            });
            fetchRoommateListings();
          } else {
            console.error('Error creating roommate listing:', response.statusText);
            toast.error('Error creating roommate listing');
          }
        } catch (error) {
          console.error('Error creating roommate listing:', error);
          toast.error('Error creating roommate listing');
        }
      }
    } else {
      console.log("No fields filled, cannot update or create a new listing.");
    }
  };



  // const isFormFilled = Object.values(formData).some(value => value !== '' && value.length !== 0);
  // const isFormFilled = Object.values(formData).some(value => value !== '' && value !== 'Any' && (Array.isArray(value) ? value.length !== 0 : true));


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Need a Roommate?</h1>
        {isFormFilled ? (
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
                  <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Photos</label>
                  <input type="file" id="photos" name="photos" multiple onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>

                <div>
                  <label htmlFor="mobileVisibility" className="block text-sm font-medium text-gray-700">Mobile Visibility</label>
                  <select id="mobileVisibility" name="mobileVisibility" value={formData.mobileVisibility} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Highlights</label>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    {['Attached Washroom', 'Market Nearby', 'Attached Balcony', 'Close to Metro', 'No Restriction', 'Gated Society', 'Newly Built', 'Separate Washroom', 'Gym Nearby', 'Park Nearby', 'Public Transport Close'].map((highlight, index) => (
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
                  <label className="block text-sm font-medium text-gray-700">Amenities</label>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    {['TV', 'Fridge', 'Kitchen', 'Wifi', 'AC', 'Cook', 'Parking'].map((amenity, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {amenity}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Post Listing
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>Please fill out the form to create a roommate listing.</p>
        )}
      </div>
    </div>
  );
}

export default NeedRoommate;

