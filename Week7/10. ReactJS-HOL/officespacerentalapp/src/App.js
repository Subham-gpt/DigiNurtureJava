import Office1Img from './assets/Office1.jpg';
import Office2Img from './assets/Office2.jpg';
import Office3Img from './assets/Office3.jpg';
import Office4Img from './assets/Office4.jpg';
import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      imageUrl: Office1Img 
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore",
      imageUrl: Office2Img
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Mumbai",
      imageUrl: Office3Img
    },
    {
      Name: "Smartworks",
      Rent: 62000,
      Address: "Pune",
      imageUrl: Office4Img
    }
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>

      {officeList.map((ItemName, index) => {
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push("textRed");
        } else {
          colors.push("textGreen");
        }

        return (
          <div key={index} className="office-card">
            <img
              src={ItemName.imageUrl}
              alt={`Office in ${ItemName.Address}`}
              width="25%"
              height="25%"
            />
            <h2>Name: {ItemName.Name}</h2>
            <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
