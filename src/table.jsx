import React from 'react';
import Table from 'react-bootstrap/Table';

function FoodListTable({ data }) {
    return (
        <Table striped bordered hover>
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
        </Table>
    );
}

export default FoodListTable;
