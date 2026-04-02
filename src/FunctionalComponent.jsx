// A functional component is just a plain JavaScript function that returns JSX.
// It is the modern and recommended way to write React components.
// No classes, no 'this', no boilerplate.

function WelcomeCard() {
  const name = "Abhyuday";
  const bio = "A curious learner diving into React.";

  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default WelcomeCard;
