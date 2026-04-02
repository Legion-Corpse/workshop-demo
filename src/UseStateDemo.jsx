// useState is a React Hook that lets a component remember and update values.
// When state changes, React automatically re-renders the component.
// Syntax: const [value, setValue] = useState(initialValue)

import { useState } from 'react'; // Vite tree-shakes imports — no need for full React import

function Counter() {
  // Declare a state variable 'count', starting at 0.
  // 'setCount' is the function we call to update it.
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '180px', textAlign: 'center' }}>
      <p style={{ fontSize: '32px', margin: '0 0 12px 0' }}>{count}</p> {/* display current state */}

      {/* Calling setCount with a new value triggers a re-render */}
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '8px' }}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '8px' }}>−</button>
      <button onClick={() => setCount(0)}>Reset</button> {/* reset state to initial value */}
    </div>
  );
}

function ToggleMessage() {
  // State can be any type — here it's a boolean
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '220px' }}>
      <button onClick={() => setVisible(!visible)}> {/* flip the boolean on each click */}
        {visible ? 'Hide Message' : 'Show Message'}  {/* button label changes with state */}
      </button>
      {/* Conditionally render the message based on state */}
      {visible && <p style={{ marginTop: '10px', color: 'steelblue' }}>Hello from useState!</p>}
    </div>
  );
}

function UseStateDemo() {
  return (
    <div style={{ padding: '24px' }}>
      <h3>Counter (number state)</h3>
      <Counter />
      <h3 style={{ marginTop: '20px' }}>Toggle (boolean state)</h3>
      <ToggleMessage />
    </div>
  );
}

export default UseStateDemo;
