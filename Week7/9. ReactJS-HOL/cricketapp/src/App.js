import React from 'react';
import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const players = [
    { name: 'Root', score: 50 },
    { name: 'ABD', score: 70 },
    { name: 'Starc', score: 40 },
    { name: 'Chris', score: 61 },
    { name: 'Stonis', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  const uniqueScores = new Set(players.map(p => p.score));
  const playerMap = new Map(players.map(p => [p.name || 'Unnamed', p.score]));

  console.log("Unique Scores (Set):", uniqueScores);
  console.log("Player Map (Name -> Score):", playerMap);

  
  const flag = false;

  if (flag) {
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Indian Players</h1>
        <IndianPlayers team={IndianTeam} players={mergedIndianPlayers} />
      </div>
    );
  }
}

export default App;
