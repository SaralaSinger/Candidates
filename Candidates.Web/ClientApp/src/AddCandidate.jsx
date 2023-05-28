import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCount } from './CountContextComponent';

const AddCandidate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');
    
    const { refreshCounts } = useCount();
    const navigate = useNavigate();

    const onSubmit = async () => {
        await axios.post('/api/candidates/add', { firstName, lastName, email, phoneNumber, notes });
        await refreshCounts();
        navigate('/');
    }

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName} name="firstName" placeholder="First Name" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} name="lastName" placeholder="Last Name" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setEmail(e.target.value)} value={email} name="email" placeholder="Email" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} name="phoneNumber" placeholder="Phone Number" className="form-control" />
                            <br />
                            <textarea rows={5} onChange={e => setNotes(e.target.value)} className="form-control" name="notes" value={notes} />
                            <br />
                            <button type="button" onClick={onSubmit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default AddCandidate;