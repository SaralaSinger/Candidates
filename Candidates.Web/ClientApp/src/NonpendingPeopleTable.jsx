import React, {useState} from 'react';
import PersonRow from './PersonRow';

const NonPendingPeopleTable = ({people}) => {
const [showNotes, setShowNotes] = useState(true);
const onToggleClick = () => {
    setShowNotes(!showNotes)
}
    return (
                <div>
                    <button onClick={onToggleClick} className="btn btn-success">Toggle Notes</button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes && <th>Notes</th> }
                            </tr>
                        </thead>
                        <tbody>
                            {people.map(p => 
                            <tr>
                            <PersonRow key={p.id} person={p} />
                            {showNotes && <td>{p.notes}</td>}
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
    );
}
export default NonPendingPeopleTable;