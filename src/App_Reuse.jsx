// This file shows the power of component reuse.
// We use the same ProfileCard component three times — no copy-pasting UI code.

import ProfileCard from './ProfileCard'; // One import, used many times

function App_Reuse() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '24px' }}>

      {/* Same component, first instance */}
      <ProfileCard />

      {/* Same component, second instance — identical output */}
      <ProfileCard />

      {/* Same component, third instance — still the same component */}
      <ProfileCard />

    </div>
  );
}

export default App_Reuse;
