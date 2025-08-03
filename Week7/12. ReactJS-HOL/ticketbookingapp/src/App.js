import React, { useState } from 'react';

// Sample flight data
const flightData = [
  {
    id: 1,
    airline: 'Air India',
    from: 'New Delhi',
    to: 'Mumbai',
    departure: '10:00 AM',
    arrival: '12:00 PM',
    price: 5000,
  },
  {
    id: 2,
    airline: 'IndiGo',
    from: 'Bangalore',
    to: 'Chennai',
    departure: '2:00 PM',
    arrival: '3:30 PM',
    price: 3000,
  },
  {
    id: 3,
    airline: 'SpiceJet',
    from: 'Hyderabad',
    to: 'Kolkata',
    departure: '6:00 AM',
    arrival: '8:45 AM',
    price: 4500,
  },
];

// FlightCard Component
function FlightCard({ flight, isLoggedIn }) {
  const handleBook = () => {
    alert(`Booking confirmed for ${flight.airline} from ${flight.from} to ${flight.to}`);
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', width: '300px', textAlign: 'left' }}>
      <h3>{flight.airline}</h3>
      <p>From: {flight.from}</p>
      <p>To: {flight.to}</p>
      <p>Departure: {flight.departure}</p>
      <p>Arrival: {flight.arrival}</p>
      <p>Price: ₹{flight.price}</p>
      {isLoggedIn ? (
        <button onClick={handleBook}>Book Now</button>
      ) : (
        <p>Please login to book this flight.</p>
      )}
    </div>
  );
}

// Guest Page (Only view flights)
function GuestPage({ flights }) {
  return (
    <div>
      <h3>Available Flights:</h3>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} isLoggedIn={false} />
      ))}
    </div>
  );
}

// User Page (Can book flights)
function UserPage({ flights }) {
  return (
    <div>
      <h3>Book Your Flight:</h3>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} isLoggedIn={true} />
      ))}
    </div>
  );
}

// Main App
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>TicketBookingApp</h1>

      {!isLoggedIn ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Please login</h2>
          <button onClick={handleLogin}>Login</button>
          <GuestPage flights={flightData} />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome back</h2>
          <button onClick={handleLogout}>Logout</button>
          <UserPage flights={flightData} />
        </div>
      )}
    </div>
  );
}
