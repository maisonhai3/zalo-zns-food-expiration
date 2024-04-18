import './App.css';

import React, { useState } from 'react';
import './App.css';
import Table from './table';

let foodList = [
  {
    foodName: 'Bún chả',
    hanSuDung: '2021-10-10',
    sdt: '0123456789',
  },
  {
    foodName: 'Phở',
    hanSuDung: '2021-10-10',
    sdt: '0123456789',
  },
  {
    foodName: 'Bún đậu',
    hanSuDung: '2021-10-10',
    sdt: '0123456789',
  },
];

function displayFoodListTable() {
  return (
    <Table data={foodList} />
  );
}

function inputFoodForm() {
  const [foodName, setFoodName] = useState('');
  const [hanSuDung, setHanSuDung] = useState('');
  const [sdt, setSdt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    foodList = [
      ...foodList,
      {
        foodName,
        hanSuDung,
        sdt,
      },
    ];
    setFoodName('');
    setHanSuDung('');
    setSdt('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new food</h2>
    <table>
      <tbody>
        <tr>
          <td>
            <label>
              Food Name:
            </label>
          </td>
          <td>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>
              Expiration Date:
            </label>
          </td>
          <td>
            <input
              type="date"
              value={hanSuDung}
              onChange={(e) => setHanSuDung(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>
              Phone Number:
            </label>
          </td>
          <td>
            <input
              type="text"
              value={sdt}
              onChange={(e) => setSdt(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button type="submit">Add Food</button>
    </form>
  );
}

function displayExpiringFoodTable() {
  const today = new Date().toISOString().split('T')[0];
  const expiringFoodList = foodList.filter((food) => food.hanSuDung <= today);

  return (
    <div>
      <h2>Expiring Food Today</h2>
      <table style={{backgroundColor:"red"}}>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Expiration Date</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {expiringFoodList.map((food, index) => (
            <tr key={index}>
              <td>{food.foodName}</td>
              <td>{food.hanSuDung}</td>
              <td>{food.sdt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
      <div style={{ marginLeft: '20px' }}>
        <div style={{ alignContent: 'baseline' }}>
          {displayFoodListTable()}
          <br></br>
          {inputFoodForm()}
          <br></br>
          {displayExpiringFoodTable()}
        </div>
      </div>
  );
  }



export default App;
