import React from 'react';

function ScoreBelow70({ players }) {
  const filtered = players.filter(player => player.score < 70);
  return (
    <ul>
      {filtered.map((p, index) => (
        <li key={index}>{p.name} - Score: {p.score}</li>
      ))}
    </ul>
  );
}

export default ScoreBelow70;
