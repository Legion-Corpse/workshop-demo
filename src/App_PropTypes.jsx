// Renders StudentBadge twice to show how boolean props change the output.
// One student is a prefect, one is not — same component, different behavior.

import StudentBadge from './StudentBadge';

function App_PropTypes() {
  // Arrow function passed as the 'greet' prop — a function prop example
  const sayHello = () => alert("Hello!");

  return (
    <div style={{ display: 'flex', gap: '24px', padding: '24px' }}>

      {/* isPrefect is true — the gold badge will appear */}
      <StudentBadge
        name="Hermione"
        age={17}
        isPrefect={false}   // boolean: true
        greet={sayHello}   // function: passed by reference
      />

      {/* isPrefect is false — no badge rendered */}
      <StudentBadge
        name="Ron"
        age={17}
        isPrefect={true}  // boolean: false
        greet={sayHello}   // same function, reused
      />

    </div>
  );
}

export default App_PropTypes;
