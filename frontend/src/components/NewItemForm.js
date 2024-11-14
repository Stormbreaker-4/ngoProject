import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewItemFormPage = () => {
    const { type } = useParams();
    const [qualityStatus, setQualityStatus] = useState('');
    const [desc, setDesc] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(qualityStatus);
        console.log(desc);
        try {
            const response = await axios.post('/items', {
                type,
                quality_status: qualityStatus,
                desc,
            });
            console.log(response);
            setResponseMessage(`Item created successfully: ${JSON.stringify(response.data)}`);
            setQualityStatus('');
            setDesc('');
        } catch (err) {
            setResponseMessage(`Error: ${err.response ? err.response.data.message : 'Request failed'}`);
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Donate {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded shadow">

                <div>
                    <label htmlFor="qualityStatus" className="block font-bold">Quality Status</label>
                    <select
                        id="qualityStatus"
                        value={qualityStatus}
                        onChange={(e) => setQualityStatus(e.target.value)}
                        required
                        className="border p-2 w-full"
                    >
                        <option value="" disabled>Select quality status</option>
                        <option value="perfect">Perfect</option>
                        <option value="good">Good</option>
                        <option value="okay">Okay</option>
                        <option value="needs_repair">Needs Repair/Can be recycled</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="desc" className="block font-bold">Description</label>
                    <textarea
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4">
                    Submit Donation
                </button>
            </form>

            {responseMessage && <p className="mt-4">{responseMessage}</p>}
        </div>
    );
};

export default NewItemFormPage;
