// props.children = whatever JSX is placed between a component's opening and closing tags.
// The Card component doesn't know or care what's inside it.

function Card(props) {
  return (
    <div>
      {props.children} {/* renders whatever is placed between <Card> and </Card> */}
    </div>
  );
}

function ChildrenProps() {
  return (
    <div>
      {/* Card wrapping plain text */}
      <Card>
        <p>Just some text.</p>
      </Card>

      {/* Card wrapping multiple elements */}
      <Card>
        <h3>Abhyuday</h3>
        <p>Frontend Developer</p>
      </Card>

      {/* Card wrapping a button */}
      <Card>
        <button onClick={() => alert('Clicked!')}>Click Me</button>
      </Card>
    </div>
  );
}

export default ChildrenProps;
