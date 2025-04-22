import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {number !== null && <p>Your random number is: {number}</p>}
    </div>
  );
}

export default RandomNumberGenerator;
