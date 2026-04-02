// useState lets a component remember a value between renders.
// When the value changes, React re-renders the component automatically.
// Syntax: const [value, setValue] = useState(initialValue)

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
    </div>
  );
}

function Toggle() {
  const [isOn, setIsOn] = useState(false); // isOn starts as false

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'} {/* label changes based on state */}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h2>useState Demo</h2>
      <Counter />
      <Toggle />
    </div>
  );
}
