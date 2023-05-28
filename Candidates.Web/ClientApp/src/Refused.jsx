import React, { useState, useEffect } from 'react';
import NonPendingPeopleTable from './NonpendingPeopleTable';
import axios from 'axios';

const Refused = () => {

const [people, setRefusedPeople] = useState([]);
useEffect(()=> {
const getRefusedPeople = async() => {
    const {data} = await axios.get('/api/candidates/getrefused');
    setRefusedPeople(data);
}
getRefusedPeople();
}, []);

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div>
                <h1>Refused</h1>
                <NonPendingPeopleTable people={people}/>
            </div>
        </div>

    );
}
export default Refused;