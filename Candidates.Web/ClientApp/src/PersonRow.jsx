import React from 'react';

const PersonRow = ({ person }) => {
    const {firstName, lastName, phoneNumber, email, notes} = person;
    return (<>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            
            </>
    )
}

export default PersonRow