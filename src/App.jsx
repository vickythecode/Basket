import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';


function App() {
  const player =  [
    {
      name: 'LeBron James',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3q2gXInZINvZXr7rBIfnwre8r6mNO3ebng&s',
      position: 'Forward',
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5
      }
    },
    {
      name: 'Stephen Curry',
      image: 'https://www.investopedia.com/thmb/T1dEXpSMZQ_QEf3yabnz1u80BMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1795186767-94867a77abd7454dac19f032c053c541.jpg',
      position: 'Guard',
      stats: {
        pointsPerGame: 27.3,
        assistsPerGame: 6.5,
        reboundsPerGame: 5.3  
      }
    },
    {
      name: 'Kevin Durant',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnu0cRkpEIaihb-FZXOij0i0aRWar3-bGy5A&s',
      position: 'Forward',
      stats: {
        pointsPerGame: 29.1,
        assistsPerGame: 5.2,
        reboundsPerGame: 7.1
      }
    }
  ];

  return (
    <div className="App">
      {player.map((player, index) => (
        <BasketballPlayerCard
          key={index}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
}

export default App
