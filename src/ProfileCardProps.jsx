// Same component as ProfileCard, but now it accepts props.
// The parent decides what name and role to show.

function ProfileCardProps({ name, role }) { // props destructured in the signature
  return (
    <div>
      <h3>{name}</h3> {/* name comes from the parent */}
      <p>{role}</p>   {/* role comes from the parent */}
    </div>
  );
}

export default ProfileCardProps;
