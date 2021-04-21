import React from 'react';

const OrderTable = ({ order }) => {
    const { Name, email, _id, destinationName } = order;
    return (
        <tr>
            <td>{_id}</td>
            <td>{Name}</td>
            <td>{email}</td>
            <td>{destinationName}</td>
        </tr>
    );
};

export default OrderTable;