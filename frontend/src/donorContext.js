import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const DonorContext = createContext({})

export function DonorContextProvider({ children }) {
    const [donor, setDonor] = useState(null);

    useEffect(() => {
        if (!donor) {
            axios.get('/profile').then(({ data }) => {
                setDonor(data)
            })
        }
    }, [])
    return (
        <DonorContext.Provider value={{ donor, setDonor }}>
            {children}
        </DonorContext.Provider>
    )
}