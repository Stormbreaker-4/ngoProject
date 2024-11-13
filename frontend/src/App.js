import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, User, Heart, Clock, Home, ChevronDown } from 'lucide-react';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import DonatePage from './components/DonatePage';
import TrackPage from './components/TrackPage';
import Footer from './components/Footer';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">(Project Name)</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className="hover:text-blue-200 flex items-center gap-2">
                            <Home size={20} /> Home
                        </Link>
                        <Link to="/donate" className="hover:text-blue-200 flex items-center gap-2">
                            <Heart size={20} /> Donate
                        </Link>
                        <Link to="/track" className="hover:text-blue-200 flex items-center gap-2">
                            <Clock size={20} /> Track
                        </Link>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 hover:text-blue-200"
                            >
                                <User size={20} />
                                Profile
                                <ChevronDown size={16} />
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left">
                                        Sign In / Sign Up
                                    </Link>
                                    <button className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left">
                                        My Profile
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <Link to="/" className="block w-full text-left py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/donate" className="block w-full text-left py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                            Donate
                        </Link>
                        <Link to="/track" className="block w-full text-left py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                            Track
                        </Link>
                        <Link to="/signup" className="block w-full text-left py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                            Sign In / Sign Up
                        </Link>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/track" element={<TrackPage />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;
