// This file demonstrates the two types of React components side by side.
// Both render the same UI — the difference is only in how they are written.

import FunctionalWelcome from './FunctionalComponent'; // Modern approach
import ClassWelcome from './ClassComponent';           // Legacy approach

function App_Components() {
  return (
    // Flex layout to place both cards next to each other
    <div style={{ display: 'flex', gap: '32px', padding: '24px' }}>

      {/* Left side: Functional Component */}
      <div>
        <h3 style={{ marginBottom: '8px' }}>Functional</h3>
        <FunctionalWelcome />
      </div>

      {/* Right side: Class Component */}
      <div>
        <h3 style={{ marginBottom: '8px' }}>Class</h3>
        <ClassWelcome />
      </div>

    </div>
  );
}

export default App_Components;
