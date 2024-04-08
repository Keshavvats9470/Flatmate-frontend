import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    firstName: '',
    lastName: '',
    whoYouAre: '',
    gender: '',
    city: '',
    image: '',
    socialMedia: '',
    aadhaar: '',
    pan: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/user/user-profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setFormData(data.userProfile);
      } else {
        const errorData = await response.json();
        console.error('Error fetching user profile:', errorData.error);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/user/update-personal-details', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        toast.success(data.message);
      } else {
        const errorData = await response.json();
        console.error('Error updating user profile:', errorData.error);
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <section className="flex flex-col h-auto items-center bg-gray-100 py-5">
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-full lg:w-2/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center rounded-lg">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">User Profile</h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input placeholder='Enter your email address' type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number</label>
                <input placeholder='Enter your mobile number' type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                <input placeholder='John' type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input placeholder='Doe' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="whoYouAre" className="block text-gray-700">Who You Are</label>
                <input placeholder='Description' type="text" id="whoYouAre" name="whoYouAre" value={formData.whoYouAre} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700">Gender</label>
                <input placeholder='Male/Female/Others' type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700">City</label>
                <input placeholder='Current City' type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">Image</label>
                <input type="file" id="image" name="image" onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="socialMedia" className="block text-gray-700">Social Media</label>
                <input placeholder='Social-Media Ids' type="text" id="socialMedia" name="socialMedia" value={formData.socialMedia} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="aadhaar" className="block text-gray-700">Aadhaar</label>
                <input placeholder='Your Aadhar Card Number' type="text" id="aadhaar" name="aadhaar" value={formData.aadhaar} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
              <div className="mb-4">
                <label htmlFor="pan" className="block text-gray-700">PAN</label>
                <input placeholder='Your Pan Card Number' type="text" id="pan" name="pan" value={formData.pan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:font-light" />
              </div>
            </div>
            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 rounded">Save Changes</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default UserProfile;
