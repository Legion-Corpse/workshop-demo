// Prop drilling = passing a prop through middle components that don't use it,
// just to get it to a deeply nested child.

// Level 3 — actually uses the prop
function GreetingText({ username }) {
  return <p>Hello, {username}!</p>;
}

// Level 2 — doesn't use username, just passes it down
function ProfileSection({ username }) {
  return (
    <div>
      <p>(ProfileSection — passing it down)</p>
      <GreetingText username={username} />
    </div>
  );
}

// Level 1 — receives from root and passes down
function UserDashboard({ username }) {
  return (
    <div>
      <p>(UserDashboard — passing it down)</p>
      <ProfileSection username={username} />
    </div>
  );
}

// Root — data starts here
function PropDrilling() {
  const loggedInUser = "Abhyuday";

  return <UserDashboard username={loggedInUser} />;
}

export default PropDrilling;
