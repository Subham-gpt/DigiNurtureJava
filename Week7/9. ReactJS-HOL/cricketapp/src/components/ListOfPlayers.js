import React from 'react';

function ListOfPlayers({ players }) {
  return (
    <ul>
      {players.map((p, index) => (
        <li key={index}>{p.name} - Score: {p.score}</li>
      ))}
    </ul>
  );
}

export default ListOfPlayers;
