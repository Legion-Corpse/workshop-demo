// A component with hardcoded data — no props yet.
// Every time you use <ProfileCard />, it shows the exact same thing.

function ProfileCard() {
  const name = "Sasmit";
  const role = "Frontend Developer";

  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
