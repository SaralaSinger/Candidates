import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCount } from './CountContextComponent';

const Details = () => {

    const [person, setPerson] = useState({});
    const { id } = useParams();
    const [pendingStatus, setPendingStatus] = useState(true);
    useEffect(() => {
        const getPersonById = async () => {
            const { data } = await axios.get(`/api/candidates/getbyid?id=${id}`);
            setPerson(data);
        }
        getPersonById();
        
    }, []);
    const { refreshCounts } = useCount();
    const navigate = useNavigate();

    const onConfirm = async () => {
    const {data} = await axios.post('/api/candidates/updateStatus', {id, status: 'Confirmed'});
    setPerson(data);
    refreshCounts();
    setPendingStatus(false);
    navigate('');
    }

    const onRefuse = async () => {
        const {data} = await axios.post('/api/candidates/updateStatus', {id, status: 'Refused'});
        setPerson(data);
        refreshCounts();
        setPendingStatus(false);
        navigate('');
    }
    const { firstName, lastName, email, phoneNumber, status, notes } = person;

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        {pendingStatus && <div>
                            <button onClick={onConfirm} className="btn btn-primary">Confirm</button>
                            <button onClick={onRefuse} className="btn btn-danger">Refuse</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Details;