// Default props = fallback values used when a prop is not passed.
// Set them with = directly in the function signature.

function NameTag({ name = "Guest", color = "green" }) {
  return (
    <p>{name} — {color}</p> // shows whichever value was passed, or the default
  );
}

function DefaultProps() {
  return (
    <div>
      <NameTag name="Abhyuday" color="blue" />  {/* both props provided */}
      <NameTag name="Priya" />                   {/* color defaults to green */}
      <NameTag />                                {/* both default */}
    </div>
  );
}

export default DefaultProps;
