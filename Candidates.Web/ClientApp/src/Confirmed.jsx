import React, { useState, useEffect } from 'react';
import NonPendingPeopleTable from './NonpendingPeopleTable';
import axios from 'axios';

const Confirmed = () => {
    const [people, setConfirmedPeople] = useState([]);
useEffect(()=> {
const getConfirmedPeople = async() => {
    const {data} = await axios.get('/api/candidates/getconfirmed');
    setConfirmedPeople(data);
}
getConfirmedPeople();
}, []);
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div>
                <h1>Confirmed</h1>
                <NonPendingPeopleTable people={people}/>
            </div>
        </div>

    );
}
export default Confirmed;