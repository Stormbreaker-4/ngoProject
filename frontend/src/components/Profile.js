// components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [donor, setDonor] = useState(null);

    useEffect(() => {
        // Fetch the donor data when the component mounts
        const fetchDonorData = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get('http://localhost:3500/donors/me');
                setDonor(response.data);
            } catch (error) {
                console.error('Error fetching donor data:', error);
            }
        };

        fetchDonorData();
    }, []);

    if (!donor) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">My Profile</h2>
            <div className="bg-white shadow-md rounded-lg p-4">
                <p><strong>Donor ID:</strong> {donor.donor_id}</p>
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Address:</strong> {donor.address}</p>
                <p><strong>Phone Number:</strong> {donor.phone_num}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
