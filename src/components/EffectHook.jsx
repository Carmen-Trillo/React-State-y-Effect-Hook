import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`${count} Halls para ti!! Toma ya, campeona!!`);
    document.title = `${count} Halls para ti!! Toma ya, campeona!!;)`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}