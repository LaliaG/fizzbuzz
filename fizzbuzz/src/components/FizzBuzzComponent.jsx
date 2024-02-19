import React, { useState } from 'react';

const FizzBuzzComponent = () => {
  // State for the current number
  const [number, setNumber] = useState(0);

  // Logic for FizzBuzz
  const fizzBuzzResult = () => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number.toString();
    }
  };

  // Increment the number
  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  // Decrement the number (with validation)
  const decrementNumber = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  return (
    <div>
      <h1>FizzBuzz Game</h1>
      <p>Current Number: {fizzBuzzResult()}</p>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber} disabled={number === 0}>
        Decrement
      </button>
    </div>
  );
};

export default FizzBuzzComponent;
