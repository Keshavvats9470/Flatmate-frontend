import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () => {
        // Clear the authentication token from local storage
        localStorage.removeItem('token');
        window.location.href = '/login-user'; // Redirecting to the login page after sign-out
    };

    return (
        <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="relative flex items-center">
                    <img src="https://www.svgrepo.com/show/499831/target.svg" loading="lazy" style={{ color: 'transparent' }} width="32" height="32" alt='bg' />
                </div>

                <div className="flex-grow"></div>
                <div className="hidden items-center justify-center gap-6 md:flex">
                    <ul className="hidden items-center justify-center gap-6 md:flex">
                        <li className="font-dm text-sm font-medium text-slate-700">
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                    {isLoggedIn ? (
                        <Link to="/profile" className="font-dm text-sm font-medium text-slate-700">Profile</Link>
                    ) : (
                        <Link to="/login-user" className="font-dm text-sm font-medium text-slate-700">Sign in</Link>
                    )}
                    {isLoggedIn && (
                        <button onClick={handleSignOut} className="font-dm text-sm font-medium text-slate-700">Sign out</button>
                    )}
                </div>
                <div className="relative flex items-center justify-center md:hidden">
                    <button type="button" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="bg-white border shadow-md rounded-md py-2 px-4">
                        {isLoggedIn ? (
                            <Link to="/profile" className="font-dm text-sm font-medium text-slate-700">Profile</Link>
                        ) : (
                            <Link to="/login-user" className="font-dm text-sm font-medium text-slate-700">Sign in</Link>
                        )}
                        <li className='border-b py-2'>
                            <a href="/" className="block text-slate-700 hover:text-emerald-500 py-1">Pricing</a>
                        </li>
                        <li className=' py-2'>
                            <a href="/" className="block text-slate-700 hover:text-emerald-500 py-1">Locations</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
