import React from 'react';
import './App.css';

class Cart extends React.Component {
  render() {
    const items = this.props.item.map((item) => {
      return (
        <tr>
          <td>{item.itemname}</td>
          <td>{item.price}</td>
        </tr>
      );
    });

    return (
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}

class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ];

    return (
      <div className="mydiv">
        <h1>Items Ordered :</h1>
        <Cart item={CartInfo} />
      </div>
    );
  }
}

export default function App() {
  return (
    <OnlineShopping />
  );
}
