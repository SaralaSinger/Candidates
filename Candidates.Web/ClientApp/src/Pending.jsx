import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonRow from './PersonRow';

const Pending = () => {
    const [people, setPendingPeople] = useState([]);
    useEffect(() => {
        const getPendingPeople = async () => {
            const { data } = await axios.get('/api/candidates/getpending');
            setPendingPeople(data);
        }
        getPendingPeople();
    }, []);

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th />
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(p =>
                        <tr>
                            <td>
                                <Link to={`/details/${p.id}`}>View Details</Link>
                            </td>
                            <PersonRow key={p.id} person={p} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}
export default Pending;