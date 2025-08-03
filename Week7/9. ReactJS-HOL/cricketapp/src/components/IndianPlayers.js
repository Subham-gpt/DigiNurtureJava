import React from 'react';

function IndianPlayers({ team, players }) {
  const [p1, p2, p3, p4, p5, p6] = team;
  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  return (
    <div>
      <h2>Odd Players (Destructured)</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Players (Destructured)</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Indian Players (T20 + Ranji Trophy)</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
