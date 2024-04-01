import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false); // New state for tracking OTP sending status

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:4000/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setOtpSent(true); 
        setSuccessMessage('Please check your email for the OTP to reset your password.');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error('Error requesting password reset:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:4000/user/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp,
          newPassword,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Password reset successful. You can now login with the new password.');
        // Redirect to login page or wherever appropriate after successful password reset
        navigate('/');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch('http://localhost:4000/user/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setSuccessMessage('New OTP sent to your email.');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          {!otpSent ? (
            <>
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Forgot Your Password?</h1>
              <form className="mt-6" onSubmit={(e) => { e.preventDefault(); handleForgotPassword(); }}>
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoFocus
                    autoComplete="off" />
                </div>

                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                  Request OTP
                </button>

                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
              </form>
            </>
          ) : (
            <>
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Reset Your Password</h1>
              <form className="mt-6" onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
                <div>
                  <label className="block text-gray-700">OTP</label>
                  <input type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">New Password</label>
                  <input type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>

                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                  Reset Password
                </button>

                <button type="button" onClick={handleResendOTP} className="w-full block bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 text-white font-semibold rounded-lg px-4 py-3 mt-4">
                  Resend OTP
                </button>

                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
              </form>
            </>
          )}
        </div>
      </div>

      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
      </div>
      <ToastContainer />
    </section>
  );
}

export default ForgotPassword;
