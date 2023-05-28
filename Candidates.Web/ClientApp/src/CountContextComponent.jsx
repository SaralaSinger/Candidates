import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CountContext = createContext();

const CountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const refreshCounts = async () => {
        const pResponse = await axios.get('/api/candidates/getcount?status=Pending');
        setPendingCount(pResponse.data);
        const cResponse = await axios.get('/api/candidates/getcount?status=Confirmed');
        setConfirmedCount(cResponse.data);
        const rResponse = await axios.get('/api/candidates/getcount?status=Refused');
        setRefusedCount(rResponse.data);
    }

    useEffect(() => {
        refreshCounts();
    }, []);

    return (
        <CountContext.Provider value={{ pendingCount, confirmedCount, refusedCount, refreshCounts}}>
            {children}
        </CountContext.Provider>
    )

}

const useCount = () => {
    return useContext(CountContext);
}

export { CountContextComponent, useCount };