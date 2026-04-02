// useEffect runs a side effect after the component renders.
// A side effect is anything that reaches outside the component — console logs,
// API calls, timers, updating the document title, etc.
// Syntax: useEffect(() => { ... }, [dependency])

import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs every time 'count' changes
    console.log('The count is ' + count);
  }, [count]); // dependency array — effect re-runs when count changes
               // [] alone = runs only once on first render
               // no array at all = runs after every render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>useEffect Demo</h2>
      <p>Open the console and click the buttons to see useEffect running.</p>
      <Counter />
    </div>
  );
}
