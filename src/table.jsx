import React from 'react';

function Table({ data }) {
    return (
        <table style={{ backgroundColor: 'green' }}>
            <thead>
                <tr>
                    <th>Food Name</th>
                    <th>Expiration Date</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.foodName}</td>
                        <td>{item.hanSuDung}</td>
                        <td>{item.sdt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
