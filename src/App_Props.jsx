// Props let us reuse one component with different data each time.
// Here we render ProfileCardProps three times with different names and roles.

import ProfileCardProps from './ProfileCardProps'; // Import the props-enabled version

function App_Props() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '24px' }}>

      {/* First instance — passing name and role as props */}
      <ProfileCardProps name="Abhyuday" role="Frontend Developer" />

      {/* Second instance — different name and role, same component */}
      <ProfileCardProps name="Sasmit" role="UI/UX Designer" />

      {/* Third instance — yet another set of prop values */}
      <ProfileCardProps name="Anshul" role="Backend Engineer" />


    </div>
  );
}

export default App_Props;
