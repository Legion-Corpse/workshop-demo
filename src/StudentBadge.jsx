// Demonstrates four prop types: string, number, boolean, function

function StudentBadge(props) {
  return (
    <div>
      <p>{props.name}</p>              {/* string prop */}
      <p>Age: {props.age}</p>          {/* number prop */}

      {props.isPrefect && <p>Prefect ⭐</p>}  {/* boolean prop — only shows if true */}

      <button onClick={props.greet}>Say Hello</button>  {/* function prop */}
    </div>
  );
}

export default StudentBadge;
