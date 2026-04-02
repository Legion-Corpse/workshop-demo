import App_Components from './UseStateDemo'; // Swap this import to switch topics

// To switch topics during the workshop, change the import above to any of these:
//   ./App_Components   — Functional vs Class component
//   ./App_Reuse        — Component reuse
//   ./App_Props        — Basic props
//   ./App_PropTypes    — Prop types (string, number, boolean, function)
//   ./DefaultProps     — Default prop values
//   ./ChildrenProps    — props.children
//   ./ObjectProps      — Object and array props
//   ./PropDrilling     — Passing props through multiple levels
//   ./UseStateDemo     — useState hook (Counter + Toggle)
//   ./UseEffectDemo    — useEffect hook (Counter with console side effect)

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '16px' }}>
      <h1 style={{ borderBottom: '2px solid #ccc', paddingBottom: '8px' }}>
        React Workshop Demo
      </h1>
      <App_Components />
    </div>
  );
}

export default App;
