/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loaderspinner from "../assets/images/tube-spinner.svg";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSendOTP = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    mobileNumber,
                    password,
                }),
            });

            if (response.ok) {
                setShowOTPModal(true);
            } else {
                setErrorMessage('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    otp,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setRegistrationSuccess(true);
                setErrorMessage('');
                setTimeout(() => {
                    navigate('/login-user');
                }, 3000);
            } else {
                setErrorMessage('Incorrect OTP. Please try again.');
                setRegistrationSuccess(false);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setErrorMessage(error.message);
            setRegistrationSuccess(false);
        }
    };

    return (
        <div>

            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>

                            <button type="button" onClick={handleSendOTP} className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                                Send OTP
                            </button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <p className="mt-8">Already have an account?{` `}
                            <Link to={`/login-user`} className="text-blue-500 hover:text-blue-700 font-semibold">
                                Login to an account
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
                </div>

            </section>

            {showOTPModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white w-full md:max-w-md h-auto p-6 md:p-12 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold mb-6">Enter OTP</h2>
                        <input
                            type="text"
                            maxLength="6"
                            value={otp}
                            onChange={(e) => setOTP(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={handleVerifyOTP}
                            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Verify OTP
                        </button>

                        {registrationSuccess && (
                            <p className="mt-2 rounded-md text-white p-2 bg-violet-500 ">Registration successfull! <span>You are being redirect to Login!</span></p>
                        )}
                    </div>
                </div>
            )}

            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <img className='h-24' src={loaderspinner} alt="Loading..." />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Register;


