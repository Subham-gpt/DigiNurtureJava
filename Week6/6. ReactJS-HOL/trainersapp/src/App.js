import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Trainerlist from './Trainerlist';
import TrainerDetails from './TrainerDetails';
import trainersmock from './TrainersMock';

function App() {
  return (
    <Router>
      <div>
        <h1>My Academy Trainers App</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trainers">Trainers List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainerlist trainers={trainersmock} />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
